import TimeboxEditor from "./TimeboxExitor";
import CurrentTimebox from "./CurrentTimebox";
import React from "react";

class EditableTimebox extends React.Component {
    state = {
        title: "Uczę się CSS!",
        totalTimeInMinutes: 20,
        isEditable: true
    }
    handleTitleChange = (event) => {
        this.setState({title: event.target.value});
    }
    handleTotalTimeInMinutesChange = (event) => {
        this.setState({totalTimeInMinutes: event.target.value});
    }
    handleConfirm = () => {
        this.setState({isEditable: false});
    }
    handleEdit = () => {
        this.setState({isEditable: true});
    }

    render() {
        const {title, totalTimeInMinutes, isEditable} = this.state;
        return (
            <>
                <TimeboxEditor
                    title={title}
                    totalTimeInMinutes={totalTimeInMinutes}
                    isEditable={isEditable}
                    onConfirm={this.handleConfirm}
                    onTitleChange={this.handleTitleChange}
                    onTotalTimeInMinutesChange={this.handleTotalTimeInMinutesChange}
                />
                <CurrentTimebox
                    isEditable={isEditable}
                    title={title}
                    totalTimeInMinutes={totalTimeInMinutes}
                    onEdit={this.handleEdit}
                />
            </>
        )
    }
}

export default EditableTimebox;
