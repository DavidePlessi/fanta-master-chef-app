import React, {useEffect, useState} from "react";
import {MenuItem, Select} from "@material-ui/core";

export default function EpisodeSelect({episodes, selectedEpisode, handleChange, className}) {
  const [episodeList, setEpisodeList] = useState([]);
  useEffect(() => {
    const temEpisodesList = [];
    for(let i = 1; i < episodes.length; i += 2){
      temEpisodesList.push({
        key: episodes[i-1].number + "-" + episodes[i].number,
        value: episodes[i-1].number + "-" + episodes[i].number
      })
    }
    setEpisodeList(temEpisodesList)
  }, [episodes]);

  useEffect(() => {
    console.log(selectedEpisode)
  }, [selectedEpisode])

  return (
    <Select
      value={selectedEpisode}
      defaultValue={selectedEpisode}
      onChange={(e) => handleChange(e.target.value)}
      className={className}
    >
      {episodeList.map((x) => {
        return (
          <MenuItem value={x.key} key={x.value}>
            {x.value}
          </MenuItem>
        )
      })}
    </Select>
  )
}