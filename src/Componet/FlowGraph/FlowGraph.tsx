import ReactFlow, {Background} from 'react-flow-renderer';
import {Card, Title, TextInput, Tooltip, Button, createStyles, Notification} from "@mantine/core";
import {Click, Send, TextDirectionLtr, User, CircleCheck} from "tabler-icons-react";
import {useInputState} from '@mantine/hooks';
import {useState} from "react";
import Morse from "./Morse";
import Esp32 from "../../SupaBase/supabaseHandle";

const useStyles = createStyles((theme) => ({
    title: {
        padding: 10,

    },

    textSend: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 100,
        paddingRight: 100,

        [theme.fn.smallerThan('sm')]: {
            paddingLeft: theme.spacing.md,
            paddingRight: theme.spacing.md
        }
    },
}));

const morse = new Morse();
const esp32 = new Esp32();

const FlowGraph = () => {
    const {classes} = useStyles();
    const savedUserName = localStorage.getItem("esp32UserName");
    const [esp32UserName, setEsp32UserName] = useState(savedUserName ? savedUserName : "IAFahim");
    const [str, setStr] = useInputState('');
    const [defaultNodes, setDefaultNodes] = useState(morse.defaultNodes);
    const [defaultEdges, setDefaultEdges] = useState(morse.defaultEdges);
    const [sent, setSent] = useState(false)
    const [morseCode, setMorseCode] = useState("")

    const handleUserName = async (e: any) => {
        setEsp32UserName(e.currentTarget.value);
        localStorage.setItem("esp32UserName", e.currentTarget.value)
    }

    const handleSendingData = async () => {
        setMorseCode(str);
        setSent(true);
        setTimeout(() => {
            setSent(false);
        }, 3000)

        esp32.handleSendingData(esp32UserName, str);
    }

    return (
        <>
            <Card style={{width: "100vw", height: "75vh"}} p={0}>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <Tooltip label="Click graph send data to your esp32" position="right">
                        <Title p='md' className={classes.title}>Morse Code Binary Tree<Click/></Title>
                    </Tooltip>
                    <TextInput label='ESP32 User Name' pr="md" icon={<User/>} value={esp32UserName}
                               onChange={handleUserName}/>
                </div>
                <ReactFlow defaultNodes={defaultNodes} defaultEdges={defaultEdges} onNodeClick={(event, node) => {
                    // @ts-ignore
                    console.log(morse.mosre[node.data.label])
                    // @ts-ignore
                    if (morse.mosre[node.data.label]!=null) {
                        // @ts-ignore
                        setMorseCode(node.data.label);
                        esp32.handleSendingData(esp32UserName, node.data.label);
                        setSent(true);
                        setTimeout(() => {
                            setSent(false);
                        }, 3000)
                    }
                }}>
                    <Background/>
                </ReactFlow>
            </Card>
            <Card className={classes.textSend}>
                <TextInput icon={<TextDirectionLtr/>}
                           value={str}
                           placeholder={'send string morse code to esp32'}
                           onChange={setStr}
                           style={{flex: 1}} pr="lg"/>
                <Button leftIcon={<Send/>} variant={"gradient"} onClick={handleSendingData}>Send</Button>
            </Card>
            <Card style={{display: "flex", justifyContent: "flex-end"}}>

                {sent && <Notification style={{ width: 300}}
                                       icon={<CircleCheck size={18}/>}
                                       onClick={(e) => {
                                           setSent(false)
                                       }} color="teal"
                                       title={"\"" + morseCode + "\" Sent to esp32"}/>}
            </Card>
        </>
    );
};

export default FlowGraph;