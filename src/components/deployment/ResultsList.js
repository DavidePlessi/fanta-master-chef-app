import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {List, ListItem, Typography} from "@material-ui/core";
import translateResultType from "../../utils/translateResultType";
import clsx from "clsx";

const useStyle = makeStyles(theme => ({
  resultListItem: {
    marginRight: 5,
    fontSize: "1.5 rem",
    color: 'green'
  },
  resultListItemIsNegative: {
    color: 'red'
  },
  list: {
  },
  title: {
    fontWeight: 500,
    marginBottom: '0px !important'
  }
}));

function ResultList({results, showEpisodeWithTotals, customTitle}) {
  const classes = useStyle();

  const header =
    !!customTitle
      ? <Typography variant={'h6'} component={'h6'} className={classes.title}>customTitle</Typography>
      : showEpisodeWithTotals
      ? <Typography variant={'h6'} component={'h6'}  className={classes.title}>
          Episodio {results.episodeNumber}, totale punti {!results.resultsPoint ? '0' : results.resultsPoint}
        </Typography>
      : <Typography variant={'h6'} component={'h6'} className={classes.title}>Risultati: </Typography>

  return (
    <div style={{display: 'block'}}>
      {header}
      <List className={classes.list}>
        {!!results && !!results.results && results.results.map(res => {
          const isNegative = res.value < 0;
          return (
            <ListItem>
              <span>
                <b>
                  <span className={clsx({
                    [classes.resultListItem]: true,
                    [classes.resultListItemIsNegative]: isNegative,
                  })}>
                    {(isNegative ? ' ' : ' +') + res.value + ' '}
                  </span>
                  {res.participantName}
                </b> {translateResultType(res.type)}
              </span>
            </ListItem>
          )
        })}
      </List>
    </div>
  )
}

export default ResultList;