// Compiled by ClojureScript 1.7.170 {}
goog.provide('om.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('goog.ui.IdGenerator');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;

/**
 * @interface
 */
om.core.IDisplayName = function(){};

om.core.display_name = (function om$core$display_name(this$){
if((!((this$ == null))) && (!((this$.om$core$IDisplayName$display_name$arity$1 == null)))){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__5823__auto__ = (((this$ == null))?null:this$);
var m__5824__auto__ = (om.core.display_name[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,this$);
} else {
var m__5824__auto____$1 = (om.core.display_name["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDisplayName.display-name",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IInitState = function(){};

om.core.init_state = (function om$core$init_state(this$){
if((!((this$ == null))) && (!((this$.om$core$IInitState$init_state$arity$1 == null)))){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__5823__auto__ = (((this$ == null))?null:this$);
var m__5824__auto__ = (om.core.init_state[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,this$);
} else {
var m__5824__auto____$1 = (om.core.init_state["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IInitState.init-state",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IShouldUpdate = function(){};

om.core.should_update = (function om$core$should_update(this$,next_props,next_state){
if((!((this$ == null))) && (!((this$.om$core$IShouldUpdate$should_update$arity$3 == null)))){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__5823__auto__ = (((this$ == null))?null:this$);
var m__5824__auto__ = (om.core.should_update[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,this$,next_props,next_state);
} else {
var m__5824__auto____$1 = (om.core.should_update["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,this$,next_props,next_state);
} else {
throw cljs.core.missing_protocol.call(null,"IShouldUpdate.should-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillMount = function(){};

om.core.will_mount = (function om$core$will_mount(this$){
if((!((this$ == null))) && (!((this$.om$core$IWillMount$will_mount$arity$1 == null)))){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__5823__auto__ = (((this$ == null))?null:this$);
var m__5824__auto__ = (om.core.will_mount[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,this$);
} else {
var m__5824__auto____$1 = (om.core.will_mount["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWillMount.will-mount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IDidMount = function(){};

om.core.did_mount = (function om$core$did_mount(this$){
if((!((this$ == null))) && (!((this$.om$core$IDidMount$did_mount$arity$1 == null)))){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__5823__auto__ = (((this$ == null))?null:this$);
var m__5824__auto__ = (om.core.did_mount[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,this$);
} else {
var m__5824__auto____$1 = (om.core.did_mount["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDidMount.did-mount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillUnmount = function(){};

om.core.will_unmount = (function om$core$will_unmount(this$){
if((!((this$ == null))) && (!((this$.om$core$IWillUnmount$will_unmount$arity$1 == null)))){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__5823__auto__ = (((this$ == null))?null:this$);
var m__5824__auto__ = (om.core.will_unmount[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,this$);
} else {
var m__5824__auto____$1 = (om.core.will_unmount["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWillUnmount.will-unmount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillUpdate = function(){};

om.core.will_update = (function om$core$will_update(this$,next_props,next_state){
if((!((this$ == null))) && (!((this$.om$core$IWillUpdate$will_update$arity$3 == null)))){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__5823__auto__ = (((this$ == null))?null:this$);
var m__5824__auto__ = (om.core.will_update[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,this$,next_props,next_state);
} else {
var m__5824__auto____$1 = (om.core.will_update["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,this$,next_props,next_state);
} else {
throw cljs.core.missing_protocol.call(null,"IWillUpdate.will-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IDidUpdate = function(){};

om.core.did_update = (function om$core$did_update(this$,prev_props,prev_state){
if((!((this$ == null))) && (!((this$.om$core$IDidUpdate$did_update$arity$3 == null)))){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__5823__auto__ = (((this$ == null))?null:this$);
var m__5824__auto__ = (om.core.did_update[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,this$,prev_props,prev_state);
} else {
var m__5824__auto____$1 = (om.core.did_update["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,this$,prev_props,prev_state);
} else {
throw cljs.core.missing_protocol.call(null,"IDidUpdate.did-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillReceiveProps = function(){};

om.core.will_receive_props = (function om$core$will_receive_props(this$,next_props){
if((!((this$ == null))) && (!((this$.om$core$IWillReceiveProps$will_receive_props$arity$2 == null)))){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__5823__auto__ = (((this$ == null))?null:this$);
var m__5824__auto__ = (om.core.will_receive_props[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,this$,next_props);
} else {
var m__5824__auto____$1 = (om.core.will_receive_props["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,this$,next_props);
} else {
throw cljs.core.missing_protocol.call(null,"IWillReceiveProps.will-receive-props",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRender = function(){};

om.core.render = (function om$core$render(this$){
if((!((this$ == null))) && (!((this$.om$core$IRender$render$arity$1 == null)))){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__5823__auto__ = (((this$ == null))?null:this$);
var m__5824__auto__ = (om.core.render[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,this$);
} else {
var m__5824__auto____$1 = (om.core.render["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRender.render",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRenderProps = function(){};

om.core.render_props = (function om$core$render_props(this$,props,state){
if((!((this$ == null))) && (!((this$.om$core$IRenderProps$render_props$arity$3 == null)))){
return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else {
var x__5823__auto__ = (((this$ == null))?null:this$);
var m__5824__auto__ = (om.core.render_props[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,this$,props,state);
} else {
var m__5824__auto____$1 = (om.core.render_props["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,this$,props,state);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderProps.render-props",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRenderState = function(){};

om.core.render_state = (function om$core$render_state(this$,state){
if((!((this$ == null))) && (!((this$.om$core$IRenderState$render_state$arity$2 == null)))){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__5823__auto__ = (((this$ == null))?null:this$);
var m__5824__auto__ = (om.core.render_state[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,this$,state);
} else {
var m__5824__auto____$1 = (om.core.render_state["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,this$,state);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderState.render-state",this$);
}
}
}
});


/**
 * @interface
 */
om.core.ICheckState = function(){};


/**
 * @interface
 */
om.core.IOmSwap = function(){};

om.core._om_swap_BANG_ = (function om$core$_om_swap_BANG_(this$,cursor,korks,f,tag){
if((!((this$ == null))) && (!((this$.om$core$IOmSwap$_om_swap_BANG_$arity$5 == null)))){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__5823__auto__ = (((this$ == null))?null:this$);
var m__5824__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,this$,cursor,korks,f,tag);
} else {
var m__5824__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,this$,cursor,korks,f,tag);
} else {
throw cljs.core.missing_protocol.call(null,"IOmSwap.-om-swap!",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IGetState = function(){};

om.core._get_state = (function om$core$_get_state(var_args){
var args16419 = [];
var len__6226__auto___16422 = arguments.length;
var i__6227__auto___16423 = (0);
while(true){
if((i__6227__auto___16423 < len__6226__auto___16422)){
args16419.push((arguments[i__6227__auto___16423]));

var G__16424 = (i__6227__auto___16423 + (1));
i__6227__auto___16423 = G__16424;
continue;
} else {
}
break;
}

var G__16421 = args16419.length;
switch (G__16421) {
case 1:
return om.core._get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16419.length)].join('')));

}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.om$core$IGetState$_get_state$arity$1 == null)))){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__5823__auto__ = (((this$ == null))?null:this$);
var m__5824__auto__ = (om.core._get_state[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,this$);
} else {
var m__5824__auto____$1 = (om.core._get_state["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((!((this$ == null))) && (!((this$.om$core$IGetState$_get_state$arity$2 == null)))){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__5823__auto__ = (((this$ == null))?null:this$);
var m__5824__auto__ = (om.core._get_state[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,this$,ks);
} else {
var m__5824__auto____$1 = (om.core._get_state["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,this$,ks);
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
}
});

om.core._get_state.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
om.core.IGetRenderState = function(){};

om.core._get_render_state = (function om$core$_get_render_state(var_args){
var args16426 = [];
var len__6226__auto___16429 = arguments.length;
var i__6227__auto___16430 = (0);
while(true){
if((i__6227__auto___16430 < len__6226__auto___16429)){
args16426.push((arguments[i__6227__auto___16430]));

var G__16431 = (i__6227__auto___16430 + (1));
i__6227__auto___16430 = G__16431;
continue;
} else {
}
break;
}

var G__16428 = args16426.length;
switch (G__16428) {
case 1:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16426.length)].join('')));

}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.om$core$IGetRenderState$_get_render_state$arity$1 == null)))){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__5823__auto__ = (((this$ == null))?null:this$);
var m__5824__auto__ = (om.core._get_render_state[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,this$);
} else {
var m__5824__auto____$1 = (om.core._get_render_state["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((!((this$ == null))) && (!((this$.om$core$IGetRenderState$_get_render_state$arity$2 == null)))){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__5823__auto__ = (((this$ == null))?null:this$);
var m__5824__auto__ = (om.core._get_render_state[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,this$,ks);
} else {
var m__5824__auto____$1 = (om.core._get_render_state["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,this$,ks);
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
}
});

om.core._get_render_state.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
om.core.ISetState = function(){};

om.core._set_state_BANG_ = (function om$core$_set_state_BANG_(var_args){
var args16433 = [];
var len__6226__auto___16436 = arguments.length;
var i__6227__auto___16437 = (0);
while(true){
if((i__6227__auto___16437 < len__6226__auto___16436)){
args16433.push((arguments[i__6227__auto___16437]));

var G__16438 = (i__6227__auto___16437 + (1));
i__6227__auto___16437 = G__16438;
continue;
} else {
}
break;
}

var G__16435 = args16433.length;
switch (G__16435) {
case 3:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16433.length)].join('')));

}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,val,render){
if((!((this$ == null))) && (!((this$.om$core$ISetState$_set_state_BANG_$arity$3 == null)))){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__5823__auto__ = (((this$ == null))?null:this$);
var m__5824__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,this$,val,render);
} else {
var m__5824__auto____$1 = (om.core._set_state_BANG_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,this$,val,render);
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,ks,val,render){
if((!((this$ == null))) && (!((this$.om$core$ISetState$_set_state_BANG_$arity$4 == null)))){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__5823__auto__ = (((this$ == null))?null:this$);
var m__5824__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,this$,ks,val,render);
} else {
var m__5824__auto____$1 = (om.core._set_state_BANG_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,this$,ks,val,render);
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
}
});

om.core._set_state_BANG_.cljs$lang$maxFixedArity = 4;


/**
 * @interface
 */
om.core.IRenderQueue = function(){};

om.core._get_queue = (function om$core$_get_queue(this$){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_get_queue$arity$1 == null)))){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__5823__auto__ = (((this$ == null))?null:this$);
var m__5824__auto__ = (om.core._get_queue[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,this$);
} else {
var m__5824__auto____$1 = (om.core._get_queue["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-get-queue",this$);
}
}
}
});

om.core._queue_render_BANG_ = (function om$core$_queue_render_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2 == null)))){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__5823__auto__ = (((this$ == null))?null:this$);
var m__5824__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,this$,c);
} else {
var m__5824__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,this$,c);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-queue-render!",this$);
}
}
}
});

om.core._empty_queue_BANG_ = (function om$core$_empty_queue_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 == null)))){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__5823__auto__ = (((this$ == null))?null:this$);
var m__5824__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,this$);
} else {
var m__5824__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-empty-queue!",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IValue = function(){};

om.core._value = (function om$core$_value(x){
if((!((x == null))) && (!((x.om$core$IValue$_value$arity$1 == null)))){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__5823__auto__ = (((x == null))?null:x);
var m__5824__auto__ = (om.core._value[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,x);
} else {
var m__5824__auto____$1 = (om.core._value["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,x);
} else {
throw cljs.core.missing_protocol.call(null,"IValue.-value",x);
}
}
}
});

(om.core.IValue["_"] = true);

(om.core._value["_"] = (function (x){
return x;
}));

/**
 * @interface
 */
om.core.ICursor = function(){};

om.core._path = (function om$core$_path(cursor){
if((!((cursor == null))) && (!((cursor.om$core$ICursor$_path$arity$1 == null)))){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__5823__auto__ = (((cursor == null))?null:cursor);
var m__5824__auto__ = (om.core._path[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,cursor);
} else {
var m__5824__auto____$1 = (om.core._path["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,cursor);
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-path",cursor);
}
}
}
});

om.core._state = (function om$core$_state(cursor){
if((!((cursor == null))) && (!((cursor.om$core$ICursor$_state$arity$1 == null)))){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__5823__auto__ = (((cursor == null))?null:cursor);
var m__5824__auto__ = (om.core._state[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,cursor);
} else {
var m__5824__auto____$1 = (om.core._state["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,cursor);
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-state",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.IToCursor = function(){};

om.core._to_cursor = (function om$core$_to_cursor(var_args){
var args16440 = [];
var len__6226__auto___16443 = arguments.length;
var i__6227__auto___16444 = (0);
while(true){
if((i__6227__auto___16444 < len__6226__auto___16443)){
args16440.push((arguments[i__6227__auto___16444]));

var G__16445 = (i__6227__auto___16444 + (1));
i__6227__auto___16444 = G__16445;
continue;
} else {
}
break;
}

var G__16442 = args16440.length;
switch (G__16442) {
case 2:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16440.length)].join('')));

}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (value,state){
if((!((value == null))) && (!((value.om$core$IToCursor$_to_cursor$arity$2 == null)))){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__5823__auto__ = (((value == null))?null:value);
var m__5824__auto__ = (om.core._to_cursor[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,value,state);
} else {
var m__5824__auto____$1 = (om.core._to_cursor["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,value,state);
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (value,state,path){
if((!((value == null))) && (!((value.om$core$IToCursor$_to_cursor$arity$3 == null)))){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__5823__auto__ = (((value == null))?null:value);
var m__5824__auto__ = (om.core._to_cursor[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,value,state,path);
} else {
var m__5824__auto____$1 = (om.core._to_cursor["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,value,state,path);
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
}
});

om.core._to_cursor.cljs$lang$maxFixedArity = 3;


/**
 * @interface
 */
om.core.ICursorDerive = function(){};

om.core._derive = (function om$core$_derive(cursor,derived,state,path){
if((!((cursor == null))) && (!((cursor.om$core$ICursorDerive$_derive$arity$4 == null)))){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__5823__auto__ = (((cursor == null))?null:cursor);
var m__5824__auto__ = (om.core._derive[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,cursor,derived,state,path);
} else {
var m__5824__auto____$1 = (om.core._derive["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,cursor,derived,state,path);
} else {
throw cljs.core.missing_protocol.call(null,"ICursorDerive.-derive",cursor);
}
}
}
});

om.core.to_cursor;
(om.core.ICursorDerive["_"] = true);

(om.core._derive["_"] = (function (this$,derived,state,path){
return om.core.to_cursor.call(null,derived,state,path);
}));
om.core.path = (function om$core$path(cursor){
return om.core._path.call(null,cursor);
});
om.core.value = (function om$core$value(cursor){
return om.core._value.call(null,cursor);
});
om.core.state = (function om$core$state(cursor){
return om.core._state.call(null,cursor);
});

/**
 * @interface
 */
om.core.ITransact = function(){};

om.core._transact_BANG_ = (function om$core$_transact_BANG_(cursor,korks,f,tag){
if((!((cursor == null))) && (!((cursor.om$core$ITransact$_transact_BANG_$arity$4 == null)))){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__5823__auto__ = (((cursor == null))?null:cursor);
var m__5824__auto__ = (om.core._transact_BANG_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,cursor,korks,f,tag);
} else {
var m__5824__auto____$1 = (om.core._transact_BANG_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,cursor,korks,f,tag);
} else {
throw cljs.core.missing_protocol.call(null,"ITransact.-transact!",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.INotify = function(){};

om.core._listen_BANG_ = (function om$core$_listen_BANG_(x,key,tx_listen){
if((!((x == null))) && (!((x.om$core$INotify$_listen_BANG_$arity$3 == null)))){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__5823__auto__ = (((x == null))?null:x);
var m__5824__auto__ = (om.core._listen_BANG_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,x,key,tx_listen);
} else {
var m__5824__auto____$1 = (om.core._listen_BANG_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,x,key,tx_listen);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-listen!",x);
}
}
}
});

om.core._unlisten_BANG_ = (function om$core$_unlisten_BANG_(x,key){
if((!((x == null))) && (!((x.om$core$INotify$_unlisten_BANG_$arity$2 == null)))){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__5823__auto__ = (((x == null))?null:x);
var m__5824__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,x,key);
} else {
var m__5824__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,x,key);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-unlisten!",x);
}
}
}
});

om.core._notify_BANG_ = (function om$core$_notify_BANG_(x,tx_data,root_cursor){
if((!((x == null))) && (!((x.om$core$INotify$_notify_BANG_$arity$3 == null)))){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__5823__auto__ = (((x == null))?null:x);
var m__5824__auto__ = (om.core._notify_BANG_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,x,tx_data,root_cursor);
} else {
var m__5824__auto____$1 = (om.core._notify_BANG_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,x,tx_data,root_cursor);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-notify!",x);
}
}
}
});


/**
 * @interface
 */
om.core.IRootProperties = function(){};

om.core._set_property_BANG_ = (function om$core$_set_property_BANG_(this$,id,p,val){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_set_property_BANG_$arity$4 == null)))){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else {
var x__5823__auto__ = (((this$ == null))?null:this$);
var m__5824__auto__ = (om.core._set_property_BANG_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,this$,id,p,val);
} else {
var m__5824__auto____$1 = (om.core._set_property_BANG_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,this$,id,p,val);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-set-property!",this$);
}
}
}
});

om.core._remove_property_BANG_ = (function om$core$_remove_property_BANG_(this$,id,p){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_remove_property_BANG_$arity$3 == null)))){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else {
var x__5823__auto__ = (((this$ == null))?null:this$);
var m__5824__auto__ = (om.core._remove_property_BANG_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,this$,id,p);
} else {
var m__5824__auto____$1 = (om.core._remove_property_BANG_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,this$,id,p);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-property!",this$);
}
}
}
});

om.core._remove_properties_BANG_ = (function om$core$_remove_properties_BANG_(this$,id){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2 == null)))){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else {
var x__5823__auto__ = (((this$ == null))?null:this$);
var m__5824__auto__ = (om.core._remove_properties_BANG_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,this$,id);
} else {
var m__5824__auto____$1 = (om.core._remove_properties_BANG_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,this$,id);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-properties!",this$);
}
}
}
});

om.core._get_property = (function om$core$_get_property(this$,id,p){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_get_property$arity$3 == null)))){
return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else {
var x__5823__auto__ = (((this$ == null))?null:this$);
var m__5824__auto__ = (om.core._get_property[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,this$,id,p);
} else {
var m__5824__auto____$1 = (om.core._get_property["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,this$,id,p);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-get-property",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRootKey = function(){};

om.core._root_key = (function om$core$_root_key(cursor){
if((!((cursor == null))) && (!((cursor.om$core$IRootKey$_root_key$arity$1 == null)))){
return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else {
var x__5823__auto__ = (((cursor == null))?null:cursor);
var m__5824__auto__ = (om.core._root_key[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,cursor);
} else {
var m__5824__auto____$1 = (om.core._root_key["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,cursor);
} else {
throw cljs.core.missing_protocol.call(null,"IRootKey.-root-key",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.IAdapt = function(){};

om.core._adapt = (function om$core$_adapt(this$,other){
if((!((this$ == null))) && (!((this$.om$core$IAdapt$_adapt$arity$2 == null)))){
return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else {
var x__5823__auto__ = (((this$ == null))?null:this$);
var m__5824__auto__ = (om.core._adapt[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,this$,other);
} else {
var m__5824__auto____$1 = (om.core._adapt["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,this$,other);
} else {
throw cljs.core.missing_protocol.call(null,"IAdapt.-adapt",this$);
}
}
}
});

(om.core.IAdapt["_"] = true);

(om.core._adapt["_"] = (function (_,other){
return other;
}));
om.core.adapt = (function om$core$adapt(x,other){
return om.core._adapt.call(null,x,other);
});

/**
 * @interface
 */
om.core.IOmRef = function(){};

om.core._add_dep_BANG_ = (function om$core$_add_dep_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_add_dep_BANG_$arity$2 == null)))){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else {
var x__5823__auto__ = (((this$ == null))?null:this$);
var m__5824__auto__ = (om.core._add_dep_BANG_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,this$,c);
} else {
var m__5824__auto____$1 = (om.core._add_dep_BANG_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,this$,c);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-add-dep!",this$);
}
}
}
});

om.core._remove_dep_BANG_ = (function om$core$_remove_dep_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_remove_dep_BANG_$arity$2 == null)))){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else {
var x__5823__auto__ = (((this$ == null))?null:this$);
var m__5824__auto__ = (om.core._remove_dep_BANG_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,this$,c);
} else {
var m__5824__auto____$1 = (om.core._remove_dep_BANG_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,this$,c);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-remove-dep!",this$);
}
}
}
});

om.core._refresh_deps_BANG_ = (function om$core$_refresh_deps_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1 == null)))){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else {
var x__5823__auto__ = (((this$ == null))?null:this$);
var m__5824__auto__ = (om.core._refresh_deps_BANG_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,this$);
} else {
var m__5824__auto____$1 = (om.core._refresh_deps_BANG_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-refresh-deps!",this$);
}
}
}
});

om.core._get_deps = (function om$core$_get_deps(this$){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_get_deps$arity$1 == null)))){
return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else {
var x__5823__auto__ = (((this$ == null))?null:this$);
var m__5824__auto__ = (om.core._get_deps[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,this$);
} else {
var m__5824__auto____$1 = (om.core._get_deps["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-get-deps",this$);
}
}
}
});

om.core.notify_STAR_;
om.core.transact_STAR_ = (function om$core$transact_STAR_(state,cursor,korks,f,tag){
var old_state = cljs.core.deref.call(null,state);
var path = cljs.core.into.call(null,om.core.path.call(null,cursor),korks);
var ret = ((((!((state == null)))?(((false) || (state.om$core$IOmSwap$))?true:(((!state.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,state):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,state)))?om.core._om_swap_BANG_.call(null,state,cursor,korks,f,tag):((cljs.core.empty_QMARK_.call(null,path))?cljs.core.swap_BANG_.call(null,state,f):cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","defer","om.core/defer",-1038866178))){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"old-value","old-value",862546795),cljs.core.get_in.call(null,old_state,path),new cljs.core.Keyword(null,"new-value","new-value",1087038368),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),new cljs.core.Keyword(null,"old-state","old-state",1039580704),old_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),cljs.core.deref.call(null,state)], null);
if(!((tag == null))){
return om.core.notify_STAR_.call(null,cursor,cljs.core.assoc.call(null,tx_data,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag));
} else {
return om.core.notify_STAR_.call(null,cursor,tx_data);
}
}
});
om.core.cursor_QMARK_ = (function om$core$cursor_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$ICursor$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x);
}
});
om.core.component_QMARK_ = (function om$core$component_QMARK_(x){
return (x["isOmComponent"]);
});
om.core.children = (function om$core$children(node){
var c = node.props.children;
if(cljs.core.ifn_QMARK_.call(null,c)){
return node.props.children = c.call(null,node);
} else {
return c;
}
});
/**
 * Given an owning Pure node return the Om props. Analogous to React
 * component props.
 */
om.core.get_props = (function om$core$get_props(var_args){
var args16451 = [];
var len__6226__auto___16455 = arguments.length;
var i__6227__auto___16456 = (0);
while(true){
if((i__6227__auto___16456 < len__6226__auto___16455)){
args16451.push((arguments[i__6227__auto___16456]));

var G__16457 = (i__6227__auto___16456 + (1));
i__6227__auto___16456 = G__16457;
continue;
} else {
}
break;
}

var G__16453 = args16451.length;
switch (G__16453) {
case 1:
return om.core.get_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16451.length)].join('')));

}
});

om.core.get_props.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

return (x.props["__om_cursor"]);
});

om.core.get_props.cljs$core$IFn$_invoke$arity$2 = (function (x,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

var korks__$1 = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
var G__16454 = (x.props["__om_cursor"]);
var G__16454__$1 = ((cljs.core.seq.call(null,korks__$1))?cljs.core.get_in.call(null,G__16454,korks__$1):G__16454);
return G__16454__$1;
});

om.core.get_props.cljs$lang$maxFixedArity = 2;
/**
 * Returns the component local state of an owning component. owner is
 * the component. An optional key or sequence of keys may be given to
 * extract a specific value. Always returns pending state.
 */
om.core.get_state = (function om$core$get_state(var_args){
var args16459 = [];
var len__6226__auto___16462 = arguments.length;
var i__6227__auto___16463 = (0);
while(true){
if((i__6227__auto___16463 < len__6226__auto___16462)){
args16459.push((arguments[i__6227__auto___16463]));

var G__16464 = (i__6227__auto___16463 + (1));
i__6227__auto___16463 = G__16464;
continue;
} else {
}
break;
}

var G__16461 = args16459.length;
switch (G__16461) {
case 1:
return om.core.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16459.length)].join('')));

}
});

om.core.get_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._get_state.call(null,owner);
});

om.core.get_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_state.call(null,owner,ks);
});

om.core.get_state.cljs$lang$maxFixedArity = 2;
/**
 * Takes an owner and returns a map of global shared values for a
 * render loop. An optional key or sequence of keys may be given to
 * extract a specific value.
 */
om.core.get_shared = (function om$core$get_shared(var_args){
var args16466 = [];
var len__6226__auto___16469 = arguments.length;
var i__6227__auto___16470 = (0);
while(true){
if((i__6227__auto___16470 < len__6226__auto___16469)){
args16466.push((arguments[i__6227__auto___16470]));

var G__16471 = (i__6227__auto___16470 + (1));
i__6227__auto___16470 = G__16471;
continue;
} else {
}
break;
}

var G__16468 = args16466.length;
switch (G__16468) {
case 1:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16466.length)].join('')));

}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if((owner == null)){
return null;
} else {
return (owner.props["__om_shared"]);
}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(!(cljs.core.sequential_QMARK_.call(null,korks))){
return cljs.core.get.call(null,om.core.get_shared.call(null,owner),korks);
} else {
if(cljs.core.empty_QMARK_.call(null,korks)){
return om.core.get_shared.call(null,owner);
} else {
return cljs.core.get_in.call(null,om.core.get_shared.call(null,owner),korks);

}
}
});

om.core.get_shared.cljs$lang$maxFixedArity = 2;
om.core.merge_pending_state = (function om$core$merge_pending_state(owner){
var state = owner.state;
var temp__4425__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(temp__4425__auto__)){
var pending_state = temp__4425__auto__;
var G__16474 = state;
(G__16474["__om_prev_state"] = (state["__om_state"]));

(G__16474["__om_state"] = pending_state);

(G__16474["__om_pending_state"] = null);

return G__16474;
} else {
return null;
}
});
om.core.merge_props_state = (function om$core$merge_props_state(var_args){
var args16475 = [];
var len__6226__auto___16478 = arguments.length;
var i__6227__auto___16479 = (0);
while(true){
if((i__6227__auto___16479 < len__6226__auto___16478)){
args16475.push((arguments[i__6227__auto___16479]));

var G__16480 = (i__6227__auto___16479 + (1));
i__6227__auto___16479 = G__16480;
continue;
} else {
}
break;
}

var G__16477 = args16475.length;
switch (G__16477) {
case 1:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16475.length)].join('')));

}
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return om.core.merge_props_state.call(null,owner,null);
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,props){
var props__$1 = (function (){var or__5168__auto__ = props;
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return owner.props;
}
})();
var temp__4425__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4425__auto__)){
var props_state = temp__4425__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.call(null,(function (){var or__5168__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return (state["__om_state"]);
}
})(),props_state));

return (props__$1["__om_state"] = null);
} else {
return null;
}
});

om.core.merge_props_state.cljs$lang$maxFixedArity = 2;
om.core.ref_changed_QMARK_ = (function om$core$ref_changed_QMARK_(ref){
var val = om.core.value.call(null,ref);
var val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.state.call(null,ref)),om.core.path.call(null,ref),new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
return cljs.core.not_EQ_.call(null,val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function om$core$update_refs(c){
var cstate = c.state;
var refs = (cstate["__om_refs"]);
if((cljs.core.count.call(null,refs) === (0))){
return null;
} else {
return (cstate["__om_refs"] = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (cstate,refs){
return (function (ref){
var ref_val = om.core.value.call(null,ref);
var ref_state = om.core.state.call(null,ref);
var ref_path = om.core.path.call(null,ref);
var ref_val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,ref_state),ref_path,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(cljs.core.not_EQ_.call(null,ref_val,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275))){
if(cljs.core.not_EQ_.call(null,ref_val,ref_val_SINGLEQUOTE_)){
return om.core.adapt.call(null,ref,om.core.to_cursor.call(null,ref_val_SINGLEQUOTE_,ref_state,ref_path));
} else {
return ref;
}
} else {
return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.unobserve;
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"isOmComponent","isOmComponent",-2070015162),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"getDisplayName","getDisplayName",1324429466),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IDidUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c))){
var state_16504 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"props": prev_props, "isOmComponent": true}),(function (){var or__5168__auto__ = (state_16504["__om_prev_state"]);
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return (state_16504["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if(((!((c == null)))?(((false) || (c.om$core$IWillUnmount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c))){
om.core.will_unmount.call(null,c);
} else {
}

var temp__4425__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4425__auto__){
var refs = temp__4425__auto__;
var seq__16485 = cljs.core.seq.call(null,refs);
var chunk__16486 = null;
var count__16487 = (0);
var i__16488 = (0);
while(true){
if((i__16488 < count__16487)){
var ref = cljs.core._nth.call(null,chunk__16486,i__16488);
om.core.unobserve.call(null,this$,ref);

var G__16505 = seq__16485;
var G__16506 = chunk__16486;
var G__16507 = count__16487;
var G__16508 = (i__16488 + (1));
seq__16485 = G__16505;
chunk__16486 = G__16506;
count__16487 = G__16507;
i__16488 = G__16508;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__16485);
if(temp__4425__auto____$1){
var seq__16485__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16485__$1)){
var c__5971__auto__ = cljs.core.chunk_first.call(null,seq__16485__$1);
var G__16509 = cljs.core.chunk_rest.call(null,seq__16485__$1);
var G__16510 = c__5971__auto__;
var G__16511 = cljs.core.count.call(null,c__5971__auto__);
var G__16512 = (0);
seq__16485 = G__16509;
chunk__16486 = G__16510;
count__16487 = G__16511;
i__16488 = G__16512;
continue;
} else {
var ref = cljs.core.first.call(null,seq__16485__$1);
om.core.unobserve.call(null,this$,ref);

var G__16513 = cljs.core.next.call(null,seq__16485__$1);
var G__16514 = null;
var G__16515 = (0);
var G__16516 = (0);
seq__16485 = G__16513;
chunk__16486 = G__16514;
count__16487 = G__16515;
i__16488 = G__16516;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),(function (next_props){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IWillReceiveProps$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,c))){
return om.core.will_receive_props.call(null,c,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}));
} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var props = this$.props;
var state = this$.state;
var c = om.core.children.call(null,this$);
om.core.merge_props_state.call(null,this$,next_props);

if(((!((c == null)))?(((false) || (c.om$core$IShouldUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,c))){
return om.core.should_update.call(null,c,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}),om.core._get_state.call(null,this$));
} else {
var cursor = (props["__om_cursor"]);
var next_cursor = (next_props["__om_cursor"]);
if(cljs.core.not_EQ_.call(null,om.core._value.call(null,cursor),om.core._value.call(null,next_cursor))){
return true;
} else {
if(cljs.core.truth_((function (){var and__5156__auto__ = om.core.cursor_QMARK_.call(null,cursor);
if(cljs.core.truth_(and__5156__auto__)){
var and__5156__auto____$1 = om.core.cursor_QMARK_.call(null,next_cursor);
if(cljs.core.truth_(and__5156__auto____$1)){
return cljs.core.not_EQ_.call(null,om.core._path.call(null,cursor),om.core._path.call(null,next_cursor));
} else {
return and__5156__auto____$1;
}
} else {
return and__5156__auto__;
}
})())){
return true;
} else {
if(cljs.core.not_EQ_.call(null,om.core._get_state.call(null,this$),om.core._get_render_state.call(null,this$))){
return true;
} else {
if(cljs.core.truth_((function (){var and__5156__auto__ = !((cljs.core.count.call(null,(state["__om_refs"])) === (0)));
if(and__5156__auto__){
return cljs.core.some.call(null,((function (and__5156__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__16482_SHARP_){
return om.core.ref_changed_QMARK_.call(null,p1__16482_SHARP_);
});})(and__5156__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__5156__auto__;
}
})())){
return true;
} else {
if(!(((props["__om_index"]) === (next_props["__om_index"])))){
return true;
} else {
return false;

}
}
}
}
}
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var _STAR_parent_STAR_16491 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_16492 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_16493 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_16494 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_16495 = om.core._STAR_root_key_STAR_;
om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

try{if(((!((c == null)))?(((false) || (c.om$core$IRender$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,c))){
return om.core.render.call(null,c);
} else {
if(((!((c == null)))?(((false) || (c.om$core$IRenderProps$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,c))){
return om.core.render_props.call(null,c,(props["__om_cursor"]),om.core.get_state.call(null,this$));
} else {
if(((!((c == null)))?(((false) || (c.om$core$IRenderState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,c))){
return om.core.render_state.call(null,c,om.core.get_state.call(null,this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_16495;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_16494;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_16493;

om.core._STAR_state_STAR_ = _STAR_state_STAR_16492;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_16491;
}}),(function (next_props,next_state){
var this$ = this;
var c_16517 = om.core.children.call(null,this$);
if(((!((c_16517 == null)))?(((false) || (c_16517.om$core$IWillUpdate$))?true:(((!c_16517.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_16517):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_16517))){
var state_16518 = this$.state;
om.core.will_update.call(null,c_16517,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}),om.core._get_state.call(null,this$));
} else {
}

om.core.merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__5168__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
var ret = {"__om_id": (function (){var or__5168__auto__ = id;
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})(), "__om_state": cljs.core.merge.call(null,((((!((c == null)))?(((false) || (c.om$core$IInitState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c)))?om.core.init_state.call(null,c):null),cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)))};
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if(((!((c == null)))?(((false) || (c.om$core$IDidMount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c))){
return om.core.did_mount.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IDisplayName$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,c))){
return om.core.display_name.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_16519 = om.core.children.call(null,this$);
if(((!((c_16519 == null)))?(((false) || (c_16519.om$core$IWillMount$))?true:(((!c_16519.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_16519):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_16519))){
om.core.will_mount.call(null,c_16519);
} else {
}

return om.core.merge_pending_state.call(null,this$);
})]);
om.core.specify_state_methods_BANG_ = (function om$core$specify_state_methods_BANG_(obj){
var x16521 = obj;
x16521.om$core$ISetState$ = true;

x16521.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x16521){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__5156__auto__ = !((app_state == null));
if(and__5156__auto__){
return render;
} else {
return and__5156__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x16521))
;

x16521.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x16521){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.call(null,this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in.call(null,pstate,ks,val));

if(cljs.core.truth_((function (){var and__5156__auto__ = !((app_state == null));
if(and__5156__auto__){
return render;
} else {
return and__5156__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x16521))
;

x16521.om$core$IGetRenderState$ = true;

x16521.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x16521){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x16521))
;

x16521.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x16521){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x16521))
;

x16521.om$core$IGetState$ = true;

x16521.om$core$IGetState$_get_state$arity$1 = ((function (x16521){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__5168__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return (state["__om_state"]);
}
});})(x16521))
;

x16521.om$core$IGetState$_get_state$arity$2 = ((function (x16521){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x16521))
;

return x16521;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
om.core.get_node;
om.core.react_id = (function om$core$react_id(x){
var id = goog.dom.dataset.get(om.core.get_node.call(null,x),"reactid");
if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"id","id",252129435,null)))].join('')));
}

return id;
});
om.core.get_gstate = (function om$core$get_gstate(owner){
return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function om$core$no_local_merge_pending_state(owner){
var gstate = om.core.get_gstate.call(null,owner);
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,owner)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),spath);
if(cljs.core.truth_(new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,states__$1,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923),new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1)),new cljs.core.Keyword(null,"render-state","render-state",2053902270),cljs.core.merge.call(null,new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states__$1))),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973));
});})(gstate,spath,states))
);
} else {
return null;
}
});
om.core.mounted_QMARK_;
om.core.no_local_state_methods = cljs.core.assoc.call(null,om.core.pure_methods,new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__5168__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__5168__auto__ = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.call(null,cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)),((((!((c == null)))?(((false) || (c.om$core$IInitState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c)))?om.core.init_state.call(null,c):null));
(props["__om_init_state"] = null);

return {"__om_id": om_id};
}),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.assoc_in,spath,om.core.state);

