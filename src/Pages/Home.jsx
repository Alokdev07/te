import React, { useState } from "react";
import Button from "../components/Button";
import TaskComponent from "../components/TaskComponent";
import TaskViolations from "../components/TaskViolations"
import Taskbar from "../components/Taskbar";
import RecentCompletions from "../components/RecentCompletions";
import PendingApprovalCard from "../components/PendingApprovalCard";
import PagesList from "../components/PagesList";
import Header from "../components/Header";
import { useSelector } from "react-redux";

function Home() {
const isOpen = useSelector((state) => state.HamData.isOpen)
    
  return (
    <div>
        
        <Header />
        <div className=" ml-2 flex w-full justify-between mt-2 items-center">
             <p className="ml-2 font-semibold text-xl">Dashboard</p>
             <div className="flex justify-center items-center">
            <Button className = "bg-green-800" children="Add Task"/>
            <Button className = "bg-green-800" children = "Update" />
            </div>
        </div>
        <div className="flex ml-4 mt-2">
                <TaskComponent className="bg-green-500" />
                <TaskComponent className="bg-orange-400" />
                <TaskComponent className="bg-indigo-500" />
                <TaskComponent className="bg-gray-400" />
                <TaskComponent className="bg-slate-300" />
                <TaskComponent className="bg-blue-400" />
                <TaskComponent className="bg-red-400" />
            </div>

            <div className="mt-2 flex justify-between items-center">
                 <Taskbar />
                 <TaskViolations /> 
                <TaskViolations />
            </div>
            <div className="flex justify-between items-center mt-2 p-2">
                <div>
                <PendingApprovalCard />
                <PendingApprovalCard />
                </div>
                <div>
                <PendingApprovalCard />
                <PendingApprovalCard />
                </div>
                
                <RecentCompletions />
            </div>
          <PagesList />
    </div>
  );
}

export default Home;
