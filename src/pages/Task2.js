import React from 'react';
import Input from "../ui/input/Input";
import {useDispatch, useSelector} from "react-redux";
import {addImage} from "../redux/slices/profileSlices";
import {resizeImg} from "../helper";


const Task2 = () => {

    const dispatch = useDispatch();
    const photosProfile = useSelector(state => state.profile);

    const handleImageLoad = (e) => {
        const countFiles = e.target.files.length;
        if (e.target.files && countFiles > 0) {
            for (let i = 0; i < e.target.files.length; i++) {
                resizeImg(e.target.files[i], photosProfile.resize).then(result => {
                    let isMain = i === countFiles - 1;
                    dispatch(addImage({isMain: isMain, data: result}));
                }).catch(error => {
                    console.log(error)
                })
            }
        }
    }

    return (
        <>
            <canvas/>
            <div className="profile">
                <div className="profile-title">Профиль</div>
                <form className="profile-form">
                    <label htmlFor="profile-form__file-input">Загрузть фото:</label>
                    <Input
                        type="file"
                        id="profile-form__file-input"
                        accept="image/*"
                        multiple={true}
                        onChange={(e) => handleImageLoad(e)}
                    />
                </form>
                <div className="profile-photo">
                    <div className="profile-photo__main">
                        {(photosProfile.collection.main) &&
                            <img src={photosProfile.collection.main?.resize?.small} alt=""/>}
                    </div>
                    <div className="profile-photo__other">
                        {photosProfile.collection.other.map(element => <img key={element.id}
                                                                            src={element?.resize?.small} alt=""/>)}
                    </div>

                </div>
            </div>
        </>
    );
}

export {Task2};