if(((!((c == null)))?(((false) || (c.om$core$IDidMount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c))){
return om.core.did_mount.call(null,c);
} else {
return null;
}
}),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_16532 = om.core.children.call(null,this$);
if(((!((c_16532 == null)))?(((false) || (c_16532.om$core$IWillMount$))?true:(((!c_16532.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_16532):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_16532))){
om.core.will_mount.call(null,c_16532);
} else {
}

if(cljs.core.truth_(om.core.mounted_QMARK_.call(null,this$))){
return om.core.no_local_merge_pending_state.call(null,this$);
} else {
return null;
}
}),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IWillUnmount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c))){
om.core.will_unmount.call(null,c);
} else {
}

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128)], null),cljs.core.dissoc,om.core.react_id.call(null,this$));

var temp__4425__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4425__auto__){
var refs = temp__4425__auto__;
var seq__16526 = cljs.core.seq.call(null,refs);
var chunk__16527 = null;
var count__16528 = (0);
var i__16529 = (0);
while(true){
if((i__16529 < count__16528)){
var ref = cljs.core._nth.call(null,chunk__16527,i__16529);
om.core.unobserve.call(null,this$,ref);

var G__16533 = seq__16526;
var G__16534 = chunk__16527;
var G__16535 = count__16528;
var G__16536 = (i__16529 + (1));
seq__16526 = G__16533;
chunk__16527 = G__16534;
count__16528 = G__16535;
i__16529 = G__16536;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__16526);
if(temp__4425__auto____$1){
var seq__16526__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16526__$1)){
var c__5971__auto__ = cljs.core.chunk_first.call(null,seq__16526__$1);
var G__16537 = cljs.core.chunk_rest.call(null,seq__16526__$1);
var G__16538 = c__5971__auto__;
var G__16539 = cljs.core.count.call(null,c__5971__auto__);
var G__16540 = (0);
seq__16526 = G__16537;
chunk__16527 = G__16538;
count__16528 = G__16539;
i__16529 = G__16540;
continue;
} else {
var ref = cljs.core.first.call(null,seq__16526__$1);
om.core.unobserve.call(null,this$,ref);

var G__16541 = cljs.core.next.call(null,seq__16526__$1);
var G__16542 = null;
var G__16543 = (0);
var G__16544 = (0);
seq__16526 = G__16541;
chunk__16527 = G__16542;
count__16528 = G__16543;
i__16529 = G__16544;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),(function (next_props,next_state){
var this$ = this;
var props_16545 = this$.props;
var c_16546 = om.core.children.call(null,this$);
if(((!((c_16546 == null)))?(((false) || (c_16546.om$core$IWillUpdate$))?true:(((!c_16546.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_16546):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_16546))){
var state_16547 = this$.state;
om.core.will_update.call(null,c_16546,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}),om.core._get_state.call(null,this$));
} else {
}

om.core.no_local_merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
var gstate = om.core.get_gstate.call(null,this$);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null));
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null);
if(((!((c == null)))?(((false) || (c.om$core$IDidUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c))){
var state_16548 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"props": prev_props, "isOmComponent": true}),(function (){var or__5168__auto__ = new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,cljs.core.dissoc,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923));
} else {
return null;
}
}));
om.core.no_local_descriptor = (function om$core$no_local_descriptor(methods$){
var x16550 = cljs.core.clj__GT_js.call(null,methods$);
x16550.om$core$ISetState$ = true;

x16550.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x16550){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate.call(null,this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973)], null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__5156__auto__ = !((gstate == null));
if(and__5156__auto__){
return render;
} else {
return and__5156__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,gstate,this$__$1);
} else {
return null;
}
});})(x16550))
;

