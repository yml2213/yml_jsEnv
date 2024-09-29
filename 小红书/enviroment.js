
!(function(){
    "use strict";
    const $toString = Function.toString;
    const myFunction_toString_symbol = Symbol('('.concat('',')_',(Math.random()+'').toString(36)));
    const mytoString = function(){
        return typeof this == 'function' && this[myFunction_toString_symbol] || $toString.call(this);
    };
    function set_native(func,key,value){
        Object.defineProperty(func,key,{
            "enumerable" : false,
            "configurable" : true,
            "writable" : true,
            "value" : value
        })
    };
    delete Function.prototype['toString'];
    set_native(Function.prototype,"toString",mytoString);
    set_native(Function.prototype.toString,myFunction_toString_symbol,"function toString() { [native code] }");
    this.func_set_native = function (func)  {
        set_native(func,myFunction_toString_symbol,`function ${myFunction_toString_symbol,func.name || ''}() { [native code] }`)
    }
}).call(this);

window = this;
delete global;
var Window = function Window(){};
window.func_set_native(Window);
window.__proto__ = Window.prototype;
Object.defineProperty(window, Symbol.toStringTag, {
  value: 'Window'
});

external = {}
External = function External(){}
window.func_set_native(External);
external.__proto__ = External.prototype;
Object.defineProperty(external, Symbol.toStringTag, {
  value: 'External'
});

window.CanvasRenderingContext2D = function CanvasRenderingContext2D(){console.log(arguments)};
window.func_set_native(CanvasRenderingContext2D);
window.HTMLCanvasElement = function HTMLCanvasElement(){
    this.getContext = function getContext(){
        console.log(arguments);
        if (arguments && arguments[0] === "webgl"){
            var webglrenderingcontext = new WebGLRenderingContext();
            window.func_set_native(webglrenderingcontext.getParameter);
            window.func_set_native(webglrenderingcontext.getExtension);
            webglrenderingcontext = get_proxy(webglrenderingcontext);
            return webglrenderingcontext
        }
    }
}
window.func_set_native(HTMLCanvasElement);
window.AudioContext = function AudioContext(){console.log(arguments)};
window.func_set_native(AudioContext);
window.Image = function Image(){
    var image_elelment = new HTMLImageElement()
    image_elelment = get_proxy(image_elelment)
    return image_elelment
}
window.func_set_native(Image);

setTimeout = function setTimeout(){console.log(arguments)}
window.func_set_native(setTimeout);
setInterval = function setInterval(){console.log(arguments)}
window.func_set_native(setInterval);

HTMLBodyElement = function HTMLBodyElement(){
    this.tagName = 'body'.toUpperCase();
    this.childelement_ = []
    this.father_element = null
    this.appendChild = function appendChild(tag){
        var flag_ = false;
        console.log(arguments);
        if(this === tag)
        {
            debugger;
            flag_ = true
        }
        else {
            for (let p = this; p.father_element !== null; p = p.father_element) {
                if (p.father_element === tag) {
                    debugger;
                    flag_ = true
                }
            }
        }

        if(flag_){
            debugger;
            var dom_exception = new Error('Failed to execute \'appendChild\' on \'Node\': The new child element contains the parent.')
            dom_exception.name = 'DOMException'
            dom_exception = get_proxy(dom_exception)
            throw dom_exception
            return
        }
        this.childelement_.push(tag);
        if (this.father_element !== null)
        {
            this.father_element.childelement_.filter(item=>item !== tag)
        }
        tag.father_element = this;
        return tag
    };
    this.remove = function remove(){console.log(arguments)}
}

HTMLHtmlElement = function HTMLHtmlElement(){
    this.getAttribute = function getAttribute(){console.log(arguments)};
    this.appendChild = function appendChild(element){
        if (element.tagName == 'DIV'){
            element.offsetHeight = 20;
        }
        return element
    }
}

WebGLDebugRendererInfo = function WebGLDebugRendererInfo(){}
window.func_set_native(WebGLDebugRendererInfo);
WebGLDebugRendererInfo.prototype.UNMASKED_VENDOR_WEBGL = 37445
WebGLDebugRendererInfo.prototype.UNMASKED_RENDERER_WEBGL = 37446

WebGLRenderingContext = function WebGLRenderingContext(){
    this.getExtension = function getExtension(){
        console.log(arguments)
        if (arguments && arguments[0] === "WEBGL_debug_renderer_info"){
            var webGLDebugRendererInfo = new WebGLDebugRendererInfo();
            webGLDebugRendererInfo = get_proxy(webGLDebugRendererInfo);
            return webGLDebugRendererInfo
        }
    };
    this.getParameter = function getParameter(){
        console.log(arguments)
        if (arguments){
            if (arguments[0] === 37445)
                return 'Google Inc. (AMD)'
            else if (arguments[0] === 37446)
                return 'ANGLE (AMD, AMD Radeon(TM) Graphics (0x00001638) Direct3D11 vs_5_0 ps_5_0, D3D11)'
        }
    }
}
window.func_set_native(WebGLRenderingContext);

HTMLAnchorElement = function HTMLAnchorElement(tagname){
    this.tagName = tagname.toUpperCase()
};
window.func_set_native(HTMLAnchorElement);

HTMLImageElement = function HTMLImageElement(){console.log(arguments)};
window.func_set_native(HTMLImageElement);
HTMLElement = function HTMLElement(){console.log(arguments)};
window.func_set_native(HTMLElement);
HTMLImageElement.prototype.__proto__ = HTMLElement.prototype

