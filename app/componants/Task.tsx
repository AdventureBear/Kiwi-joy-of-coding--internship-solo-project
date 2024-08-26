"use client";
import React, {useState} from "react";
import {TaskType, priorities} from "../types";
import {Button, Checkbox, Table} from "@radix-ui/themes";
import FilterBar from "./FilterBar";
import axios from "axios";
import {useRouter} from "next/navigation";
import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient


const Task = ({task}:{task:TaskType}) => {
  console.log(task)
    const router = useRouter()

    // const [filteredTasks, setFilteredTasks] = useState<TaskType[]>(tasks);

    const handleDelete = async (taskId: number) => {
        console.log("Delete")
        const response = await axios.delete(`/api/tasks/${taskId}`)
        console.log(response.data)
        router.refresh()
    }

    const formatDate = (dateString: Date) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            month: "2-digit",
            day: "2-digit",
            year: "numeric",
        });
    };


    return (
        <Table.Row align="start">
            <Table.Cell maxWidth="25px">
                <Checkbox checked={task.completed} aria-readonly/>
            </Table.Cell>

            <Table.Cell maxWidth="25px">{task.priority}</Table.Cell>

            <Table.ColumnHeaderCell maxWidth="56px">
                {task.title}
            </Table.ColumnHeaderCell>
            <Table.Cell maxWidth="288px">{task.description}</Table.Cell>
            <Table.Cell maxWidth="25px">
                {formatDate(task.dueDate)}
            </Table.Cell>
            <Table.Cell>
                <Button
                    onClick={() => handleDelete(task.id)}
                >Delete</Button>
            </Table.Cell>
        </Table.Row>

    );
}

export default Task;