x16550.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x16550){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.call(null,this$__$1,cljs.core.assoc_in.call(null,om.core._get_state.call(null,this$__$1),ks,val),render);
});})(x16550))
;

x16550.om$core$IGetRenderState$ = true;

x16550.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x16550){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
});})(x16550))
;

x16550.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x16550){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x16550))
;

x16550.om$core$IGetState$ = true;

x16550.om$core$IGetState$_get_state$arity$1 = ((function (x16550){
return (function (this$){
var this$__$1 = this;
if(cljs.core.truth_(om.core.mounted_QMARK_.call(null,this$__$1))){
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
var or__5168__auto__ = new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
} else {
return (this$__$1.props["__om_init_state"]);
}
});})(x16550))
;

x16550.om$core$IGetState$_get_state$arity$2 = ((function (x16550){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x16550))
;

return x16550;
});
om.core.valid_QMARK_ = (function om$core$valid_QMARK_(x){
if(((!((x == null)))?(((false) || (x.om$core$ICursor$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x))){
return !(cljs.core.keyword_identical_QMARK_.call(null,cljs.core.deref.call(null,x),new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993)));
} else {
return true;
}
});

/**
* @constructor
 * @implements {om.core.IValue}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {om.core.ITransact}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {om.core.ICursor}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2163640079;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
});

om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var v = cljs.core._lookup.call(null,self__.value,k,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(!(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275)))){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k));
} else {
return not_found;
}
});

om.core.MapCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.MapCursor.prototype.om$core$ICursor$ = true;

om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.MapCursor.prototype.om$core$IValue$ = true;

om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._dissoc.call(null,self__.value,k),self__.state,self__.path));
});

om.core.MapCursor.prototype.om$core$ITransact$ = true;

om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._assoc.call(null,self__.value,k,v),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (p__16554){
var vec__16555 = p__16554;
var k = cljs.core.nth.call(null,vec__16555,(0),null);
var v = cljs.core.nth.call(null,vec__16555,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else {
return null;
}
});

om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.MapCursor.prototype.call = (function() {
var G__16556 = null;
var G__16556__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__16556__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__16556 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__16556__2.call(this,self__,k);
case 3:
return G__16556__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16556.cljs$core$IFn$_invoke$arity$2 = G__16556__2;
G__16556.cljs$core$IFn$_invoke$arity$3 = G__16556__3;
return G__16556;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args16553){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args16553)));
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.MapCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"om.core/MapCursor");
});

om.core.__GT_MapCursor = (function om$core$__GT_MapCursor(value,state,path){
return (new om.core.MapCursor(value,state,path));
});


/**
* @constructor
 * @implements {om.core.IValue}
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {om.core.ITransact}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IStack}
 * @implements {om.core.ICursor}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2180424479;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,null);
});

om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n));
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if((n < cljs.core._count.call(null,self__.value))){
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n,not_found),self__.state,cljs.core.conj.call(null,self__.path,n));
} else {
return not_found;
}
});

om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.IndexedCursor.prototype.om$core$ICursor$ = true;

om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._peek.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._pop.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.IndexedCursor.prototype.om$core$IValue$ = true;

om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.om$core$ITransact$ = true;

om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._assoc_n.call(null,self__.value,n,v),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (v,i){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.call(null));
} else {
return null;
}
});

om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.call = (function() {
var G__16558 = null;
var G__16558__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__16558__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__16558 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__16558__2.call(this,self__,k);
case 3:
return G__16558__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16558.cljs$core$IFn$_invoke$arity$2 = G__16558__2;
G__16558.cljs$core$IFn$_invoke$arity$3 = G__16558__3;
return G__16558;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args16557){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args16557)));
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.IndexedCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function om$core$__GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function om$core$to_cursor_STAR_(val,state,path){
var x16560 = cljs.core.clone.call(null,val);
x16560.cljs$core$IDeref$ = true;

x16560.cljs$core$IDeref$_deref$arity$1 = ((function (x16560){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});})(x16560))
;

x16560.om$core$ICursor$ = true;

x16560.om$core$ICursor$_path$arity$1 = ((function (x16560){
return (function (_){
var ___$1 = this;
return path;
});})(x16560))
;

x16560.om$core$ICursor$_state$arity$1 = ((function (x16560){
return (function (_){
var ___$1 = this;
return state;
});})(x16560))
;

x16560.om$core$ITransact$ = true;

x16560.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x16560){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_.call(null,state,this$__$1,korks,f,tag);
});})(x16560))
;

x16560.cljs$core$IEquiv$ = true;

x16560.cljs$core$IEquiv$_equiv$arity$2 = ((function (x16560){
return (function (_,other){
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,val,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,val,other);
}
});})(x16560))
;

return x16560;
});
om.core.to_cursor = (function om$core$to_cursor(var_args){
var args16561 = [];
var len__6226__auto___16566 = arguments.length;
var i__6227__auto___16567 = (0);
while(true){
if((i__6227__auto___16567 < len__6226__auto___16566)){
args16561.push((arguments[i__6227__auto___16567]));

var G__16568 = (i__6227__auto___16567 + (1));
i__6227__auto___16567 = G__16568;
continue;
} else {
}
break;
}

var G__16563 = args16561.length;
switch (G__16563) {
case 1:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16561.length)].join('')));

}
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$1 = (function (val){
return om.core.to_cursor.call(null,val,null,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (val,state){
return om.core.to_cursor.call(null,val,state,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (val,state,path){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,val))){
return val;
} else {
if(((!((val == null)))?(((false) || (val.om$core$IToCursor$))?true:(((!val.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,val):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,val))){
return om.core._to_cursor.call(null,val,state,path);
} else {
if(cljs.core.indexed_QMARK_.call(null,val)){
return (new om.core.IndexedCursor(val,state,path));
} else {
if(cljs.core.map_QMARK_.call(null,val)){
return (new om.core.MapCursor(val,state,path));
} else {
if(((!((val == null)))?((((val.cljs$lang$protocol_mask$partition1$ & (8192))) || (val.cljs$core$ICloneable$))?true:(((!val.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,val):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,val))){
return om.core.to_cursor_STAR_.call(null,val,state,path);
} else {
return val;

}
}
}
}
}
});

om.core.to_cursor.cljs$lang$maxFixedArity = 3;
om.core.notify_STAR_ = (function om$core$notify_STAR_(cursor,tx_data){
var state = om.core._state.call(null,cursor);
return om.core._notify_BANG_.call(null,state,tx_data,om.core.to_cursor.call(null,cljs.core.deref.call(null,state),state));
});
om.core.commit_BANG_;

om.core.id;

om.core.refresh_props_BANG_;
/**
 * Given an application state atom return a root cursor for it.
 */
om.core.root_cursor = (function om$core$root_cursor(atom){
if(((!((atom == null)))?((((atom.cljs$lang$protocol_mask$partition0$ & (32768))) || (atom.cljs$core$IDeref$))?true:(((!atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,atom))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"atom","atom",1243487874,null))))].join('')));
}