HTMLDivElement = function HTMLDivElement(){
    this.tagName = 'div'.toUpperCase();
    this.style = {
    "accentColor": "",
    "additiveSymbols": "",
    "alignContent": "",
    "alignItems": "",
    "alignSelf": "",
    "alignmentBaseline": "",
    "all": "",
    "animation": "",
    "animationComposition": "",
    "animationDelay": "",
    "animationDirection": "",
    "animationDuration": "",
    "animationFillMode": "",
    "animationIterationCount": "",
    "animationName": "",
    "animationPlayState": "",
    "animationRange": "",
    "animationRangeEnd": "",
    "animationRangeStart": "",
    "animationTimeline": "",
    "animationTimingFunction": "",
    "appRegion": "",
    "appearance": "",
    "ascentOverride": "",
    "aspectRatio": "",
    "backdropFilter": "",
    "backfaceVisibility": "",
    "background": "",
    "backgroundAttachment": "",
    "backgroundBlendMode": "",
    "backgroundClip": "",
    "backgroundColor": "",
    "backgroundImage": "",
    "backgroundOrigin": "",
    "backgroundPosition": "",
    "backgroundPositionX": "",
    "backgroundPositionY": "",
    "backgroundRepeat": "",
    "backgroundSize": "",
    "basePalette": "",
    "baselineShift": "",
    "baselineSource": "",
    "blockSize": "",
    "border": "",
    "borderBlock": "",
    "borderBlockColor": "",
    "borderBlockEnd": "",
    "borderBlockEndColor": "",
    "borderBlockEndStyle": "",
    "borderBlockEndWidth": "",
    "borderBlockStart": "",
    "borderBlockStartColor": "",
    "borderBlockStartStyle": "",
    "borderBlockStartWidth": "",
    "borderBlockStyle": "",
    "borderBlockWidth": "",
    "borderBottom": "",
    "borderBottomColor": "",
    "borderBottomLeftRadius": "",
    "borderBottomRightRadius": "",
    "borderBottomStyle": "",
    "borderBottomWidth": "",
    "borderCollapse": "",
    "borderColor": "",
    "borderEndEndRadius": "",
    "borderEndStartRadius": "",
    "borderImage": "",
    "borderImageOutset": "",
    "borderImageRepeat": "",
    "borderImageSlice": "",
    "borderImageSource": "",
    "borderImageWidth": "",
    "borderInline": "",
    "borderInlineColor": "",
    "borderInlineEnd": "",
    "borderInlineEndColor": "",
    "borderInlineEndStyle": "",
    "borderInlineEndWidth": "",
    "borderInlineStart": "",
    "borderInlineStartColor": "",
    "borderInlineStartStyle": "",
    "borderInlineStartWidth": "",
    "borderInlineStyle": "",
    "borderInlineWidth": "",
    "borderLeft": "",
    "borderLeftColor": "",
    "borderLeftStyle": "",
    "borderLeftWidth": "",
    "borderRadius": "",
    "borderRight": "",
    "borderRightColor": "",
    "borderRightStyle": "",
    "borderRightWidth": "",
    "borderSpacing": "",
    "borderStartEndRadius": "",
    "borderStartStartRadius": "",
    "borderStyle": "",
    "borderTop": "",
    "borderTopColor": "",
    "borderTopLeftRadius": "",
    "borderTopRightRadius": "",
    "borderTopStyle": "",
    "borderTopWidth": "",
    "borderWidth": "",
    "bottom": "",
    "boxShadow": "",
    "boxSizing": "",
    "breakAfter": "",
    "breakBefore": "",
    "breakInside": "",
    "bufferedRendering": "",
    "captionSide": "",
    "caretColor": "",
    "clear": "",
    "clip": "",
    "clipPath": "",
    "clipRule": "",
    "color": "",
    "colorInterpolation": "",
    "colorInterpolationFilters": "",
    "colorRendering": "",
    "colorScheme": "",
    "columnCount": "",
    "columnFill": "",
    "columnGap": "",
    "columnRule": "",
    "columnRuleColor": "",
    "columnRuleStyle": "",
    "columnRuleWidth": "",
    "columnSpan": "",
    "columnWidth": "",
    "columns": "",
    "contain": "",
    "containIntrinsicBlockSize": "",
    "containIntrinsicHeight": "",
    "containIntrinsicInlineSize": "",
    "containIntrinsicSize": "",
    "containIntrinsicWidth": "",
    "container": "",
    "containerName": "",
    "containerType": "",
    "content": "",
    "contentVisibility": "",
    "counterIncrement": "",
    "counterReset": "",
    "counterSet": "",
    "cursor": "",
    "cx": "",
    "cy": "",
    "d": "",
    "descentOverride": "",
    "direction": "",
    "display": "",
    "dominantBaseline": "",
    "emptyCells": "",
    "fallback": "",
    "fill": "",
    "fillOpacity": "",
    "fillRule": "",
    "filter": "",
    "flex": "",
    "flexBasis": "",
    "flexDirection": "",
    "flexFlow": "",
    "flexGrow": "",
    "flexShrink": "",
    "flexWrap": "",
    "float": "",
    "floodColor": "",
    "floodOpacity": "",
    "font": "",
    "fontDisplay": "",
    "fontFamily": "",
    "fontFeatureSettings": "",
    "fontKerning": "",
    "fontOpticalSizing": "",
    "fontPalette": "",
    "fontSize": "",
    "fontStretch": "",
    "fontStyle": "",
    "fontSynthesis": "",
    "fontSynthesisSmallCaps": "",
    "fontSynthesisStyle": "",
    "fontSynthesisWeight": "",
    "fontVariant": "",
    "fontVariantAlternates": "",
    "fontVariantCaps": "",
    "fontVariantEastAsian": "",
    "fontVariantLigatures": "",
    "fontVariantNumeric": "",
    "fontVariantPosition": "",
    "fontVariationSettings": "",
    "fontWeight": "",
    "forcedColorAdjust": "",
    "gap": "",
    "grid": "",
    "gridArea": "",
    "gridAutoColumns": "",
    "gridAutoFlow": "",
    "gridAutoRows": "",
    "gridColumn": "",
    "gridColumnEnd": "",
    "gridColumnGap": "",
    "gridColumnStart": "",
    "gridGap": "",
    "gridRow": "",
    "gridRowEnd": "",
    "gridRowGap": "",
    "gridRowStart": "",
    "gridTemplate": "",
    "gridTemplateAreas": "",
    "gridTemplateColumns": "",
    "gridTemplateRows": "",
    "height": "",
    "hyphenateCharacter": "",
    "hyphenateLimitChars": "",
    "hyphens": "",
    "imageOrientation": "",
    "imageRendering": "",
    "inherits": "",
    "initialLetter": "",
    "initialValue": "",
    "inlineSize": "",
    "inset": "",
    "insetBlock": "",
    "insetBlockEnd": "",
    "insetBlockStart": "",
    "insetInline": "",
    "insetInlineEnd": "",
    "insetInlineStart": "",
    "isolation": "",
    "justifyContent": "",
    "justifyItems": "",
    "justifySelf": "",
    "left": "",
    "letterSpacing": "",
    "lightingColor": "",
    "lineBreak": "",
    "lineGapOverride": "",
    "lineHeight": "",
    "listStyle": "",
    "listStyleImage": "",
    "listStylePosition": "",
    "listStyleType": "",
    "margin": "",
    "marginBlock": "",
    "marginBlockEnd": "",
    "marginBlockStart": "",
    "marginBottom": "",
    "marginInline": "",
    "marginInlineEnd": "",
    "marginInlineStart": "",
    "marginLeft": "",
    "marginRight": "",
    "marginTop": "",
    "marker": "",
    "markerEnd": "",
    "markerMid": "",
    "markerStart": "",
    "mask": "",
    "maskClip": "",
    "maskComposite": "",
    "maskImage": "",
    "maskMode": "",
    "maskOrigin": "",
    "maskPosition": "",
    "maskRepeat": "",
    "maskSize": "",
    "maskType": "",
    "mathDepth": "",
    "mathShift": "",
    "mathStyle": "",
    "maxBlockSize": "",
    "maxHeight": "",
    "maxInlineSize": "",
    "maxWidth": "",
    "minBlockSize": "",
    "minHeight": "",
    "minInlineSize": "",
    "minWidth": "",
    "mixBlendMode": "",
    "negative": "",
    "objectFit": "",
    "objectPosition": "",
    "objectViewBox": "",
    "offset": "",
    "offsetAnchor": "",
    "offsetDistance": "",
    "offsetPath": "",
    "offsetPosition": "",
    "offsetRotate": "",
    "opacity": "",
    "order": "",
    "orphans": "",
    "outline": "",
    "outlineColor": "",
    "outlineOffset": "",
    "outlineStyle": "",
    "outlineWidth": "",
    "overflow": "",
    "overflowAnchor": "",
    "overflowClipMargin": "",
    "overflowWrap": "",
    "overflowX": "",
    "overflowY": "",
    "overlay": "",
    "overrideColors": "",
    "overscrollBehavior": "",
    "overscrollBehaviorBlock": "",
    "overscrollBehaviorInline": "",
    "overscrollBehaviorX": "",
    "overscrollBehaviorY": "",
    "pad": "",
    "padding": "",
    "paddingBlock": "",
    "paddingBlockEnd": "",
    "paddingBlockStart": "",
    "paddingBottom": "",
    "paddingInline": "",
    "paddingInlineEnd": "",
    "paddingInlineStart": "",
    "paddingLeft": "",
    "paddingRight": "",
    "paddingTop": "",
    "page": "",
    "pageBreakAfter": "",
    "pageBreakBefore": "",
    "pageBreakInside": "",
    "pageOrientation": "",
    "paintOrder": "",
    "perspective": "",
    "perspectiveOrigin": "",
    "placeContent": "",
    "placeItems": "",
    "placeSelf": "",
    "pointerEvents": "",
    "position": "",
    "prefix": "",
    "quotes": "",
    "r": "",
    "range": "",
    "resize": "",
    "right": "",
    "rotate": "",
    "rowGap": "",
    "rubyPosition": "",
    "rx": "",
    "ry": "",
    "scale": "",
    "scrollBehavior": "",
    "scrollMargin": "",
    "scrollMarginBlock": "",
    "scrollMarginBlockEnd": "",
    "scrollMarginBlockStart": "",
    "scrollMarginBottom": "",
    "scrollMarginInline": "",
    "scrollMarginInlineEnd": "",
    "scrollMarginInlineStart": "",
    "scrollMarginLeft": "",
    "scrollMarginRight": "",
    "scrollMarginTop": "",
    "scrollPadding": "",
    "scrollPaddingBlock": "",
    "scrollPaddingBlockEnd": "",
    "scrollPaddingBlockStart": "",
    "scrollPaddingBottom": "",
    "scrollPaddingInline": "",
    "scrollPaddingInlineEnd": "",
    "scrollPaddingInlineStart": "",
    "scrollPaddingLeft": "",
    "scrollPaddingRight": "",
    "scrollPaddingTop": "",
    "scrollSnapAlign": "",
    "scrollSnapStop": "",
    "scrollSnapType": "",
    "scrollTimeline": "",
    "scrollTimelineAxis": "",
    "scrollTimelineName": "",
    "scrollbarGutter": "",
    "shapeImageThreshold": "",
    "shapeMargin": "",
    "shapeOutside": "",
    "shapeRendering": "",
    "size": "",
    "sizeAdjust": "",
    "speak": "",
    "speakAs": "",
    "src": "",
    "stopColor": "",
    "stopOpacity": "",
    "stroke": "",
    "strokeDasharray": "",
    "strokeDashoffset": "",
    "strokeLinecap": "",
    "strokeLinejoin": "",
    "strokeMiterlimit": "",
    "strokeOpacity": "",
    "strokeWidth": "",
    "suffix": "",
    "symbols": "",
    "syntax": "",
    "system": "",
    "tabSize": "",
    "tableLayout": "",
    "textAlign": "",
    "textAlignLast": "",
    "textAnchor": "",
    "textCombineUpright": "",
    "textDecoration": "",
    "textDecorationColor": "",
    "textDecorationLine": "",
    "textDecorationSkipInk": "",
    "textDecorationStyle": "",
    "textDecorationThickness": "",
    "textEmphasis": "",
    "textEmphasisColor": "",
    "textEmphasisPosition": "",
    "textEmphasisStyle": "",
    "textIndent": "",
    "textOrientation": "",
    "textOverflow": "",
    "textRendering": "",
    "textShadow": "",
    "textSizeAdjust": "",
    "textTransform": "",
    "textUnderlineOffset": "",
    "textUnderlinePosition": "",
    "textWrap": "",
    "timelineScope": "",
    "top": "",
    "touchAction": "",
    "transform": "",
    "transformBox": "",
    "transformOrigin": "",
    "transformStyle": "",
    "transition": "",
    "transitionBehavior": "",
    "transitionDelay": "",
    "transitionDuration": "",
    "transitionProperty": "",
    "transitionTimingFunction": "",
    "translate": "",
    "unicodeBidi": "",
    "unicodeRange": "",
    "userSelect": "",
    "vectorEffect": "",
    "verticalAlign": "",
    "viewTimeline": "",
    "viewTimelineAxis": "",
    "viewTimelineInset": "",
    "viewTimelineName": "",
    "viewTransitionName": "",
    "visibility": "",
    "webkitAlignContent": "",
    "webkitAlignItems": "",
    "webkitAlignSelf": "",
    "webkitAnimation": "",
    "webkitAnimationDelay": "",
    "webkitAnimationDirection": "",
    "webkitAnimationDuration": "",
    "webkitAnimationFillMode": "",
    "webkitAnimationIterationCount": "",
    "webkitAnimationName": "",
    "webkitAnimationPlayState": "",
    "webkitAnimationTimingFunction": "",
    "webkitAppRegion": "",
    "webkitAppearance": "",
    "webkitBackfaceVisibility": "",
    "webkitBackgroundClip": "",
    "webkitBackgroundOrigin": "",
    "webkitBackgroundSize": "",
    "webkitBorderAfter": "",
    "webkitBorderAfterColor": "",
    "webkitBorderAfterStyle": "",
    "webkitBorderAfterWidth": "",
    "webkitBorderBefore": "",
    "webkitBorderBeforeColor": "",
    "webkitBorderBeforeStyle": "",
    "webkitBorderBeforeWidth": "",
    "webkitBorderBottomLeftRadius": "",
    "webkitBorderBottomRightRadius": "",
    "webkitBorderEnd": "",
    "webkitBorderEndColor": "",
    "webkitBorderEndStyle": "",
    "webkitBorderEndWidth": "",
    "webkitBorderHorizontalSpacing": "",
    "webkitBorderImage": "",
    "webkitBorderRadius": "",
    "webkitBorderStart": "",
    "webkitBorderStartColor": "",
    "webkitBorderStartStyle": "",
    "webkitBorderStartWidth": "",
    "webkitBorderTopLeftRadius": "",
    "webkitBorderTopRightRadius": "",
    "webkitBorderVerticalSpacing": "",
    "webkitBoxAlign": "",
    "webkitBoxDecorationBreak": "",
    "webkitBoxDirection": "",
    "webkitBoxFlex": "",
    "webkitBoxOrdinalGroup": "",
    "webkitBoxOrient": "",
    "webkitBoxPack": "",
    "webkitBoxReflect": "",
    "webkitBoxShadow": "",
    "webkitBoxSizing": "",
    "webkitClipPath": "",
    "webkitColumnBreakAfter": "",
    "webkitColumnBreakBefore": "",
    "webkitColumnBreakInside": "",
    "webkitColumnCount": "",
    "webkitColumnGap": "",
    "webkitColumnRule": "",
    "webkitColumnRuleColor": "",
    "webkitColumnRuleStyle": "",
    "webkitColumnRuleWidth": "",
    "webkitColumnSpan": "",
    "webkitColumnWidth": "",
    "webkitColumns": "",
    "webkitFilter": "",
    "webkitFlex": "",
    "webkitFlexBasis": "",
    "webkitFlexDirection": "",
    "webkitFlexFlow": "",
    "webkitFlexGrow": "",
    "webkitFlexShrink": "",
    "webkitFlexWrap": "",
    "webkitFontFeatureSettings": "",
    "webkitFontSmoothing": "",
    "webkitHyphenateCharacter": "",
    "webkitJustifyContent": "",
    "webkitLineBreak": "",
    "webkitLineClamp": "",
    "webkitLocale": "",
    "webkitLogicalHeight": "",
    "webkitLogicalWidth": "",
    "webkitMarginAfter": "",
    "webkitMarginBefore": "",
    "webkitMarginEnd": "",
    "webkitMarginStart": "",
    "webkitMask": "",
    "webkitMaskBoxImage": "",
    "webkitMaskBoxImageOutset": "",
    "webkitMaskBoxImageRepeat": "",
    "webkitMaskBoxImageSlice": "",
    "webkitMaskBoxImageSource": "",
    "webkitMaskBoxImageWidth": "",
    "webkitMaskClip": "",
    "webkitMaskComposite": "",
    "webkitMaskImage": "",
    "webkitMaskOrigin": "",
    "webkitMaskPosition": "",
    "webkitMaskPositionX": "",
    "webkitMaskPositionY": "",
    "webkitMaskRepeat": "",
    "webkitMaskSize": "",
    "webkitMaxLogicalHeight": "",
    "webkitMaxLogicalWidth": "",
    "webkitMinLogicalHeight": "",
    "webkitMinLogicalWidth": "",
    "webkitOpacity": "",
    "webkitOrder": "",
    "webkitPaddingAfter": "",
    "webkitPaddingBefore": "",
    "webkitPaddingEnd": "",
    "webkitPaddingStart": "",
    "webkitPerspective": "",
    "webkitPerspectiveOrigin": "",
    "webkitPerspectiveOriginX": "",
    "webkitPerspectiveOriginY": "",
    "webkitPrintColorAdjust": "",
    "webkitRtlOrdering": "",
    "webkitRubyPosition": "",
    "webkitShapeImageThreshold": "",
    "webkitShapeMargin": "",
    "webkitShapeOutside": "",
    "webkitTapHighlightColor": "",
    "webkitTextCombine": "",
    "webkitTextDecorationsInEffect": "",
    "webkitTextEmphasis": "",
    "webkitTextEmphasisColor": "",
    "webkitTextEmphasisPosition": "",
    "webkitTextEmphasisStyle": "",
    "webkitTextFillColor": "",
    "webkitTextOrientation": "",
    "webkitTextSecurity": "",
    "webkitTextSizeAdjust": "",
    "webkitTextStroke": "",
    "webkitTextStrokeColor": "",
    "webkitTextStrokeWidth": "",
    "webkitTransform": "",
    "webkitTransformOrigin": "",
    "webkitTransformOriginX": "",
    "webkitTransformOriginY": "",
    "webkitTransformOriginZ": "",
    "webkitTransformStyle": "",
    "webkitTransition": "",
    "webkitTransitionDelay": "",
    "webkitTransitionDuration": "",
    "webkitTransitionProperty": "",
    "webkitTransitionTimingFunction": "",
    "webkitUserDrag": "",
    "webkitUserModify": "",
    "webkitUserSelect": "",
    "webkitWritingMode": "",
    "whiteSpace": "",
    "whiteSpaceCollapse": "",
    "widows": "",
    "width": "",
    "willChange": "",
    "wordBreak": "",
    "wordSpacing": "",
    "wordWrap": "",
    "writingMode": "",
    "x": "",
    "y": "",
    "zIndex": "",
    "zoom": ""
};
    this.style = get_proxy(this.style);
    this.offsetHeight = 0;
    this.child_element_ = [];
    this.father_element = null;
    this.appendChild = function appendChild(tag){
        var flag_ = false
        console.log(arguments);
        if(this === tag)
        {
            debugger;
            flag_ = true
        }
        else {
            for (let p = this; p.father_element !== null; p = p.father_element) {
                if (p.father_element === tag) {
                    debugger;
                    flag_ = true
                }
            }
        }

        if(flag_){
            debugger;
            var dom_exception = new Error('Failed to execute \'appendChild\' on \'Node\': The new child element contains the parent.')
            dom_exception.name = 'DOMException'
            dom_exception = get_proxy(dom_exception)
            throw dom_exception
            return
        }
        this.child_element_.push(tag);
        if (this.father_element !== null)
        {
            this.father_element.child_element_.filter(item=>item !== tag)
        }
        tag.father_element = this;
        return tag
    };
    this.remove = function remove(){
        this.offsetHeight = 0;
    };
};
window.func_set_native(HTMLDivElement);

