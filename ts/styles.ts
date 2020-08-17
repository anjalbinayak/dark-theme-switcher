export const basicStyle = (transition: number) => `
  html {
    transition: ${transition}ms;
  }

  .bin-dark-theme {
    filter: invert(1) hue-rotate(180deg);
  }

  .bin-dark-theme-image {
    filter: invert(1) hue-rotate(180deg);
  }
`;

export const fullStyle = (transition: number) => `
  .bin-image-toggler {
    height: 30px;
    width: 30px;
    cursor: default;
  }

  html {
    transition: ${transition}ms;
  }

  .bin-dark-theme {
    filter: invert(1) hue-rotate(180deg);
  }

  .bin-dark-theme-image {
    filter: invert(1) hue-rotate(180deg);
  }

  #bin-theme-toggler {
    position: absolute;
    top: 10;
    right: 20;
    padding: 5px;
    border-radius: 5px;
    cursor: move;
    background-color: #d6dedd;
    border-radius: 50px;
    text-align: center;
    box-shadow: 2px 2px 3px #999;
    z-index:5050!important;
  }

  #bin-theme-context-menu{
    background:#dedede;
    color:black;
    height:130px;
    width:130px;
    position:absolute;
    top:30%;
    left:40%;
    z-index:100000;
    display:block;
    border-radius:5px;
    padding:5px;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.5);
    display: none;
  }

  .glow {
    background-color: #ccc;
    animation: glow 1s infinite alternate;
  }

  @keyframes glow {
    from {
      box-shadow: 0 0 10px -10px #aef4af;
    }
    to {
      box-shadow: 0 0 10px 10px #aef4af;
    }
  }
`;