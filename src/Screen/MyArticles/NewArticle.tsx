// import {BiImageAdd} from "react-icons/bi";
import {ImSpinner3} from "react-icons/im";

import React, {useEffect, useState} from "react";
import Button from "@/components/button.tsx";
import ImageUploader from "@/components/imgUpload.tsx";

import {blogTags} from "../../../constants/categoryCards.ts";

import {useNotification} from "../../../context/NotficationContext/useNotification.ts";
import TextEditor from "@/components/textEditor/textEditor.tsx";


interface Props {
    initialPost?: {
        title: "",
        thumbnail: '',
        content: "",
        tags: string[],
        meta: '',
    }
    submitButtonTitle: "Update" | "Post",
    onSubmit?: (data: FormData) => void
}

const NewArticle = ({ initialPost}: Props) => {
    const defaultPost = {
        title: "",
        thumbnail: '',
        content: "",
        tags: [] as string[],
        meta: '',
    }

    const [postInfo, setPostInfo] = useState(defaultPost);
    const [thumbnailUrl, setThumbnailUrl] = useState('');
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [thumbnailUploading, setThumbnailUploading] = useState(false);
    const {updateNotification} = useNotification();
    const [content, setContent] = useState('');


    useEffect(() => {
        if (initialPost) {
            console.log(initialPost);
            setPostInfo({...initialPost});
            if (initialPost.thumbnail) {
                setThumbnailUrl(initialPost.thumbnail);
            }
        }
    }, [initialPost]);

    const {title,  meta,} = postInfo;


    const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const {value, name} = event.target;
        if (name === "title" && title.trim().length > 120) {
            updateNotification('warning', 'title of 120 characters will be selected')
            return setPostInfo({...postInfo, [name]: value.substring(0, 120)})
        }
        if (name === "meta" && meta.trim().length > 150) {
            updateNotification('warning', 'meta of 150 characters will be selected')
            return setPostInfo({...postInfo, [name]: value.substring(0, 150)})
        }

        setPostInfo({...postInfo, [name]: value})
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!thumbnailUrl.trim()) return updateNotification('error', 'Missing Thumbnail');
        if (!title.trim()) return updateNotification('error', 'Missing title')
        if (!meta.trim()) return updateNotification('error', 'Missing Description')
        if (selectedTags.length < 1) return updateNotification('error', 'tags must not be empty');
        if (!content.trim()) return updateNotification('error', 'Missing content');



        const slug = title
            .toLowerCase()
            .replace(/[^a-zA-Z]/g, ' ')
            .split(' ')
            .filter(item => item.trim())
            .join('-');

        const formData = new FormData();
        const finalPost = {...postInfo, content, slug, tags:selectedTags , thumbnail:thumbnailUrl};
         console.log(finalPost);

        for (const key in finalPost) {
            formData.append(key, finalPost[key as keyof typeof finalPost] as string);
        }

        // onSubmit(formData);


        formData.forEach((value, key) => {
            console.log(`${key}: ${value}`);
        });
    }

    const [modalOpen, setModalOpen] = useState(false);


    const handleTagSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedTag = e.target.value;
        if (!selectedTags.includes(selectedTag)) {
            setSelectedTags((prev) => [...prev, selectedTag]);

            console.log(selectedTags)
            // return setPostInfo({...postInfo, [tags]: selectedTag});
        }
    };
    const deleteSelectedTag = (tag: string) => {

        setSelectedTags((prev) => prev.filter(selectedTag => selectedTag !== tag))
    }

    return (
        // <div>

        <form className={'flex boxShadow gap-2 h-[calc(100vh-4rem)] bg-red-100 mx-auto overflow-y-auto max-w-5xl '}
              onSubmit={handleSubmit}>
            {/*Thumbnail*/}
            <ImageUploader isOpen={modalOpen} setIsOpen={() => setModalOpen(false)} setImgUrl={setThumbnailUrl}
                           setIsUploading={setThumbnailUploading}/>

            <div className={'flex flex-col flex-3     overflow-y-auto'}>
                {/*topBar*/}
                <div className={'flex h-10 justify-around items-center'}>
                    <h3 className={'select-none'}>New Article</h3>
                    <div className={'flex items-center'}>
                        <Button title={'Reset'} type={"button"} onClick={() => console.log(content)}/>
                        <Button title={'Submit'} type={"submit"}/>
                    </div>
                </div>
                <div className={'w-full h-0.5 bg-blue-50'}/>


                <section className={'flex max-md:flex-col justify-center p-3 gap-3 w-full'}>
                    {/*Thumbnail*/}
                    <div className={'w-sm rounded-md overflow-hidden aspect-video  max-md:w-full '}>
                        {
                            thumbnailUrl.length > 2 ?
                                <img onClick={() => setModalOpen(true)} src={thumbnailUrl} alt={'Thumbnail'}/>
                                : <div className={'flex items-center aspect-video justify-center'}
                                       onClick={() => setModalOpen(true)}>
                                    {thumbnailUploading ?
                                        <ImSpinner3 size={30} className={'animate-spin'}/> : <div
                                            className={'flex flex-col justify-center items-center border-2 w-sm max-md:w-full aspect-video border-blue-500 border-dashed aspect-video'}>
                                            <span className={'text-gray-500'}>Select Thumbnail</span>
                                            <span className={'text-gray-400 text-xs'}>Recommended Size</span>
                                            <span className={'text-gray-400 text-xs'}>1280x720</span>
                                        </div>
                                    }
                                </div>
                        }
                    </div>

                    <div className={'flex flex-col w-[50%] max-md:w-full  '}>
                        {/*title*/}
                        <label className={'select-none'} htmlFor={'title'}>Title {title.trim().length}/120</label>
                        <textarea value={title} onChange={handleTextAreaChange} name={'title'} id={'title'}
                                  className={'resize-none h-20 max-md:resize-x bg-white font-bold italic text-[17px] px-2 py-1 rounded-md outline-none   '}
                                  placeholder={`Title`}
                                  onInput={(e) => {
                                      if (window.innerWidth <= 768) {
                                          const target = e.target as HTMLTextAreaElement;
                                          target.style.height = 'auto';
                                          target.style.height = `${target.scrollHeight}px`;
                                      }
                                  }}


                        />

                        {/*Description*/}
                        <div className={'flex flex-col gap-1 justify-start '}>
                            <label className={'select-none'} htmlFor={'meta'}>Meta Description {meta.trim().length}/150</label>
                            <textarea value={meta} onChange={handleTextAreaChange} name={'meta'} id={'meta'}
                                      className={'resize-none h-20 bg-white font-semibold text-[13px] text-gray-500 italic px-2 py-1 rounded-md outline-none  '}
                                      placeholder={`Meta Description`}
                                      onInput={(e) => {
                                          if (window.innerWidth <= 768) {
                                              const target = e.target as HTMLTextAreaElement;
                                              target.style.height = 'auto';
                                              target.style.height = `${target.scrollHeight}px`;
                                          }
                                      }}
                            />
                        </div>

                    </div>

                </section>


                <div className={'w-full h-0.5 my-2 bg-blue-50'}/>


                <hr/>
                {/*Tags*/}
                <div className={'flex flex-col gap-1 w-[90%] max-lg:w-full mx-auto justify-start py-2 px-2 '}>
                    <div className={'flex gap-2'}>
                        <h3 className={'select-none'}>Tags {selectedTags.length}/4</h3>
                        {selectedTags.length < 4 && (<select required={true}
                                                             className={'w-[100px] border-1 rounded-md border-amber-900'}
                                                             onChange={handleTagSelection}
                        >{
                            blogTags.map(blogTag => (
                                <option key={blogTag} className={'text-[12px]'} value={blogTag}> {blogTag}</option>
                            ))
                        }</select>)}
                    </div>

                    <div className={'flex gap-1 w-full overflow-x-auto '}>{
                        selectedTags.map((tag, index) => (
                            <span onClick={() => deleteSelectedTag(tag)}
                                  className={'border-1 text-[10px] bg-green-50 whitespace-nowrap hover:cursor-pointer hover:bg-red-400 w-fit h-4 select-none rounded-full gap-3 px-1.5 border-gray-700'}
                                  key={index}> ⊝ {tag}</span>
                        ))
                    }</div>



                <hr/>
                {/*Editor*/}
                <TextEditor content={initialPost?.content} setContent={setContent}/>




                </div>

                {/*<div className={'w-full'}>*/}
                {/*    <RenderContent content={content}/>*/}

                {/*</div>*/}
            </div>


        </form>

    );
};

export default NewArticle;