document = {
    getElementById:function getElementById(){console.log(arguments)},
    createElement:function createElement(tagname){
        console.log(arguments);
        if (typeof tagname !== 'string') {
            debugger;
            var aaaaaa = new Error('Failed to execute \'createElement\' on \'Document\': The tag name provided (\'[object HTMLDocument]\') is not a valid name.')
            aaaaaa.name = 'DOMException'
            aaaaaa = get_proxy(aaaaaa)
            throw aaaaaa
        }
        if (tagname && typeof tagname === 'string' && tagname.toUpperCase() === 'canvas'.toUpperCase())
        {
            var html_canvas_element = new HTMLCanvasElement();
            window.func_set_native(html_canvas_element.getContext);
            html_canvas_element = get_proxy(html_canvas_element)
            return html_canvas_element
        }
        else if (tagname && typeof tagname === 'string' && tagname.toUpperCase() === 'div'.toUpperCase())
        {
            var html_div_element = new HTMLDivElement()
            window.func_set_native(html_div_element.appendChild);
            html_div_element = get_proxy(html_div_element)
            return html_div_element
        }
        else if (tagname && typeof tagname === 'string')
        {
            var elementi = new HTMLAnchorElement(tagname)
            elementi = get_proxy(elementi)
            return elementi
        }
    },
    addEventListener:function addEventListener(){console.log(arguments)},
    cookie:'abRequestId=dafe1227-f736-5057-96a9-f31cf9a44753; a1=18d40069d4fa8j0x8fqaddxl85ic2h97a2bchdy7i50000356250; webId=f81524476908fa902552e338e511d6e6; gid=yYf488K0JY0YyYf488KjfJfv4i0YV8CYiA0fDW3fC1Y23S28SJxjWx888q2KJ288KSS8jSY8; unread={%22ub%22:%2265ab4958000000002e00507d%22%2C%22ue%22:%2265a47a81000000001d032d84%22%2C%22uc%22:25}; cache_feeds=[]; webBuild=4.1.6; xsecappid=xhs-pc-web; websectiga=2a3d3ea002e7d92b5c9743590ebd24010cf3710ff3af8029153751e41a6af4a3; sec_poison_id=dbe6e2ab-d977-4467-9132-cceba71c91b4',
    referrer:'',
    visibilityState:'visible',
};
document.body = new HTMLBodyElement()
document.body = get_proxy(document.body)
window.func_set_native(document.body.appendChild);
document.documentElement = new HTMLHtmlElement();
document.body = get_proxy(document.documentElement)
window.func_set_native(document.documentElement.getAttribute);

