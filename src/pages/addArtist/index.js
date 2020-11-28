import {Header, Input, InputFile, Button} from '../../components';

const AddArtistPage = () => {
    return (
        <div className="addmusic">
            <Header/>
            <div className="container mt-3">
                <div className="row">
                    <div className="page-title">Add Artist</div>
                </div>
                <div className="row">
                    <div className="col-9"><Input className="form-control" placeholder="Name"/></div>
                    <div className="col-3"><InputFile prop="Attach Thumbnail" /></div>
                </div>
                <div className="row">
                    <div className="col">
                        <Input className="form-control" placeholder="Old"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Input className="form-control" placeholder="Solo"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <Input className="form-control" placeholder="Start a Career"/>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-4">
                        <Button title="Add Artist"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddArtistPage
