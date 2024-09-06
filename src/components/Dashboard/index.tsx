"use client";
import React from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { MdOutlineSpaceDashboard, MdTask } from "react-icons/md";
import { GrProjects, GrSchedules } from "react-icons/gr";
import { LuPen } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
import Image from "next/image";
import logo from "../../../public/assets/logo.png";
import logo2 from "../../../public/assets/logo2.png";
import avatar from "../../../public/assets/avatar.png";

const menus = [
  { title: "Dashboard", icon: MdOutlineSpaceDashboard },
  { title: "Task", icon: MdTask },
  { title: "Projects", icon: GrProjects },
  { title: "Schedule", icon: GrSchedules }
];

const DashboardRow = ({ title, icon: Icon }) => (
  <li className="flex items-center gap-4 mt-8">
    <Icon className="text-2xl" />
    <span>{title}</span>
  </li>
);

const TableRow = () => (
  <tr className="p-6 border-t">
    <td className="py-6 flex items-center gap-3">
      <input type="checkbox" className="w-6 h-6 rounded-lg" />
      <div className="flex gap-3 items-center">
        <Image src={avatar} alt="avatar" width={40} height={40} />
        <div>
          <p>Sisyphus</p>
          <p className="text-neutral-20">sisyphus.com</p>
        </div>
      </div>
    </td>
    <td className="py-6 text-start">22 Jan 2022</td>
    <td className="py-6 text-start flex items-center gap-1">
      <p className="px-4 py-1 rounded-2xl bg-primary-70 w-max">Active</p>
      <p className="px-4 py-1 rounded-2xl bg-primary-60 w-max">Customer data</p>
      <p className="px-4 py-1 rounded-2xl bg-primary-50 w-max">Admin</p>
    </td>
    <td className="py-6 text-start">
      <button>
        <FaRegTrashAlt />
      </button>
    </td>
    <td className="py-6 text-start">
      <button>
        <LuPen />
      </button>
    </td>
  </tr>
);

const DashBoard = () => {
  const [open, setOpen] = React.useState(true);

  return (
    <div className="flex items-start p-3 gap-3">
      <div
        className={`bg-neutral-50 h-screen transition-all duration-300 ease-in-out p-9 rounded-2xl ${
          open ? "w-[312px]" : "w-[96px]"
        }`}
      >
        <div className={`justify-between ${!open ? "flex-col" : "flex"}`}>
          <Image
            src={open ? logo : logo2}
            alt="logo"
            width={open ? 100 : 50}
            height={open ? 32 : 50}
            className="size-full h-[32px] object-contain"
          />
          <IoIosArrowDropleftCircle
            className={`text-4xl cursor-pointer ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
        </div>
        <ul>
          {menus.map((menu, index) => (
            <DashboardRow key={index} title={menu.title} icon={menu.icon} />
          ))}
        </ul>
      </div>

      <div className="w-full">
        <h1 className="text-[32px] font-semibold">Dashboard</h1>
        <div className="mt-4 bg-neutral-50 w-full p-6">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="text-start">
                  <input type="checkbox" className="w-6 h-6" /> Project
                </th>
                <th className="text-start">Last assessed</th>
                <th className="text-start">License use</th>
                <th colSpan={2}></th>
              </tr>
            </thead>
            <tbody>
              {Array(5)
                .fill(null)
                .map((_, index) => (
                  <TableRow key={index} />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
