import React from 'react'
import './ConMenu.css';

const ConMenu = () => {
  return (
    <div className="menu-containerz">
      <h2 className="menu-title">---BRUNCH COCKTAILS---</h2>
      <div className="menu-items">
        
        {/* Right-Aligned Items on Desktop (Centered on Mobile) */}
        <div className="menu-item-right">
          <h4>CINNAMON TOAST CRUNCH ............... $16</h4>
          <p>Skrewball peanut butter whiskey, vanilla extract, Amaretto, Baileys, egg white, cinnamon</p>
        </div>

        <div className="menu-item-right">
          <h4>BAR 42 MARY ......................................... $14</h4>
          <p>Tito’s, tomato juice, Worcestershire, celery salt, black pepper, tabasco, fully loaded</p>               
        </div>  

        {/* Left-Aligned Item on Desktop (Centered on Mobile) */}
        <div className="menu-item-left">
          <h4>MOET SPRITZ ......................................... $20</h4>
          <p>Aperol, St Germain, botanical liquor, fresh lime juice, mini brut Moet topper</p>
        </div>

      </div>
    </div>
  );
}

export default ConMenu