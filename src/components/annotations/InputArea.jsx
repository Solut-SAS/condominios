import { useContext, useState } from "react"
import AnnotationsContext from '../../context/Contexts';

const InputArea = () => {
  const { setAnnotationContent, annotationContent } = useContext(AnnotationsContext);

  const [file, setFile] = useState('')

  const handleAnnotationChange = e => {
    setAnnotationContent(e.target.value);
  }

  // const handleSetFile = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(e.target.value)
  //   setFile(e.target.value);
  // }

  return (
    <div className="flex flex-col w-[95%] mt-8 items-center">
      <div className="flex flex-col w-full">
        <label htmlFor='textarea' className="flex mb-1">
          Escribe tu comunicado
        </label>
        <textarea
          id="textarea"
          value={annotationContent}
          onChange={handleAnnotationChange}
          placeholder="Escriba acá su comunicado por favor..."
          className='flex bg-neutral-100 w-full rounded-md border-none'>
        </textarea>
      </div>

      {/* <input
        onChange={handleSetFile}
        accept="image/png, image/jpeg file/pdf" 
        value={file} 
        className="flex w-[20%] rounded-md" type={'file'} /> */}
    </div>
  )
}

export default InputArea