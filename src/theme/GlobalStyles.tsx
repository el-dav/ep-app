import React, { FC } from 'react';
import { Global, css } from '@emotion/core';

const Globals: FC = () => (
  <Global
    styles={css`
      html,
      body,
      div,
      span,
      applet,
      object,
      iframe,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      blockquote,
      pre,
      a,
      abbr,
      acronym,
      address,
      big,
      cite,
      code,
      del,
      dfn,
      em,
      img,
      ins,
      kbd,
      q,
      s,
      samp,
      small,
      strike,
      strong,
      sub,
      sup,
      tt,
      var,
      b,
      u,
      i,
      center,
      dl,
      dt,
      dd,
      ol,
      ul,
      li,
      fieldset,
      form,
      label,
      legend,
      table,
      caption,
      tbody,
      tfoot,
      thead,
      tr,
      th,
      td,
      article,
      aside,
      canvas,
      details,
      embed,
      figure,
      figcaption,
      footer,
      header,
      hgroup,
      menu,
      nav,
      output,
      ruby,
      section,
      summary,
      time,
      mark,
      audio,
      video {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
      }

      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        display: block;
      }

      ol,
      ul {
        list-style: none;
      }

      blockquote,
      q {
        quotes: none;
      }

      blockquote::before,
      blockquote::after,
      q::before,
      q::after {
        content: '';
        content: none;
      }

      table {
        border-collapse: collapse;
        border-spacing: 0;
      }

      body {
        line-height: 1;
        margin: 0;
        padding: 0;
        font-family: Roboto, sans-serif;
        width: 100%;
        height: 100%;
        position: absolute;
      }

      body #root {
        width: 100%;
        height: 100%;
      }
    `}
  />
);

const SplitPane: FC = () => (
  <Global
    styles={css`
      .Resizer {
        box-sizing: border-box;
        background: #000;
        opacity: 0.5;
        z-index: 1;
        background-clip: padding-box;
      }

      .Resizer.horizontal {
        height: 11px;
        margin: -5px 0;
        border-top: 5px solid rgb(40, 120, 189);
        border-bottom: 5px solid rgba(255, 255, 255, 0);
        cursor: row-resize;
        width: 100%;
      }

      .horizontal section {
        width: 100vh;
        height: 100vh;
        display: flex;
        flex-direction: column;
      }

      .horizontal header {
        padding: 1rem;
        background: #eee;
      }

      .horizontal footer {
        padding: 1rem;
        background: #eee;
      }

      .parent {
        width: 100%;
        height: 100%;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
      }
      .header {
        background: #aaa;
        height: 3rem;
        line-height: 3rem;
      }
      .wrapper {
        background: #ffa;
        margin: 5rem;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
      }
    `}
  />
);

const Animations: FC = () => (
  <Global
    styles={css`
      .fade-enter {
        opacity: 0.01;
      }

      .fade-enter.fade-enter-active {
        opacity: 1;
        transition: opacity 300ms;
      }

      .fade-exit {
        opacity: 1;
      }

      .fade-exit.fade-exit-active {
        opacity: 0.01;
        transition: opacity 300ms;
      }
    `}
  />
);

const GlobalStyles: FC = () => (
  <>
    <SplitPane />
    <Globals />
    <Animations />
  </>
);

export default GlobalStyles;