var HTMLDocument = function HTMLDocument(){console.log(arguments)};
window.func_set_native(HTMLDocument);
document.__proto__ = HTMLDocument.prototype;

var Document = function(){console.log(arguments);}
window.func_set_native(Document);
HTMLDocument.prototype.__proto__ = Document.prototype

location = {
    href:'https://www.xiaohongshu.com/explore?channel_id=homefeed.movie_and_tv_v3',
    protocol:'https:',
    hostname:'www.xiaohongshu.com',
    host:'www.xiaohongshu.com',
    origin:'https://www.xiaohongshu.com',
    port:''
};
var Location = function Location(){console.log(arguments)};
window.func_set_native(Location);
location.__proto__ = Location.prototype;

navigator = {
    plugins:[],
    languages:[
        "zh-CN",
        "zh"
    ],
    language:'zh-CN',
    userAgent:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    webdriver:false,
    vendorSub:'',
    productSub:'20030107',
    vendor:'Google Inc.',
    maxTouchPoints:0,
    scheduling:{},
    userActivation: {},
    doNotTrack:null,
    geolocation:{},
    connection:{},
    mimeTypes:{},
    pdfViewerEnabled:true,
    webkitTemporaryStorage:{},
    webkitPersistentStorage:{},
    hardwareConcurrency:12,
    cookieEnabled:true,
    appCodeName:'Mozilla',
    appName:'Netscape',
    appVersion:'5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    platform:'Win32',
    product:'Gecko',
    onLine:true,
    bluetooth:{},
    clipboard:{},
    credentials:{},
    keyboard:{},
    managed:{},
    mediaDevices:{},
    storage:{},
    serviceWorker:{},
    virtualKeyboard:{},
    wakeLock:{},
    deviceMemory:8,
    ink:{},
    hid:{},
    locks:{},
    mediaCapabilities:{},
    mediaSession:{},
    permissions:{},
    presentation:{},
    serial:{},
    gpu:{},
    usb:{},
    windowControlsOverlay:{},
    xr:{},
    userAgentData:{},
};