return om.core.to_cursor.call(null,cljs.core.deref.call(null,atom),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.ref_sub_cursor = (function om$core$ref_sub_cursor(x,parent){
var x16573 = cljs.core.clone.call(null,x);
x16573.cljs$core$ICloneable$ = true;

x16573.cljs$core$ICloneable$_clone$arity$1 = ((function (x16573){
return (function (this$){
var this$__$1 = this;
return om$core$ref_sub_cursor.call(null,cljs.core.clone.call(null,x),parent);
});})(x16573))
;

x16573.om$core$IAdapt$ = true;

x16573.om$core$IAdapt$_adapt$arity$2 = ((function (x16573){
return (function (this$,other){
var this$__$1 = this;
return om$core$ref_sub_cursor.call(null,om.core.adapt.call(null,x,other),parent);
});})(x16573))
;

x16573.om$core$ICursorDerive$ = true;

x16573.om$core$ICursorDerive$_derive$arity$4 = ((function (x16573){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path);
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))){
return om.core.adapt.call(null,this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x16573))
;

x16573.om$core$ITransact$ = true;

x16573.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x16573){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
om.core.commit_BANG_.call(null,cursor__$1,korks,f);

return om.core._refresh_deps_BANG_.call(null,parent);
});})(x16573))
;

return x16573;
});
om.core.ref_cursor_QMARK_ = (function om$core$ref_cursor_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$IOmRef$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,x);
}
});
/**
 * Given a cursor return a reference cursor that inherits all of the
 *   properties and methods of the cursor. Reference cursors may be
 *   observed via om.core/observe.
 */
