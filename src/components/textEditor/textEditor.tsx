import {EditorContent, useEditor} from '@tiptap/react'
import {StarterKit} from "@tiptap/starter-kit";


import {FaBold, FaCode, FaItalic, FaRedo, FaStrikethrough, FaUndo} from "react-icons/fa";
import {LuTextQuote} from "react-icons/lu";

import {MdFormatListBulleted, MdFormatListNumbered} from "react-icons/md";
import {LuHeading1, LuHeading2, LuHeading3} from "react-icons/lu";

import './styles.scss'
import React, {useEffect} from "react";


interface Props {
    content?: string,
    setContent: React.Dispatch<React.SetStateAction<string>>;
}

const TextEditor = ({content, setContent}: Props) => {


    const editor = useEditor({
        extensions: [
            StarterKit,

        ],
        content: undefined,
        autofocus: true,
        editorProps: {
            attributes: {
                class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none',
            },

        },
        onUpdate: ({editor}) => {
            const Json = editor.getJSON();
            setContent(JSON.stringify(Json));
        }
    })
    if (!editor) {
        return null
    }


    useEffect(() => {
        if (editor && content) {
            try {

                editor.commands.setContent(JSON.parse(content)); // Set content dynamically
            } catch (error) {
                console.error("Invalid JSON content:", error);
            }
        }
    }, [editor, content]);


    const isActive = `bg-gray-500 rounded-xs`;

    return (
        <div className="w-[100%] mx-auto min-h-[500px]  h-fit  border border-gray-300 rounded-md">
            <div className="control-group">
                <div className="flex h-4 gap-1.5 items-center  px-2" style={{margin: 10}}>
                    <button type={"button"}
                            onClick={() => editor.chain().focus().toggleBold().run()}
                            disabled={!editor.can().chain().focus().toggleBold().run()}
                            className={editor.isActive('bold') ? isActive : ''}>
                        <FaBold style={{padding: 1}}/>
                    </button>

                    <button type={"button"}
                            onClick={() => editor.chain().focus().toggleItalic().run()}
                            disabled={!editor.can().chain().focus().toggleItalic().run()}
                            className={editor.isActive('italic') ? isActive : ''}>
                        <FaItalic/>
                    </button>
                    <button type={"button"}
                            onClick={() => editor.chain().focus().toggleHeading({level: 1}).run()}
                            className={editor.isActive('heading', {level: 1}) ? isActive : ''}
                    >
                        <LuHeading1 style={{fontSize: 20}}/>
                    </button>
                    <button type={"button"}
                            onClick={() => editor.chain().focus().toggleHeading({level: 2}).run()}
                            className={editor.isActive('heading', {level: 2}) ? isActive : ''}
                    >
                        <LuHeading2 style={{fontSize: 20}}/>
                    </button>
                    <button type={"button"}
                            onClick={() => editor.chain().focus().toggleHeading({level: 3}).run()}
                            className={editor.isActive('heading', {level: 3}) ? isActive : ''}
                    >
                        <LuHeading3 style={{fontSize: 20}}/>
                    </button>
                    <button type={"button"}
                            onClick={() => editor.chain().focus().toggleStrike().run()}
                            disabled={!editor.can().chain().focus().toggleStrike().run()}
                            className={editor.isActive('strike') ? isActive : ''}>
                        <FaStrikethrough/>
                    </button>
                    <button type={"button"}
                            onClick={() => editor.chain().focus().toggleBlockquote().run()}
                            disabled={!editor.can().chain().focus().toggleBlockquote().run()}
                            className={editor.isActive('blockquote') ? isActive : ''}>
                        <LuTextQuote/>
                    </button>

                    <button type={"button"}
                            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                            className={editor.isActive('codeBlock') ? isActive : ''}>
                        <FaCode/>
                    </button>

                    <button type={"button"}
                            onClick={() => editor.chain().focus().toggleBulletList().run()}
                            className={editor.isActive('bulletList') ? isActive : ''}
                    >
                        <MdFormatListBulleted/>
                    </button>

                    <button type={"button"}
                            onClick={() => editor.chain().focus().toggleOrderedList().run()}
                            className={editor.isActive('orderedList') ? isActive : ''}>
                        <MdFormatListNumbered/>
                    </button>


                    <button
                        type={"button"}
                        onClick={() => editor.chain().focus().undo().run()}
                        disabled={!editor.can().chain().focus().undo().run()}>
                        <FaUndo/>
                    </button>
                    <button type={"button"}
                            onClick={() => editor.chain().focus().redo().run()}
                            disabled={!editor.can().chain().focus().redo().run()}>
                        <FaRedo/>
                    </button>

                </div>
            </div>
            <div className={'w-1 bg-black'}/>

            <hr/>

            {/* Add scrolling inside this */}
            <EditorContent className="w-full min-h-[400px] h-fit   " editor={editor}
                           style={{padding: 5}}/>
        </div>


    )
}
export default TextEditor