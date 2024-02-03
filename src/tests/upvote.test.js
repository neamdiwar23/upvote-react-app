import { fireEvent, render, screen } from "@testing-library/react";
import UpVoteList from "../components/upvotelist";

test('Test Upvote', () => {
    const fun = jest.fn()
    const data = [{state: 'default'},{state: 'default'}]
    const {container} = render(<UpVoteList key={'testKey'} id={'testid'} upList={data} updateList={fun}></UpVoteList>);
    const button = screen.getAllByRole('button')[0]
    fireEvent.click(button);
    expect(container.getElementsByClassName('button upvote-button upvote-selected').length).toBe(1);
})