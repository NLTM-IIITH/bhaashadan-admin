import React, { useEffect, useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Input, Button, DropdownTrigger, Dropdown, DropdownMenu, DropdownItem, Selection, SortDescriptor } from "@nextui-org/react";
import {VerticalDotsIcon} from "./VerticalDotsIcon";
import {ChevronDownIcon} from "./ChevronDownIcon";
import {SearchIcon} from "./SearchIcon";

import { jsPDF } from "jspdf";

const INITIAL_VISIBLE_COLUMNS = ["name", "languages","email", "submissions"];

const columns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "NAME", uid: "name", sortable: true},
  {name: "LANGUAGES", uid: "languages", sortable: true},
  {name: "EMAIL", uid: "email"},
  {name: "SUBMISSIONS", uid: "submissions", sortable: true},
  {name: "ACTIONS", uid: "actions"},
];

interface Userx {
    id : number; // user_id
    username : string;
    language: string[];
    email: string;
    submission_count: number;
}

export default function Users1() {

  const handleIssueCertificate = () => {
    const doc = new jsPDF({orientation: "landscape"});

    const img = new Image();
    img.onload = function () {
      const canvas = document.createElement('canvas');
      canvas.width = this.naturalWidth;
      canvas.height = this.naturalHeight;
      const ctx = canvas.getContext('2d');
      if(ctx){
        ctx.drawImage(this, 0, 0);
      }
      const dataURL = canvas.toDataURL('image/jpeg');

      doc.addImage(dataURL, 'JPEG', 0, 0, doc.internal.pageSize.width, doc.internal.pageSize.height);

      doc.setFont("anastasia");
      doc.setFontSize(58);
      doc.setTextColor(50, 49, 47); 
      doc.text("Lorem Ipsum", 95, 120);

      doc.save("certificate.pdf");
    };

    img.src = 'public/images/certificate.png';
  }

    const example = [
        {
          id: 1,
          name: "Tony Reichert",
          submissions: "29",
          email: "tony.reichert@example.com",
          languages: "hindi",
        },
    ];
    type User = typeof example[0];
    
    const [viewUsers, setViewUsers] = useState<User[]>([]);

    useEffect(()=> {
        const fetchData = async() => {
            const response = await fetch("http://bhasha.iiit.ac.in/crowd/api/users/");
            const data = await response.json();
            
            const transformedData = data.map((user: Userx) => ({
                id: user.id,
                name: user.username,
                submissions: user.submission_count,
                email: user.email,
                languages: user.language,
            }));
            setViewUsers(transformedData)
        }
        fetchData();
    }, []);

  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set([]));
  const [visibleColumns, setVisibleColumns] = React.useState<Selection>(new Set(INITIAL_VISIBLE_COLUMNS));
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: "age", // ! this is dummy 
    direction: "ascending",
  })

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...viewUsers];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.name.toLowerCase().includes(filterValue.toLowerCase()),
      );
    }

    return filteredUsers;
  }, [viewUsers, filterValue]);

  const sortedItems = React.useMemo(() => {
    return [...filteredItems].sort((a: User, b: User) => {
      const first = a[sortDescriptor.column as keyof User] as number;
      const second = b[sortDescriptor.column as keyof User] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, filteredItems]);

  const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];

    switch (columnKey) {
      case "name":
        return (
        <div className="flex items-center gap-2">
          <p className="text-bold text-sm capitalize">{cellValue}</p>
        </div>
        );
      case "actions":
        return (
          <div className="relative flex justify-end items-center gap-2">
            <Dropdown className="bg-background border-1 border-default-200">
              <DropdownTrigger>
                <Button isIconOnly radius="full" size="sm" variant="light">
                  <VerticalDotsIcon className="text-default-400" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem onClick={handleIssueCertificate}>Issue certificate</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);
  

  const onSearchChange = React.useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
    } else {
      setFilterValue("")
    }
  }, []);

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4 p-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            classNames={{
              base: "w-full sm:max-w-[44%]",
              inputWrapper: "border-1",
            }}
            className="py-4 h-[40px] px-4"
            placeholder="Search by name..."
            size="md"
            startContent={<SearchIcon className="text-default-300" />}
            value={filterValue}
            variant="bordered"
            onClear={() => setFilterValue("")}
            onValueChange={onSearchChange}
          />
          <div className="flex px-4">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  size="sm"
                  variant="flat"
                >
                  Columns
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {column.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>
    );
  }, [
    filterValue,
    visibleColumns,
    onSearchChange,
    viewUsers.length,
    hasSearchFilter,
  ])


  const classNames = React.useMemo(
    () => ({
      wrapper: ["max-h-[382px]", "max-w-3xl"],
      th: ["bg-transparent", "text-default-500", "border-b", "border-divider"],
      td: [
        // changing the rows border radius
        // first
        "group-data-[first=true]:first:before:rounded-none",
        "group-data-[first=true]:last:before:rounded-none",
        // middle
        "group-data-[middle=true]:before:rounded-none",
        // last
        "group-data-[last=true]:first:before:rounded-none",
        "group-data-[last=true]:last:before:rounded-none",
      ],
    }),
    [],
  );

  return (
    <Table
      isCompact
      removeWrapper
      aria-label="Example table with custom cells, pagination and sorting"
      checkboxesProps={{
        classNames: {
          wrapper: "after:bg-foreground after:text-background text-background",
        },
      }}
      classNames={classNames}
      className="px-4"
      selectedKeys={selectedKeys}
      sortDescriptor={sortDescriptor}
      topContent={topContent}
      topContentPlacement="outside"
      onSelectionChange={setSelectedKeys}
      onSortChange={setSortDescriptor}
    >
      <TableHeader columns={headerColumns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
            allowsSorting={column.sortable}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"Loading..."} items={sortedItems}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}