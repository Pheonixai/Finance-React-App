import React from 'react'
import { Form } from 'react-router-dom'
//library imports
import {UserPlusIcon} from '@heroicons/react/24/solid';
import illustration from "../assets/illustration.jpg"


const Intro = () => {
  return (
    <div className='intro'>
        <div>
            <h1>
                Take Control of <span className='accent'>your finances <em>today</em></span>
            </h1>
            <p>
                Personal budgeting is the secret to not wasting your money. Start your journey today.
            </p>
            <Form method="post">
                <input type="text" name="userName" placeholder="What is your name?" required aria-label="Your Name" autoComplete="given-name"/>
                <input type='hidden' name='_action' value="newUser" />
                <button type="submit" className="btn btn--dark">
                    <span>Create Account</span>
                    <UserPlusIcon width={20} />
                </button>
            </Form>
        </div>
        <img src={illustration} alt="Person with money" width={600}/>
    </div>
  )
}

export default Intro