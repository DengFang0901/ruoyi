/** layuiAdmin.std-v1.2.1 LPPL License By http://www.layui.com/admin/ */ ;
layui.define(["table", "form"], function(e) {
	var t = layui.$,
		i = layui.table;
	layui.form;
	i.render({
		elem: "#LAY-user-manage",
		url: layui.setter.base + "json/useradmin/webuser.js",
		cols: [
			[{
				type: "checkbox",
				fixed: "left"
			}, {
				field: "id",
				width: 100,
				title: "岗位编号"
			}, {
				field: "username",
				title: "岗位编码",
				sort: !0,
				minWidth: 100
			}, {
				field: "name",
				title: "岗位名称",
				sort: !0,
				minWidth: 100
			}, {
				field: "ip",
				sort: !0,
				title: "显示顺序"
			}, {
				field: "check",
				width: 240,
				title: "状态",
				templet: "#buttonTpl",
				minWidth: 80,
				align: "center"
			}, {
				field: "jointime",
				title: "创建时间",
				sort: !0
			}, {
				title: "操作",
				width: 150,
				align: "center",
				fixed: "right",
				toolbar: "#table-useradmin-webuser"
			}]
		],
		page: !0,
		limit: 30,
		height: "full-220",
		text: "对不起，加载出现异常！"
	}), i.on("tool(LAY-user-manage)", function(e) {
		e.data;
		if("del" === e.event) layer.prompt({
			formType: 1,
			title: "敏感操作，请验证口令"
		}, function(t, i) {
			layer.close(i), layer.confirm("真的删除行么", function(t) {
				e.del(), layer.close(t)
			})
		});
		else if("edit" === e.event) {
			t(e.tr);
			layer.open({
				type: 2,
				title: "编辑用户",
				content: "../../../views/user/user/userform.html",
				maxmin: !0,
				area: ["500px", "450px"],
				btn: ["确定", "取消"],
				yes: function(e, t) {
					var l = window["layui-layer-iframe" + e],
						r = "LAY-user-front-submit",
						n = t.find("iframe").contents().find("#" + r);
					l.layui.form.on("submit(" + r + ")", function(t) {
						t.field;
						i.reload("LAY-user-front-submit"), layer.close(e)
					}), n.trigger("click")
				},
				success: function(e, t) {}
			})
		}
	}), i.render({
		elem: "#LAY-user-back-manage",
		url: layui.setter.base + "json/useradmin/mangadmin.js",
		cols: [
			[{
				type: "checkbox",
				fixed: "left"
			}, {
				field: "id",
				width: 100,
				title: "用户ID",
			}, {
				field: "loginname",
				width: 180,
				title: "登录名称",
				sort: !0
			}, {
				field: "telphone",
				width: 160,
				title: "用户名称",
			}, {
				field: "email",
				width: 140,
				title: "部门"
			}, {
				field: "phone",
				width: 140,
				title: "手机"
			}, {
				field: "check",
				width: 240,
				title: "用户状态",
				templet: "#buttonTpl",
				minWidth: 80,
				align: "center"
			}, {
				field: "jointime",
				width: 380,
				title: "创建时间",
				sort: !0
			}, {
				title: "操作",
				width: 241,
				align: "center",
				fixed: "right",
				toolbar: "#table-useradmin-admin"
			}]
		],
		text: "对不起，加载出现异常！"
	}), i.on("tool(LAY-user-back-manage)", function(e) {
		e.data;
		if("del" === e.event) layer.prompt({
			formType: 1,
			title: "敏感操作，请验证口令"
		}, function(t, i) {
			layer.close(i), layer.confirm("确定删除此管理员？", function(t) {
				console.log(e), e.del(), layer.close(t)
			})
		});
		else if("edit" === e.event) {
			t(e.tr);
			layer.open({
				type: 2,
				title: "编辑管理员",
				content: "../../../views/user/administrators/adminform.html",
				area: ["420px", "420px"],
				btn: ["确定", "取消"],
				yes: function(e, t) {
					var l = window["layui-layer-iframe" + e],
						r = "LAY-user-back-submit",
						n = t.find("iframe").contents().find("#" + r);
					l.layui.form.on("submit(" + r + ")", function(t) {
						t.field;
						i.reload("LAY-user-front-submit"), layer.close(e)
					}), n.trigger("click")
				},
				success: function(e, t) {}
			})
		}
	}), i.render({
		elem: "#LAY-user-back-role",
		url: layui.setter.base + "json/useradmin/role.js",
		cols: [
			[{
				type: "checkbox",
				fixed: "left"
			}, {
				field: "id",
				width: 150,
				title: "角色编号",
			}, {
				field: "rolename",
				title: "角色名",
				width: 200,
				sort: !0
			}, {
				field: "limits",
				title: "权限字符",
				width: 200,
				sort: !0
			}, {
				field: "descr",
				title: "显示顺序",
				width: 220,
				sort: !0
			}, {
				field: "check",
				width: 220,
				title: "用户状态",
				templet: "#buttonTpl",
				minWidth: 80,
				align: "center"
			}, {
				field: "jointime",
				width: 240,
				title: "创建时间",
				sort: !0
			}, {
				title: "操作",
				width: 352,
				align: "center",
				fixed: "right",
				toolbar: "#table-useradmin-admin"
			}]
		],
		text: "对不起，加载出现异常！"
	}), i.on("tool(LAY-user-back-role)", function(e) {
		e.data;
		if("del" === e.event) layer.confirm("确定删除此角色？", function(t) {
			e.del(), layer.close(t)
		});
		else if("edit" === e.event) {
			t(e.tr);
			layer.open({
				type: 2,
				title: "编辑角色",
				content: "../../../views/user/administrators/roleform.html",
				area: ["500px", "480px"],
				btn: ["确定", "取消"],
				yes: function(e, t) {
					var l = window["layui-layer-iframe" + e],
						r = t.find("iframe").contents().find("#LAY-user-role-submit");
					l.layui.form.on("submit(LAY-user-role-submit)", function(t) {
						t.field;
						i.reload("LAY-user-back-role"), layer.close(e)
					}), r.trigger("click")
				},
				success: function(e, t) {}
			})
		}
	}), e("useradmin", {})
});