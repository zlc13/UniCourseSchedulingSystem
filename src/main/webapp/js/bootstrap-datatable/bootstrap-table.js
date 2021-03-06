!function(a) {
    var d = null;
    var p = function(t) {
        var q = arguments,
        r = true,
        s = 1;
        t = t.replace(/%s/g,
        function() {
            var u = q[s++];
            if (typeof u === "undefined") {
                r = false;
                return ""
            }
            return u
        });
        return r ? t: ""
    };
    var j = function(r, q, t, u) {
        var s = "";
        a.each(r,
        function(v, w) {
            if (w[q] === u) {
                s = w[t];
                return false
            }
            return true
        });
        return s
    };
    var h = function(q, r) {
        var s = -1;
        a.each(q,
        function(u, t) {
            if (t.field === r) {
                s = u;
                return false
            }
            return true
        });
        return s
    };
    var o = function(s) {
        var u, w, x, A = 0,
        t = [];
        for (u = 0; u < s[0].length; u++) {
            A += s[0][u].colspan || 1
        }
        for (u = 0; u < s.length; u++) {
            t[u] = [];
            for (w = 0; w < A; w++) {
                t[u][w] = false
            }
        }
        for (u = 0; u < s.length; u++) {
            for (w = 0; w < s[u].length; w++) {
                var y = s[u][w],
                z = y.rowspan || 1,
                q = y.colspan || 1,
                v = a.inArray(false, t[u]);
                if (q === 1) {
                    y.fieldIndex = v;
                    if (typeof y.field === "undefined") {
                        y.field = v
                    }
                }
                for (x = 0; x < z; x++) {
                    t[u + x][v] = true
                }
                for (x = 0; x < q; x++) {
                    t[u][v + x] = true
                }
            }
        }
    };
    var m = function() {
        if (d === null) {
            var q = a("<p/>").addClass("fixed-table-scroll-inner"),
            r = a("<div/>").addClass("fixed-table-scroll-outer"),
            s,
            t;
            r.append(q);
            a("body").append(r);
            s = q[0].offsetWidth;
            r.css("overflow", "scroll");
            t = q[0].offsetWidth;
            if (s === t) {
                t = r[0].clientWidth
            }
            r.remove();
            d = s - t
        }
        return d
    };
    var e = function(v, t, q, r) {
        var s = t;
        if (typeof t === "string") {
            var u = t.split(".");
            if (u.length > 1) {
                s = window;
                a.each(u,
                function(x, w) {
                    s = s[w]
                })
            } else {
                s = window[t]
            }
        }
        if (typeof s === "object") {
            return s
        }
        if (typeof s === "function") {
            return s.apply(v, q)
        }
        if (!s && typeof t === "string" && p.apply(this, [t].concat(q))) {
            return p.apply(this, [t].concat(q))
        }
        return r
    };
    var f = function(s, u, q) {
        var t = Object.getOwnPropertyNames(s),
        v = Object.getOwnPropertyNames(u),
        w = "";
        if (q) {
            if (t.length !== v.length) {
                return false
            }
        }
        for (var r = 0; r < t.length; r++) {
            w = t[r];
            if (a.inArray(w, v) > -1) {
                if (s[w] !== u[w]) {
                    return false
                }
            }
        }
        return true
    };
    var g = function(q) {
        if (typeof q === "string") {
            return q.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/`/g, "&#x60;")
        }
        return q
    };
    var l = function(q) {
        var r = 0;
        q.children().each(function() {
            if (r < a(this).outerHeight(true)) {
                r = a(this).outerHeight(true)
            }
        });
        return r
    };
    var k = function(s) {
        for (var q in s) {
            var r = q.split(/(?=[A-Z])/).join("-").toLowerCase();
            if (r !== q) {
                s[r] = s[q];
                delete s[q]
            }
        }
        return s
    };
    var i = function(s, r, q) {
        var v = s;
        if (typeof r !== "string" || s.hasOwnProperty(r)) {
            return q ? g(s[r]) : s[r]
        }
        var u = r.split(".");
        for (var t in u) {
            v = v && v[u[t]]
        }
        return q ? g(v) : v
    };
    var n = function() {
        return !! (navigator.userAgent.indexOf("MSIE ") > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))
    };
    var c = function(q, r) {
        this.options = r;
        this.$el = a(q);
        this.$el_ = this.$el.clone();
        this.timeoutId_ = 0;
        this.timeoutFooter_ = 0;
        this.init()
    };
    c.DEFAULTS = {
        classes: "table table-hover",
        locale: undefined,
        height: undefined,
        undefinedText: "-",
        sortName: undefined,
        sortOrder: "asc",
        striped: false,
        columns: [[]],
        data: [],
        dataField: "rows",
        method: "get",
        url: undefined,
        ajax: undefined,
        cache: true,
        contentType: "application/json",
        dataType: "json",
        ajaxOptions: {},
        queryParams: function(q) {
            return q
        },
        queryParamsType: "limit",
        responseHandler: function(q) {
            return q
        },
        pagination: false,
        onlyInfoPagination: false,
        sidePagination: "client",
        totalRows: 0,
        pageNumber: 1,
        pageSize: 10,
        pageList: [10, 25, 50, 100],
        paginationHAlign: "right",
        paginationVAlign: "bottom",
        paginationDetailHAlign: "left",
        paginationPreText: "&lsaquo;",
        paginationNextText: "&rsaquo;",
        search: false,
        searchOnEnterKey: false,
        strictSearch: false,
        searchAlign: "right",
        selectItemName: "btSelectItem",
        showHeader: true,
        showFooter: false,
        showColumns: false,
        showPaginationSwitch: false,
        showRefresh: false,
        showToggle: false,
        buttonsAlign: "right",
        smartDisplay: true,
        escape: false,
        minimumCountColumns: 1,
        idField: undefined,
        uniqueId: undefined,
        cardView: false,
        detailView: false,
        detailFormatter: function(q, r) {
            return ""
        },
        trimOnSearch: true,
        clickToSelect: false,
        singleSelect: false,
        toolbar: undefined,
        toolbarAlign: "left",
        checkboxHeader: true,
        sortable: true,
        silentSort: true,
        maintainSelected: false,
        searchTimeOut: 500,
        searchText: "",
        iconSize: undefined,
        iconsPrefix: "glyphicon",
        icons: {
            paginationSwitchDown: "glyphicon-collapse-down icon-chevron-down",
            paginationSwitchUp: "glyphicon-collapse-up icon-chevron-up",
            refresh: "glyphicon-refresh icon-refresh",
            toggle: "glyphicon-list-alt icon-list-alt",
            columns: "glyphicon-th icon-th",
            detailOpen: "glyphicon-plus icon-plus",
            detailClose: "glyphicon-minus icon-minus"
        },
        rowStyle: function(r, q) {
            return {}
        },
        rowAttributes: function(r, q) {
            return {}
        },
        onAll: function(r, q) {
            return false
        },
        onClickCell: function(r, t, s, q) {
            return false
        },
        onDblClickCell: function(r, t, s, q) {
            return false
        },
        onClickRow: function(r, q) {
            return false
        },
        onDblClickRow: function(r, q) {
            return false
        },
        onSort: function(q, r) {
            return false
        },
        onCheck: function(q) {
            return false
        },
        onUncheck: function(q) {
            return false
        },
        onCheckAll: function(q) {
            return false
        },
        onUncheckAll: function(q) {
            return false
        },
        onCheckSome: function(q) {
            return false
        },
        onUncheckSome: function(q) {
            return false
        },
        onLoadSuccess: function(q) {
            return false
        },
        onLoadError: function(q) {
            return false
        },
        onColumnSwitch: function(r, q) {
            return false
        },
        onPageChange: function(q, r) {
            return false
        },
        onSearch: function(q) {
            return false
        },
        onToggle: function(q) {
            return false
        },
        onPreBody: function(q) {
            return false
        },
        onPostBody: function() {
            return false
        },
        onPostHeader: function() {
            return false
        },
        onExpandRow: function(r, s, q) {
            return false
        },
        onCollapseRow: function(q, r) {
            return false
        },
        onRefreshOptions: function(q) {
            return false
        },
        onResetView: function() {
            return false
        }
    };
    c.LOCALES = [];
    c.LOCALES["en-US"] = c.LOCALES.en = {
        formatLoadingMessage: function() {
            return "Loading, please wait..."
        },
        formatRecordsPerPage: function(q) {
            return p("%s", q)
        },
        formatShowingRows: function(q, r, s) {
            return p("?????? %s ??? %s ??? %s ???", q, r, s)
        },
        formatDetailPagination: function(q) {
            return p("Showing %s rows", q)
        },
        formatSearch: function() {
            return "Search"
        },
        formatNoMatches: function() {
            return "??????????????????"
        },
        formatPaginationSwitch: function() {
            return "???/???????????????"
        },
        formatRefresh: function() {
            return "??????"
        },
        formatToggle: function() {
            return "??????"
        },
        formatColumns: function() {
            return "?????????"
        },
        formatAllRows: function() {
            return "All"
        }
    };
    a.extend(c.DEFAULTS, c.LOCALES["en-US"]);
    c.COLUMN_DEFAULTS = {
        radio: false,
        checkbox: false,
        checkboxEnabled: true,
        field: undefined,
        title: undefined,
        titleTooltip: undefined,
        "class": undefined,
        align: undefined,
        halign: undefined,
        falign: undefined,
        valign: undefined,
        width: undefined,
        sortable: false,
        order: "asc",
        visible: true,
        switchable: true,
        clickToSelect: true,
        formatter: undefined,
        footerFormatter: undefined,
        events: undefined,
        sorter: undefined,
        sortName: undefined,
        cellStyle: undefined,
        searchable: true,
        searchFormatter: true,
        cardVisible: true
    };
    c.EVENTS = {
        "all.bs.table": "onAll",
        "click-cell.bs.table": "onClickCell",
        "dbl-click-cell.bs.table": "onDblClickCell",
        "click-row.bs.table": "onClickRow",
        "dbl-click-row.bs.table": "onDblClickRow",
        "sort.bs.table": "onSort",
        "check.bs.table": "onCheck",
        "uncheck.bs.table": "onUncheck",
        "check-all.bs.table": "onCheckAll",
        "uncheck-all.bs.table": "onUncheckAll",
        "check-some.bs.table": "onCheckSome",
        "uncheck-some.bs.table": "onUncheckSome",
        "load-success.bs.table": "onLoadSuccess",
        "load-error.bs.table": "onLoadError",
        "column-switch.bs.table": "onColumnSwitch",
        "page-change.bs.table": "onPageChange",
        "search.bs.table": "onSearch",
        "toggle.bs.table": "onToggle",
        "pre-body.bs.table": "onPreBody",
        "post-body.bs.table": "onPostBody",
        "post-header.bs.table": "onPostHeader",
        "expand-row.bs.table": "onExpandRow",
        "collapse-row.bs.table": "onCollapseRow",
        "refresh-options.bs.table": "onRefreshOptions",
        "reset-view.bs.table": "onResetView"
    };
    c.prototype.init = function() {
        this.initLocale();
        this.initContainer();
        this.initTable();
        this.initHeader();
        this.initData();
        this.initFooter();
        this.initToolbar();
        this.initPagination();
        this.initBody();
        this.initSearchText();
        this.initServer()
    };
    c.prototype.initLocale = function() {
        if (this.options.locale) {
            var q = this.options.locale.split(/-|_/);
            q[0].toLowerCase();
            q[1] && q[1].toUpperCase();
            if (a.fn.bootstrapTable.locales[this.options.locale]) {
                a.extend(this.options, a.fn.bootstrapTable.locales[this.options.locale])
            } else {
                if (a.fn.bootstrapTable.locales[q.join("-")]) {
                    a.extend(this.options, a.fn.bootstrapTable.locales[q.join("-")])
                } else {
                    if (a.fn.bootstrapTable.locales[q[0]]) {
                        a.extend(this.options, a.fn.bootstrapTable.locales[q[0]])
                    }
                }
            }
        }
    };
    c.prototype.initContainer = function() {
        this.$container = a(['<div class="bootstrap-table">', '<div class="fixed-table-toolbar"></div>', this.options.paginationVAlign === "top" || this.options.paginationVAlign === "both" ? '<div class="fixed-table-pagination" style="clear: both;"></div>': "", '<div class="fixed-table-container">', '<div class="fixed-table-header"><table></table></div>', '<div class="fixed-table-body">', '<div class="fixed-table-loading">', this.options.formatLoadingMessage(), "</div>", "</div>", '<div class="fixed-table-footer"><table><tr></tr></table></div>', this.options.paginationVAlign === "bottom" || this.options.paginationVAlign === "both" ? '<div class="fixed-table-pagination"></div>': "", "</div>", "</div>"].join(""));
        this.$container.insertAfter(this.$el);
        this.$tableContainer = this.$container.find(".fixed-table-container");
        this.$tableHeader = this.$container.find(".fixed-table-header");
        this.$tableBody = this.$container.find(".fixed-table-body");
        this.$tableLoading = this.$container.find(".fixed-table-loading");
        this.$tableFooter = this.$container.find(".fixed-table-footer");
        this.$toolbar = this.$container.find(".fixed-table-toolbar");
        this.$pagination = this.$container.find(".fixed-table-pagination");
        this.$tableBody.append(this.$el);
        this.$container.after('<div class="clearfix"></div>');
        this.$el.addClass(this.options.classes);
        if (this.options.striped) {
            this.$el.addClass("table-striped")
        }
        if (a.inArray("table-no-bordered", this.options.classes.split(" ")) !== -1) {
            this.$tableContainer.addClass("table-no-bordered")
        }
    };
    c.prototype.initTable = function() {
        var s = this,
        q = [],
        r = [];
        this.$header = this.$el.find(">thead");
        if (!this.$header.length) {
            this.$header = a("<thead></thead>").appendTo(this.$el)
        }
        this.$header.find("tr").each(function() {
            var t = [];
            a(this).find("th").each(function() {
                t.push(a.extend({},
                {
                    title: a(this).html(),
                    "class": a(this).attr("class"),
                    titleTooltip: a(this).attr("title"),
                    rowspan: a(this).attr("rowspan") ? +a(this).attr("rowspan") : undefined,
                    colspan: a(this).attr("colspan") ? +a(this).attr("colspan") : undefined
                },
                a(this).data()))
            });
            q.push(t)
        });
        if (!a.isArray(this.options.columns[0])) {
            this.options.columns = [this.options.columns]
        }
        this.options.columns = a.extend(true, [], q, this.options.columns);
        this.columns = [];
        o(this.options.columns);
        a.each(this.options.columns,
        function(u, t) {
            a.each(t,
            function(w, v) {
                v = a.extend({},
                c.COLUMN_DEFAULTS, v);
                if (typeof v.fieldIndex !== "undefined") {
                    s.columns[v.fieldIndex] = v
                }
                s.options.columns[u][w] = v
            })
        });
        if (this.options.data.length) {
            return
        }
        this.$el.find(">tbody>tr").each(function() {
            var t = {};
            t._id = a(this).attr("id");
            t._class = a(this).attr("class");
            t._data = k(a(this).data());
            a(this).find("td").each(function(v) {
                var u = s.columns[v].field;
                t[u] = a(this).html();
                t["_" + u + "_id"] = a(this).attr("id");
                t["_" + u + "_class"] = a(this).attr("class");
                t["_" + u + "_rowspan"] = a(this).attr("rowspan");
                t["_" + u + "_title"] = a(this).attr("title");
                t["_" + u + "_data"] = k(a(this).data())
            });
            r.push(t)
        });
        this.options.data = r
    };
    c.prototype.initHeader = function() {
        var r = this,
        s = {},
        q = [];
        this.header = {
            fields: [],
            styles: [],
            classes: [],
            formatters: [],
            events: [],
            sorters: [],
            sortNames: [],
            cellStyles: [],
            searchables: []
        };
        a.each(this.options.columns,
        function(u, t) {
            q.push("<tr>");
            if (u == 0 && !r.options.cardView && r.options.detailView) {
                q.push(p('<th class="detail" rowspan="%s"><div class="fht-cell"></div></th>', r.options.columns.length))
            }
            a.each(t,
            function(z, x) {
                var C = "",
                y = "",
                v = "",
                B = "",
                w = p(' class="%s"', x["class"]),
                A = r.options.sortOrder || x.order,
                D = "px",
                E = x.width;
                if (x.width !== undefined && (!r.options.cardView)) {
                    if (typeof x.width === "string") {
                        if (x.width.indexOf("%") !== -1) {
                            D = "%"
                        }
                    }
                }
                if (x.width && typeof x.width === "string") {
                    E = x.width.replace("%", "").replace("px", "")
                }
                y = p("text-align: %s; ", x.halign ? x.halign: x.align);
                v = p("text-align: %s; ", x.align);
                B = p("vertical-align: %s; ", x.valign);
                B += p("width: %s; ", (x.checkbox || x.radio) && !E ? "36px": (E ? E + D: undefined));
                if (typeof x.fieldIndex !== "undefined") {
                    r.header.fields[x.fieldIndex] = x.field;
                    r.header.styles[x.fieldIndex] = v + B;
                    r.header.classes[x.fieldIndex] = w;
                    r.header.formatters[x.fieldIndex] = x.formatter;
                    r.header.events[x.fieldIndex] = x.events;
                    r.header.sorters[x.fieldIndex] = x.sorter;
                    r.header.sortNames[x.fieldIndex] = x.sortName;
                    r.header.cellStyles[x.fieldIndex] = x.cellStyle;
                    r.header.searchables[x.fieldIndex] = x.searchable;
                    if (!x.visible) {
                        return
                    }
                    if (r.options.cardView && (!x.cardVisible)) {
                        return
                    }
                    s[x.field] = x
                }
                q.push("<th" + p(' title="%s"', x.titleTooltip), x.checkbox || x.radio ? p(' class="bs-checkbox %s"', x["class"] || "") : w, p(' style="%s"', y + B), p(' rowspan="%s"', x.rowspan), p(' colspan="%s"', x.colspan), p(' data-field="%s"', x.field), "tabindex='0'", ">");
                q.push(p('<div class="th-inner %s">', r.options.sortable && x.sortable ? "sortable both": ""));
                C = x.title;
                if (x.checkbox) {
                    if (!r.options.singleSelect && r.options.checkboxHeader) {
                        C = '<div class="ftdms-checkbox checkbox-success"><input style="padding:0;width:16px;height:16px;margin:0;" id="datatable-chekbox-select-all" name="btSelectAll" type="checkbox" /><label for="datatable-chekbox-select-all"></label></div>'
                    }
                    r.header.stateField = x.field
                }
                if (x.radio) {
                    C = "";
                    r.header.stateField = x.field;
                    r.options.singleSelect = true
                }
                q.push(C);
                q.push("</div>");
                q.push('<div class="fht-cell"></div>');
                q.push("</div>");
                q.push("</th>")
            });
            q.push("</tr>")
        });
        this.$header.html(q.join(""));
        this.$header.find("th[data-field]").each(function(t) {
            a(this).data(s[a(this).data("field")])
        });
        this.$container.off("click", ".th-inner").on("click", ".th-inner",
        function(t) {
            var u = a(this);
            if (u.closest(".bootstrap-table")[0] !== r.$container[0]) {
                return false
            }
            if (r.options.sortable && u.parent().data().sortable) {
                r.onSort(t)
            }
        });
        this.$header.children().children().off("keypress").on("keypress",
        function(u) {
            if (r.options.sortable && a(this).data().sortable) {
                var t = u.keyCode || u.which;
                if (t == 13) {
                    r.onSort(u)
                }
            }
        });
        if (!this.options.showHeader || this.options.cardView) {
            this.$header.hide();
            this.$tableHeader.hide();
            this.$tableLoading.css("top", 0)
        } else {
            this.$header.show();
            this.$tableHeader.show();
            this.$tableLoading.css("top", this.$header.outerHeight() + 1);
            this.getCaret()
        }
        this.$selectAll = this.$header.find('[name="btSelectAll"]');
        this.$selectAll.off("click").on("click",
        function() {
            var t = a(this).prop("checked");
            r[t ? "checkAll": "uncheckAll"]();
            r.updateSelected()
        })
    };
    c.prototype.initFooter = function() {
        if (!this.options.showFooter || this.options.cardView) {
            this.$tableFooter.hide()
        } else {
            this.$tableFooter.show()
        }
    };
    c.prototype.initData = function(q, r) {
        if (r === "append") {
            this.data = this.data.concat(q)
        } else {
            if (r === "prepend") {
                this.data = [].concat(q).concat(this.data)
            } else {
                this.data = q || this.options.data
            }
        }
        if (r === "append") {
            this.options.data = this.options.data.concat(q)
        } else {
            if (r === "prepend") {
                this.options.data = [].concat(q).concat(this.options.data)
            } else {
                this.options.data = this.data
            }
        }
        if (this.options.sidePagination === "server") {
            return
        }
        this.initSort()
    };
    c.prototype.initSort = function() {
        var t = this,
        r = this.options.sortName,
        s = this.options.sortOrder === "desc" ? -1 : 1,
        q = a.inArray(this.options.sortName, this.header.fields);
        if (q !== -1) {
            this.data.sort(function(u, w) {
                if (t.header.sortNames[q]) {
                    r = t.header.sortNames[q]
                }
                var v = i(u, r, t.options.escape),
                x = i(w, r, t.options.escape),
                y = e(t.header, t.header.sorters[q], [v, x]);
                if (y !== undefined) {
                    return s * y
                }
                if (v === undefined || v === null) {
                    v = ""
                }
                if (x === undefined || x === null) {
                    x = ""
                }
                if (a.isNumeric(v) && a.isNumeric(x)) {
                    v = parseFloat(v);
                    x = parseFloat(x);
                    if (v < x) {
                        return s * -1
                    }
                    return s
                }
                if (v === x) {
                    return 0
                }
                if (typeof v !== "string") {
                    v = v.toString()
                }
                if (v.localeCompare(x) === -1) {
                    return s * -1
                }
                return s
            })
        }
    };
    c.prototype.onSort = function(s) {
        var q = s.type === "keypress" ? a(s.currentTarget) : a(s.currentTarget).parent(),
        r = this.$header.find("th").eq(q.index());
        this.$header.add(this.$header_).find("span.order").remove();
        if (this.options.sortName === q.data("field")) {
            this.options.sortOrder = this.options.sortOrder === "asc" ? "desc": "asc"
        } else {
            this.options.sortName = q.data("field");
            this.options.sortOrder = q.data("order") === "asc" ? "desc": "asc"
        }
        this.trigger("sort", this.options.sortName, this.options.sortOrder);
        q.add(r).data("order", this.options.sortOrder);
        this.getCaret();
        if (this.options.sidePagination === "server") {
            this.initServer(this.options.silentSort);
            return
        }
        this.initSort();
        this.initBody()
    };
    c.prototype.initToolbar = function() {
        var u = this,
        s = [],
        v = 0,
        q,
        r,
        t = 0;
        if (this.$toolbar.find(".bars").children().length) {
            a("body").append(a(this.options.toolbar))
        }
        this.$toolbar.html("");
        if (typeof this.options.toolbar === "string" || typeof this.options.toolbar === "object") {
            a(p('<div class="bars pull-%s"></div>', this.options.toolbarAlign)).appendTo(this.$toolbar).append(a(this.options.toolbar))
        }
        s = [p('<div class="columns columns-%s btn-group pull-%s">', this.options.buttonsAlign, this.options.buttonsAlign)];
        if (typeof this.options.icons === "string") {
            this.options.icons = e(null, this.options.icons)
        }
        if (this.options.showPaginationSwitch) {
            s.push(p('<button class="btn btn-default" type="button" name="paginationSwitch" title="%s">', this.options.formatPaginationSwitch()), p('<i class="%s %s"></i>', this.options.iconsPrefix, this.options.icons.paginationSwitchDown), "</button>")
        }
        if (this.options.showRefresh) {
            s.push(p('<button class="btn btn-default' + p(" btn-%s", this.options.iconSize) + '" type="button" name="refresh" title="%s">', this.options.formatRefresh()), p('<i class="%s %s"></i>', this.options.iconsPrefix, this.options.icons.refresh), "</button>")
        }
        if (this.options.showToggle) {
            s.push(p('<button class="btn btn-default' + p(" btn-%s", this.options.iconSize) + '" type="button" name="toggle" title="%s">', this.options.formatToggle()), p('<i class="%s %s"></i>', this.options.iconsPrefix, this.options.icons.toggle), "</button>")
        }
        if (this.options.showColumns) {
            s.push(p('<div class="keep-open btn-group" title="%s">', this.options.formatColumns()), '<button type="button" class="btn btn-default' + p(" btn-%s", this.options.iconSize) + ' dropdown-toggle" data-toggle="dropdown">', p('<i class="%s %s"></i>', this.options.iconsPrefix, this.options.icons.columns), ' <span class="caret"></span>', "</button>", '<ul class="dropdown-menu" role="menu">');
            a.each(this.columns,
            function(y, x) {
                if (x.radio || x.checkbox) {
                    return
                }
                if (u.options.cardView && (!x.cardVisible)) {
                    return
                }
                var w = x.visible ? ' checked="checked"': "";
                if (x.switchable) {
                    s.push(p('<li><span class="checkbox-only checkbox-success"><input style="padding:0;width:16px;height:16px;margin:0;" id="datatable-columns-checkbox-' + y + '" type="checkbox" data-field="%s" value="%s"%s> %s</span></li>', x.field, y, w, x.title));
                    t++
                }
            });
            s.push("</ul>", "</div>")
        }
        s.push("</div>");
        if (this.showToolbar || s.length > 2) {
            this.$toolbar.append(s.join(""))
        }
        if (this.options.showPaginationSwitch) {
            this.$toolbar.find('button[name="paginationSwitch"]').off("click").on("click", a.proxy(this.togglePagination, this))
        }
        if (this.options.showRefresh) {
            this.$toolbar.find('button[name="refresh"]').off("click").on("click", a.proxy(this.refresh, this))
        }
        if (this.options.showToggle) {
            this.$toolbar.find('button[name="toggle"]').off("click").on("click",
            function() {
                u.toggleView()
            })
        }
        if (this.options.showColumns) {
            q = this.$toolbar.find(".keep-open");
            if (t <= this.options.minimumCountColumns) {
                q.find("input").prop("disabled", true)
            }
            q.find("li").off("click").on("click",
            function(w) {
                w.stopImmediatePropagation()
            });
            q.find("input").off("click").on("click",
            function() {
                var w = a(this);
                u.toggleColumn(h(u.columns, a(this).data("field")), w.prop("checked"), false);
                u.trigger("column-switch", a(this).data("field"), w.prop("checked"))
            })
        }
        if (this.options.search) {
            s = [];
            s.push('<div class="pull-' + this.options.searchAlign + ' search">', p('<input class="form-control' + p(" input-%s", this.options.iconSize) + '" type="text" placeholder="%s">', this.options.formatSearch()), "</div>");
            this.$toolbar.append(s.join(""));
            r = this.$toolbar.find(".search input");
            r.off("keyup drop").on("keyup drop",
            function(w) {
                if (u.options.searchOnEnterKey) {
                    if (w.keyCode !== 13) {
                        return
                    }
                }
                clearTimeout(v);
                v = setTimeout(function() {
                    u.onSearch(w)
                },
                u.options.searchTimeOut)
            });
            if (n()) {
                r.off("mouseup").on("mouseup",
                function(w) {
                    clearTimeout(v);
                    v = setTimeout(function() {
                        u.onSearch(w)
                    },
                    u.options.searchTimeOut)
                })
            }
        }
    };
    c.prototype.onSearch = function(q) {
        var r = a.trim(a(q.currentTarget).val());
        if (this.options.trimOnSearch && a(q.currentTarget).val() !== r) {
            a(q.currentTarget).val(r)
        }
        if (r === this.searchText) {
            return
        }
        this.searchText = r;
        this.options.searchText = r;
        this.options.pageNumber = 1;
        this.initSearch();
        this.updatePagination();
        this.trigger("search", r)
    };
    c.prototype.initSearch = function() {
        var t = this;
        if (this.options.sidePagination !== "server") {
            var r = this.searchText && this.searchText.toLowerCase();
            var q = a.isEmptyObject(this.filterColumns) ? null: this.filterColumns;
            this.data = q ? a.grep(this.options.data,
            function(u, s) {
                for (var v in q) {
                    if (a.isArray(q[v])) {
                        if (a.inArray(u[v], q[v]) === -1) {
                            return false
                        }
                    } else {
                        if (u[v] !== q[v]) {
                            return false
                        }
                    }
                }
                return true
            }) : this.options.data;
            this.data = r ? a.grep(this.data,
            function(w, u) {
                for (var y in w) {
                    y = a.isNumeric(y) ? parseInt(y, 10) : y;
                    var z = w[y],
                    s = t.columns[h(t.columns, y)],
                    x = a.inArray(y, t.header.fields);
                    if (s && s.searchFormatter) {
                        z = e(s, t.header.formatters[x], [z, w, u], z)
                    }
                    var v = a.inArray(y, t.header.fields);
                    if (v !== -1 && t.header.searchables[v] && (typeof z === "string" || typeof z === "number")) {
                        if (t.options.strictSearch) {
                            if ((z + "").toLowerCase() === r) {
                                return true
                            }
                        } else {
                            if ((z + "").toLowerCase().indexOf(r) !== -1) {
                                return true
                            }
                        }
                    }
                }
                return false
            }) : this.data
        }
    };
    c.prototype.initPagination = function() {
        if (!this.options.pagination) {
            this.$pagination.hide();
            return
        } else {
            this.$pagination.show()
        }
        var F = this,
        z = [],
        q = false,
        A,
        y,
        G,
        v,
        r,
        w,
        t,
        s,
        u,
        x = this.getData();
        if (this.options.sidePagination !== "server") {
            this.options.totalRows = x.length
        }
        this.totalPages = 0;
        if (this.options.totalRows) {
            if (this.options.pageSize === this.options.formatAllRows()) {
                this.options.pageSize = this.options.totalRows;
                q = true
            } else {
                if (this.options.pageSize === this.options.totalRows) {
                    var D = typeof this.options.pageList === "string" ? this.options.pageList.replace("[", "").replace("]", "").replace(/ /g, "").toLowerCase().split(",") : this.options.pageList;
                    if (a.inArray(this.options.formatAllRows().toLowerCase(), D) > -1) {
                        q = true
                    }
                }
            }
            this.totalPages = ~~ ((this.options.totalRows - 1) / this.options.pageSize) + 1;
            this.options.totalPages = this.totalPages
        }
        if (this.totalPages > 0 && this.options.pageNumber > this.totalPages) {
            this.options.pageNumber = this.totalPages
        }
        this.pageFrom = (this.options.pageNumber - 1) * this.options.pageSize + 1;
        this.pageTo = this.options.pageNumber * this.options.pageSize;
        if (this.pageTo > this.options.totalRows) {
            this.pageTo = this.options.totalRows
        }
        z.push('<div class="pull-' + this.options.paginationDetailHAlign + ' pagination-detail">', '<span class="pagination-info">', this.options.onlyInfoPagination ? this.options.formatDetailPagination(this.options.totalRows) : this.options.formatShowingRows(this.pageFrom, this.pageTo, this.options.totalRows), "</span>");
        if (!this.options.onlyInfoPagination) {
            z.push('<span class="page-list">');
            var E = [p('<span class="btn-group %s">', this.options.paginationVAlign === "top" || this.options.paginationVAlign === "both" ? "dropdown": "dropup"), '<button type="button" class="btn btn-default ' + p(" btn-%s", this.options.iconSize) + ' dropdown-toggle" data-toggle="dropdown">', '<span class="page-size">', q ? this.options.formatAllRows() : this.options.pageSize, "</span>", ' <span class="caret"></span>', "</button>", '<ul class="dropdown-menu" role="menu">'],
            C = this.options.pageList;
            if (typeof this.options.pageList === "string") {
                var B = this.options.pageList.replace("[", "").replace("]", "").replace(/ /g, "").split(",");
                C = [];
                a.each(B,
                function(H, I) {
                    C.push(I.toUpperCase() === F.options.formatAllRows().toUpperCase() ? F.options.formatAllRows() : +I)
                })
            }
            a.each(C,
            function(I, J) {
                if (!F.options.smartDisplay || I === 0 || C[I - 1] <= F.options.totalRows) {
                    var H;
                    if (q) {
                        H = J === F.options.formatAllRows() ? ' class="active"': ""
                    } else {
                        H = J === F.options.pageSize ? ' class="active"': ""
                    }
                    E.push(p('<li%s><a href="javascript:void(0)">%s</a></li>', H, J))
                }
            });
            E.push("</ul></span>");
            z.push(this.options.formatRecordsPerPage(E.join("")));
            z.push("</span>");
            z.push("</div>", '<div class="pull-' + this.options.paginationHAlign + ' pagination">', '<ul class="pagination' + p(" pagination-%s", this.options.iconSize) + '">', '<li class="page-pre"><a href="javascript:void(0)">' + this.options.paginationPreText + "</a></li>");
            if (this.totalPages < 5) {
                y = 1;
                G = this.totalPages
            } else {
                y = this.options.pageNumber - 2;
                G = y + 4;
                if (y < 1) {
                    y = 1;
                    G = 5
                }
                if (G > this.totalPages) {
                    G = this.totalPages;
                    y = G - 4
                }
            }
            if (this.totalPages >= 6) {
                if (this.options.pageNumber >= 3) {
                    z.push('<li class="page-first' + (1 === this.options.pageNumber ? " active": "") + '">', '<a href="javascript:void(0)">', 1, "</a>", "</li>");
                    y++
                }
                if (this.options.pageNumber >= 4) {
                    if (this.options.pageNumber == 4 || this.totalPages == 6 || this.totalPages == 7) {
                        y--
                    } else {
                        z.push('<li class="page-first-separator disabled">', '<a href="javascript:void(0)">...</a>', "</li>")
                    }
                    G--
                }
            }
            if (this.totalPages >= 7) {
                if (this.options.pageNumber >= (this.totalPages - 2)) {
                    y--
                }
            }
            if (this.totalPages == 6) {
                if (this.options.pageNumber >= (this.totalPages - 2)) {
                    G++
                }
            } else {
                if (this.totalPages >= 7) {
                    if (this.totalPages == 7 || this.options.pageNumber >= (this.totalPages - 3)) {
                        G++
                    }
                }
            }
            for (A = y; A <= G; A++) {
                z.push('<li class="page-number' + (A === this.options.pageNumber ? " active": "") + '">', '<a href="javascript:void(0)">', A, "</a>", "</li>")
            }
            if (this.totalPages >= 8) {
                if (this.options.pageNumber <= (this.totalPages - 4)) {
                    z.push('<li class="page-last-separator disabled">', '<a href="javascript:void(0)">...</a>', "</li>")
                }
            }
            if (this.totalPages >= 6) {
                if (this.options.pageNumber <= (this.totalPages - 3)) {
                    z.push('<li class="page-last' + (this.totalPages === this.options.pageNumber ? " active": "") + '">', '<a href="javascript:void(0)">', this.totalPages, "</a>", "</li>")
                }
            }
            z.push('<li class="page-next"><a href="javascript:void(0)">' + this.options.paginationNextText + "</a></li>", "</ul>", "</div>")
        }
        this.$pagination.html(z.join(""));
        if (!this.options.onlyInfoPagination) {
            v = this.$pagination.find(".page-list a");
            r = this.$pagination.find(".page-first");
            w = this.$pagination.find(".page-pre");
            t = this.$pagination.find(".page-next");
            s = this.$pagination.find(".page-last");
            u = this.$pagination.find(".page-number");
            if (this.options.smartDisplay) {
                if (this.totalPages <= 1) {
                    this.$pagination.find("div.pagination").hide()
                }
                if (C.length < 2 || this.options.totalRows <= C[0]) {
                    this.$pagination.find("span.page-list").hide()
                }
                this.$pagination[this.getData().length ? "show": "hide"]()
            }
            if (q) {
                this.options.pageSize = this.options.formatAllRows()
            }
            v.off("click").on("click", a.proxy(this.onPageListChange, this));
            r.off("click").on("click", a.proxy(this.onPageFirst, this));
            w.off("click").on("click", a.proxy(this.onPagePre, this));
            t.off("click").on("click", a.proxy(this.onPageNext, this));
            s.off("click").on("click", a.proxy(this.onPageLast, this));
            u.off("click").on("click", a.proxy(this.onPageNumber, this))
        }
    };
    c.prototype.updatePagination = function(q) {
        if (q && a(q.currentTarget).hasClass("disabled")) {
            return
        }
        if (!this.options.maintainSelected) {
            this.resetRows()
        }
        this.initPagination();
        if (this.options.sidePagination === "server") {
            this.initServer()
        } else {
            this.initBody()
        }
        this.trigger("page-change", this.options.pageNumber, this.options.pageSize)
    };
    c.prototype.onPageListChange = function(r) {
        var q = a(r.currentTarget);
        q.parent().addClass("active").siblings().removeClass("active");
        this.options.pageSize = q.text().toUpperCase() === this.options.formatAllRows().toUpperCase() ? this.options.formatAllRows() : +q.text();
        this.$toolbar.find(".page-size").text(this.options.pageSize);
        this.updatePagination(r)
    };
    c.prototype.onPageFirst = function(q) {
        this.options.pageNumber = 1;
        this.updatePagination(q)
    };
    c.prototype.onPagePre = function(q) {
        if ((this.options.pageNumber - 1) == 0) {
            this.options.pageNumber = this.options.totalPages
        } else {
            this.options.pageNumber--
        }
        this.updatePagination(q)
    };
    c.prototype.onPageNext = function(q) {
        if ((this.options.pageNumber + 1) > this.options.totalPages) {
            this.options.pageNumber = 1
        } else {
            this.options.pageNumber++
        }
        this.updatePagination(q)
    };
    c.prototype.onPageLast = function(q) {
        this.options.pageNumber = this.totalPages;
        this.updatePagination(q)
    };
    c.prototype.onPageNumber = function(q) {
        if (this.options.pageNumber === +a(q.currentTarget).text()) {
            return
        }
        this.options.pageNumber = +a(q.currentTarget).text();
        this.updatePagination(q)
    };
    c.prototype.initBody = function(u) {
        var B = this,
        v = [],
        s = this.getData();
        this.trigger("pre-body", s);
        this.$body = this.$el.find(">tbody");
        if (!this.$body.length) {
            this.$body = a("<tbody></tbody>").appendTo(this.$el)
        }
        if (!this.options.pagination || this.options.sidePagination === "server") {
            this.pageFrom = 1;
            this.pageTo = s.length
        }
        for (var x = this.pageFrom - 1; x < this.pageTo; x++) {
            var z, y = s[x],
            A = {},
            r = [],
            t = "",
            q = {},
            w = [];
            A = e(this.options, this.options.rowStyle, [y, x], A);
            if (A && A.css) {
                for (z in A.css) {
                    r.push(z + ": " + A.css[z])
                }
            }
            q = e(this.options, this.options.rowAttributes, [y, x], q);
            if (q) {
                for (z in q) {
                    w.push(p('%s="%s"', z, g(q[z])))
                }
            }
            if (y._data && !a.isEmptyObject(y._data)) {
                a.each(y._data,
                function(C, D) {
                    if (C === "index") {
                        return
                    }
                    t += p(' data-%s="%s"', C, D)
                })
            }
            v.push("<tr", p(" %s", w.join(" ")), p(' id="%s"', a.isArray(y) ? undefined: y._id), p(' class="%s"', A.classes || (a.isArray(y) ? undefined: y._class)), p(' data-index="%s"', x), p(' data-uniqueid="%s"', y[this.options.uniqueId]), p("%s", t), ">");
            if (this.options.cardView) {
                v.push(p('<td colspan="%s">', this.header.fields.length))
            }
            if (!this.options.cardView && this.options.detailView) {
                v.push("<td>", '<a class="detail-icon" href="javascript:">', p('<i class="%s %s"></i>', this.options.iconsPrefix, this.options.icons.detailOpen), "</a>", "</td>")
            }
            a.each(this.header.fields,
            function(J, H) {
                var M = "",
                P = i(y, H, B.options.escape),
                O = "",
                C = {},
                I = "",
                D = B.header.classes[J],
                G = "",
                L = "",
                N = "",
                E = B.columns[h(B.columns, H)];
                if (!E.visible) {
                    return
                }
                A = p('style="%s"', r.concat(B.header.styles[J]).join("; "));
                P = e(E, B.header.formatters[J], [P, y, x], P);
                if (y["_" + H + "_id"]) {
                    I = p(' id="%s"', y["_" + H + "_id"])
                }
                if (y["_" + H + "_class"]) {
                    D = p(' class="%s"', y["_" + H + "_class"])
                }
                if (y["_" + H + "_rowspan"]) {
                    L = p(' rowspan="%s"', y["_" + H + "_rowspan"])
                }
                if (y["_" + H + "_title"]) {
                    N = p(' title="%s"', y["_" + H + "_title"])
                }
                C = e(B.header, B.header.cellStyles[J], [P, y, x], C);
                if (C.classes) {
                    D = p(' class="%s"', C.classes)
                }
                if (C.css) {
                    var F = [];
                    for (var K in C.css) {
                        F.push(K + ": " + C.css[K])
                    }
                    A = p('style="%s"', F.concat(B.header.styles[J]).join("; "))
                }
                if (y["_" + H + "_data"] && !a.isEmptyObject(y["_" + H + "_data"])) {
                    a.each(y["_" + H + "_data"],
                    function(Q, R) {
                        if (Q === "index") {
                            return
                        }
                        G += p(' data-%s="%s"', Q, R)
                    })
                }
                if (E.checkbox || E.radio) {
                    O = E.checkbox ? "checkbox": O;
                    O = E.radio ? "radio": O;
                    M = [p(B.options.cardView ? '<div class="card-view %s">': '<td class="bs-checkbox %s">', E["class"] || ""), '<div class="ftdms-checkbox checkbox-success"><input style="padding:0;width:16px;height:16px;margin:0;" ' + p(' id="datatable-checkbox-%s"', x) + p(' data-index="%s"', x) + p(' name="%s"', B.options.selectItemName) + p(' type="%s"', O) + p(' value="%s"', y[B.options.idField]) + p(' checked="%s"', P === true || (P && P.checked) ? "checked": undefined) + p(' disabled="%s"', !E.checkboxEnabled || (P && P.disabled) ? "disabled": undefined) + " />" + p('<label for="datatable-checkbox-%s"></label>', x) + "</div>", B.header.formatters[J] && typeof P === "string" ? P: "", B.options.cardView ? "</div>": "</td>"].join("");
                    y[B.header.stateField] = P === true || (P && P.checked)
                } else {
                    P = typeof P === "undefined" || P === null ? B.options.undefinedText: P;
                    M = B.options.cardView ? ['<div class="card-view">', B.options.showHeader ? p('<span class="title" %s>%s</span>', A, j(B.columns, "field", "title", H)) : "", p('<span class="value">%s</span>', P), "</div>"].join("") : [p("<td%s %s %s %s %s %s>", I, D, A, G, L, N), P, "</td>"].join("");
                    if (B.options.cardView && B.options.smartDisplay && P === "") {
                        M = '<div class="card-view"></div>'
                    }
                }
                v.push(M)
            });
            if (this.options.cardView) {
                v.push("</td>")
            }
            v.push("</tr>")
        }
        if (!v.length) {
            v.push('<tr class="no-records-found">', p('<td colspan="%s">%s</td>', this.$header.find("th").length, this.options.formatNoMatches()), "</tr>")
        }
        this.$body.html(v.join(""));
        if (!u) {
            this.scrollTo(0)
        }
        this.$body.find("> tr[data-index] > td").off("click dblclick").on("click dblclick",
        function(G) {
            var D = a(this),
            E = D.parent(),
            J = B.data[E.data("index")],
            I = D[0].cellIndex,
            H = B.header.fields[B.options.detailView && !B.options.cardView ? I - 1 : I],
            F = B.columns[h(B.columns, H)],
            K = i(J, H, B.options.escape);
            if (D.find(".detail-icon").length) {
                return
            }
            B.trigger(G.type === "click" ? "click-cell": "dbl-click-cell", H, K, J, D);
            B.trigger(G.type === "click" ? "click-row": "dbl-click-row", J, E);
            if (G.type === "click" && B.options.clickToSelect && F.clickToSelect) {
                var C = E.find(p('[name="%s"]', B.options.selectItemName));
                if (C.length) {
                    C[0].click()
                }
            }
        });
        this.$body.find("> tr[data-index] > td > .detail-icon").off("click").on("click",
        function() {
            var D = a(this),
            E = D.parent().parent(),
            G = E.data("index"),
            H = s[G];
            if (E.next().is("tr.detail-view")) {
                D.find("i").attr("class", p("%s %s", B.options.iconsPrefix, B.options.icons.detailOpen));
                E.next().remove();
                B.trigger("collapse-row", G, H)
            } else {
                D.find("i").attr("class", p("%s %s", B.options.iconsPrefix, B.options.icons.detailClose));
                E.after(p('<tr class="detail-view"><td colspan="%s"></td></tr>', E.find("td").length));
                var C = E.next().find("td");
                var F = e(B.options, B.options.detailFormatter, [G, H, C], "");
                if (C.length === 1) {
                    C.append(F)
                }
                B.trigger("expand-row", G, H, C)
            }
            B.resetView()
        });
        this.$selectItem = this.$body.find(p('[name="%s"]', this.options.selectItemName));
        this.$selectItem.off("click").on("click",
        function(E) {
            E.stopImmediatePropagation();
            var C = a(this),
            D = C.prop("checked"),
            F = B.data[C.data("index")];
            if (B.options.maintainSelected && a(this).is(":radio")) {
                a.each(B.options.data,
                function(G, H) {
                    H[B.header.stateField] = false
                })
            }
            F[B.header.stateField] = D;
            if (B.options.singleSelect) {
                B.$selectItem.not(this).each(function() {
                    B.data[a(this).data("index")][B.header.stateField] = false
                });
                B.$selectItem.filter(":checked").not(this).prop("checked", false)
            }
            B.updateSelected();
            B.trigger(D ? "check": "uncheck", F, C)
        });
        a.each(this.header.events,
        function(F, C) {
            if (!C) {
                return
            }
            if (typeof C === "string") {
                C = e(null, C)
            }
            var D = B.header.fields[F],
            E = a.inArray(D, B.getVisibleFields());
            if (B.options.detailView && !B.options.cardView) {
                E += 1
            }
            for (var G in C) {
                B.$body.find(">tr:not(.no-records-found)").each(function() {
                    var I = a(this),
                    H = I.find(B.options.cardView ? ".card-view": "td").eq(E),
                    L = G.indexOf(" "),
                    M = G.substring(0, L),
                    J = G.substring(L + 1),
                    K = C[G];
                    H.find(J).off(M).on(M,
                    function(N) {
                        var O = I.data("index"),
                        P = B.data[O],
                        Q = P[D];
                        K.apply(this, [N, Q, P, O])
                    })
                })
            }
        });
        this.updateSelected();
        this.resetView();
        this.trigger("post-body")
    };
    c.prototype.initServer = function(u, s) {
        var v = this,
        q = {},
        r = {
            searchText: this.searchText,
            sortName: this.options.sortName,
            sortOrder: this.options.sortOrder
        },
        t;
        if (this.options.pagination) {
            r.pageSize = this.options.pageSize === this.options.formatAllRows() ? this.options.totalRows: this.options.pageSize;
            r.pageNumber = this.options.pageNumber
        }
        if (!this.options.url && !this.options.ajax) {
            return
        }
        if (this.options.queryParamsType === "limit") {
            r = {
                search: r.searchText,
                sort: r.sortName,
                order: r.sortOrder
            };
            if (this.options.pagination) {
                r.limit = this.options.pageSize === this.options.formatAllRows() ? this.options.totalRows: this.options.pageSize;
                r.offset = this.options.pageSize === this.options.formatAllRows() ? 0 : this.options.pageSize * (this.options.pageNumber - 1)
            }
        }
        if (! (a.isEmptyObject(this.filterColumnsPartial))) {
            r.filter = JSON.stringify(this.filterColumnsPartial, null)
        }
        q = e(this.options, this.options.queryParams, [r], q);
        a.extend(q, s || {});
        if (q === false) {
            return
        }
        if (!u) {
            this.$tableLoading.show()
        }
        t = a.extend({},
        e(null, this.options.ajaxOptions), {
            type: this.options.method,
            url: this.options.url,
            data: this.options.contentType === "application/json" && this.options.method === "post" ? JSON.stringify(q) : q,
            cache: this.options.cache,
            contentType: this.options.contentType,
            dataType: this.options.dataType,
            success: function(w) {
                w = e(v.options, v.options.responseHandler, [w], w);
                v.load(w);
                v.trigger("load-success", w);
                if (!u) {
                    v.$tableLoading.hide()
                }
            },
            error: function(w) {
                v.trigger("load-error", w.status, w);
                if (!u) {
                    v.$tableLoading.hide()
                }
            }
        });
        if (this.options.ajax) {
            e(this, this.options.ajax, [t], null)
        } else {
            a.ajax(t)
        }
    };
    c.prototype.initSearchText = function() {
        if (this.options.search) {
            if (this.options.searchText !== "") {
                var q = this.$toolbar.find(".search input");
                q.val(this.options.searchText);
                this.onSearch({
                    currentTarget: q
                })
            }
        }
    };
    c.prototype.getCaret = function() {
        var q = this;
        a.each(this.$header.find("th"),
        function(r, s) {
            a(s).find(".sortable").removeClass("desc asc").addClass(a(s).data("field") === q.options.sortName ? q.options.sortOrder: "both")
        })
    };
    c.prototype.updateSelected = function() {
        var q = this.$selectItem.filter(":enabled").length && this.$selectItem.filter(":enabled").length === this.$selectItem.filter(":enabled").filter(":checked").length;
        this.$selectAll.add(this.$selectAll_).prop("checked", q);
        this.$selectItem.each(function() {
            a(this).closest("tr")[a(this).prop("checked") ? "addClass": "removeClass"]("selected")
        })
    };
    c.prototype.updateRows = function() {
        var q = this;
        this.$selectItem.each(function() {
            q.data[a(this).data("index")][q.header.stateField] = a(this).prop("checked")
        })
    };
    c.prototype.resetRows = function() {
        var q = this;
        a.each(this.data,
        function(r, s) {
            q.$selectAll.prop("checked", false);
            q.$selectItem.prop("checked", false);
            if (q.header.stateField) {
                s[q.header.stateField] = false
            }
        })
    };
    c.prototype.trigger = function(r) {
        var q = Array.prototype.slice.call(arguments, 1);
        r += ".bs.table";
        this.options[c.EVENTS[r]].apply(this.options, q);
        this.$el.trigger(a.Event(r), q);
        this.options.onAll(r, q);
        this.$el.trigger(a.Event("all.bs.table"), [r, q])
    };
    c.prototype.resetHeader = function() {
        clearTimeout(this.timeoutId_);
        this.timeoutId_ = setTimeout(a.proxy(this.fitHeader, this), this.$el.is(":hidden") ? 100 : 0)
    };
    c.prototype.fitHeader = function() {
        var x = this,
        t, w, u, v;
        if (x.$el.is(":hidden")) {
            x.timeoutId_ = setTimeout(a.proxy(x.fitHeader, x), 100);
            return
        }
        t = this.$tableBody.get(0);
        w = t.scrollWidth > t.clientWidth && t.scrollHeight > t.clientHeight + this.$header.outerHeight() ? m() : 0;
        this.$el.css("margin-top", -this.$header.outerHeight());
        u = a(":focus");
        if (u.length > 0) {
            var r = u.parents("th");
            if (r.length > 0) {
                var s = r.attr("data-field");
                if (s !== undefined) {
                    var q = this.$header.find("[data-field='" + s + "']");
                    if (q.length > 0) {
                        q.find(":input").addClass("focus-temp")
                    }
                }
            }
        }
        this.$header_ = this.$header.clone(true, true);
        this.$selectAll_ = this.$header_.find('[name="btSelectAll"]');
        this.$tableHeader.css({
            "margin-right": w
        }).find("table").css("width", this.$el.outerWidth()).html("").attr("class", this.$el.attr("class")).append(this.$header_);
        v = a(".focus-temp:visible:eq(0)");
        if (v.length > 0) {
            v.focus();
            this.$header.find(".focus-temp").removeClass("focus-temp")
        }
        this.$header.find("th[data-field]").each(function(z) {
            x.$header_.find(p('th[data-field="%s"]', a(this).data("field"))).data(a(this).data())
        });
        var y = this.getVisibleFields();
        this.$body.find(">tr:first-child:not(.no-records-found) > *").each(function(A) {
            var z = a(this),
            B = A;
            if (x.options.detailView && !x.options.cardView) {
                if (A === 0) {
                    x.$header_.find("th.detail").find(".fht-cell").width(z.innerWidth())
                }
                B = A - 1
            }
            x.$header_.find(p('th[data-field="%s"]', y[B])).find(".fht-cell").width(z.innerWidth())
        });
        this.$tableBody.off("scroll").on("scroll",
        function() {
            x.$tableHeader.scrollLeft(a(this).scrollLeft());
            if (x.options.showFooter && !x.options.cardView) {
                x.$tableFooter.scrollLeft(a(this).scrollLeft())
            }
        });
        x.trigger("post-header")
    };
    c.prototype.resetFooter = function() {
        var s = this,
        q = s.getData(),
        r = [];
        if (!this.options.showFooter || this.options.cardView) {
            return
        }
        if (!this.options.cardView && this.options.detailView) {
            r.push('<td><div class="th-inner">&nbsp;</div><div class="fht-cell"></div></td>')
        }
        a.each(this.columns,
        function(w, u) {
            var v = "",
            x = "",
            t = p(' class="%s"', u["class"]);
            if (!u.visible) {
                return
            }
            if (s.options.cardView && (!u.cardVisible)) {
                return
            }
            v = p("text-align: %s; ", u.falign ? u.falign: u.align);
            x = p("vertical-align: %s; ", u.valign);
            r.push("<td", t, p(' style="%s"', v + x), ">");
            r.push('<div class="th-inner">');
            r.push(e(u, u.footerFormatter, [q], "&nbsp;") || "&nbsp;");
            r.push("</div>");
            r.push('<div class="fht-cell"></div>');
            r.push("</div>");
            r.push("</td>")
        });
        this.$tableFooter.find("tr").html(r.join(""));
        clearTimeout(this.timeoutFooter_);
        this.timeoutFooter_ = setTimeout(a.proxy(this.fitFooter, this), this.$el.is(":hidden") ? 100 : 0)
    };
    c.prototype.fitFooter = function() {
        var t = this,
        q, r, s;
        clearTimeout(this.timeoutFooter_);
        if (this.$el.is(":hidden")) {
            this.timeoutFooter_ = setTimeout(a.proxy(this.fitFooter, this), 100);
            return
        }
        r = this.$el.css("width");
        s = r > this.$tableBody.width() ? m() : 0;
        this.$tableFooter.css({
            "margin-right": s
        }).find("table").css("width", r).attr("class", this.$el.attr("class"));
        q = this.$tableFooter.find("td");
        this.$body.find(">tr:first-child:not(.no-records-found) > *").each(function(v) {
            var u = a(this);
            q.eq(v).find(".fht-cell").width(u.innerWidth())
        })
    };
    c.prototype.toggleColumn = function(s, r, t) {
        if (s === -1) {
            return
        }
        this.columns[s].visible = r;
        this.initHeader();
        this.initSearch();
        this.initPagination();
        this.initBody();
        if (this.options.showColumns) {
            var q = this.$toolbar.find(".keep-open input").prop("disabled", false);
            if (t) {
                q.filter(p('[value="%s"]', s)).prop("checked", r)
            }
            if (q.filter(":checked").length <= this.options.minimumCountColumns) {
                q.filter(":checked").prop("disabled", true)
            }
        }
    };
    c.prototype.toggleRow = function(q, r, s) {
        if (q === -1) {
            return
        }
        this.$body.find(typeof q !== "undefined" ? p('tr[data-index="%s"]', q) : p('tr[data-uniqueid="%s"]', r))[s ? "show": "hide"]()
    };
    c.prototype.getVisibleFields = function() {
        var q = this,
        r = [];
        a.each(this.header.fields,
        function(u, t) {
            var s = q.columns[h(q.columns, t)];
            if (!s.visible) {
                return
            }
            r.push(t)
        });
        return r
    };
    c.prototype.resetView = function(t) {
        var r = 0;
        if (t && t.height) {
            this.options.height = t.height
        }
        this.$selectAll.prop("checked", this.$selectItem.length > 0 && this.$selectItem.length === this.$selectItem.filter(":checked").length);
        if (this.options.height) {
            var u = l(this.$toolbar),
            s = l(this.$pagination),
            q = this.options.height - u - s;
            this.$tableContainer.css("height", q + "px")
        }
        if (this.options.cardView) {
            this.$el.css("margin-top", "0");
            this.$tableContainer.css("padding-bottom", "0");
            return
        }
        if (this.options.showHeader && this.options.height) {
            this.$tableHeader.show();
            this.resetHeader();
            r += this.$header.outerHeight()
        } else {
            this.$tableHeader.hide();
            this.trigger("post-header")
        }
        if (this.options.showFooter) {
            this.resetFooter();
            if (this.options.height) {
                r += this.$tableFooter.outerHeight() + 1
            }
        }
        this.getCaret();
        this.$tableContainer.css("padding-bottom", r + "px");
        this.trigger("reset-view")
    };
    c.prototype.getData = function(q) {
        return (this.searchText || !a.isEmptyObject(this.filterColumns) || !a.isEmptyObject(this.filterColumnsPartial)) ? (q ? this.data.slice(this.pageFrom - 1, this.pageTo) : this.data) : (q ? this.options.data.slice(this.pageFrom - 1, this.pageTo) : this.options.data)
    };
    c.prototype.load = function(q) {
        var r = false;
        if (this.options.sidePagination === "server") {
            this.options.totalRows = q.total;
            r = q.fixedScroll;
            q = q[this.options.dataField]
        } else {
            if (!a.isArray(q)) {
                r = q.fixedScroll;
                q = q.data
            }
        }
        this.initData(q);
        this.initSearch();
        this.initPagination();
        this.initBody(r)
    };
    c.prototype.append = function(q) {
        this.initData(q, "append");
        this.initSearch();
        this.initPagination();
        this.initSort();
        this.initBody(true)
    };
    c.prototype.prepend = function(q) {
        this.initData(q, "prepend");
        this.initSearch();
        this.initPagination();
        this.initSort();
        this.initBody(true)
    };
    c.prototype.remove = function(s) {
        var r = this.options.data.length,
        q, t;
        if (!s.hasOwnProperty("field") || !s.hasOwnProperty("values")) {
            return
        }
        for (q = r - 1; q >= 0; q--) {
            t = this.options.data[q];
            if (!t.hasOwnProperty(s.field)) {
                continue
            }
            if (a.inArray(t[s.field], s.values) !== -1) {
                this.options.data.splice(q, 1)
            }
        }
        if (r === this.options.data.length) {
            return
        }
        this.initSearch();
        this.initPagination();
        this.initSort();
        this.initBody(true)
    };
    c.prototype.removeAll = function() {
        if (this.options.data.length > 0) {
            this.options.data.splice(0, this.options.data.length);
            this.initSearch();
            this.initPagination();
            this.initBody(true)
        }
    };
    c.prototype.getRowByUniqueId = function(s) {
        var w = this.options.uniqueId,
        t = this.options.data.length,
        q = null,
        r, u, v;
        for (r = t - 1; r >= 0; r--) {
            u = this.options.data[r];
            if (u.hasOwnProperty(w)) {
                v = u[w]
            } else {
                if (u._data.hasOwnProperty(w)) {
                    v = u._data[w]
                } else {
                    continue
                }
            }
            if (typeof v === "string") {
                s = s.toString()
            } else {
                if (typeof v === "number") {
                    if ((Number(v) === v) && (v % 1 === 0)) {
                        s = parseInt(s)
                    } else {
                        if ((v === Number(v)) && (v !== 0)) {
                            s = parseFloat(s)
                        }
                    }
                }
            }
            if (v === s) {
                q = u;
                break
            }
        }
        return q
    };
    c.prototype.removeByUniqueId = function(q) {
        var r = this.options.data.length,
        s = this.getRowByUniqueId(q);
        if (s) {
            this.options.data.splice(this.options.data.indexOf(s), 1)
        }
        if (r === this.options.data.length) {
            return
        }
        this.initSearch();
        this.initPagination();
        this.initBody(true)
    };
    c.prototype.updateByUniqueId = function(q) {
        var r;
        if (!q.hasOwnProperty("id") || !q.hasOwnProperty("row")) {
            return
        }
        r = a.inArray(this.getRowByUniqueId(q.id), this.options.data);
        if (r === -1) {
            return
        }
        a.extend(this.data[r], q.row);
        this.initSort();
        this.initBody(true)
    };
    c.prototype.insertRow = function(q) {
        if (!q.hasOwnProperty("index") || !q.hasOwnProperty("row")) {
            return
        }
        this.data.splice(q.index, 0, q.row);
        this.initSearch();
        this.initPagination();
        this.initSort();
        this.initBody(true)
    };
    c.prototype.updateRow = function(q) {
        if (!q.hasOwnProperty("index") || !q.hasOwnProperty("row")) {
            return
        }
        a.extend(this.data[q.index], q.row);
        this.initSort();
        this.initBody(true)
    };
    c.prototype.showRow = function(q) {
        if (!q.hasOwnProperty("index") && !q.hasOwnProperty("uniqueId")) {
            return
        }
        this.toggleRow(q.index, q.uniqueId, true)
    };
    c.prototype.hideRow = function(q) {
        if (!q.hasOwnProperty("index") && !q.hasOwnProperty("uniqueId")) {
            return
        }
        this.toggleRow(q.index, q.uniqueId, false)
    };
    c.prototype.getRowsHidden = function(s) {
        var r = a(this.$body[0]).children().filter(":hidden"),
        q = 0;
        if (s) {
            for (; q < r.length; q++) {
                a(r[q]).show()
            }
        }
        return r
    };
    c.prototype.mergeCells = function(w) {
        var x = w.index,
        s = a.inArray(w.field, this.getVisibleFields()),
        y = w.rowspan || 1,
        t = w.colspan || 1,
        u,
        v,
        r = this.$body.find(">tr"),
        q;
        if (this.options.detailView && !this.options.cardView) {
            s += 1
        }
        q = r.eq(x).find(">td").eq(s);
        if (x < 0 || s < 0 || x >= this.data.length) {
            return
        }
        for (u = x; u < x + y; u++) {
            for (v = s; v < s + t; v++) {
                r.eq(u).find(">td").eq(v).hide()
            }
        }
        q.attr("rowspan", y).attr("colspan", t).show()
    };
    c.prototype.updateCell = function(q) {
        if (!q.hasOwnProperty("index") || !q.hasOwnProperty("field") || !q.hasOwnProperty("value")) {
            return
        }
        this.data[q.index][q.field] = q.value;
        if (q.reinit === false) {
            return
        }
        this.initSort();
        this.initBody(true)
    };
    c.prototype.getOptions = function() {
        return this.options
    };
    c.prototype.getSelections = function() {
        var q = this;
        return a.grep(this.data,
        function(r) {
            return r[q.header.stateField]
        })
    };
    c.prototype.getAllSelections = function() {
        var q = this;
        return a.grep(this.options.data,
        function(r) {
            return r[q.header.stateField]
        })
    };
    c.prototype.checkAll = function() {
        this.checkAll_(true)
    };
    c.prototype.uncheckAll = function() {
        this.checkAll_(false)
    };
    c.prototype.checkAll_ = function(q) {
        var r;
        if (!q) {
            r = this.getSelections()
        }
        this.$selectAll.add(this.$selectAll_).prop("checked", q);
        this.$selectItem.filter(":enabled").prop("checked", q);
        this.updateRows();
        if (q) {
            r = this.getSelections()
        }
        this.trigger(q ? "check-all": "uncheck-all", r)
    };
    c.prototype.check = function(q) {
        this.check_(true, q)
    };
    c.prototype.uncheck = function(q) {
        this.check_(false, q)
    };
    c.prototype.check_ = function(r, s) {
        var q = this.$selectItem.filter(p('[data-index="%s"]', s)).prop("checked", r);
        this.data[s][this.header.stateField] = r;
        this.updateSelected();
        this.trigger(r ? "check": "uncheck", this.data[s], q)
    };
    c.prototype.checkBy = function(q) {
        this.checkBy_(true, q)
    };
    c.prototype.uncheckBy = function(q) {
        this.checkBy_(false, q)
    };
    c.prototype.checkBy_ = function(q, r) {
        if (!r.hasOwnProperty("field") || !r.hasOwnProperty("values")) {
            return
        }
        var t = this,
        s = [];
        a.each(this.options.data,
        function(v, w) {
            if (!w.hasOwnProperty(r.field)) {
                return false
            }
            if (a.inArray(w[r.field], r.values) !== -1) {
                var u = t.$selectItem.filter(":enabled").filter(p('[data-index="%s"]', v)).prop("checked", q);
                w[t.header.stateField] = q;
                s.push(w);
                t.trigger(q ? "check": "uncheck", w, u)
            }
        });
        this.updateSelected();
        this.trigger(q ? "check-some": "uncheck-some", s)
    };
    c.prototype.destroy = function() {
        this.$el.insertBefore(this.$container);
        a(this.options.toolbar).insertBefore(this.$el);
        this.$container.next().remove();
        this.$container.remove();
        this.$el.html(this.$el_.html()).css("margin-top", "0").attr("class", this.$el_.attr("class") || "")
    };
    c.prototype.showLoading = function() {
        this.$tableLoading.show()
    };
    c.prototype.hideLoading = function() {
        this.$tableLoading.hide()
    };
    c.prototype.togglePagination = function() {
        this.options.pagination = !this.options.pagination;
        var q = this.$toolbar.find('button[name="paginationSwitch"] i');
        if (this.options.pagination) {
            q.attr("class", this.options.iconsPrefix + " " + this.options.icons.paginationSwitchDown)
        } else {
            q.attr("class", this.options.iconsPrefix + " " + this.options.icons.paginationSwitchUp)
        }
        this.updatePagination()
    };
    c.prototype.refresh = function(q) {
        if (q && q.url) {
            this.options.url = q.url;
            this.options.pageNumber = 1
        }
        this.initServer(q && q.silent, q && q.query)
    };
    c.prototype.resetWidth = function() {
        if (this.options.showHeader && this.options.height) {
            this.fitHeader()
        }
        if (this.options.showFooter) {
            this.fitFooter()
        }
    };
    c.prototype.showColumn = function(q) {
        this.toggleColumn(h(this.columns, q), true, true)
    };
    c.prototype.hideColumn = function(q) {
        this.toggleColumn(h(this.columns, q), false, true)
    };
    c.prototype.getHiddenColumns = function() {
        return a.grep(this.columns,
        function(q) {
            return ! q.visible
        })
    };
    c.prototype.filterBy = function(q) {
        this.filterColumns = a.isEmptyObject(q) ? {}: q;
        this.options.pageNumber = 1;
        this.initSearch();
        this.updatePagination()
    };
    c.prototype.scrollTo = function(q) {
        if (typeof q === "string") {
            q = q === "bottom" ? this.$tableBody[0].scrollHeight: 0
        }
        if (typeof q === "number") {
            this.$tableBody.scrollTop(q)
        }
        if (typeof q === "undefined") {
            return this.$tableBody.scrollTop()
        }
    };
    c.prototype.getScrollPosition = function() {
        return this.scrollTo()
    };
    c.prototype.selectPage = function(q) {
        if (q > 0 && q <= this.options.totalPages) {
            this.options.pageNumber = q;
            this.updatePagination()
        }
    };
    c.prototype.prevPage = function() {
        if (this.options.pageNumber > 1) {
            this.options.pageNumber--;
            this.updatePagination()
        }
    };
    c.prototype.nextPage = function() {
        if (this.options.pageNumber < this.options.totalPages) {
            this.options.pageNumber++;
            this.updatePagination()
        }
    };
    c.prototype.toggleView = function() {
        this.options.cardView = !this.options.cardView;
        this.initHeader();
        this.initBody();
        this.trigger("toggle", this.options.cardView)
    };
    c.prototype.refreshOptions = function(q) {
        if (f(this.options, q, true)) {
            return
        }
        this.options = a.extend(this.options, q);
        this.trigger("refresh-options", this.options);
        this.destroy();
        this.init()
    };
    c.prototype.resetSearch = function(r) {
        var q = this.$toolbar.find(".search input");
        q.val(r || "");
        this.onSearch({
            currentTarget: q
        })
    };
    c.prototype.expandRow_ = function(r, s) {
        var q = this.$body.find(p('> tr[data-index="%s"]', s));
        if (q.next().is("tr.detail-view") === (r ? false: true)) {
            q.find("> td > .detail-icon").click()
        }
    };
    c.prototype.expandRow = function(q) {
        this.expandRow_(true, q)
    };
    c.prototype.collapseRow = function(q) {
        this.expandRow_(false, q)
    };
    c.prototype.expandAllRows = function(w) {
        if (w) {
            var q = this.$body.find(p('> tr[data-index="%s"]', 0)),
            x = this,
            r = null,
            t = false,
            v = -1;
            if (!q.next().is("tr.detail-view")) {
                q.find("> td > .detail-icon").click();
                t = true
            } else {
                if (!q.next().next().is("tr.detail-view")) {
                    q.next().find(".detail-icon").click();
                    t = true
                }
            }
            if (t) {
                try {
                    v = setInterval(function() {
                        r = x.$body.find("tr.detail-view").last().find(".detail-icon");
                        if (r.length > 0) {
                            r.click()
                        } else {
                            clearInterval(v)
                        }
                    },
                    1)
                } catch(s) {
                    clearInterval(v)
                }
            }
        } else {
            var y = this.$body.children();
            for (var u = 0; u < y.length; u++) {
                this.expandRow_(true, a(y[u]).data("index"))
            }
        }
    };
    c.prototype.collapseAllRows = function(r) {
        if (r) {
            this.expandRow_(false, 0)
        } else {
            var s = this.$body.children();
            for (var q = 0; q < s.length; q++) {
                this.expandRow_(false, a(s[q]).data("index"))
            }
        }
    };
    c.prototype.updateFormatText = function(q, r) {
        if (this.options[p("format%s", q)]) {
            if (typeof r === "string") {
                this.options[p("format%s", q)] = function() {
                    return r
                }
            } else {
                if (typeof r === "function") {
                    this.options[p("format%s", q)] = r
                }
            }
        }
        this.initToolbar();
        this.initPagination();
        this.initBody()
    };
    var b = ["getOptions", "getSelections", "getAllSelections", "getData", "load", "append", "prepend", "remove", "removeAll", "insertRow", "updateRow", "updateCell", "updateByUniqueId", "removeByUniqueId", "getRowByUniqueId", "showRow", "hideRow", "getRowsHidden", "mergeCells", "checkAll", "uncheckAll", "check", "uncheck", "checkBy", "uncheckBy", "refresh", "resetView", "resetWidth", "destroy", "showLoading", "hideLoading", "showColumn", "hideColumn", "getHiddenColumns", "filterBy", "scrollTo", "getScrollPosition", "selectPage", "prevPage", "nextPage", "togglePagination", "toggleView", "refreshOptions", "resetSearch", "expandRow", "collapseRow", "expandAllRows", "collapseAllRows", "updateFormatText"];
    a.fn.bootstrapTable = function(r) {
        var s, q = Array.prototype.slice.call(arguments, 1);
        this.each(function() {
            var t = a(this),
            u = t.data("bootstrap.table"),
            v = a.extend({},
            c.DEFAULTS, t.data(), typeof r === "object" && r);
            if (typeof r === "string") {
                if (a.inArray(r, b) < 0) {
                    throw new Error("Unknown method: " + r)
                }
                if (!u) {
                    return
                }
                s = u[r].apply(u, q);
                if (r === "destroy") {
                    t.removeData("bootstrap.table")
                }
            }
            if (!u) {
                t.data("bootstrap.table", (u = new c(this, v)))
            }
        });
        return typeof s === "undefined" ? this: s
    };
    a.fn.bootstrapTable.Constructor = c;
    a.fn.bootstrapTable.defaults = c.DEFAULTS;
    a.fn.bootstrapTable.columnDefaults = c.COLUMN_DEFAULTS;
    a.fn.bootstrapTable.locales = c.LOCALES;
    a.fn.bootstrapTable.methods = b;
    a.fn.bootstrapTable.utils = {
        sprintf: p,
        getFieldIndex: h,
        compareObjects: f,
        calculateObjectValue: e
    };
    a(function() {
        a('[data-toggle="table"]').bootstrapTable()
    })
} (jQuery);