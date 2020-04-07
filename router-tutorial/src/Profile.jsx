import React from 'react';
import { withRouter } from 'react-router-dom';
import WithRouterSample from './WithRouterSample';

const data = {
    neuezeal: {
        name: '이윤호',
        description: '리액트를 좋아하는 개발자'
    },
    hodu: {
        name: '호두',
        description: 'neuezeal이 기르는 강아지',
        // image: 'hodu5.jpg'
    }
};

const Profile = ({ match }) => {
    const { username } = match.params;
    const profile = data[username];
    if (!profile) {
        return <div>존재하지 않는 사용자입니다.</div>;
    }
    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
            {/* <img src="./hodu5.jpg"></img> */}
            <WithRouterSample />

        </div>
    );
};

export default withRouter(Profile);