om.core.ref_cursor = (function om$core$ref_cursor(cursor){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.truth_(om.core.ref_cursor_QMARK_.call(null,cursor))){
return cursor;
} else {
var path = om.core.path.call(null,cursor);
var storage = cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.call(null,cljs.core.identity,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY))),path);
var x16581 = cljs.core.clone.call(null,cursor);
x16581.om$core$ICursorDerive$ = true;

x16581.om$core$ICursorDerive$_derive$arity$4 = ((function (x16581,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path__$1);
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))){
return om.core.ref_sub_cursor.call(null,cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x16581,path,storage))
;

x16581.om$core$IOmRef$ = true;

x16581.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x16581,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,storage,cljs.core.assoc,om.core.id.call(null,c),c);
});})(x16581,path,storage))
;

x16581.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x16581,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.call(null,storage,cljs.core.dissoc,om.core.id.call(null,c));
if((cljs.core.count.call(null,m) === (0))){
return cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x16581,path,storage))
;

x16581.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x16581,path,storage){
return (function (_){
var ___$1 = this;
var seq__16582 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,storage)));
var chunk__16583 = null;
var count__16584 = (0);
var i__16585 = (0);
while(true){
if((i__16585 < count__16584)){
var c = cljs.core._nth.call(null,chunk__16583,i__16585);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__16586 = seq__16582;
var G__16587 = chunk__16583;
var G__16588 = count__16584;
var G__16589 = (i__16585 + (1));
seq__16582 = G__16586;
chunk__16583 = G__16587;
count__16584 = G__16588;
i__16585 = G__16589;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__16582);
if(temp__4425__auto__){
var seq__16582__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16582__$1)){
var c__5971__auto__ = cljs.core.chunk_first.call(null,seq__16582__$1);
var G__16590 = cljs.core.chunk_rest.call(null,seq__16582__$1);
var G__16591 = c__5971__auto__;
var G__16592 = cljs.core.count.call(null,c__5971__auto__);
var G__16593 = (0);
seq__16582 = G__16590;
chunk__16583 = G__16591;
count__16584 = G__16592;
i__16585 = G__16593;
continue;
} else {
var c = cljs.core.first.call(null,seq__16582__$1);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__16594 = cljs.core.next.call(null,seq__16582__$1);
var G__16595 = null;
var G__16596 = (0);
var G__16597 = (0);
seq__16582 = G__16594;
chunk__16583 = G__16595;
count__16584 = G__16596;
i__16585 = G__16597;
continue;
}
} else {
return null;
}
}
break;
}
});})(x16581,path,storage))
;

x16581.om$core$IOmRef$_get_deps$arity$1 = ((function (x16581,path,storage){
return (function (_){
var ___$1 = this;
return cljs.core.deref.call(null,storage);
});})(x16581,path,storage))
;

x16581.om$core$ITransact$ = true;

x16581.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x16581,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
om.core.commit_BANG_.call(null,cursor__$2,korks,f);

return om.core._refresh_deps_BANG_.call(null,cursor__$2);
});})(x16581,path,storage))
;

return x16581;
}
});
om.core.add_ref_to_component_BANG_ = (function om$core$add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__5168__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return null;
} else {
return (state["__om_refs"] = cljs.core.conj.call(null,refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function om$core$remove_ref_from_component_BANG_(c,ref){
var state = c.state;
var refs = (state["__om_refs"]);
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return (state["__om_refs"] = cljs.core.disj.call(null,refs,ref));
} else {
return null;
}
});
/**
 * Given a component and a reference cursor have the component observe
 *   the reference cursor for any data changes.
 */
om.core.observe = (function om$core$observe(c,ref){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,ref))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null))))].join('')));
}

if(cljs.core.truth_(om.core.ref_cursor_QMARK_.call(null,ref))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ref-cursor?","ref-cursor?",1026875459,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null))))].join('')));
}

om.core.add_ref_to_component_BANG_.call(null,c,ref);

om.core._add_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.unobserve = (function om$core$unobserve(c,ref){
om.core.remove_ref_from_component_BANG_.call(null,c,ref);

om.core._remove_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
om.core.get_renderT = (function om$core$get_renderT(state){
var or__5168__auto__ = state.om$render$T;
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return (0);
}
});
/**
 * Force a render of *all* roots. Usage of this function is almost
 *   never recommended.
 */
om.core.render_all = (function om$core$render_all(var_args){
var args16598 = [];
var len__6226__auto___16605 = arguments.length;
var i__6227__auto___16606 = (0);
while(true){
if((i__6227__auto___16606 < len__6226__auto___16605)){
args16598.push((arguments[i__6227__auto___16606]));

var G__16607 = (i__6227__auto___16606 + (1));
i__6227__auto___16606 = G__16607;
continue;
} else {
}
break;
}

var G__16600 = args16598.length;
switch (G__16600) {
case 0:
return om.core.render_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.core.render_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16598.length)].join('')));

}
});

om.core.render_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.core.render_all.call(null,null);
});

om.core.render_all.cljs$core$IFn$_invoke$arity$1 = (function (state){
om.core.refresh_queued = false;

var seq__16601_16609 = cljs.core.seq.call(null,cljs.core.deref.call(null,om.core.refresh_set));
var chunk__16602_16610 = null;
var count__16603_16611 = (0);
var i__16604_16612 = (0);
while(true){
if((i__16604_16612 < count__16603_16611)){
var f_16613 = cljs.core._nth.call(null,chunk__16602_16610,i__16604_16612);
f_16613.call(null);

var G__16614 = seq__16601_16609;
var G__16615 = chunk__16602_16610;
var G__16616 = count__16603_16611;
var G__16617 = (i__16604_16612 + (1));
seq__16601_16609 = G__16614;
chunk__16602_16610 = G__16615;
count__16603_16611 = G__16616;
i__16604_16612 = G__16617;
continue;
} else {
var temp__4425__auto___16618 = cljs.core.seq.call(null,seq__16601_16609);
if(temp__4425__auto___16618){
var seq__16601_16619__$1 = temp__4425__auto___16618;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16601_16619__$1)){
var c__5971__auto___16620 = cljs.core.chunk_first.call(null,seq__16601_16619__$1);
var G__16621 = cljs.core.chunk_rest.call(null,seq__16601_16619__$1);
var G__16622 = c__5971__auto___16620;
var G__16623 = cljs.core.count.call(null,c__5971__auto___16620);
var G__16624 = (0);
seq__16601_16609 = G__16621;
chunk__16602_16610 = G__16622;
count__16603_16611 = G__16623;
i__16604_16612 = G__16624;
continue;
} else {
var f_16625 = cljs.core.first.call(null,seq__16601_16619__$1);
f_16625.call(null);

var G__16626 = cljs.core.next.call(null,seq__16601_16619__$1);
var G__16627 = null;
var G__16628 = (0);
var G__16629 = (0);
seq__16601_16609 = G__16626;
chunk__16602_16610 = G__16627;
count__16603_16611 = G__16628;
i__16604_16612 = G__16629;
continue;
}
} else {
}
}
break;
}

if((state == null)){
return null;
} else {
return state.om$render$T = (om.core.get_renderT.call(null,state) + (1));
}
});

om.core.render_all.cljs$lang$maxFixedArity = 1;
om.core.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.valid_component_QMARK_ = (function om$core$valid_component_QMARK_(x,f){
if((function (){var or__5168__auto__ = ((!((x == null)))?(((false) || (x.om$core$IRender$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,x));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var or__5168__auto____$1 = ((!((x == null)))?(((false) || (x.om$core$IRenderProps$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,x));
if(or__5168__auto____$1){
return or__5168__auto____$1;
} else {
if(!((x == null))){
if((false) || (x.om$core$IRenderState$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,x);
}
}
}
})()){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Om component fn, "),cljs.core.str(f.name),cljs.core.str(" does not return valid instance")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRender","IRender",590822196,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderProps","IRenderProps",2115139472,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderState","IRenderState",-897673898,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))))].join('')));
}
});
om.core.valid_opts_QMARK_ = (function om$core$valid_opts_QMARK_(m){
return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),null,new cljs.core.Keyword(null,"react-key","react-key",1337881348),null,new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"init-state","init-state",1450863212),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),null,new cljs.core.Keyword(null,"opts","opts",155075701),null,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),null,new cljs.core.Keyword(null,"shared","shared",-384145993),null], null), null),cljs.core.keys.call(null,m));
});
om.core.id = (function om$core$id(owner){
return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function om$core$get_descriptor(var_args){
var args16640 = [];
var len__6226__auto___16643 = arguments.length;
var i__6227__auto___16644 = (0);
while(true){
if((i__6227__auto___16644 < len__6226__auto___16643)){
args16640.push((arguments[i__6227__auto___16644]));

var G__16645 = (i__6227__auto___16644 + (1));
i__6227__auto___16644 = G__16645;
continue;
} else {
}
break;
}

var G__16642 = args16640.length;
switch (G__16642) {
case 1:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16640.length)].join('')));

}
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1 = (function (f){
return om.core.get_descriptor.call(null,f,null);
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2 = (function (f,descriptor){
var rdesc_16647 = (function (){var or__5168__auto__ = descriptor;
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
var or__5168__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__5168__auto____$1)){
return or__5168__auto____$1;
} else {
return om.core.pure_descriptor;
}
}
})();
if(((goog.object.get(f,"om$descriptor") == null)) || (!((rdesc_16647 === goog.object.get(f,"om$tag"))))){
var factory_16648 = React.createFactory(React.createClass(rdesc_16647));
goog.object.set(f,"om$descriptor",factory_16648);

goog.object.set(f,"om$tag",rdesc_16647);
} else {
}

return goog.object.get(f,"om$descriptor");
});

om.core.get_descriptor.cljs$lang$maxFixedArity = 2;
om.core.getf = (function om$core$getf(var_args){
var args16649 = [];
var len__6226__auto___16652 = arguments.length;
var i__6227__auto___16653 = (0);
while(true){
if((i__6227__auto___16653 < len__6226__auto___16652)){
args16649.push((arguments[i__6227__auto___16653]));

var G__16654 = (i__6227__auto___16653 + (1));
i__6227__auto___16653 = G__16654;
continue;
} else {
}
break;
}

var G__16651 = args16649.length;
switch (G__16651) {
case 2:
return om.core.getf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.getf.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16649.length)].join('')));

}
});

om.core.getf.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});

om.core.getf.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,opts){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null,opts);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});

om.core.getf.cljs$lang$maxFixedArity = 3;
om.core.build_STAR_ = (function om$core$build_STAR_(var_args){
var args16656 = [];
var len__6226__auto___16661 = arguments.length;
var i__6227__auto___16662 = (0);
while(true){
if((i__6227__auto___16662 < len__6226__auto___16661)){
args16656.push((arguments[i__6227__auto___16662]));

var G__16663 = (i__6227__auto___16662 + (1));
i__6227__auto___16662 = G__16663;
continue;
} else {
}
break;
}

var G__16658 = args16656.length;
switch (G__16658) {
case 2:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16656.length)].join('')));

}
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
return om.core.build_STAR_.call(null,f,cursor,null);
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

if(cljs.core.truth_(om.core.valid_opts_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,"build options contains invalid keys, only :key, :key-fn :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.call(null,", ",cljs.core.keys.call(null,m)))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-opts?","valid-opts?",1000038576,null),new cljs.core.Symbol(null,"m","m",-1021758608,null))))].join('')));
}

