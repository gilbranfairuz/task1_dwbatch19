import {Header, Input, InputFile, Button} from '../../components';
import './addmusic.scss';

const AddMusicPage = () => {
    return (
        <div className="addmusic">
            <Header/>
            <div className="container mt-3">
                <div className="row">
                    <div className="page-title">Add Music</div>
                </div>
                <div className="row">
                    <div className="col-9"><Input className="form-control" placeholder="Title"/></div>
                    <div className="col-3"><InputFile prop="Attach Thumbnail" /></div>
                </div>
                <div className="row">
                    <div className="col">
                        <Input className="form-control" placeholder="Year"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Input className="form-control" placeholder="Singer"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <Button className="form-control" title="Attach"/>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-4">
                        <Button title="Add Music"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddMusicPage
