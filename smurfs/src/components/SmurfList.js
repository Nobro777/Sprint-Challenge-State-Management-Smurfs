import React, { useState } from "react"
import { connect } from "react-redux"
import { fetchSmurfs, postSmurfs } from "../actions/index"
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
        overrides: {
            root: {
                palette: {
                    primary: {
                    light: '#757ce8',
                    main: '#3f50b5',
                    dark: '#002884',
                    contrastText: '#fff',
                },
                secondary: {
                    light: '#ff7961',
                    main: '#f44336',
                    dark: '#ba000d',
                    contrastText: '#000',
                    },
                },
            }
    }
});


const Smurfs = props => {
    
    const useStyles = makeStyles({theme});
    const classes = useStyles(theme);

    console.log("my smurf list", props)
    
    const [newSmurf, setNewSmurf] = useState({ name: "", age: "", height: "" })

    const handleChange = e => {
    setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
    e.preventDefault()
    props.postSmurfs(newSmurf)
    props.fetchSmurfs()
    }

    return (
        <section>
            <h1>Smurfs</h1>
                <form style={{border: "1px solid black", padding: "10px", borderRadius:"5px", display: "flex", flexDirection: "column", margin: "0 35% 0 35%"}} onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input name="name" type="text" onChange={handleChange} />

                    <label htmlFor="age">Age:</label>
                    <input name="age" type="number" onChange={handleChange} />

                    <label htmlFor="height">Height:</label>
                    <input name="height" type="number" onChange={handleChange} />
                    <button style={{margin: "2.5% 0 2.5% 0", borderRadius: "5px"}}>Add Smurf</button>
                </form>

        <button style={{margin: "1.5% 0 1.5% 0", borderRadius: "5px"}} onClick={props.fetchSmurfs}>Fetch Smurfs</button>
            <Grid 
            classes={useStyles}
            container
            spacing={10}
            style={{padding: "20px"}}
            >
        {props.smurfs.map(smurf => (
            <Grid
            classes={useStyles}
            key={smurf.name}
            item
            xs={12} sm={6} md={4} lg={4} xl={3}
            >  
                <Card className={classes.root}>
                    <CardContent >
                    <p>Smurf's Name : {smurf.name}</p>
                    <p>Smurf's Age : {smurf.age}</p>
                    <p>Height in CM : {smurf.height}</p>
                    </CardContent>
                </Card>
            </Grid>
        ))}
        </Grid>
        </section>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps, { fetchSmurfs, postSmurfs })(Smurfs)