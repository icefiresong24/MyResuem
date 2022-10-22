import '@wangeditor/editor/dist/css/style.css' // 引入 css

import React, { useEffect, useState } from 'react'
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import type { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor'
interface Prop {
  content: string
  onChange: Function
}
function MyEditor(props: Prop) {
  // editor 实例
  const [editor, setEditor] = useState<IDomEditor | null>(null) // TS 语法
  // const [editor, setEditor] = useState(null)                   // JS 语法

  // 编辑器内容
  const [html, setHtml] = useState('')

  // 模拟 ajax 请求，异步设置 html
  useEffect(() => {
    setHtml(props.content)
  }, [])

  // 工具栏配置
  const toolbarConfig: Partial<IToolbarConfig> = {} // TS 语法
  toolbarConfig.excludeKeys = ['headerSelect', 'fullScreen', 'emotion', 'insertLink', 'insertTable', 'group-image', 'group-video', 'codeBlock', 'divider', 'blockquote', 'italic', 'group-more-style']
  // const toolbarConfig = { }                        // JS 语法

  // 编辑器配置
  const editorConfig: Partial<IEditorConfig> = {
    // TS 语法
    // const editorConfig = {                         // JS 语法
    placeholder: '请输入内容...',
  }

  // 及时销毁 editor ，重要！
  useEffect(() => {
    return () => {
      if (editor == null)
        return
      editor.destroy()
      setEditor(null)
    }
  }, [editor])

  // 改变内容时触发
  function handleChangle(value: string) {
    console.log(111)

    setHtml(value)
    props.onChange(value)
  }

  return (
    <>
      <div style={{ border: '1px solid #ccc', zIndex: 100 }}>
        <Toolbar editor={editor} defaultConfig={toolbarConfig} mode="default" style={{ borderBottom: '1px solid #ccc' }} />
        <Editor defaultConfig={editorConfig} value={html} onCreated={setEditor} onChange={editor => handleChangle(editor.getHtml())} mode="default" style={{ height: '300px', overflowY: 'hidden' }} />
      </div>
    </>
  )
}

export default MyEditor
