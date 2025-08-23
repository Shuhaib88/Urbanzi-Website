(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/team.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>Team
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function Team() {
    _s();
    const [visibleCards, setVisibleCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cardRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const members = [
        {
            name: "GOVARDHAN",
            role: "Co-Founder \n Project Head \n \n \n",
            img: "/images/govardhan.webp",
            linkedin: "http://linkedin.com/in/govardhan-m-r-275b68260"
        },
        {
            name: "ABHIJITH",
            role: "Co-Founder \n Project Manager (Operations Lead) \n \n",
            img: "/images/person.png",
            linkedin: "http://linkedin.com/in/abhijith-j-d-b774b4264"
        },
        {
            name: "ABHISHEK",
            role: "Co-Founder \n Design Head \n \n \n",
            img: "/images/abhishek.jpg",
            linkedin: "http://linkedin.com/in/abhishek-vs-394833279"
        },
        {
            name: "SHUHAIB",
            role: "Founding Member \n Project Development Head \n \n \n",
            img: "/images/person.png",
            linkedin: "https://www.linkedin.com/in/muhammed-shuhaib-63b709227/"
        },
        {
            name: "ANOOP",
            role: "Co-Founder \n Partner \n \n \n",
            img: "/images/annop.webp",
            linkedin: ""
        },
        {
            name: "SAJIN",
            role: "Co-Founder \n Partner \n \n \n",
            img: "/images/sajin.webp",
            linkedin: "http://linkedin.com/in/sajin-sanilkumar-268333213"
        },
        {
            name: "ABHIRAM",
            role: "Founding Member \n Designer \n \n \n",
            img: "/images/person.png",
            linkedin: "http://linkedin.com/in/abhiram-sidhu-816aab223"
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Team.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "Team.useEffect": (entries)=>{
                    entries.forEach({
                        "Team.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                const index = parseInt(entry.target.dataset.index);
                                // Add staggered delay for each card
                                setTimeout({
                                    "Team.useEffect": ()=>{
                                        setVisibleCards({
                                            "Team.useEffect": (prev)=>new Set([
                                                    ...prev,
                                                    index
                                                ])
                                        }["Team.useEffect"]);
                                    }
                                }["Team.useEffect"], index * 150); // 150ms delay between each card
                            }
                        }
                    }["Team.useEffect"]);
                }
            }["Team.useEffect"], {
                threshold: 0.1,
                rootMargin: '50px'
            });
            // Observe all card elements
            cardRefs.current.forEach({
                "Team.useEffect": (ref)=>{
                    if (ref) observer.observe(ref);
                }
            }["Team.useEffect"]);
            return ({
                "Team.useEffect": ()=>{
                    cardRefs.current.forEach({
                        "Team.useEffect": (ref)=>{
                            if (ref) observer.unobserve(ref);
                        }
                    }["Team.useEffect"]);
                }
            })["Team.useEffect"];
        }
    }["Team.useEffect"], []);
    const renderCard = (member, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: (el)=>cardRefs.current[index] = el,
            "data-index": index,
            className: "w-[200px] rounded-3xl bg-gradient-to-r from-[#755530e5] via-[#714b9485] to-[#5c1552bd] p-1 transform transition-all duration-700 ease-out ".concat(visibleCards.has(index) ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'),
            style: {
                transitionDelay: visibleCards.has(index) ? '0ms' : '0ms'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-r from-[#755530e5] via-[#714b9485] to-[#5c1552bd] rounded-3xl p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative mx-auto h-32 w-32 rounded-full overflow-hidden mb-6 cursor-pointer hover:scale-105 transition-transform duration-200 group",
                        onClick: ()=>window.open(member.linkedin, '_blank', 'noopener,noreferrer'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 rounded-full bg-gradient-to-b from-[#755530e5] via-[#714b9485] to-[#5c1552bd]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/team.jsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: member.img,
                                alt: member.name,
                                className: "relative z-10 h-full w-full object-cover group-hover:brightness-110 transition-all duration-200"
                            }, void 0, false, {
                                fileName: "[project]/src/components/team.jsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -bottom-1 left-1/2 -translate-x-1/2 z-20 flex h-6 w-6 items-center justify-center rounded-full bg-black text-white text-xs font-bold group-hover:bg-blue-600 transition-colors duration-200",
                                children: "in"
                            }, void 0, false, {
                                fileName: "[project]/src/components/team.jsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 rounded-full bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-semibold",
                                    children: "View Profile"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/team.jsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/team.jsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/team.jsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-white text-sm font-bold tracking-[0.15em] mb-1",
                                children: member.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/team.jsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white/90 text-xs",
                                style: {
                                    whiteSpace: "pre-line"
                                },
                                children: member.role
                            }, void 0, false, {
                                fileName: "[project]/src/components/team.jsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/team.jsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/team.jsx",
                lineNumber: 65,
                columnNumber: 7
            }, this)
        }, index, false, {
            fileName: "[project]/src/components/team.jsx",
            lineNumber: 52,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "w-full bg-zinc-800 text-white py-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-6xl px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-center text-3xl md:text-4xl font-normal mb-12",
                    children: [
                        "Those Who Make Up Our",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/src/components/team.jsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this),
                        "Talented Team"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/team.jsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap justify-center gap-6",
                            children: members.slice(0, 4).map((member, index)=>renderCard(member, index))
                        }, void 0, false, {
                            fileName: "[project]/src/components/team.jsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap justify-center gap-6",
                            children: members.slice(4, 7).map((member, index)=>renderCard(member, index + 4))
                        }, void 0, false, {
                            fileName: "[project]/src/components/team.jsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/team.jsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/team.jsx",
            lineNumber: 103,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/team.jsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
_s(Team, "bTXRFFzCD6wJMYOcQmUL7uK7e0o=");
_c = Team;
var _c;
__turbopack_context__.k.register(_c, "Team");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_team_jsx_7fa99cee._.js.map