if((m == null)){
var shared = om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor));
return ctor.call(null,{"__om_cursor": cursor, "__om_shared": shared, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_instrument": om.core._STAR_instrument_STAR_, "children": ((function (shared,ctor){
return (function (this$){
var ret = f.call(null,cursor,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(shared,ctor))
});
} else {
var map__16659 = m;
var map__16659__$1 = ((((!((map__16659 == null)))?((((map__16659.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16659.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16659):map__16659);
var key = cljs.core.get.call(null,map__16659__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var key_fn = cljs.core.get.call(null,map__16659__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var state = cljs.core.get.call(null,map__16659__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var init_state = cljs.core.get.call(null,map__16659__$1,new cljs.core.Keyword(null,"init-state","init-state",1450863212));
var opts = cljs.core.get.call(null,map__16659__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var dataf = cljs.core.get.call(null,m,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4423__auto__ = new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4423__auto__)){
var i = temp__4423__auto__;
return dataf.call(null,cursor,i);
} else {
return dataf.call(null,cursor);
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.call(null,cursor_SINGLEQUOTE_,key):((!((key_fn == null)))?key_fn.call(null,cursor_SINGLEQUOTE_):cljs.core.get.call(null,m,new cljs.core.Keyword(null,"react-key","react-key",1337881348))
));
var shared = (function (){var or__5168__auto__ = new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor_SINGLEQUOTE_,opts),new cljs.core.Keyword(null,"descriptor","descriptor",76122018).cljs$core$IFn$_invoke$arity$1(m));
return ctor.call(null,{"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__16659,map__16659__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__16659,map__16659__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__16659,map__16659__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$,opts);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__16659,map__16659__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__5168__auto__ = rkey;
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return undefined;
}
})(), "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_});

}
});

om.core.build_STAR_.cljs$lang$maxFixedArity = 3;
/**
 * Builds an Om component. Takes an IRender/IRenderState instance
 * returning function f, a value, and an optional third argument
 * which may be a map of build specifications.
 * 
 * f - is a function of 2 or 3 arguments. The first argument can be
 * any value and the second argument will be the owning pure node.
 * If a map of options m is passed in this will be the third
 * argument. f must return at a minimum an IRender or IRenderState
 * instance, this instance may implement other React life cycle
 * protocols.
 * 
 * x - any value
 * 
 * m - a map the following keys are allowed:
 * 
 *   :key        - a keyword that should be used to look up the key used by
 *                 React itself when rendering sequential things.
 *   :react-key  - an explicit react key
 *   :fn         - a function to apply to the data before invoking f.
 *   :init-state - a map of initial state to pass to the component.
 *   :state      - a map of state to pass to the component, will be merged in.
 *   :opts       - a map of values. Can be used to pass side information down
 *                 the render tree.
 *   :descriptor - a JS object of React methods, will be used to
 *                 construct a React class per Om component function
 *                 encountered. defaults to pure-descriptor.
 * 
 * Example:
 * 
 *   (build list-of-gadgets x
 *      {:init-state {:event-chan ...
 *                    :narble ...}})
 *   
 */
om.core.build = (function om$core$build(var_args){
var args16665 = [];
var len__6226__auto___16668 = arguments.length;
var i__6227__auto___16669 = (0);
while(true){
if((i__6227__auto___16669 < len__6226__auto___16668)){
args16665.push((arguments[i__6227__auto___16669]));

var G__16670 = (i__6227__auto___16669 + (1));
i__6227__auto___16669 = G__16670;
continue;
} else {
}
break;
}

var G__16667 = args16665.length;
switch (G__16667) {
case 2:
return om.core.build.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16665.length)].join('')));

}
});

om.core.build.cljs$core$IFn$_invoke$arity$2 = (function (f,x){
return om.core.build.call(null,f,x,null);
});

om.core.build.cljs$core$IFn$_invoke$arity$3 = (function (f,x,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

if(!((om.core._STAR_instrument_STAR_ == null))){
var ret = om.core._STAR_instrument_STAR_.call(null,f,x,m);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","pass","om.core/pass",-1453289268))){
return om.core.build_STAR_.call(null,f,x,m);
} else {
return ret;
}
} else {
return om.core.build_STAR_.call(null,f,x,m);
}
});

om.core.build.cljs$lang$maxFixedArity = 3;
/**
 * Build a sequence of components. f is the component constructor
 * function, xs a sequence of values, and m a map of options the
 * same as provided to om.core/build.
 */
om.core.build_all = (function om$core$build_all(var_args){
var args16672 = [];
var len__6226__auto___16675 = arguments.length;
var i__6227__auto___16676 = (0);
while(true){
if((i__6227__auto___16676 < len__6226__auto___16675)){
args16672.push((arguments[i__6227__auto___16676]));

var G__16677 = (i__6227__auto___16676 + (1));
i__6227__auto___16676 = G__16677;
continue;
} else {
}
break;
}

var G__16674 = args16672.length;
switch (G__16674) {
case 2:
return om.core.build_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16672.length)].join('')));

}
});

om.core.build_all.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return om.core.build_all.call(null,f,xs,null);
});

om.core.build_all.cljs$core$IFn$_invoke$arity$3 = (function (f,xs,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

return cljs.core.map.call(null,(function (x,i){
return om.core.build.call(null,f,x,cljs.core.assoc.call(null,m,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),i));
}),xs,cljs.core.range.call(null));
});

om.core.build_all.cljs$lang$maxFixedArity = 3;
om.core.setup = (function om$core$setup(state,key,tx_listen){
if(((!((state == null)))?(((false) || (state.om$core$INotify$))?true:(((!state.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,state):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,state))){
} else {
var properties_16695 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var listeners_16696 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var render_queue_16697 = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var x16688_16698 = state;
x16688_16698.om$core$IRootProperties$ = true;

x16688_16698.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x16688_16698,properties_16695,listeners_16696,render_queue_16697){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_16695,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x16688_16698,properties_16695,listeners_16696,render_queue_16697))
;

x16688_16698.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x16688_16698,properties_16695,listeners_16696,render_queue_16697){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_16695,cljs.core.dissoc,id,k);
});})(x16688_16698,properties_16695,listeners_16696,render_queue_16697))
;

x16688_16698.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x16688_16698,properties_16695,listeners_16696,render_queue_16697){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_16695,cljs.core.dissoc,id);
});})(x16688_16698,properties_16695,listeners_16696,render_queue_16697))
;

x16688_16698.om$core$IRootProperties$_get_property$arity$3 = ((function (x16688_16698,properties_16695,listeners_16696,render_queue_16697){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,properties_16695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x16688_16698,properties_16695,listeners_16696,render_queue_16697))
;

x16688_16698.om$core$INotify$ = true;

x16688_16698.om$core$INotify$_listen_BANG_$arity$3 = ((function (x16688_16698,properties_16695,listeners_16696,render_queue_16697){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.call(null,listeners_16696,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x16688_16698,properties_16695,listeners_16696,render_queue_16697))
;

x16688_16698.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x16688_16698,properties_16695,listeners_16696,render_queue_16697){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,listeners_16696,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x16688_16698,properties_16695,listeners_16696,render_queue_16697))
;

x16688_16698.om$core$INotify$_notify_BANG_$arity$3 = ((function (x16688_16698,properties_16695,listeners_16696,render_queue_16697){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__16689_16699 = cljs.core.seq.call(null,cljs.core.deref.call(null,listeners_16696));
var chunk__16690_16700 = null;
var count__16691_16701 = (0);
var i__16692_16702 = (0);
while(true){
if((i__16692_16702 < count__16691_16701)){
var vec__16693_16703 = cljs.core._nth.call(null,chunk__16690_16700,i__16692_16702);
var __16704 = cljs.core.nth.call(null,vec__16693_16703,(0),null);
var f_16705 = cljs.core.nth.call(null,vec__16693_16703,(1),null);
f_16705.call(null,tx_data,root_cursor);

var G__16706 = seq__16689_16699;
var G__16707 = chunk__16690_16700;
var G__16708 = count__16691_16701;
var G__16709 = (i__16692_16702 + (1));
seq__16689_16699 = G__16706;
chunk__16690_16700 = G__16707;
count__16691_16701 = G__16708;
i__16692_16702 = G__16709;
continue;
} else {
var temp__4425__auto___16710 = cljs.core.seq.call(null,seq__16689_16699);
if(temp__4425__auto___16710){
var seq__16689_16711__$1 = temp__4425__auto___16710;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16689_16711__$1)){
var c__5971__auto___16712 = cljs.core.chunk_first.call(null,seq__16689_16711__$1);
var G__16713 = cljs.core.chunk_rest.call(null,seq__16689_16711__$1);
var G__16714 = c__5971__auto___16712;
var G__16715 = cljs.core.count.call(null,c__5971__auto___16712);
var G__16716 = (0);
seq__16689_16699 = G__16713;
chunk__16690_16700 = G__16714;
count__16691_16701 = G__16715;
i__16692_16702 = G__16716;
continue;
} else {
var vec__16694_16717 = cljs.core.first.call(null,seq__16689_16711__$1);
var __16718 = cljs.core.nth.call(null,vec__16694_16717,(0),null);
var f_16719 = cljs.core.nth.call(null,vec__16694_16717,(1),null);
f_16719.call(null,tx_data,root_cursor);

var G__16720 = cljs.core.next.call(null,seq__16689_16711__$1);
var G__16721 = null;
var G__16722 = (0);
var G__16723 = (0);
seq__16689_16699 = G__16720;
chunk__16690_16700 = G__16721;
count__16691_16701 = G__16722;
i__16692_16702 = G__16723;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x16688_16698,properties_16695,listeners_16696,render_queue_16697))
;

x16688_16698.om$core$IRenderQueue$ = true;

x16688_16698.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x16688_16698,properties_16695,listeners_16696,render_queue_16697){
return (function (this$){
var this$__$1 = this;
return cljs.core.deref.call(null,render_queue_16697);
});})(x16688_16698,properties_16695,listeners_16696,render_queue_16697))
;

x16688_16698.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x16688_16698,properties_16695,listeners_16696,render_queue_16697){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,render_queue_16697),c)){
return null;
} else {
cljs.core.swap_BANG_.call(null,render_queue_16697,cljs.core.conj,c);

return cljs.core.swap_BANG_.call(null,this$__$1,cljs.core.identity);
}
});})(x16688_16698,properties_16695,listeners_16696,render_queue_16697))
;

x16688_16698.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x16688_16698,properties_16695,listeners_16696,render_queue_16697){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,render_queue_16697,cljs.core.empty);
});})(x16688_16698,properties_16695,listeners_16696,render_queue_16697))
;

}

return om.core._listen_BANG_.call(null,state,key,tx_listen);
});
om.core.tear_down = (function om$core$tear_down(state,key){
return om.core._unlisten_BANG_.call(null,state,key);
});
om.core.tag_root_key = (function om$core$tag_root_key(cursor,root_key){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
var x16725 = cljs.core.clone.call(null,cursor);
x16725.cljs$core$ICloneable$ = true;

x16725.cljs$core$ICloneable$_clone$arity$1 = ((function (x16725){
return (function (this$){
var this$__$1 = this;
return om$core$tag_root_key.call(null,cljs.core.clone.call(null,cursor),root_key);
});})(x16725))
;

x16725.om$core$IAdapt$ = true;

x16725.om$core$IAdapt$_adapt$arity$2 = ((function (x16725){
return (function (this$,other){
var this$__$1 = this;
return om$core$tag_root_key.call(null,om.core.adapt.call(null,cursor,other),root_key);
});})(x16725))
;

x16725.om$core$IRootKey$ = true;

x16725.om$core$IRootKey$_root_key$arity$1 = ((function (x16725){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x16725))
;

return x16725;
} else {
return cursor;
}
});
/**
 * Take a component constructor function f, value an immutable tree of
 * associative data structures optionally an wrapped in an IAtom
 * instance, and a map of options and installs an Om/React render
 * loop.
 * 
 * f must return an instance that at a minimum implements IRender or
 * IRenderState (it may implement other React life cycle protocols). f
 * must take at least two arguments, the root cursor and the owning pure
 * node. A cursor is just the original data wrapped in an ICursor
 * instance which maintains path information. Only one root render
 * loop allowed per target element. om.core/root is idempotent, if
 * called again on the same target element the previous render loop
 * will be replaced.
 * 
 * Options may also include any key allowed by om.core/build to
 * customize f. In addition om.core/root supports the following
 * special options:
 * 
 * :target     - (required) a DOM element. 
 * :shared     - data to be shared by all components, see om.core/get-shared
 * :tx-listen  - a function that will listen in in transactions, should
 *               take 2 arguments - the first a map containing the
 *               path, old and new state at path, old and new global
 *               state, and transaction tag if provided.
 * :instrument - a function of three arguments that if provided will
 *               intercept all calls to om.core/build. This function should
 *               correspond to the three arity version of om.core/build.
 * :adapt      - a function to adapt the root cursor
 * :raf        - override requestAnimationFrame based rendering. If
 *               false setTimeout will be use. If given a function
 *               will be invoked instead.
 * 
 * Example:
 * 
 * (root
 *   (fn [data owner]
 *     ...)
 *   {:message :hello}
 *   {:target js/document.body})
 */
