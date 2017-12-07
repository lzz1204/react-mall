import React,{Component} from "react";
import { Upload, Icon, Modal } from 'antd';
import PropTypes from "prop-types";

class UploadImg extends Component {
	static propTypes = {
		action:PropTypes.string.isRequired,
		max:PropTypes.number.isRequired,
		getImgList:PropTypes.func.isRequired,
	}
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [],
  };

  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange(event){
  	 console.log("event",event);
  	 // console.log("event",event.fileList);
  	this.setState({
  		fileList:event.fileList
  	})
  	const ImgList = event.fileList.map((file)=>
  		(file.response)
  	);
  	 console.log("ImgList",ImgList);
  	this.props.getImgList(ImgList);

  }

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const {max,action} = this.props;
    return (
      <div className="clearfix">
        <Upload
          action={action}
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange.bind(this)}
        >
          {fileList.length >= max ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}

export default UploadImg;