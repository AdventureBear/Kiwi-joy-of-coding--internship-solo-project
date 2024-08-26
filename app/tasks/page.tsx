import React from "react";
import {getAllTasks} from "../actions";
import {TaskType} from "../types";
import Task from "../componants/Task";
import axios from "axios";
import {Button, Checkbox, Table} from "@radix-ui/themes";
import FilterBar from "@/app/componants/FilterBar";


const TasksPage = async () => {

    const tasks: TaskType[] = await getAllTasks();

    console.log("tasks fetched")
    console.log(tasks)
    return (
        <div>
            {/*<FilterBar*/}
            {/*  setFilteredTasks={(newTasks) => setFilteredTasks(newTasks)}*/}
            {/*  allTasks={tasks}*/}
            {/*/>*/}
            <Table.Root>
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeaderCell maxWidth="25px">
                            Completed
                        </Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell maxWidth="25px">
                            Priority
                        </Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell maxWidth="56px">
                            Task
                        </Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell maxWidth="">
                            Description
                        </Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell maxWidth="25px">
                            DueDate
                        </Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell maxWidth="25px">
                            Actions
                        </Table.ColumnHeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>

                    {tasks.map((task: TaskType) => (
                       <Task key={task.id} task={task} />
                    ))}
                </Table.Body>
            </Table.Root>
        </div>
    );
}

export default TasksPage;
