﻿Ext.require('Ext.container.Viewport');
Ext.require('Ext.panel.Panel');
Ext.require('Ext.form.Label');
Ext.require('Ext.form.field.Text');
Ext.require('Ext.button.*');

Ext.onReady(function(){
	
	var page21_jViewport1 = Ext.create('Ext.container.Viewport', {
		layout: 'border',
		autoScroll: true,
		items: [
			{
				xtype: 'panel',
				id: 'page21_jExtPanel1',
				height: 26,
				border: false,
				region: 'north',
				layout: 'absolute',
				title: '权限详细信息'
			},
			{
				xtype: 'panel',
				id: 'page21_jExtPanel2',
				height: 34,
				bodyStyle:'background: rgba(237,246,254,1)',
				region: 'north',
				layout: 'absolute',
				items: [
					{
						xtype: 'label',
						id: 'page21_jLabel1',
						x: 188,
						y: 8,
						style: 'color:#3D6BA3;',
						text: '权限名称'
					},
					{
						xtype: 'textfield',
						id: 'page21_perminame',
						x: 251,
						y: 5,
						width: 209,
						height: 20,
						hideLabel: true
					}
				]
			},
			{
				xtype: 'panel',
				id: 'page21_jExtPanel11',
				height: 34,
				bodyStyle:'background: rgba(237,246,254,1)',
				region: 'north',
				layout: 'absolute',
				items: [
					{
						xtype: 'button',
						id: 'page21_submit',
						x: 251,
						y: 5,
						width: 60,
						height: 20,
						text: '提交',
						icon: '../../images/jPngButtonOk.png',
						listeners:{
							"click":function(){
							  window.open('systemManager_module.jsp?tabNum=2','_self');
							}
						}
					},
					{
						xtype: 'button',
						id: 'page21_back',
						x: 363,
						y: 5,
						width: 60,
						height: 20,
						text: '返回',
						icon: '../../images/jarrow_left.png',
						listeners:{
							"click":function(){
							  window.open('systemManager_module.jsp?tabNum=2','_self');
							}
						}
					}
				]
			}
		]
	});

});
