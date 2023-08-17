import React from 'react'
import Fade from 'react-reveal/Fade';
import {
    Card, CardContent, Typography
} from '@mui/material'
import probability_formula from "../img/probability_formula.jpeg"
// import img_table from "../img/dice_prob_table.jpeg"
// import board_img from "../img/board_img.jpeg"
import scientist_img from "../img/scientist.jpg"
import prob_table2 from "../img/prob_table2.jpg"
// import text_teams from "../img/text_prob_teams.jpg"
import text2_teams from "../img/text2_teams.jpg";
import Bounce from 'react-reveal/Bounce';
import { useNavigate } from 'react-router-dom';
const Theory = () => {
    // const mystyle = {
    //     backgroundImage: { board_img }
    // }
    let navigate = useNavigate();
    const handleExample = () => {
        navigate('/theory2');
    }

    return (
        <>
            {/* <div className='theory_page bg-sky-200 top-5' style={mystyle}> */}
            <div className='theory_page bg-sky-200'>

                <div className='img_scientist'>
                    <Bounce left>
                        <img className='img_scientist' src={scientist_img} alt="" />
                    </Bounce>

                </div>

                <Bounce left >
                    {/* <img className='text_teams' src={text_teams} alt="" /> */}
                    <img className='text2_teams' src={text2_teams} alt="" />
                </Bounce>
                <Fade right>
                    <Card
                        sx={{
                            border: "1px solid #0C2D48",
                            margin: "50px",
                            backgroundColor: "#fff",
                            boxShadow: "2px 5px 10px 2px grey",
                            borderBottomLeftRadius: '20px',
                            borderTopLeftRadius: '20px',
                            borderBottomRightRadius: '20px',
                        }}
                    >
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant='h4'
                                component="div"
                                sx={{
                                    // display: "flex",
                                    // alignItems: "center",
                                    // justifyContent: "center",
                                    // borderBottom: "1px solid #0C2D48",
                                    // padding: "10px",
                                    fontWeight: "1000",
                                    fontFamily: 'Poppins',
                                }}
                            >

                            </Typography>
                        </CardContent>
                        <div className='container1'>
                            Probability means possibility. It is a branch of mathematics that deals with the occurrence of a random event. The value is expressed from zero to one.
                        </div>
                        <div className='img1'>
                            <Fade right>
                            <img src={probability_formula} alt="" />
                            </Fade>
                        </div>
                    </Card>
                </Fade>

                <Fade left>
                    <Card
                        sx={{
                            border: "1px solid #0C2D48",
                            margin: "50px",
                            backgroundColor: "#fff",
                            boxShadow: "2px 5px 10px 2px grey",
                            borderBottomLeftRadius: '20px',
                            borderTopRightRadius: '20px',
                            borderBottomRightRadius: '20px',
                        }}
                    >



                        <div className='text1 my-5'>
                            <Fade cascade>
                            To correctly determine the probability of a dice roll, we need to know two things:
                            </Fade>
                            <br />
                            <br />
                            <Fade cascade>
                            The size of the sample space or the set of total possible outcomes
                            How often an event occurs
                            In probability, an event is a certain subset of the sample space. For example, when only one die is rolled, as in the example above, the sample space is equal to all of the values on the die, or the set (1, 2, 3, 4, 5, 6). Since the die is fair, each number in the set occurs only once. In other words, the frequency of each number is 1. To determine the probability of rolling any one of the numbers on the die, we divide the event frequency (1) by the size of the sample space (6), resulting in a probability of 1/6.
                            <br />
                            <br />
                            Rolling two fair dice more than doubles the difficulty of calculating probabilities. This is because rolling one die is independent of rolling a second one. One roll has no effect on the other. When dealing with independent events we use the multiplication rule. The use of a tree diagram demonstrates that there are 6 x 6 = 36 possible outcomes from rolling two dice.
                            </Fade>
                            <br />
                            <br />
                            <Fade cascade>
                            Probability Table of Rolling Two Dice
                            The possible outcomes of rolling two dice are represented in the table below. Note that the number of total possible outcomes is equal to the sample space of the first die (6) multiplied by the sample space of the second die (6), which is 36.
                            </Fade>
                        </div>
                        <br />
                        <br />
                        {/* <div className='img2'> */}
                        <Fade cascade>
                        <img className='img2' src={prob_table2} alt="" />
                        </Fade>
                        {/* </div> */}
                        {/* <div> */}
                            {/* <button className="bg-blue-500 text-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"> */}
                            {/* <button className="start_simulation">
                            Start Simulation
                        </button> */}
                        {/* </div> */}
                    </Card>
                </Fade>
                {/* <button className="start_simulation" onClick={handleExample}>
                    Start Simulation
                </button> */}
                <Fade bottom>
                <div className='flex justify-center mb-3'>
                    
                    <a href="/theory2" className="next" onClick={handleExample}>Next &raquo;</a>
                    
                </div>
                </Fade>
            </div >
        </>
    )
}

export default Theory