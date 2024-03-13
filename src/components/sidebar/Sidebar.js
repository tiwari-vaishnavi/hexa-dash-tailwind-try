import React, { useState } from "react";
import logoDark from "../../assets/images/logo-dark.png";
import "./style1.css";

const NavItem = ({ title, icon, onClick, subItems, isOpen }) => (
  <>
  <div className="group sidebar-main-items" onClick={onClick}>
     <span className="nav-icon dark:text-subtitle-dark text-[18px] text-light-extra group-hover:text-current group-[&.active]:text-current group-focus:text-current">
       <i className={icon}></i>
     </span>
     <span className="capitalize title">{title}</span>
     <span className="arrow-down text-gray-600 dark:text-subtitle-dark absolute end-0 me-[0.8rem] ms-auto text-[18px] transition-transform duration-300 ease-linear motion-reduce:transition-none group-hover:text-current">
       <i className="uil uil-angle-down"></i>
     </span>
  </div>
     {subItems && (
       <ul className={`sub-item ${isOpen ? "visible" : "hidden"} m-0 list-none p-0 [&.show]:block scrollbar overflow-y-scroll`}>
         {subItems.map((subItem, index) => (
           <li key={index} className="relative">
             <div className="sidebar-drodown-items">{subItem}</div>
           </li>
         ))}
       </ul>
       
     )}
  </>
 );

