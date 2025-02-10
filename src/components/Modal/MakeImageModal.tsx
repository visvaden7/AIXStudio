import {FunctionComponent, useState} from "react";
import {CoverModal} from "./CoverModal.tsx";
import sendImg from '../../assets/pages/aixLab/send-btn1.svg'
import axios from "axios";


interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const MakeImageModal: FunctionComponent<Props> = ({isOpen, onClose}) => {
  const [input, setInput] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  const makeImageApi = async (prompt: string) => {
    try {
      const response = await axios.post('/api/generate_image.php', {prompt: prompt})
      setImgUrl(response.data.url)
    } catch (err) {
      console.log(err)
    }
    
  }
  
  const handleMakeImage = async () => {
    const response = await makeImageApi(input)
    console.log(response)
  }
  return (
    <CoverModal isOpen={isOpen} onClose={onClose} className={'w-[25%] mb-[25%] mr-[15%]'}>
      <div className={'flex flex-col gap-1 text-left'}>
        <div className={'bg-yellow-400 pt-8 px-4'}>
          {/*TODO: 이미지 모달처리 하기*/}
          <div>
            <p className={'text-[24px] font-extrabold'}>그리고 싶은 것을 알려주세요</p>
            <p className={'text-[18px]'}>(이미지 생성은 1번 체험할 수 있어요)</p>
          </div>
        </div>
        {imgUrl
          ? (<img src={imgUrl} alt={'이미지'}/>)
          : (<div className={'flex gap-2 items-center p-4'}>
            <input type={'text'} placeholder={'내용을 입력해주세요'}
                   className={'w-full border-2 border-[#C7C5BD] rounded-3xl p-2'}
                   onChange={(e) => setInput(e.target.value)}/>
            <div className={'flex justify-center items-center p-1 w-10 h-10 bg-[#1A2948] rounded-full'}
                 onClick={handleMakeImage}>
              <img src={sendImg}
                   alt={'send-button'}
                   className={''}/>
            </div>
          </div>)}
      
      </div>
    </CoverModal>
  )
}