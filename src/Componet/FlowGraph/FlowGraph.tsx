import ReactFlow, {Edge} from 'react-flow-renderer';
import {Card, Title} from "@mantine/core";
import {Click} from "tabler-icons-react";

const defaultNodes = [
    {id: '1', data: {label: 'E'}, position: {x: window.innerWidth / 2 - 75, y: 50}},
    {id: '2', data: {label: 'T'}, position: {x: window.innerWidth / 2 - 300, y: 150}},
    {id: '3', data: {label: 'I'}, position: {x: window.innerWidth / 2 + 150, y: 150}},
    {id: '4', data: {label: 'A'}, position: {x: window.innerWidth / 2 - 300 - 85, y: 250}},
    {id: '5', data: {label: 'N'}, position: {x: window.innerWidth / 2 - 300 + 85, y: 250}},
];

const defaultEdges = [
    {id: 'e1-2', source: '1', target: '2', animated: true},
    {id: 'e1-3', source: '1', target: '3'},
    {id: 'e2-4', source: '2', target: '4', animated: true},
    {id: 'e2-5', source: '2', target: '5'}
] as Edge[];

const FlowGraph = () => {

    return (
        <Card style={{width: "100vw", height: "80vh"}} p={0}>
            <Title p='md'>Morse Code Binary Tree <Click/></Title>
            <ReactFlow defaultNodes={defaultNodes} defaultEdges={defaultEdges}/>
        </Card>
    );
};

export default FlowGraph;