var Navigator = function Navigator(){console.log(arguments)};
window.func_set_native(Navigator);
Navigator.prototype.clearAppBadge = function clearAppBadge(){console.log(arguments)}
Navigator.prototype.getGamepads = function getGamepads(){console.log(arguments)}
Navigator.prototype.getBattery = function getBattery(){console.log(arguments)}
Navigator.prototype.getInstalledRelatedApps = function getInstalledRelatedApps(){console.log(arguments)}
Navigator.prototype.getUserMedia = function getUserMedia(){console.log(arguments)}
Navigator.prototype.javaEnabled = function javaEnabled(){console.log(arguments)}
Navigator.prototype.registerProtocolHandler = function registerProtocolHandler(){console.log(arguments)}
Navigator.prototype.requestMIDIAccess = function requestMIDIAccess(){console.log(arguments)}
Navigator.prototype.requestMediaKeySystemAccess = function requestMediaKeySystemAccess(){console.log(arguments)}
Navigator.prototype.sendBeacon = function sendBeacon(){console.log(arguments)}
Navigator.prototype.setAppBadge = function setAppBadge(){console.log(arguments)}
Navigator.prototype.unregisterProtocolHandler = function unregisterProtocolHandler(){console.log(arguments)}
Navigator.prototype.vibrate = function vibrate(){console.log(arguments)}
Navigator.prototype.webkitGetUserMedia = function webkitGetUserMedia(){console.log(arguments)}
window.func_set_native(Navigator.prototype.clearAppBadge);
window.func_set_native(Navigator.prototype.webkitGetUserMedia);
window.func_set_native(Navigator.prototype.vibrate);
window.func_set_native(Navigator.prototype.unregisterProtocolHandler);
window.func_set_native(Navigator.prototype.setAppBadge);
window.func_set_native(Navigator.prototype.sendBeacon);
window.func_set_native(Navigator.prototype.getInstalledRelatedApps);
window.func_set_native(Navigator.prototype.getGamepads);
window.func_set_native(Navigator.prototype.getBattery);
window.func_set_native(Navigator.prototype.getUserMedia);
window.func_set_native(Navigator.prototype.javaEnabled);
window.func_set_native(Navigator.prototype.registerProtocolHandler);
window.func_set_native(Navigator.prototype.requestMIDIAccess);
window.func_set_native(Navigator.prototype.requestMediaKeySystemAccess);
navigator.__proto__ = Navigator.prototype;

