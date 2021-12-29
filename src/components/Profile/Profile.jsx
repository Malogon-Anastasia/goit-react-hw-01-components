import React from "react";
import propTypes from "prop-types";
import { Profile, Description, Paragraph, List, ListItem, ListItemStats } from "./Profile.styled";

export default function User({ username, tag, location, avatar, stats }) {
    return (<Profile>
        <Description>
            <img
                src={avatar}
                alt="User avatar"
            />
            <Paragraph>{username}</Paragraph>
            <Paragraph>{tag}</Paragraph>
            <Paragraph>{location}</Paragraph>
        </Description>

        <List>
            <ListItem>
                <ListItemStats>Followers: </ListItemStats>
                <span>{stats.followers}</span>
            </ListItem>
            <ListItem>
                <ListItemStats>Views: </ListItemStats>
                <span>{stats.views}</span>
            </ListItem>
            <ListItem>
                <ListItemStats>Likes: </ListItemStats>
                <span>{stats.likes}</span>
            </ListItem>
        </List>
    </Profile>);
}

User.propTypes = {
    username: propTypes.string,
    tag: propTypes.string,
    location: propTypes.string,
    avatar: propTypes.string,
    stats: propTypes.object,
}