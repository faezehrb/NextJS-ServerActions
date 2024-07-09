import styled from "styled-components";

const StyledPostList = styled.div`
    background-color: #eeeeee;
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: flex-start;
	align-content: center;
    max-width: 60%;
    margin: 2rem auto;
    padding: 20px;
    border-radius: 7px;
	h2, p{
		text-align: left;
        color: black;
        margin: 2rem auto;
        font-weight: bold;
        font-size: 2rem;
	}
`

export default StyledPostList;