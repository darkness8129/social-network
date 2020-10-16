import React from 'react';

class Status extends React.Component {
    constructor(props) {
        super(props);
        this.activeEditMode = this.activeEditMode.bind(this);
        this.deactiveEditMode = this.deactiveEditMode.bind(this);
        this.onStatusChange = this.onStatusChange.bind(this);
    }

    state = {
        editMode: false,
        status: this.props.userStatus,
    };

    activeEditMode = () => {
        this.setState({ editMode: true });
    };

    deactiveEditMode = () => {
        this.setState({ editMode: false });
        this.props.updateUserStatus(this.state.status);
    };

    onStatusChange(e) {
        this.setState({ status: e.target.value });
    }

    render() {
        return (
            <div>
                Status:
                {!this.state.editMode ? (
                    <div>
                        <span onDoubleClick={this.activeEditMode}>
                            {this.props.userStatus
                                ? this.props.userStatus
                                : '---'}
                        </span>
                    </div>
                ) : (
                    <div>
                        <input
                            autoFocus={true}
                            type='text'
                            onBlur={this.deactiveEditMode}
                            onChange={this.onStatusChange}
                            value={this.state.status}
                        />
                    </div>
                )}
            </div>
        );
    }
}

export default Status;
