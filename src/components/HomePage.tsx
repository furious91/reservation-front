import React, {useEffect, useState} from 'react';
import {CarWash} from "./model/CarWash";
import axios from "axios";
import {Avatar, Box, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {Mail} from "@mui/icons-material";

export const HomePage = () => {

    const [carWashes, setCarWashes] = useState<[] | CarWash[]>([]);

    const handleListItemData = (id: number) => {
        alert("id: " + id)

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
                    <ListItem key={carWash.id}>
                        <ListItemButton onClick={(event) => {
                            handleListItemData(carWash.id)
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