om.core.root = (function om$core$root(f,value,p__16726){
var map__16790 = p__16726;
var map__16790__$1 = ((((!((map__16790 == null)))?((((map__16790.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16790.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16790):map__16790);
var options = map__16790__$1;
var target = cljs.core.get.call(null,map__16790__$1,new cljs.core.Keyword(null,"target","target",253001721));
var tx_listen = cljs.core.get.call(null,map__16790__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367));
var path = cljs.core.get.call(null,map__16790__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var instrument = cljs.core.get.call(null,map__16790__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var descriptor = cljs.core.get.call(null,map__16790__$1,new cljs.core.Keyword(null,"descriptor","descriptor",76122018));
var adapt = cljs.core.get.call(null,map__16790__$1,new cljs.core.Keyword(null,"adapt","adapt",-1817022327));
var raf = cljs.core.get.call(null,map__16790__$1,new cljs.core.Keyword(null,"raf","raf",-1295410152));
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First argument must be a function"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null)))))].join('')));
}

var roots_SINGLEQUOTE__16853 = cljs.core.deref.call(null,om.core.roots);
if(cljs.core.contains_QMARK_.call(null,roots_SINGLEQUOTE__16853,target)){
cljs.core.get.call(null,roots_SINGLEQUOTE__16853,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.call(null);
var state = ((((!((value == null)))?((((value.cljs$lang$protocol_mask$partition1$ & (16384))) || (value.cljs$core$IAtom$))?true:(((!value.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,value):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,value)))?value:cljs.core.atom.call(null,value));
var state__$1 = om.core.setup.call(null,state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__5168__auto__ = adapt;
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"adapt","adapt",-1817022327),new cljs.core.Keyword(null,"raf","raf",-1295410152));
var ret = cljs.core.atom.call(null,null);
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__16790,map__16790__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function om$core$root_$_rootf(){
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,om$core$root_$_rootf);

var value__$1 = cljs.core.deref.call(null,state__$1);
var cursor = adapt__$1.call(null,om.core.tag_root_key.call(null,(((path == null))?om.core.to_cursor.call(null,value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.call(null,cljs.core.get_in.call(null,value__$1,path),state__$1,path)),watch_key));
if(cljs.core.truth_(om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643)))){
} else {
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),true);

var c_16854 = om.dom.render.call(null,(function (){var _STAR_descriptor_STAR_16823 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_16824 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_16825 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_16826 = om.core._STAR_root_key_STAR_;
om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

try{return om.core.build.call(null,f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_16826;

om.core._STAR_state_STAR_ = _STAR_state_STAR_16825;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_16824;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_16823;
}})(),target);
if((cljs.core.deref.call(null,ret) == null)){
cljs.core.reset_BANG_.call(null,ret,c_16854);
} else {
}
}

var queue_16855 = om.core._get_queue.call(null,state__$1);
om.core._empty_queue_BANG_.call(null,state__$1);

if(cljs.core.empty_QMARK_.call(null,queue_16855)){
} else {
var seq__16827_16856 = cljs.core.seq.call(null,queue_16855);
var chunk__16828_16857 = null;
var count__16829_16858 = (0);
var i__16830_16859 = (0);
while(true){
if((i__16830_16859 < count__16829_16858)){
var c_16860 = cljs.core._nth.call(null,chunk__16828_16857,i__16830_16859);
if(cljs.core.truth_(c_16860.isMounted())){
var temp__4425__auto___16861 = (c_16860.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4425__auto___16861)){
var next_props_16862 = temp__4425__auto___16861;
(c_16860.props["__om_cursor"] = next_props_16862);

(c_16860.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__5168__auto__ = !((function (){var G__16832 = om.core.children.call(null,c_16860);
if(!((G__16832 == null))){
if((false) || (G__16832.om$core$ICheckState$)){
return true;
} else {
if((!G__16832.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__16832);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__16832);
}
})());
if(or__5168__auto__){
return or__5168__auto__;
} else {
return c_16860.shouldComponentUpdate(c_16860.props,c_16860.state);
}
})())){
c_16860.forceUpdate();
} else {
}
} else {
}

var G__16863 = seq__16827_16856;
var G__16864 = chunk__16828_16857;
var G__16865 = count__16829_16858;
var G__16866 = (i__16830_16859 + (1));
seq__16827_16856 = G__16863;
chunk__16828_16857 = G__16864;
count__16829_16858 = G__16865;
i__16830_16859 = G__16866;
continue;
} else {
var temp__4425__auto___16867 = cljs.core.seq.call(null,seq__16827_16856);
if(temp__4425__auto___16867){
var seq__16827_16868__$1 = temp__4425__auto___16867;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16827_16868__$1)){
var c__5971__auto___16869 = cljs.core.chunk_first.call(null,seq__16827_16868__$1);
var G__16870 = cljs.core.chunk_rest.call(null,seq__16827_16868__$1);
var G__16871 = c__5971__auto___16869;
var G__16872 = cljs.core.count.call(null,c__5971__auto___16869);
var G__16873 = (0);
seq__16827_16856 = G__16870;
chunk__16828_16857 = G__16871;
count__16829_16858 = G__16872;
i__16830_16859 = G__16873;
continue;
} else {
var c_16874 = cljs.core.first.call(null,seq__16827_16868__$1);
if(cljs.core.truth_(c_16874.isMounted())){
var temp__4425__auto___16875__$1 = (c_16874.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4425__auto___16875__$1)){
var next_props_16876 = temp__4425__auto___16875__$1;
(c_16874.props["__om_cursor"] = next_props_16876);

(c_16874.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__5168__auto__ = !((function (){var G__16834 = om.core.children.call(null,c_16874);
if(!((G__16834 == null))){
if((false) || (G__16834.om$core$ICheckState$)){
return true;
} else {
if((!G__16834.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__16834);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__16834);
}
})());
if(or__5168__auto__){
return or__5168__auto__;
} else {
return c_16874.shouldComponentUpdate(c_16874.props,c_16874.state);
}
})())){
c_16874.forceUpdate();
} else {
}
} else {
}

var G__16877 = cljs.core.next.call(null,seq__16827_16868__$1);
var G__16878 = null;
var G__16879 = (0);
var G__16880 = (0);
seq__16827_16856 = G__16877;
chunk__16828_16857 = G__16878;
count__16829_16858 = G__16879;
i__16830_16859 = G__16880;
continue;
}
} else {
}
}
break;
}
}

var _refs_16881 = cljs.core.deref.call(null,om.core._refs);
if(cljs.core.empty_QMARK_.call(null,_refs_16881)){
} else {
var seq__16835_16882 = cljs.core.seq.call(null,_refs_16881);
var chunk__16836_16883 = null;
var count__16837_16884 = (0);
var i__16838_16885 = (0);
while(true){
if((i__16838_16885 < count__16837_16884)){
var vec__16839_16886 = cljs.core._nth.call(null,chunk__16836_16883,i__16838_16885);
var path_16887__$1 = cljs.core.nth.call(null,vec__16839_16886,(0),null);
var cs_16888 = cljs.core.nth.call(null,vec__16839_16886,(1),null);
var cs_16889__$1 = cljs.core.deref.call(null,cs_16888);
var seq__16840_16890 = cljs.core.seq.call(null,cs_16889__$1);
var chunk__16841_16891 = null;
var count__16842_16892 = (0);
var i__16843_16893 = (0);
while(true){
if((i__16843_16893 < count__16842_16892)){
var vec__16844_16894 = cljs.core._nth.call(null,chunk__16841_16891,i__16843_16893);
var id_16895 = cljs.core.nth.call(null,vec__16844_16894,(0),null);
var c_16896 = cljs.core.nth.call(null,vec__16844_16894,(1),null);
if(cljs.core.truth_(c_16896.shouldComponentUpdate(c_16896.props,c_16896.state))){
c_16896.forceUpdate();
} else {
}

var G__16897 = seq__16840_16890;
var G__16898 = chunk__16841_16891;
var G__16899 = count__16842_16892;
var G__16900 = (i__16843_16893 + (1));
seq__16840_16890 = G__16897;
chunk__16841_16891 = G__16898;
count__16842_16892 = G__16899;
i__16843_16893 = G__16900;
continue;
} else {
var temp__4425__auto___16901 = cljs.core.seq.call(null,seq__16840_16890);
if(temp__4425__auto___16901){
var seq__16840_16902__$1 = temp__4425__auto___16901;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16840_16902__$1)){
var c__5971__auto___16903 = cljs.core.chunk_first.call(null,seq__16840_16902__$1);
var G__16904 = cljs.core.chunk_rest.call(null,seq__16840_16902__$1);
var G__16905 = c__5971__auto___16903;
var G__16906 = cljs.core.count.call(null,c__5971__auto___16903);
var G__16907 = (0);
seq__16840_16890 = G__16904;
chunk__16841_16891 = G__16905;
count__16842_16892 = G__16906;
i__16843_16893 = G__16907;
continue;
} else {
var vec__16845_16908 = cljs.core.first.call(null,seq__16840_16902__$1);
var id_16909 = cljs.core.nth.call(null,vec__16845_16908,(0),null);
var c_16910 = cljs.core.nth.call(null,vec__16845_16908,(1),null);
if(cljs.core.truth_(c_16910.shouldComponentUpdate(c_16910.props,c_16910.state))){
c_16910.forceUpdate();
} else {
}

var G__16911 = cljs.core.next.call(null,seq__16840_16902__$1);
var G__16912 = null;
var G__16913 = (0);
var G__16914 = (0);
seq__16840_16890 = G__16911;
chunk__16841_16891 = G__16912;
count__16842_16892 = G__16913;
i__16843_16893 = G__16914;
continue;
}
} else {
}
}
break;
}

var G__16915 = seq__16835_16882;
var G__16916 = chunk__16836_16883;
var G__16917 = count__16837_16884;
var G__16918 = (i__16838_16885 + (1));
seq__16835_16882 = G__16915;
chunk__16836_16883 = G__16916;
count__16837_16884 = G__16917;
i__16838_16885 = G__16918;
continue;
} else {
var temp__4425__auto___16919 = cljs.core.seq.call(null,seq__16835_16882);
if(temp__4425__auto___16919){
var seq__16835_16920__$1 = temp__4425__auto___16919;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16835_16920__$1)){
var c__5971__auto___16921 = cljs.core.chunk_first.call(null,seq__16835_16920__$1);
var G__16922 = cljs.core.chunk_rest.call(null,seq__16835_16920__$1);
var G__16923 = c__5971__auto___16921;
var G__16924 = cljs.core.count.call(null,c__5971__auto___16921);
var G__16925 = (0);
seq__16835_16882 = G__16922;
chunk__16836_16883 = G__16923;
count__16837_16884 = G__16924;
i__16838_16885 = G__16925;
continue;
} else {
var vec__16846_16926 = cljs.core.first.call(null,seq__16835_16920__$1);
var path_16927__$1 = cljs.core.nth.call(null,vec__16846_16926,(0),null);
var cs_16928 = cljs.core.nth.call(null,vec__16846_16926,(1),null);
var cs_16929__$1 = cljs.core.deref.call(null,cs_16928);
var seq__16847_16930 = cljs.core.seq.call(null,cs_16929__$1);
var chunk__16848_16931 = null;
var count__16849_16932 = (0);
var i__16850_16933 = (0);
while(true){
if((i__16850_16933 < count__16849_16932)){
var vec__16851_16934 = cljs.core._nth.call(null,chunk__16848_16931,i__16850_16933);
var id_16935 = cljs.core.nth.call(null,vec__16851_16934,(0),null);
var c_16936 = cljs.core.nth.call(null,vec__16851_16934,(1),null);
if(cljs.core.truth_(c_16936.shouldComponentUpdate(c_16936.props,c_16936.state))){
c_16936.forceUpdate();
} else {
}

var G__16937 = seq__16847_16930;
var G__16938 = chunk__16848_16931;
var G__16939 = count__16849_16932;
var G__16940 = (i__16850_16933 + (1));
seq__16847_16930 = G__16937;
chunk__16848_16931 = G__16938;
count__16849_16932 = G__16939;
i__16850_16933 = G__16940;
continue;
} else {
var temp__4425__auto___16941__$1 = cljs.core.seq.call(null,seq__16847_16930);
if(temp__4425__auto___16941__$1){
var seq__16847_16942__$1 = temp__4425__auto___16941__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16847_16942__$1)){
var c__5971__auto___16943 = cljs.core.chunk_first.call(null,seq__16847_16942__$1);
var G__16944 = cljs.core.chunk_rest.call(null,seq__16847_16942__$1);
var G__16945 = c__5971__auto___16943;
var G__16946 = cljs.core.count.call(null,c__5971__auto___16943);
var G__16947 = (0);
seq__16847_16930 = G__16944;
chunk__16848_16931 = G__16945;
count__16849_16932 = G__16946;
i__16850_16933 = G__16947;
continue;
} else {
var vec__16852_16948 = cljs.core.first.call(null,seq__16847_16942__$1);
var id_16949 = cljs.core.nth.call(null,vec__16852_16948,(0),null);
var c_16950 = cljs.core.nth.call(null,vec__16852_16948,(1),null);
if(cljs.core.truth_(c_16950.shouldComponentUpdate(c_16950.props,c_16950.state))){
c_16950.forceUpdate();
} else {
}

var G__16951 = cljs.core.next.call(null,seq__16847_16942__$1);
var G__16952 = null;
var G__16953 = (0);
var G__16954 = (0);
seq__16847_16930 = G__16951;
chunk__16848_16931 = G__16952;
count__16849_16932 = G__16953;
i__16850_16933 = G__16954;
continue;
}
} else {
}
}
break;
}

var G__16955 = cljs.core.next.call(null,seq__16835_16920__$1);
var G__16956 = null;
var G__16957 = (0);
var G__16958 = (0);
seq__16835_16882 = G__16955;
chunk__16836_16883 = G__16956;
count__16837_16884 = G__16957;
i__16838_16885 = G__16958;
continue;
}
} else {
}
}
break;
}
}