localStorage = {
    sdt_source_storage_key:'{"url":"https://fe-video-qc.xhscdn.com/fe-platform/7a700537086390bf42ed95a3c3b675820f791299.js","reportUrl":"/api/sec/v1/shield/webprofile","desVersion":"2","validate":true,"commonPatch":["/fe_api/burdock/v2/note/post","/api/sns/web/v1/comment/post","/api/sns/web/v1/note/like","/api/sns/web/v1/note/collect","/api/sns/web/v1/user/follow","/api/sns/web/v1/feed","/api/sns/web/v1/login/activate","/api/sns/web/v1/note/metrics_report","/api/redcaptcha","/api/store/jpd/main","/phoenix/api/strategy/getAppStrategy"],"signUrl":"https://fe-video-qc.xhscdn.com/fe-platform/6e0d0a976c31ec4cf07d8dfaea68aefe79a8c678.js","signVersion":"1"}',
    getItem:function(name){
        return localStorage[name] || null
    }
}
window.func_set_native(localStorage.getItem);

var LocalStorage = function LocalStorage(){console.log(arguments)};
window.func_set_native(LocalStorage);
localStorage.__proto__ = LocalStorage.prototype;

screen = {}
var Screen = function Screen(){};
window.func_set_native(Screen);
screen.__proto__ = Screen.prototype;

