import Head from 'next/head'
import {useSelector, shallowEqual} from 'react-redux'
import Navbar1 from '../../components/navbar'
import LeftSidebar1 from '../../components/left-sidebar'
import RightSidebar1 from '../../components/right-sidebar'
import React from "react";

const Layout1 = ({children}) => {
  const {config, palettes} = useSelector(
    (state) => ({
      config: state.config,
      palettes: state.palettes
    }),
    shallowEqual
  )
  const {layout, collapsed} = {...config}
  let {background, navbar, rightSidebar} = {
    ...palettes
  }

  return (
    <>
      <Head>
        <title>Baraka</title>
      </Head>
      <div
        data-layout={layout}
        data-collapsed={collapsed}
        data-background={background}
        data-navbar={navbar}
        data-right-sidebar={rightSidebar}
        className={`font-sans antialiased text-sm disable-scrollbars ${
          background === 'dark' ? 'dark' : ''
        }`}>
        <RightSidebar1 />
        <div className="wrapper">
          <div className="main w-full  text-gray-900 dark:bg-gray-900 dark:text-white">
            <Navbar1 />
            <div className="min-h-screen w-full p-4">{children}</div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Layout1
