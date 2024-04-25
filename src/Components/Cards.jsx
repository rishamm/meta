import React from 'react'
import goals from '/Group 36.svg'
import goal from '/Group2.svg'
import goa from '/Group 37.svg'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
const Cards = () => {
  return (
    <div className='  w-full'>

       <div className='flex justify-center gap-12 w-full flex-wrap'>
       <Card className="mt-6 w-[500px] opacity-85 bg-[#0f172a] border border-[#B18F62] ">
          <CardHeader className="bg-transparent shadow-none top-5 relative h-56">
            <img
          src={goals}
          className='w-full h-full opacity-100'
       alt="card-image"
            />
          </CardHeader>
          <CardBody className='opacity-100'>
            <Typography variant="h5"  className="mb-2 text-[#B18F62] opacity-100" >
              Our Vision
            </Typography>
            <Typography className='opacity-100'>
              To establish an immersive online gaming community where players
              from around the globe unite to embark on epic adventures, forge
              lasting friendships, and shape the ever-evolving world of Meta
              proton becoming legends in their own right."
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
          <Link to={'/ourvision'}>
           <Button > 
              <span className=" text-[#B18F62]">Read More</span>
            </Button>
           </Link>
          </CardFooter>
        </Card>

        <Card className="mt-6 w-[500px] opacity-85 bg-[#0f172a] border border-[#B18F62] ">
          <CardHeader className="bg-transparent shadow-none top-5 relative h-56">
          <img
          src={goal}
          className='w-full h-full opacity-100'
       alt="card-image"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2 text-[#B18F62]">
              Core Values
            </Typography>
            <Typography className='opacity-100'>
              Adventure: Embrace the spirit of adventure and exploration,
              encouraging players to journey through fantastical realms, conquer
              formidable challenges, and uncover hidden treasures together.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
          <Link to={'/corevalues'}>
           <Button > 
              <span className=" text-[#B18F62]">Read More</span>
            </Button>
           </Link>
          </CardFooter>
        </Card>

        <Card className="mt-6 w-[500px] opacity-85 bg-[#0f172a] border border-[#B18F62] ">
          <CardHeader className="bg-transparent shadow-none top-5 relative h-56">
          <img
          src={goa}
          className='w-full h-full opacity-100'
       alt="card-image"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2 text-[#B18F62]">
              Long-Term Goals
            </Typography>
            <Typography>
              Build a thriving and tightly-knit gaming community with millions
              of passionate players worldwide. Expand the game universe with
              regular updates, expansions, and user-generated content, keeping
              players engaged and excited for new adventures
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
           <Link to={'/goals'}>
           <Button > 
              <span className=" text-[#B18F62]">Read More</span>
            </Button>
           </Link>
          </CardFooter>
        </Card>
       </div>
    </div>
  )
}

export default Cards