return cljs.core.deref.call(null,ret);
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__16790,map__16790__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
;
cljs.core.add_watch.call(null,state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__16790,map__16790__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (_,___$1,o,n){
if((cljs.core.not.call(null,om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033)))) && (!((o === n)))){
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),false);
} else {
}

om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),false);

if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,om.core.refresh_set),rootf)){
} else {
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.conj,rootf);
}

if(cljs.core.truth_(om.core.refresh_queued)){
return null;
} else {
om.core.refresh_queued = true;

if(cljs.core.fn_QMARK_.call(null,raf)){
return raf.call(null);
} else {
if((raf === false) || (!(typeof requestAnimationFrame !== 'undefined'))){
return setTimeout(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__16790,map__16790__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__16790,map__16790__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
,(16));
} else {
return requestAnimationFrame(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__16790,map__16790__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__16790,map__16790__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__16790,map__16790__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__16790,map__16790__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
om.core._remove_properties_BANG_.call(null,state__$1,watch_key);

cljs.core.remove_watch.call(null,state__$1,watch_key);

om.core.tear_down.call(null,state__$1,watch_key);

cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,rootf);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.dissoc,target);

return ReactDOM.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__16790,map__16790__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

return rootf.call(null);
});
/**
 * Given a DOM target remove its render loop if one exists.
 */
om.core.detach_root = (function om$core$detach_root(target){
if(cljs.core.truth_(goog.dom.isElement(target))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("gdom","isElement","gdom/isElement",465934354,null),new cljs.core.Symbol(null,"target","target",1893533248,null))))].join('')));
}

var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,om.core.roots),target);
if(cljs.core.truth_(temp__4425__auto__)){
var f = temp__4425__auto__;
return f.call(null);
} else {
return null;
}
});
om.core.transactable_QMARK_ = (function om$core$transactable_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$ITransact$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,x);
}
});
/**
 * Given a tag, a cursor, an optional list of keys ks, mutate the tree
 *   at the path specified by the cursor + the optional keys by applying
 *   f to the specified value in the tree. An Om re-render will be
 *   triggered.
 */
om.core.transact_BANG_ = (function om$core$transact_BANG_(var_args){
var args16961 = [];
var len__6226__auto___16964 = arguments.length;
var i__6227__auto___16965 = (0);
while(true){
if((i__6227__auto___16965 < len__6226__auto___16964)){
args16961.push((arguments[i__6227__auto___16965]));

var G__16966 = (i__6227__auto___16965 + (1));
i__6227__auto___16965 = G__16966;
continue;
} else {
}
break;
}

var G__16963 = args16961.length;
switch (G__16963) {
case 2:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16961.length)].join('')));

}
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,f){
return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,f){
return om.core.transact_BANG_.call(null,cursor,korks,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,f,tag){
if(cljs.core.truth_(om.core.transactable_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"transactable?","transactable?",780536292,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
return om.core._transact_BANG_.call(null,cursor,korks__$1,f,tag);
});

om.core.transact_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * Like transact! but no function provided, instead a replacement
 *   value is given.
 */
om.core.update_BANG_ = (function om$core$update_BANG_(var_args){
var args16968 = [];
var len__6226__auto___16971 = arguments.length;
var i__6227__auto___16972 = (0);
while(true){
if((i__6227__auto___16972 < len__6226__auto___16971)){
args16968.push((arguments[i__6227__auto___16972]));

var G__16973 = (i__6227__auto___16972 + (1));
i__6227__auto___16972 = G__16973;
continue;
} else {
}
break;
}

var G__16970 = args16968.length;
switch (G__16970) {
case 2:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16968.length)].join('')));

}
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,v){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,v){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,v,tag){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),tag);
});

om.core.update_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * EXPERIMENTAL: Like transact! but does not schedule a re-render or
 *   create a transact event.
 */
om.core.commit_BANG_ = (function om$core$commit_BANG_(cursor,korks,f){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

var key = ((((!((cursor == null)))?(((false) || (cursor.om$core$IRootKey$))?true:(((!cursor.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,cursor):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,cursor)))?om.core._root_key.call(null,cursor):null);
var app_state = om.core.state.call(null,cursor);
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
var cpath = om.core.path.call(null,cursor);
var rpath = cljs.core.into.call(null,cpath,korks__$1);
if(cljs.core.truth_(key)){
om.core._set_property_BANG_.call(null,app_state,key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true);
} else {
}

if(cljs.core.empty_QMARK_.call(null,rpath)){
return cljs.core.swap_BANG_.call(null,app_state,f);
} else {
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,rpath,f);
}
});
/**
 * A helper function to get at React DOM refs. Given a owning pure node
 *   extract the DOM ref specified by name.
 */
om.core.get_node = (function om$core$get_node(var_args){
var args16977 = [];
var len__6226__auto___16981 = arguments.length;
var i__6227__auto___16982 = (0);
while(true){
if((i__6227__auto___16982 < len__6226__auto___16981)){
args16977.push((arguments[i__6227__auto___16982]));

var G__16983 = (i__6227__auto___16982 + (1));
i__6227__auto___16982 = G__16983;
continue;
} else {
}
break;
}

var G__16979 = args16977.length;
switch (G__16979) {
case 1:
return om.core.get_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16977.length)].join('')));

}
});

om.core.get_node.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return ReactDOM.findDOMNode(owner);
});

om.core.get_node.cljs$core$IFn$_invoke$arity$2 = (function (owner,name){
if(typeof name === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"name","name",-810760592,null))))].join('')));
}

var G__16980 = owner.refs;
var G__16980__$1 = (((G__16980 == null))?null:(G__16980[name]));
var G__16980__$2 = (((G__16980__$1 == null))?null:ReactDOM.findDOMNode(G__16980__$1));
return G__16980__$2;
});

om.core.get_node.cljs$lang$maxFixedArity = 2;
/**
 * A helper function to get at React refs. Given an owning pure node extract
 *   the ref specified by name.
 */
om.core.get_ref = (function om$core$get_ref(owner,name){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(typeof name === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"name","name",-810760592,null))))].join('')));
}

var G__16986 = owner.refs;
var G__16986__$1 = (((G__16986 == null))?null:goog.object.get(G__16986,name));
return G__16986__$1;
});
/**
 * Return true if the backing React component is mounted into the DOM.
 */
om.core.mounted_QMARK_ = (function om$core$mounted_QMARK_(owner){
return owner.isMounted();
});
/**
 * Takes a pure owning component, a sequential list of keys and value and
 * sets the state of the component. Conceptually analagous to React
 * setState. Will schedule an Om re-render.
 */
om.core.set_state_BANG_ = (function om$core$set_state_BANG_(var_args){
var args16987 = [];
var len__6226__auto___16990 = arguments.length;
var i__6227__auto___16991 = (0);
while(true){
if((i__6227__auto___16991 < len__6226__auto___16990)){
args16987.push((arguments[i__6227__auto___16991]));

var G__16992 = (i__6227__auto___16991 + (1));
i__6227__auto___16991 = G__16992;
continue;
} else {
}
break;
}

var G__16989 = args16987.length;
switch (G__16989) {
case 2:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16987.length)].join('')));

}
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._set_state_BANG_.call(null,owner,v,true);
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,true);
});

om.core.set_state_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * EXPERIMENTAL: Same as set-state! but does not trigger re-render.
 */
om.core.set_state_nr_BANG_ = (function om$core$set_state_nr_BANG_(var_args){
var args16994 = [];
var len__6226__auto___16997 = arguments.length;
var i__6227__auto___16998 = (0);
while(true){
if((i__6227__auto___16998 < len__6226__auto___16997)){
args16994.push((arguments[i__6227__auto___16998]));

var G__16999 = (i__6227__auto___16998 + (1));
i__6227__auto___16998 = G__16999;
continue;
} else {
}
break;
}

var G__16996 = args16994.length;
switch (G__16996) {
case 2:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16994.length)].join('')));

}
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._set_state_BANG_.call(null,owner,v,false);
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,false);
});

om.core.set_state_nr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Takes a pure owning component, a sequential list of keys and a
 * function to transition the state of the component. Conceptually
 * analagous to React setState. Will schedule an Om re-render.
 */
om.core.update_state_BANG_ = (function om$core$update_state_BANG_(var_args){
var args17001 = [];
var len__6226__auto___17004 = arguments.length;
var i__6227__auto___17005 = (0);
while(true){
if((i__6227__auto___17005 < len__6226__auto___17004)){
args17001.push((arguments[i__6227__auto___17005]));

var G__17006 = (i__6227__auto___17005 + (1));
i__6227__auto___17005 = G__17006;
continue;
} else {
}
break;
}

var G__17003 = args17001.length;
switch (G__17003) {
case 2:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17001.length)].join('')));

}
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});

om.core.update_state_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * EXPERIMENTAL: Same as update-state! but does not trigger re-render.
 */
om.core.update_state_nr_BANG_ = (function om$core$update_state_nr_BANG_(var_args){
var args17008 = [];
var len__6226__auto___17011 = arguments.length;
var i__6227__auto___17012 = (0);
while(true){
if((i__6227__auto___17012 < len__6226__auto___17011)){
args17008.push((arguments[i__6227__auto___17012]));

var G__17013 = (i__6227__auto___17012 + (1));
i__6227__auto___17012 = G__17013;
continue;
} else {
}
break;
}

var G__17010 = args17008.length;
switch (G__17010) {
case 2:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17008.length)].join('')));

}
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_nr_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_nr_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});

om.core.update_state_nr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Utility to re-render an owner.
 */
om.core.refresh_BANG_ = (function om$core$refresh_BANG_(owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core.update_state_BANG_.call(null,owner,cljs.core.identity);
});
/**
 * Takes a pure owning component and an optional key or sequential
 * list of keys and returns a property in the component local state if
 * it exists. Always returns the rendered state, not the pending
 * state.
 */
om.core.get_render_state = (function om$core$get_render_state(var_args){
var args17015 = [];
var len__6226__auto___17018 = arguments.length;
var i__6227__auto___17019 = (0);
while(true){
if((i__6227__auto___17019 < len__6226__auto___17018)){
args17015.push((arguments[i__6227__auto___17019]));

var G__17020 = (i__6227__auto___17019 + (1));
i__6227__auto___17019 = G__17020;
continue;
} else {
}
break;
}

var G__17017 = args17015.length;
switch (G__17017) {
case 1:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17015.length)].join('')));

}
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._get_render_state.call(null,owner);
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_render_state.call(null,owner,ks);
});

om.core.get_render_state.cljs$lang$maxFixedArity = 2;
