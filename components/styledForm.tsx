import React from 'react'
import styled from 'styled-components'


export const StyledForm = styled.form`
    background-color: #eeeeee;
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
	align-content: center;
    max-width: 60%;
    margin: auto;
    padding: 20px;
    border-radius: 7px;
    div{
        align-items: flex-start;
        margin:20px;
    }
    div label{
        padding-right: 10px;
        color: #000000;
        text-align: center;
        width: 3rem;
    }
    div input, div textarea{
        color: #000000;
        padding: 5px;
        border-radius: 7px;
        box-sizing: border-box;
    }
`
export const StyledButton = styled.button`
    background: skyblue;
    padding: 10px 20px;
    border-radius: 7px;
    box-shadow: 1px #eeeeee;
    box-shadow: 0px 6px 21px -6px rgba(199,199,199,1);
`
export const SubmitButton = styled(StyledButton).attrs({
    type: "submit",
})`
      
`
