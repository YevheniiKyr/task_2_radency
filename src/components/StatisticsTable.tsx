import React, {useEffect, useState} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {Category} from "../types/task";
import {observe} from "web-vitals/dist/modules/lib/observe";
import {Spinner} from "react-bootstrap";
import {Simulate} from "react-dom/test-utils";
import load = Simulate.load;

const StatisticsTable: React.FC = () => {

    const stats: Statistics = new Map<Category, { active: number, archived: number }>([
        ["Task", {active: 0, archived: 0}],
        ["Random Thought", {active: 0, archived: 0}],
        ["Idea", {active: 0, archived: 0}],
    ]);

    const [statistics, setStatistics] = useState<Statistics>(stats)
    const [loading, setLoading] = useState<boolean>(true)
    const {tasks} = useTypedSelector(state => state.task)
    const categories: Category[] = ["Task", "Random Thought", "Idea"];

    useEffect(() => {
        setStatistics(countStats())
        console.log('RERENDER STATS')
    }, [tasks])


    type Statistics = Map<Category, { active: number, archived: number }>
    const countStats = () => {
        const newStats = new Map(stats);
        tasks.forEach((task) => {
            if (task.archived) {
                const categoryStats = newStats.get(task.category);
                if (categoryStats) {
                    categoryStats.archived += 1;
                }
            } else {
                const categoryStats = newStats.get(task.category);
                if (categoryStats) {
                    categoryStats.active += 1;
                }
            }
        });
        setLoading(false)
        return stats
    }

    if(loading) {
        return <Spinner className={"d-flex justify-content-center align-content-center"}
                        style={{width: "30rem", height: "30rem"}} animation={"border"}></Spinner>
    }

    return (
        <div id="stats">
            <h2>Stats</h2>
            <table id="statsTable"  className={ "myTable" }>
                <thead>
                <tr>
                    <th>Note category</th>
                    <th>Active</th>
                    <th>Archived</th>
                </tr>
                </thead>
                <tbody id="statsTasks">
                {
                    categories.map(category =>

                        <tr key={category}>
                            <td>{category}</td>
                            <td>{statistics.get(category)?.active}</td>
                            <td>{statistics.get(category)?.archived}</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    );
};

export default StatisticsTable;