function get_proxy(obj){
    return new Proxy(obj,{
        get:function (target, p, receiver) {
            if ( p!=='Math'  && p!=='isNaN')
                console.table([{'method':'get',target:target,p:p,receiver:receiver,value:Reflect.get(target, p, receiver)}])
            return Reflect.get(target, p, receiver)
        },
        set:function (target, p, value,receiver){
            console.table([{'method':'set',target:target, p:p, value:value, receiver:receiver}])
            return Reflect.set(target, p, value, receiver)
        },
    });
}
// window = get_proxy(window);
// document = get_proxy(document);
// location = get_proxy(location);
// navigator = get_proxy(navigator);
// localStorage = get_proxy(localStorage);

Object.freeze(navigator)
Object.isFrozen = function(){
    debugger;
    return false
}
window.func_set_native(Object.isFrozen);

getOwnPropertyDescriptor_ = Object.getOwnPropertyDescriptor
Object.getOwnPropertyDescriptor = function getOwnPropertyDescriptor(target,property){
    if (target == navigator && property === 'webdriver'){
        return void 0
    }
    console.log(arguments)
    debugger;
    return getOwnPropertyDescriptor_(target,property)
}
window.func_set_native(Object.getOwnPropertyDescriptor);

getOwnPropertyNames_ = Object.getOwnPropertyNames
Object.getOwnPropertyNames = function getOwnPropertyNames(target){
    if (target == navigator){
        return []
    }
    console.log(arguments)
    debugger;
    return getOwnPropertyNames_(target)
}
window.func_set_native(Object.getOwnPropertyNames);

