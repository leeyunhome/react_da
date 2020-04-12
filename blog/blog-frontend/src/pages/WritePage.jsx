import React from 'react';
// import Editor from '../components/write/Editor';
import Responsive from '../components/common/Responsive';
// import TagBox from '../components/write/TagBox';
// import WriteActionButtons from '../components/write/WriteActionButtons';
import EditorContainer from '../containers/write/EditorContainer';
import TagBoxContainer from '../components/write/TagBoxContainer';
import WriteActionButtonsContainer from '../containers/write/WriteActionButtonsContainer';
import { Helmet } from 'react-helmet-async';


const WritePage = () => {
    return (
        <Responsive>
            <Helmet>
                <title>새 글 작성하기 - SCHOOLZONE</title>
            </Helmet>
            <EditorContainer />
            <TagBoxContainer />
            <WriteActionButtonsContainer />
        </Responsive>
    );
};

export default WritePage;