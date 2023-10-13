import React, {useEffect, useState} from 'react';
import {CarWash} from "./model/CarWash";
import axios from "axios";
import {Avatar, Box, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {Mail} from "@mui/icons-material";

export const HomePage = () => {

    const [carWashes, setCarWashes] = useState<[] | CarWash[]>([]);

    function test(name: string, address: string) {
        alert(name + ": " + address)
    }

    useEffect(() => {
        (async () => {
            const url = "http://localhost:8080/v1/api/reservations";
            const response = await axios.get<any>(url);
            setCarWashes(response.data);
        })();
    }, []);
    return (
        <Box display="flex" alignItems="center" justifyContent="center">
            <List>
                {carWashes.map((carWash: CarWash) => (
                    <ListItem>
                        <ListItemButton onClick={(event) => {
                            test(carWash.name, carWash.address)
                        }}>
                            <ListItemIcon>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Mail/>
                                    </Avatar>
                                </ListItemAvatar>
                            </ListItemIcon>
                            <ListItemText primary={carWash.name} secondary={carWash.address}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

export default HomePage;