keys_ = Object.keys
Object.keys = function keys(target){
    if (target === document){
        return ['location']
    }
    if (target === HTMLDocument.prototype){
        return []
    }
    if (target === Document.prototype){
        return [
    "implementation",
    "URL",
    "documentURI",
    "compatMode",
    "characterSet",
    "charset",
    "inputEncoding",
    "contentType",
    "doctype",
    "documentElement",
    "xmlEncoding",
    "xmlVersion",
    "xmlStandalone",
    "domain",
    "referrer",
    "cookie",
    "lastModified",
    "readyState",
    "title",
    "dir",
    "body",
    "head",
    "images",
    "embeds",
    "plugins",
    "links",
    "forms",
    "scripts",
    "currentScript",
    "defaultView",
    "designMode",
    "onreadystatechange",
    "anchors",
    "applets",
    "fgColor",
    "linkColor",
    "vlinkColor",
    "alinkColor",
    "bgColor",
    "all",
    "scrollingElement",
    "onpointerlockchange",
    "onpointerlockerror",
    "hidden",
    "visibilityState",
    "wasDiscarded",
    "prerendering",
    "featurePolicy",
    "webkitVisibilityState",
    "webkitHidden",
    "onbeforecopy",
    "onbeforecut",
    "onbeforepaste",
    "onfreeze",
    "onprerenderingchange",
    "onresume",
    "onsearch",
    "onvisibilitychange",
    "fullscreenEnabled",
    "fullscreen",
    "onfullscreenchange",
    "onfullscreenerror",
    "webkitIsFullScreen",
    "webkitCurrentFullScreenElement",
    "webkitFullscreenEnabled",
    "webkitFullscreenElement",
    "onwebkitfullscreenchange",
    "onwebkitfullscreenerror",
    "rootElement",
    "pictureInPictureEnabled",
    "onbeforexrselect",
    "onabort",
    "onbeforeinput",
    "onbeforetoggle",
    "onblur",
    "oncancel",
    "oncanplay",
    "oncanplaythrough",
    "onchange",
    "onclick",
    "onclose",
    "oncontextlost",
    "oncontextmenu",
    "oncontextrestored",
    "oncuechange",
    "ondblclick",
    "ondrag",
    "ondragend",
    "ondragenter",
    "ondragleave",
    "ondragover",
    "ondragstart",
    "ondrop",
    "ondurationchange",
    "onemptied",
    "onended",
    "onerror",
    "onfocus",
    "onformdata",
    "oninput",
    "oninvalid",
    "onkeydown",
    "onkeypress",
    "onkeyup",
    "onload",
    "onloadeddata",
    "onloadedmetadata",
    "onloadstart",
    "onmousedown",
    "onmouseenter",
    "onmouseleave",
    "onmousemove",
    "onmouseout",
    "onmouseover",
    "onmouseup",
    "onmousewheel",
    "onpause",
    "onplay",
    "onplaying",
    "onprogress",
    "onratechange",
    "onreset",
    "onresize",
    "onscroll",
    "onsecuritypolicyviolation",
    "onseeked",
    "onseeking",
    "onselect",
    "onslotchange",
    "onstalled",
    "onsubmit",
    "onsuspend",
    "ontimeupdate",
    "ontoggle",
    "onvolumechange",
    "onwaiting",
    "onwebkitanimationend",
    "onwebkitanimationiteration",
    "onwebkitanimationstart",
    "onwebkittransitionend",
    "onwheel",
    "onauxclick",
    "ongotpointercapture",
    "onlostpointercapture",
    "onpointerdown",
    "onpointermove",
    "onpointerrawupdate",
    "onpointerup",
    "onpointercancel",
    "onpointerover",
    "onpointerout",
    "onpointerenter",
    "onpointerleave",
    "onselectstart",
    "onselectionchange",
    "onanimationend",
    "onanimationiteration",
    "onanimationstart",
    "ontransitionrun",
    "ontransitionstart",
    "ontransitionend",
    "ontransitioncancel",
    "oncopy",
    "oncut",
    "onpaste",
    "children",
    "firstElementChild",
    "lastElementChild",
    "childElementCount",
    "activeElement",
    "styleSheets",
    "pointerLockElement",
    "fullscreenElement",
    "adoptedStyleSheets",
    "pictureInPictureElement",
    "fonts",
    "adoptNode",
    "append",
    "captureEvents",
    "caretRangeFromPoint",
    "clear",
    "close",
    "createAttribute",
    "createAttributeNS",
    "createCDATASection",
    "createComment",
    "createDocumentFragment",
    "createElement",
    "createElementNS",
    "createEvent",
    "createExpression",
    "createNSResolver",
    "createNodeIterator",
    "createProcessingInstruction",
    "createRange",
    "createTextNode",
    "createTreeWalker",
    "elementFromPoint",
    "elementsFromPoint",
    "evaluate",
    "execCommand",
    "exitFullscreen",
    "exitPictureInPicture",
    "exitPointerLock",
    "getElementById",
    "getElementsByClassName",
    "getElementsByName",
    "getElementsByTagName",
    "getElementsByTagNameNS",
    "getSelection",
    "hasFocus",
    "importNode",
    "open",
    "prepend",
    "queryCommandEnabled",
    "queryCommandIndeterm",
    "queryCommandState",
    "queryCommandSupported",
    "queryCommandValue",
    "querySelector",
    "querySelectorAll",
    "releaseEvents",
    "replaceChildren",
    "startViewTransition",
    "webkitCancelFullScreen",
    "webkitExitFullscreen",
    "write",
    "writeln",
    "fragmentDirective",
    "onbeforematch",
    "browsingTopics",
    "hasPrivateToken",
    "hasRedemptionRecord",
    "requestStorageAccess",
    "timeline",
    "oncontentvisibilityautostatechange",
    "onscrollend",
    "getAnimations",
    "hasStorageAccess",
    "requestStorageAccessFor"
]
    }
    if (target === HTMLImageElement.prototype){
        return [
    "alt",
    "src",
    "srcset",
    "sizes",
    "crossOrigin",
    "useMap",
    "isMap",
    "width",
    "height",
    "naturalWidth",
    "naturalHeight",
    "complete",
    "currentSrc",
    "referrerPolicy",
    "decoding",
    "fetchPriority",
    "loading",
    "name",
    "lowsrc",
    "align",
    "hspace",
    "vspace",
    "longDesc",
    "border",
    "x",
    "y",
    "decode",
    "attributionSrc"
]
    }
    console.log(arguments)
    debugger;
    return keys_(target)
}
window.func_set_native(Object.keys);

RegExp = new Proxy(RegExp,{
    construct(target, argArray) {
        if (argArray[0] && argArray[0].indexOf('vm') !== -1)
        {
            debugger;
            return new target(...['bootstrapNodeJSCoretryModuleLoadevalmachinerunInContext','g'])
        }
        return new target(...argArray)
    }
});

// Reg_pro = RegExp.prototype
// reg_ = RegExp
// RegExp = function(x,y){
//     if (x.indexOf('vm') !== -1){
//         debugger;
//         return new reg_('bootstrapNodeJSCore|tryModuleLoad|evalmachine|runInContext',y)
//     }
//     return new reg_(x,y)
// }
// RegExp.prototype = Reg_pro