export default function Sidebar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleNavItemToggle = (dropdownId) => {
    setOpenDropdown((prev) => (prev === dropdownId ? null : dropdownId));
  };

  const navItems = [
    {
      id: "dashboard",
      title: "Dashboard",
      icon: "uil uil-apps",
      subItems: ["Demo 1", "Demo 2"],
    },
 ];
  return (
    <div className=" bg-white [&.dark]:bg-main-dark font-jost relative text-[15px] font-normal leading-[1.5] m-0 p-0">
      <aside
        id="asideBar"
        className="asidebar dark:bg-box-dark fixed start-0 top-0 z-[1035] h-screen overflow-hidden bg-white xl:!w-[280px] xl:[&.collapsed]:!w-[80px] [&.collapsed]:!w-[250px] !transition-all !duration-[0.2s] ease-linear delay-[0s] !w-0 xl:[&.collapsed>.logo-wrapper]:w-[80px]"
      >
        <div className="flex w-[280px] border-e border-[#edf2f9] dark:border-box-dark-up logo-wrapper items-center h-[71px] dark:bg-box-dark-up">
          <div href="index" className="block text-center">
            <div className="logo-full">
              <img
                className="ps-[27px]  dark:block"
                src={logoDark}
                alt="Logo"
              />
            </div>
            <div className="hidden logo-fold">
              <img
                className="p-[27px] max-w-[80px]"
                src="images/logos/logo-fold.png"
                alt="Logo"
              />
            </div>
          </div>
        </div>
        <nav
          id="navBar"
          className="navBar dark:bg-box-dark static start-0 top-[70px] z-[1035] h-full overflow-y-auto bg-white xl:!w-[280px] xl:[&.collapsed]:!w-[80px] [&.collapsed]:!w-[250px] !transition-all !duration-[0.2s] ease-linear delay-[0s] !w-0 pb-[100px] scrollbar [&.collapsed]:ps-[7px]"
        >
          <ul className="relative m-0 list-none px-[0.2rem] ">
          {navItems.map((item) => (
              <li key={item.id} className="relative sub-item-wrapper group">
                <NavItem
                 title={item.title}
                 icon={item.icon}
                 onClick={() => handleNavItemToggle(item.id)}
                 subItems={item.subItems}
                 isOpen={openDropdown === item.id}
                />
              </li>
            ))}
            <li className="relative">
              <div className="group sidebar-items">
                <span className="nav-icon dark:text-subtitle-dark text-[18px] text-light-extra group-hover:text-current group-[&.active]:text-current group-focus:text-current">
                  <i className="uil uil-arrow-growth"></i>
                </span>
                <span className="capitalize title">Change log</span>
                <span className=" arrow-down absolute end-0 me-[0.8rem] ms-auto inline-flex items-center whitespace-nowrap rounded-full bg-info/10 px-[0.65em] pb-[0.25em] pt-[0.30em] text-center align-baseline text-[10px] font-bold leading-none text-info group-[&.active]:hidden">
                  1.0.1
                </span>
              </div>
            </li>
            <li className="relative sub-item-wrapper group  ">
              <span className="slug dark:text-white/40 mb-[10px] mt-[30px] block px-6 text-[12px] font-medium uppercase text-light">
                Application
              </span>
              <div
                className="group sidebar-main-items"
                onClick={() => handleNavItemToggle("email")}
              >
                <span className="nav-icon dark:text-subtitle-dark text-[18px] text-light-extra group-hover:text-current group-[&.active]:text-current group-focus:text-current">
                  <i className="uil uil-apps"></i>
                </span>
                <span className="capitalize title">Email</span>

                <span className=" arrow-down text-gray-600 dark:text-subtitle-dark absolute end-0 me-[0.8rem] ms-auto text-[18px] transition-transform duration-300 ease-linear motion-reduce:transition-none group-hover:text-current">
                  <i className="uil uil-angle-down"></i>
                </span>
              </div>

              <ul
                className={`sub-item ${
                  openDropdown === "email" ? "visible" : "hidden"
                } m-0 list-none p-0 [&.show]:block scrollbar overflow-y-scroll`}
              >
                <li className="relative">
                  <div className="sidebar-drodown-items ">Inbox</div>
                </li>
                <li className="relative">
                  <div className="sidebar-drodown-items ">Read Email</div>
                </li>
              </ul>
            </li>
            <li className="relative">
              <div className="group sidebar-items">
                <span className="nav-icon dark:text-subtitle-dark text-[18px] text-light-extra group-hover:text-current group-[&.active]:text-current group-focus:text-current">
                  <i className="uil uil-chat"></i>
                </span>
                <span className="capitalize title">Chat</span>
                <span className=" arrow-down absolute end-0 me-[0.8rem] ms-auto inline-flex items-center whitespace-nowrap rounded-full bg-success px-[0.65em] pb-[0.25em] pt-[0.30em] text-center align-baseline text-[10px] font-bold leading-none text-white group-[&.active]:hidden">
                  3
                </span>
              </div>
            </li>
            <li className="relative sub-item-wrapper group ">
              <div
                className="group-[.open]:bg-primary/10 rounded-e-[20px] hover:bg-primary/10 focus:bg-primary/10 active:bg-primary/10 dark:text-subtitle-dark flex h-12 cursor-pointer items-center gap-[16px] truncate px-6 py-4 text-[14px] font-medium text-body outline-none transition duration-300 ease-linear hover:text-primary dark:hover:text-title-dark hover:outline-none focus:text-primary dark:focus:text-title-dark focus:outline-none active:text-primary dark:active:text-title-dark active:outline-none [&.active]:text-primary dark:[&.active]:text-title-dark motion-reduce:transition-none dark:hover:bg-box-dark-up dark:focus:bg-box-dark-up dark:active:bg-box-dark-up group "
                onClick={() => handleNavItemToggle("e-Commerce")}
              >
                <span className="nav-icon dark:text-subtitle-dark text-[18px] text-light-extra  group-hover:text-current group-[&.active]:text-current group-focus:text-current">
                  <i className="uil uil-bag"></i>
                </span>
                <span className="title">e-Commerce</span>
                <span className=" arrow-down text-gray-600 dark:text-subtitle-dark absolute end-0 me-[0.8rem] ms-auto text-[18px] transition-transform duration-300 ease-linear motion-reduce:transition-none group-hover:text-current">
                  <i className="uil uil-angle-down"></i>
                </span>
              </div>
              <ul
                className={`sub-item ${
                  openDropdown === "e-Commerce" ? "visible" : "hidden"
                } m-0  list-none p-0 [&.show]:block scrollbar overflow-y-scroll`}
              >
                <li className="relative">
                  <div className="sidebar-drodown-items ">product</div>
                </li>
                <li className="relative">
                  <div className="sidebar-drodown-items ">Product Details</div>
                </li>
                <li className="relative">
                  <div className="sidebar-drodown-items ">Product Add</div>
                </li>
                <li className="relative">
                  <div className="sidebar-drodown-items ">cart</div>
                </li>
                <li className="relative">
                  <div href="order" className="sidebar-drodown-items ">
                    orders
                  </div>
                </li>
                <li className="relative">
                  <div href="sellers" className="sidebar-drodown-items ">
                    sellers
                  </div>
                </li>
                <li className="relative">
                  <div href="invoice" className="sidebar-drodown-items ">
                    invoices
                  </div>
                </li>
              </ul>
            </li>
            <li className="relative sub-item-wrapper group  ">
              <div
                className="group sidebar-main-items"
                onClick={() => handleNavItemToggle("project")}
              >
                <span className="nav-icon dark:text-subtitle-dark text-[18px] text-light-extra  group-hover:text-current group-[&.active]:text-current group-focus:text-current">
                  <i className="uil uil-folder"></i>
                </span>
                <span className="capitalize title">project</span>
                <span className=" arrow-down text-gray-600 dark:text-subtitle-dark absolute end-0 me-[0.8rem] ms-auto text-[18px] transition-transform duration-300 ease-linear motion-reduce:transition-none group-hover:text-current">
                  <i className="uil uil-angle-down"></i>
                </span>
              </div>
              <ul
                className={`sub-item ${
                  openDropdown === "project" ? "visible" : "hidden"
                } m-0  list-none p-0 [&.show]:block scrollbar overflow-y-scroll`}
              >
                <li className="relative">
                  <div href="projects" className="sidebar-drodown-items ">
                    project
                  </div>
                </li>
                <li className="relative">
                  <div
                    href="project-details"
                    className="sidebar-drodown-items "
                  >
                    project Details
                  </div>
                </li>
              </ul>
            </li>
            <li className="relative">
              <div href="calendar" className="group sidebar-items">
                <span className="nav-icon dark:text-subtitle-dark text-[18px] text-light-extra group-hover:text-current group-[&.active]:text-current group-focus:text-current">
                  <i className="uil uil-calendar-alt"></i>
                </span>
                <span className="capitalize title">Calendar</span>
              </div>
            </li>
            <li className="relative sub-item-wrapper group  ">
              <div
                className="group sidebar-main-items"
                onClick={() => handleNavItemToggle("contacts")}
              >
                <span className="nav-icon dark:text-subtitle-dark text-[18px] text-light-extra  group-hover:text-current group-[&.active]:text-current group-focus:text-current">
                  <i className="uil uil-at"></i>
                </span>
                <span className="capitalize title">contacts</span>
                <span className=" arrow-down text-gray-600 dark:text-subtitle-dark absolute end-0 me-[0.8rem] ms-auto text-[18px] transition-transform duration-300 ease-linear motion-reduce:transition-none group-hover:text-current">
                  <i className="uil uil-angle-down"></i>
                </span>
              </div>
              <ul
                className={`sub-item ${
                  openDropdown === "contacts" ? "visible" : "hidden"
                } m-0  list-none p-0 [&.show]:block scrollbar overflow-y-scroll`}
              >
                <li className="relative">
                  <div href="contacts" className="sidebar-drodown-items ">
                    contact grid
                  </div>
                </li>
                <li className="relative">
                  <div href="contact-list" className="sidebar-drodown-items ">
                    contact list
                  </div>
                </li>
              </ul>
            </li>
            <li className="relative">
              <div href="todo" className="group sidebar-items">
                <span className="nav-icon dark:text-subtitle-dark text-[18px] text-light-extra group-hover:text-current group-[&.active]:text-current group-focus:text-current">
                  <i className="uil uil-check-square"></i>
                </span>
                <span className="capitalize title">To-Do</span>
              </div>
            </li>
            <li className="relative sub-item-wrapper group  ">
              <div
                className="group sidebar-main-items"
                onClick={() => handleNavItemToggle("Import")}
              >
                <span className="nav-icon dark:text-subtitle-dark text-[18px] text-light-extra  group-hover:text-current group-[&.active]:text-current group-focus:text-current">
                  <i className="uil uil-exchange"></i>
                </span>
                <span className="capitalize title">Import & Export</span>
                <span className=" arrow-down text-gray-600 dark:text-subtitle-dark absolute end-0 me-[0.8rem] ms-auto text-[18px] transition-transform duration-300 ease-linear motion-reduce:transition-none group-hover:text-current">
                  <i className="uil uil-angle-down"></i>
                </span>
              </div>
              <ul
                className={`sub-item ${
                  openDropdown === "Import" ? "visible" : "hidden"
                } m-0  list-none p-0 [&.show]:block scrollbar overflow-y-scroll`}
              >
                <li className="relative">
                  <div href="import" className="sidebar-drodown-items ">
                    Import
                  </div>
                </li>
                <li className="relative">
                  <div href="export" className="sidebar-drodown-items ">
                    Export
                  </div>
                </li>
              </ul>
            </li>
            <li className="relative sub-item-wrapper group  ">
              <div
                className="group sidebar-main-items"
                onClick={() => handleNavItemToggle("Support")}
              >
                <span className="nav-icon dark:text-subtitle-dark text-[18px] text-light-extra  group-hover:text-current group-[&.active]:text-current group-focus:text-current">
                  <i className="uil uil-user"></i>
                </span>
                <span className="capitalize title">Support App</span>
                <span className=" arrow-down text-gray-600 dark:text-subtitle-dark absolute end-0 me-[0.8rem] ms-auto text-[18px] transition-transform duration-300 ease-linear motion-reduce:transition-none group-hover:text-current">
                  <i className="uil uil-angle-down"></i>
                </span>
              </div>
              <ul
                className={`sub-item ${
                  openDropdown === "Support" ? "visible" : "hidden"
                } m-0  list-none p-0 [&.show]:block scrollbar overflow-y-scroll`}
              >
                <li className="relative">
                  <div href="support-ticket" className="sidebar-drodown-items ">
                    Support Ticket
                  </div>
                </li>
                <li className="relative">
                  <div href="ticket-details" className="sidebar-drodown-items ">
                    Ticket Details
                  </div>
                </li>
              </ul>
            </li>
            <li className="relative">
              <div href="note" className="group sidebar-items">
                <span className="nav-icon dark:text-subtitle-dark text-[18px] text-light-extra group-hover:text-current group-[&.active]:text-current group-focus:text-current">
                  <i className="uil uil-check-square"></i>
                </span>
                <span className="capitalize title">Note</span>
              </div>
            </li>
            <li className="relative sub-item-wrapper group  ">
              <div
                className="group sidebar-main-items"
                onClick={() => handleNavItemToggle("manager")}
              >
                <span className="nav-icon dark:text-subtitle-dark text-[18px] text-light-extra  group-hover:text-current group-[&.active]:text-current group-focus:text-current">
                  <i className="uil uil-file"></i>
                </span>
                <span className="capitalize title">File manager</span>
                <span className=" arrow-down text-gray-600 dark:text-subtitle-dark absolute end-0 me-[0.8rem] ms-auto text-[18px] transition-transform duration-300 ease-linear motion-reduce:transition-none group-hover:text-current">
                  <i className="uil uil-angle-down"></i>
                </span>
              </div>
              <ul
                className={`sub-item ${
                  openDropdown === "manager" ? "visible" : "hidden"
                } m-0  list-none p-0 [&.show]:block scrollbar overflow-y-scroll`}
              >
                <li className="relative">
                  <div href="file-manager" className="sidebar-drodown-items ">
                    Grid View
                  </div>
                </li>
                <li className="relative">
                  <div
                    href="file-manager-list"
                    className="sidebar-drodown-items "
                  >
                    List View
                  </div>
                </li>
              </ul>
            </li>
            <li className="relative">
              <div href="task" className="group sidebar-items">
                <span className="nav-icon dark:text-subtitle-dark text-[18px] text-light-extra group-hover:text-current group-[&.active]:text-current group-focus:text-current">
                  <i className="uil uil-lightbulb"></i>
                </span>
                <span className="capitalize title">task</span>
              </div>
            </li>
            <li className="relative">
              <div href="bookmark" className="group sidebar-items">
                <span className="nav-icon dark:text-subtitle-dark text-[18px] text-light-extra group-hover:text-current group-[&.active]:text-current group-focus:text-current">
                  <i className="uil uil-bookmark"></i>
                </span>
                <span className="capitalize title">bookmark</span>
              </div>
            </li>
            <li className="relative sub-item-wrapper group  ">
              <div
                className="group sidebar-main-items"
                onClick={() => handleNavItemToggle("Social")}
              >
                <span className="nav-icon dark:text-subtitle-dark text-[18px] text-light-extra  group-hover:text-current group-[&.active]:text-current group-focus:text-current">
                  <i className="uil uil-layer-group"></i>
                </span>
                <span className="capitalize title">Social app</span>
                <span className=" arrow-down text-gray-600 dark:text-subtitle-dark absolute end-0 me-[0.8rem] ms-auto text-[18px] transition-transform duration-300 ease-linear motion-reduce:transition-none group-hover:text-current">
                  <i className="uil uil-angle-down"></i>
                </span>
              </div>
              <ul
                className={`sub-item ${
                  openDropdown === "Social" ? "visible" : "hidden"
                } m-0  list-none p-0 [&.show]:block scrollbar overflow-y-scroll`}
              >
                <li className="relative">
                  <div href="social" className="sidebar-drodown-items ">
                    my profile
                  </div>
                </li>
                <li className="relative">
                  <div
                    href="profile-settings"
                    className="sidebar-drodown-items "
                  >
                    profile settings
                  </div>
                </li>
              </ul>
            </li>
            <li className="relative sub-item-wrapper group  ">
              <span className="slug dark:text-white/40 mb-[10px] mt-[30px] block px-6 text-[12px] font-medium uppercase text-light">
                Ui Elements
              </span>
              <div
                className="group sidebar-main-items"
                onClick={() => handleNavItemToggle("elements")}
              >
                <span className="nav-icon dark:text-subtitle-dark text-[18px] text-light-extra group-hover:text-current group-[&.active]:text-current group-focus:text-current">
                  <i className="uil uil-layer-group"></i>
                </span>
                <span className="capitalize title">Ui elements</span>
                <span className=" arrow-down text-gray-600 dark:text-subtitle-dark absolute end-0 me-[0.8rem] ms-auto text-[18px] transition-transform duration-300 ease-linear motion-reduce:transition-none group-hover:text-current">
                  <i className="uil uil-angle-down"></i>
                </span>
              </div>
              <ul
                className={`sub-item ${
                  openDropdown === "elements" ? "visible" : "hidden"
                } m-0  list-none p-0 [&.show]:block scrollbar overflow-y-scroll`}
              >
                <li className="relative">
                  <div href="alerts" className="sidebar-drodown-items ">
                    Alerts
                  </div>
                </li>
                <li className="relative">
                  <div href="avatars" className="sidebar-drodown-items ">
                    avaters
                  </div>
                </li>
                <li className="relative">
                  <div href="badges" className="sidebar-drodown-items ">
                    badges
                  </div>
                </li>
                <li className="relative">
                  <div href="buttons" className="sidebar-drodown-items ">
                    Buttons
                  </div>
                </li>
                <li className="relative">
                  <div href="breadcrumb" className="sidebar-drodown-items ">
                    breadcrumb
                  </div>
                </li>
                <li className="relative">
                  <div href="cards" className="sidebar-drodown-items ">
                    Cards
                  </div>
                </li>
                <li className="relative">
                  <div href="carousel" className="sidebar-drodown-items ">
                    Carousel
                  </div>
                </li>
                <li className="relative">
                  <div href="checkbox" className="sidebar-drodown-items ">
                    Checkbox
                  </div>
                </li>
                <li className="relative">
                  <div href="collapse" className="sidebar-drodown-items ">
                    collapse
                  </div>
                </li>
                <li className="relative">
                  <div href="dropdown" className="sidebar-drodown-items ">
                    Dropdown
                  </div>
                </li>
                <li className="relative">
                  <div href="typography" className="sidebar-drodown-items ">
                    Typography
                  </div>
                </li>
              </ul>
            </li>
            <li className="relative sub-item-wrapper group  ">
              <span className="slug dark:text-white/40 mb-[10px] mt-[30px] block px-6 text-[12px] font-medium uppercase text-light">
                Features
              </span>
              <div
                className="group sidebar-main-items"
                onClick={() => handleNavItemToggle("Charts")}
              >
                <span className="nav-icon dark:text-subtitle-dark text-[18px] text-light-extra group-hover:text-current group-[&.active]:text-current group-focus:text-current">
                  <i className="uil uil-chart"></i>
                </span>
                <span className="capitalize title">Charts</span>
                <span className=" arrow-down text-gray-600 dark:text-subtitle-dark absolute end-0 me-[0.8rem] ms-auto text-[18px] transition-transform duration-300 ease-linear motion-reduce:transition-none">
                  <i className="uil uil-angle-down"></i>
                </span>
              </div>
              <ul
                className={`sub-item ${
                  openDropdown === "Charts" ? "visible" : "hidden"
                } m-0  list-none p-0 [&.show]:block scrollbar overflow-y-scroll`}
              >
                <li className="relative">
                  <div href="apex-chart" className="sidebar-drodown-items ">
                    Apex chart
                  </div>
                </li>
              </ul>
            </li>
            <li className="relative sub-item-wrapper group  ">
              <div
                className="group sidebar-main-items"
                onClick={() => handleNavItemToggle("Forms")}
              >
                <span className="nav-icon dark:text-subtitle-dark text-[18px] text-light-extra group-hover:text-current group-[&.active]:text-current group-focus:text-current">
                  <i className="uil uil-keyhole-circle"></i>
                </span>
                <span className="capitalize title">Forms</span>
                <span className=" arrow-down text-gray-600 dark:text-subtitle-dark absolute end-0 me-[0.8rem] ms-auto text-[18px] transition-transform duration-300 ease-linear motion-reduce:transition-none">
                  <i className="uil uil-angle-down"></i>
                </span>
              </div>
              <ul
                className={`sub-item ${
                  openDropdown === "Forms" ? "visible" : "hidden"
                } m-0  list-none p-0 [&.show]:block scrollbar overflow-y-scroll`}
              >
                <li className="relative">
                  <div href="form" className="sidebar-drodown-items ">
                    Basics
                  </div>
                </li>
                <li className="relative">
                  <div href="form-elements" className="sidebar-drodown-items ">
                    Elements
                  </div>
                </li>
                <li className="relative">
                  <div
                    href="form-components"
                    className="sidebar-drodown-items "
                  >
                    Components
                  </div>
                </li>
                <li className="relative">
                  <div href="form-layouts" className="sidebar-drodown-items ">
                    Layouts
                  </div>
                </li>
              </ul>
            </li>
            <li className="relative sub-item-wrapper group   open">
              <div className="group sidebar-main-items active">
                <span className="nav-icon dark:text-subtitle-dark text-[18px] text-light-extra group-hover:text-current group-[&.active]:text-current group-focus:text-current">
                  <i className="uil uil-square"></i>
                </span>
                <span className="capitalize title">Wizard</span>
                <span className=" arrow-down text-gray-600 dark:text-subtitle-dark absolute end-0 me-[0.8rem] ms-auto text-[18px] transition-transform duration-300 ease-linear motion-reduce:transition-none">
                  <i className="uil uil-angle-down"></i>
                </span>
              </div>
              <ul className="sub-item !visible m-0 hidden list-none p-0 [&.show]:block scrollbar overflow-y-scroll  show">
                <li className="relative">
                  <div
                    href="create-account"
                    className="sidebar-drodown-items  active"
                  >
                    Wizard One
                  </div>
                </li>
              </ul>
            </li>
            <li className="relative sub-item-wrapper group  ">
              <div
                className="group sidebar-main-items"
                onClick={() => handleNavItemToggle("Icons")}
              >
                <span className="nav-icon dark:text-subtitle-dark text-[18px] text-light-extra group-hover:text-current group-[&.active]:text-current group-focus:text-current">
                  <i className="uil uil-icons"></i>
                </span>
                <span className="capitalize title">Icons</span>
                <span className=" arrow-down text-gray-600 dark:text-subtitle-dark absolute end-0 me-[0.8rem] ms-auto text-[18px] transition-transform duration-300 ease-linear motion-reduce:transition-none">
                  <i className="uil uil-angle-down"></i>
                </span>
              </div>
              <ul
                className={`sub-item ${
                  openDropdown === "Icons" ? "visible" : "hidden"
                } m-0  list-none p-0 [&.show]:block scrollbar overflow-y-scroll`}
              >
                <li className="relative">
                  <div href="unicons" className="sidebar-drodown-items ">
                    Unions
                  </div>
                </li>
                <li className="relative">
                  <div href="line-awesome" className="sidebar-drodown-items ">
                    line-Awesome
                  </div>
                </li>
              </ul>
            </li>
            <li className="relative">
              <div href="editor" className="group sidebar-items">
                <span className="nav-icon dark:text-subtitle-dark text-[18px] text-light-extra group-hover:text-current group-[&.active]:text-current group-focus:text-current">
                  <i className="uil uil-edit"></i>
                </span>
                <span className="capitalize title">Editor</span>
              </div>
            </li>
            <li className="relative sub-item-wrapper group  ">
              <div
                className="group sidebar-main-items"
                onClick={() => handleNavItemToggle("Maps")}
              >
                <span className="nav-icon dark:text-subtitle-dark text-[18px] text-light-extra group-hover:text-current group-[&.active]:text-current group-focus:text-current">
                  <i className="uil uil-map"></i>
                </span>
                <span className="capitalize title">Maps</span>
                <span className=" arrow-down text-gray-600 dark:text-subtitle-dark absolute end-0 me-[0.8rem] ms-auto text-[18px] transition-transform duration-300 ease-linear motion-reduce:transition-none">
                  <i className="uil uil-angle-down"></i>
                </span>
              </div>
              <ul
                className={`sub-item ${
                  openDropdown === "Maps" ? "visible" : "hidden"
                } m-0  list-none p-0 [&.show]:block scrollbar overflow-y-scroll`}
              >
                <li className="relative">
                  <div href="vector-map" className="sidebar-drodown-items ">
                    Vector Map
                  </div>
                </li>
                <li className="relative">
                  <div href="google-map" className="sidebar-drodown-items ">
                    Google Map
                  </div>
                </li>
              </ul>
            </li>
            <li className="relative sub-item-wrapper group  ">
              <div
                className="group sidebar-main-items"
                onClick={() => handleNavItemToggle("table")}
              >
                <span className="nav-icon dark:text-subtitle-dark text-[18px] text-light-extra group-hover:text-current group-[&.active]:text-current group-focus:text-current">
                  <i className="uil uil-table"></i>
                </span>
                <span className="capitalize title">table</span>
                <span className=" arrow-down text-gray-600 dark:text-subtitle-dark absolute end-0 me-[0.8rem] ms-auto text-[18px] transition-transform duration-300 ease-linear motion-reduce:transition-none">
                  <i className="uil uil-angle-down"></i>
                </span>
              </div>
              <ul
                className={`sub-item ${
                  openDropdown === "table" ? "visible" : "hidden"
                } m-0  list-none p-0 [&.show]:block scrollbar overflow-y-scroll`}
              >
                <li className="relative">
                  <div href="basic-table" className="sidebar-drodown-items ">
                    basic table
                  </div>
                </li>
                <li className="relative">
                  <div href="data-table" className="sidebar-drodown-items ">
                    data table
                  </div>
                </li>
              </ul>
            </li>
            <li className="relative">
              <span className="slug dark:text-white/40 mb-[10px] mt-[30px] block px-6 text-[12px] font-medium uppercase text-light">
                Pages
              </span>
              <div href="gallery" className="group sidebar-items">
                <span className="nav-icon dark:text-subtitle-dark text-[18px] text-light-extra group-hover:text-current group-[&.active]:text-current group-focus:text-current">
                  <i className="uil uil-images"></i>
                </span>
                <span className="capitalize title">Gallery</span>
              </div>
            </li>
            <li className="relative">
              <div href="pricing" className="group sidebar-items">
                <span className="nav-icon dark:text-subtitle-dark text-[18px] text-light-extra group-hover:text-current group-[&.active]:text-current group-focus:text-current">
                  <i className="uil uil-bill"></i>
                </span>
                <span className="capitalize title">Pricing</span>
              </div>
            </li>
            <li className="relative">
              <div href="faq" className="group sidebar-items">
                <span className="nav-icon dark:text-subtitle-dark text-[18px] text-light-extra group-hover:text-current group-[&.active]:text-current group-focus:text-current">
                  <i className="uil uil-question-circle"></i>
                </span>
                <span className="capitalize title">Faq</span>
              </div>
            </li>
            <li className="relative">
              <div href="blank" className="group sidebar-items">
                <span className="nav-icon dark:text-subtitle-dark text-[18px] text-light-extra group-hover:text-current group-[&.active]:text-current group-focus:text-current">
                  <i className="uil uil-circle"></i>
                </span>
                <span className="capitalize title">Blank page</span>
              </div>
            </li>
            <li className="relative">
              <div href="knowledge-base" className="group sidebar-items">
                <span className="nav-icon dark:text-subtitle-dark text-[18px] text-light-extra group-hover:text-current group-[&.active]:text-current group-focus:text-current">
                  <i className="uil uil-window"></i>
                </span>
                <span className="capitalize title">Knowledge-base</span>
              </div>
            </li>
            <li className="relative sub-item-wrapper group  ">
              <div
                className="group sidebar-main-items"
                onClick={() => handleNavItemToggle("Blogs")}
              >
                <span className="nav-icon dark:text-subtitle-dark text-[18px] text-light-extra group-hover:text-current group-[&.active]:text-current group-focus:text-current">
                  <i className="uil uil-images"></i>
                </span>
                <span className="capitalize title">Blogs</span>
                <span className=" arrow-down text-gray-600 dark:text-subtitle-dark absolute end-0 me-[0.8rem] ms-auto text-[18px] transition-transform duration-300 ease-linear motion-reduce:transition-none">
                  <i className="uil uil-angle-down"></i>
                </span>
              </div>
              <ul
                className={`sub-item ${
                  openDropdown === "Blogs" ? "visible" : "hidden"
                } m-0  list-none p-0 [&.show]:block scrollbar overflow-y-scroll`}
              >
                <li className="relative">
                  <div href="blog" className="sidebar-drodown-items ">
                    Blogs
                  </div>
                </li>
                <li className="relative">
                  <div href="blog-two" className="sidebar-drodown-items ">
                    Blogs Two
                  </div>
                </li>
                <li className="relative">
                  <div href="blog-three" className="sidebar-drodown-items ">
                    Blogs Three
                  </div>
                </li>
                <li className="relative">
                  <div href="blog-details" className="sidebar-drodown-items ">
                    Blogs Details
                  </div>
                </li>
              </ul>
            </li>
            <li className="relative">
              <div href="terms" className="group sidebar-items">
                <span className="nav-icon dark:text-subtitle-dark text-[18px] text-light-extra group-hover:text-current group-[&.active]:text-current group-focus:text-current">
                  <i className="uil uil-question-circle"></i>
                </span>
                <span className="capitalize title">Terms-conditions</span>
              </div>
            </li>
            <li className="relative">
              <div href="maintenance" className="group sidebar-items">
                <span className="nav-icon dark:text-subtitle-dark text-[18px] text-light-extra group-hover:text-current group-[&.active]:text-current group-focus:text-current">
                  <i className="uil uil-airplay"></i>
                </span>
                <span className="capitalize title">Maintenance</span>
              </div>
            </li>
            <li className="relative">
              <div href="404" className="group sidebar-items">
                <span className="nav-icon dark:text-subtitle-dark text-[18px] text-light-extra group-hover:text-current group-[&.active]:text-current group-focus:text-current">
                  <i className="uil uil-exclamation-triangle"></i>
                </span>
                <span className="capitalize title">404</span>
              </div>
            </li>
            <li className="relative">
              <div href="coming-soon" className="group sidebar-items">
                <span className="nav-icon dark:text-subtitle-dark text-[18px] text-light-extra group-hover:text-current group-[&.active]:text-current group-focus:text-current">
                  <i className="uil uil-sync"></i>
                </span>
                <span className="capitalize title">Coming Soon</span>
              </div>
            </li>
            <li className="relative">
              <div href="log-in" className="group sidebar-items">
                <span className="nav-icon dark:text-subtitle-dark text-[18px] text-light-extra group-hover:text-current group-[&.active]:text-current group-focus:text-current">
                  <i className="uil uil-signin"></i>
                </span>
                <span className="capitalize title">Log in</span>
              </div>
            </li>
            <li className="relative">
              <div href="sign-up" className="group sidebar-items">
                <span className="nav-icon dark:text-subtitle-dark text-[18px] text-light-extra group-hover:text-current group-[&.active]:text-current group-focus:text-current">
                  <i className="uil uil-sign-out-alt"></i>
                </span>
                <span className="capitalize title">Sign Up</span>
              </div>
            </li>
            <li className="relative">
              <div href="reset" className="group sidebar-items">
                <span className="nav-icon dark:text-subtitle-dark text-[18px] text-light-extra group-hover:text-current group-[&.active]:text-current group-focus:text-current">
                  <i className="uil uil-key-skeleton"></i>
                </span>
                <span className="capitalize title">Forget password</span>
              </div>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
}
