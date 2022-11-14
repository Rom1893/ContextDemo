import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default function PageContent() {

    static contextType = ThemeContext;


  const { isDarkMode } = this.context;
  const styles = {
    backgroundColor: isDarkMode ? "black" : "white",
    height: "100vh",
    width: "100vw"
  }
  return (
    <div style={styles}>{this.props.children}</div>
  )

}
