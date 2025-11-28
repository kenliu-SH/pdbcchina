(function (
  Clazz,
  Clazz_getClassName,
  Clazz_newLongArray,
  Clazz_doubleToByte,
  Clazz_doubleToInt,
  Clazz_doubleToLong,
  Clazz_declarePackage,
  Clazz_instanceOf,
  Clazz_load,
  Clazz_instantialize,
  Clazz_decorateAsClass,
  Clazz_floatToInt,
  Clazz_floatToLong,
  Clazz_makeConstructor,
  Clazz_defineEnumConstant,
  Clazz_exceptionOf,
  Clazz_newIntArray,
  Clazz_defineStatics,
  Clazz_newFloatArray,
  Clazz_declareType,
  Clazz_prepareFields,
  Clazz_superConstructor,
  Clazz_newByteArray,
  Clazz_declareInterface,
  Clazz_p0p,
  Clazz_pu$h,
  Clazz_newShortArray,
  Clazz_innerTypeInstance,
  Clazz_isClassDefined,
  Clazz_prepareCallback,
  Clazz_newArray,
  Clazz_castNullAs,
  Clazz_floatToShort,
  Clazz_superCall,
  Clazz_decorateAsType,
  Clazz_newBooleanArray,
  Clazz_newCharArray,
  Clazz_implementOf,
  Clazz_newDoubleArray,
  Clazz_overrideConstructor,
  Clazz_clone,
  Clazz_doubleToShort,
  Clazz_getInheritedLevel,
  Clazz_getParamsType,
  Clazz_isAF,
  Clazz_isAB,
  Clazz_isAI,
  Clazz_isAS,
  Clazz_isASS,
  Clazz_isAP,
  Clazz_isAFloat,
  Clazz_isAII,
  Clazz_isAFF,
  Clazz_isAFFF,
  Clazz_tryToSearchAndExecute,
  Clazz_getStackTrace,
  Clazz_inheritArgs,
  Clazz_alert,
  Clazz_defineMethod,
  Clazz_overrideMethod,
  Clazz_declareAnonymous,
  //,Clazz_checkPrivateMethod
  Clazz_cloneFinals,
) {
  var $t$;
  //var c$;
  Clazz_declarePackage('J.api');
  Clazz_declareInterface(J.api, 'JmolSceneGenerator');
  Clazz_declarePackage('J.adapter.readers.pymol');
  Clazz_load(
    ['java.util.Hashtable', 'JU.Lst'],
    'J.adapter.readers.pymol.PickleReader',
    ['java.lang.Double', '$.Long', 'JU.AU', 'JU.Logger'],
    function () {
      c$ = Clazz_decorateAsClass(
        function () {
          this.vwr = null;
          this.binaryDoc = null;
          this.stack = null;
          this.marks = null;
          this.build = null;
          this.memo = null;
          this.logging = false;
          this.id = 0;
          this.markCount = 0;
          this.filePt = 0;
          this.emptyListPt = 0;
          this.thisSection = null;
          this.inMovie = false;
          this.inNames = false;
          this.thisName = null;
          this.lastMark = 0;
          this.retrieveCount = 0;
          this.ipt = 0;
          this.aTemp = null;
          Clazz_instantialize(this, arguments);
        },
        J.adapter.readers.pymol,
        'PickleReader',
      );
      Clazz_prepareFields(c$, function () {
        this.stack = new JU.Lst();
        this.marks = new JU.Lst();
        this.build = new JU.Lst();
        this.memo = new java.util.Hashtable();
        this.aTemp = Clazz_newByteArray(16, 0);
      });
      Clazz_makeConstructor(
        c$,
        function (doc, vwr) {
          this.binaryDoc = doc;
          this.vwr = vwr;
          this.stack.ensureCapacity(1000);
        },
        'javajs.api.GenericBinaryDocument,JV.Viewer',
      );
      Clazz_defineMethod(
        c$,
        'log',
        function (s) {
          this.vwr.log(s + '\0');
        },
        '~S',
      );
      Clazz_defineMethod(
        c$,
        'getMap',
        function (logging) {
          this.logging = logging;
          var b;
          var i;
          var mark;
          var d;
          var o;
          var a;
          var map;
          var l;
          this.ipt = 0;
          var going = true;
          while (going) {
            b = this.binaryDoc.readByte();
            this.ipt++;
            switch (b) {
              case 125:
                this.push(new java.util.Hashtable());
                break;
              case 97:
                o = this.pop();
                this.peek().addLast(o);
                break;
              case 101:
                l = this.getObjects(this.getMark());
                if (this.inNames && this.markCount == 2) {
                  var pt = this.binaryDoc.getPosition();
                  var l2 = new JU.Lst();
                  l2.addLast(Integer.$valueOf(this.filePt));
                  l2.addLast(Integer.$valueOf(pt - this.filePt));
                  l.addLast(l2);
                }
                this.peek().addAll(l);
                break;
              case 71:
                d = this.binaryDoc.readDouble();
                this.push(Double.$valueOf(d));
                break;
              case 74:
                i = this.binaryDoc.readIntLE();
                this.push(Integer.$valueOf(i));
                break;
              case 75:
                i = this.binaryDoc.readByte() & 0xff;
                this.push(Integer.$valueOf(i));
                break;
              case 77:
                i =
                  ((this.binaryDoc.readByte() & 0xff) |
                    ((this.binaryDoc.readByte() & 0xff) << 8)) &
                  0xffff;
                this.push(Integer.$valueOf(i));
                break;
              case 113:
                i = this.binaryDoc.readByte();
                this.putMemo(i, false);
                break;
              case 114:
                i = this.binaryDoc.readIntLE();
                this.putMemo(i, true);
                break;
              case 104:
                i = this.binaryDoc.readByte();
                o = this.getMemo(i);
                this.push(o == null ? 'BINGET' + ++this.id : o);
                break;
              case 106:
                i = this.binaryDoc.readIntLE();
                o = this.getMemo(i);
                this.push(o == null ? 'LONG_BINGET' + ++this.id : o);
                break;
              case 85:
                i = this.binaryDoc.readByte() & 0xff;
                a = Clazz_newByteArray(i, 0);
                this.binaryDoc.readByteArray(a, 0, i);
                if (
                  this.inNames &&
                  this.markCount == 3 &&
                  this.lastMark == this.stack.size()
                ) {
                  this.thisName = this.bytesToString(a);
                  this.filePt = this.emptyListPt;
                }
                this.push(a);
                break;
              case 84:
                i = this.binaryDoc.readIntLE();
                a = Clazz_newByteArray(i, 0);
                this.binaryDoc.readByteArray(a, 0, i);
                this.push(a);
                break;
              case 88:
                i = this.binaryDoc.readIntLE();
                a = Clazz_newByteArray(i, 0);
                this.binaryDoc.readByteArray(a, 0, i);
                this.push(a);
                break;
              case 93:
                this.emptyListPt = this.binaryDoc.getPosition() - 1;
                this.push(new JU.Lst());
                break;
              case 99:
                l = new JU.Lst();
                l.addLast('global');
                l.addLast(this.readStringAsBytes());
                l.addLast(this.readStringAsBytes());
                this.push(l);
                break;
              case 98:
                o = this.pop();
                this.build.addLast(o);
                break;
              case 40:
                this.putMark(this.stack.size());
                break;
              case 78:
                this.push(null);
                break;
              case 111:
                this.push(this.getObjects(this.getMark()));
                break;
              case 115:
                o = this.pop();
                var s = this.bytesToString(this.pop());
                this.peek().put(s, o);
                break;
              case 117:
                mark = this.getMark();
                l = this.getObjects(mark);
                o = this.peek();
                if (Clazz_instanceOf(o, JU.Lst)) {
                  for (i = 0; i < l.size(); i++) {
                    var oo = l.get(i);
                    o.addLast(oo);
                  }
                } else {
                  map = o;
                  for (i = l.size(); --i >= 0; ) {
                    o = l.get(i);
                    var key = this.bytesToString(l.get(--i));
                    map.put(key, o);
                  }
                }
                break;
              case 46:
                going = false;
                break;
              case 116:
                this.push(this.getObjects(this.getMark()));
                break;
              case 76:
                var val = String.instantialize(this.readStringAsBytes());
                if (val.endsWith('L')) {
                  val = val.substring(0, val.length - 1);
                }
                this.push(Long.$valueOf(val));
                break;
              case 82:
                this.pop();
                break;
              case 73:
                s = this.bytesToString(this.readStringAsBytes());
                try {
                  this.push(Integer.$valueOf(Integer.parseInt(s)));
                } catch (e) {
                  if (Clazz_exceptionOf(e, Exception)) {
                    var ll = Long.parseLong(s);
                    this.push(Integer.$valueOf(ll & 0xffffffff));
                  } else {
                    throw e;
                  }
                }
                break;
              case 41:
                this.push(new JU.Lst());
                break;
              default:
                JU.Logger.error(
                  'Pickle reader error: ' +
                    b +
                    ' ' +
                    this.binaryDoc.getPosition(),
                );
            }
          }
          if (logging) this.log('');
          JU.Logger.info(
            'PyMOL Pickle reader cached ' +
              this.memo.size() +
              ' tokens; retrieved ' +
              this.retrieveCount,
          );
          map = this.stack.removeItemAt(0);
          if (map.size() == 0)
            for (i = this.stack.size(); --i >= 0; ) {
              o = this.stack.get(i--);
              a = this.stack.get(i);
              map.put(this.bytesToString(a), o);
            }
          this.memo = null;
          return map;
        },
        '~B',
      );
      Clazz_defineMethod(
        c$,
        'bytesToString',
        function (o) {
          try {
            return JU.AU.isAB(o)
              ? String.instantialize(o, 'UTF-8')
              : o.toString();
          } catch (e) {
            if (Clazz_exceptionOf(e, java.io.UnsupportedEncodingException)) {
              return '';
            } else {
              throw e;
            }
          }
        },
        '~O',
      );
      Clazz_defineMethod(
        c$,
        'putMemo',
        function (i, doCheck) {
          var o = this.peek();
          if (JU.AU.isAB(o)) o = this.bytesToString(o);
          if (Clazz_instanceOf(o, String)) {
            this.memo.put(Integer.$valueOf(i), o);
          }
        },
        '~N,~B',
      );
      Clazz_defineMethod(
        c$,
        'getMemo',
        function (i) {
          var o = this.memo.get(Integer.$valueOf(i));
          if (o == null) return o;
          this.retrieveCount++;
          return o;
        },
        '~N',
      );
      Clazz_defineMethod(
        c$,
        'getObjects',
        function (mark) {
          var n = this.stack.size() - mark;
          var args = new JU.Lst();
          args.ensureCapacity(n);
          for (var i = mark; i < this.stack.size(); ++i) {
            var oo = this.stack.get(i);
            args.addLast(oo);
          }
          for (var i = this.stack.size(); --i >= mark; )
            this.stack.removeItemAt(i);

          return args;
        },
        '~N',
      );
      Clazz_defineMethod(c$, 'readStringAsBytes', function () {
        var n = 0;
        var a = this.aTemp;
        while (true) {
          var b = this.binaryDoc.readByte();
          if (b == 0xa) break;
          if (n >= a.length)
            a = this.aTemp = JU.AU.arrayCopyByte(a, a.length * 2);
          a[n++] = b;
        }
        return JU.AU.arrayCopyByte(a, n);
      });
      Clazz_defineMethod(
        c$,
        'putMark',
        function (i) {
          if (this.logging)
            this.log(
              '\n ' + Integer.toHexString(this.binaryDoc.getPosition()) + ' [',
            );
          this.marks.addLast(Integer.$valueOf((this.lastMark = i)));
          this.markCount++;
          switch (this.markCount) {
            case 2:
              var o = this.stack.get(i - 2);
              if (JU.AU.isAB(o)) {
                this.thisSection = this.bytesToString(o);
                this.inMovie = 'movie'.equals(this.thisSection);
                this.inNames = 'names'.equals(this.thisSection);
              }
              break;
            default:
              break;
          }
        },
        '~N',
      );
      Clazz_defineMethod(c$, 'getMark', function () {
        return this.marks.removeItemAt(--this.markCount).intValue();
      });
      Clazz_defineMethod(
        c$,
        'push',
        function (o) {
          if (
            this.logging &&
            (Clazz_instanceOf(o, String) ||
              Clazz_instanceOf(o, Double) ||
              Clazz_instanceOf(o, Integer))
          )
            this.log((Clazz_instanceOf(o, String) ? "'" + o + "'" : o) + ', ');
          this.stack.addLast(o);
        },
        '~O',
      );
      Clazz_defineMethod(c$, 'peek', function () {
        return this.stack.get(this.stack.size() - 1);
      });
      Clazz_defineMethod(c$, 'pop', function () {
        return this.stack.removeItemAt(this.stack.size() - 1);
      });
      Clazz_defineStatics(
        c$,
        'APPEND',
        97,
        'APPENDS',
        101,
        'BINFLOAT',
        71,
        'BININT',
        74,
        'BININT1',
        75,
        'BININT2',
        77,
        'BINPUT',
        113,
        'BINSTRING',
        84,
        'BINUNICODE',
        88,
        'BUILD',
        98,
        'EMPTY_DICT',
        125,
        'EMPTY_LIST',
        93,
        'GLOBAL',
        99,
        'LONG_BINPUT',
        114,
        'MARK',
        40,
        'NONE',
        78,
        'OBJ',
        111,
        'SETITEM',
        115,
        'SETITEMS',
        117,
        'SHORT_BINSTRING',
        85,
        'STOP',
        46,
        'BINGET',
        104,
        'LONG_BINGET',
        106,
        'TUPLE',
        116,
        'INT',
        73,
        'EMPTY_TUPLE',
        41,
        'LONG',
        76,
        'REDUCE',
        82,
      );
    },
  );
  Clazz_declarePackage('J.api');
  Clazz_declareInterface(J.api, 'PymolAtomReader');
  Clazz_declarePackage('J.adapter.readers.pymol');
  Clazz_load(
    ['java.util.Hashtable'],
    'J.adapter.readers.pymol.PyMOL',
    ['JU.Logger'],
    function () {
      c$ = Clazz_declareType(J.adapter.readers.pymol, 'PyMOL');
      c$.getRGB = Clazz_defineMethod(
        c$,
        'getRGB',
        function (color) {
          if (J.adapter.readers.pymol.PyMOL.moreColors != null) {
            var key = Integer.$valueOf(color);
            var c = J.adapter.readers.pymol.PyMOL.moreColors.get(key);
            if (c != null) return c.intValue();
          }
          if (color < J.adapter.readers.pymol.PyMOL.colors.length)
            return J.adapter.readers.pymol.PyMOL.colors[color];
          return 0;
        },
        '~N',
      );
      c$.addColor = Clazz_defineMethod(
        c$,
        'addColor',
        function (id, value) {
          J.adapter.readers.pymol.PyMOL.moreColors.put(
            id,
            Integer.$valueOf(value),
          );
        },
        'Integer,~N',
      );
      c$.getDefaultSetting = Clazz_defineMethod(
        c$,
        'getDefaultSetting',
        function (i, pymolVersion) {
          switch (i) {
            case 173:
            case 236:
            case 570:
            case 235:
            case 526:
            case 210:
            case 376:
            case 144:
            case 574:
            case 146:
            case 378:
            case 530:
            case 531:
            case 532:
            case 156:
              return -1;
            case 327:
            case 569:
            case 155:
            case 90:
            case 448:
            case 214:
            case 194:
            case 193:
            case 84:
            case 88:
            case 111:
            case 529:
            case 19:
              return 1;
            case 172:
            case 571:
            case 666:
            case 524:
            case 279:
            case 198:
            case 138:
            case 6:
            case 180:
            case 143:
            case 338:
            case 49:
            case 64:
            case 441:
            case 118:
            case 581:
            case 749:
            case 23:
            case 20:
            case 237:
            case 203:
            case 344:
              return 0;
            case 92:
              return 0.2;
            case 96:
              return 1.4;
            case 65:
              return 0.25;
            case 192:
              return 0.45;
            case 453:
              return 14;
            case 66:
              return -6;
            case 328:
              return 5;
            case 213:
            case 382:
            case 431:
              return 2;
            case 361:
            case 380:
              return 4;
            case 377:
              return 0.4;
            case 379:
              return 0.6;
            case 381:
              return 1.5;
            case 103:
              return 0.5;
            case 4:
              return 1.4;
            case 107:
              return 2.5;
            case 44:
              return 1.49;
            case 106:
              return 3;
            case 152:
              return 20;
            case 550:
              return 30;
            case 21:
              return 0.25;
            case 100:
              return 1.2;
            case 101:
              return 0.25;
            default:
              JU.Logger.error(
                'PyMOL ' +
                  pymolVersion +
                  ' default float setting not found: ' +
                  i,
              );
              return 0;
          }
        },
        '~N,~N',
      );
      c$.getDefaultSettingPt = Clazz_defineMethod(
        c$,
        'getDefaultSettingPt',
        function (i, pymolVersion, pt) {
          switch (i) {
            case 471:
              pt.set(0, 0, 0.75);
              break;
            default:
              JU.Logger.error(
                'PyMOL ' +
                  pymolVersion +
                  ' default point setting not found: ' +
                  i,
              );
              break;
          }
          return pt;
        },
        '~N,~N,JU.P3',
      );
      c$.getDefaultSettingS = Clazz_defineMethod(
        c$,
        'getDefaultSettingS',
        function (i, pymolVersion) {
          switch (i) {
            case 342:
              break;
            default:
              JU.Logger.info(
                'PyMOL ' + pymolVersion + ' does not have String setting ' + i,
              );
              break;
          }
          return '';
        },
        '~N,~N',
      );
      c$.getVArray = Clazz_defineMethod(
        c$,
        'getVArray',
        function (version) {
          var va = null;
          var varray = null;
          switch (version) {
            case 176:
              va = J.adapter.readers.pymol.PyMOL.v176;
              break;
            case 177:
              va = J.adapter.readers.pymol.PyMOL.v177;
              break;
            case 181:
              va = J.adapter.readers.pymol.PyMOL.v181;
              break;
          }
          if (va != null) {
            varray = Clazz_newIntArray(60, 0);
            for (var i = 0; i < va.length; ) varray[va[i++]] = va[i++];
          }
          return varray;
        },
        '~N',
      );
      c$.getVArrayB = Clazz_defineMethod(
        c$,
        'getVArrayB',
        function (version) {
          var va = null;
          var varray = null;
          switch (version) {
            case 176:
              va = J.adapter.readers.pymol.PyMOL.v176b;
              break;
            case 177:
              va = J.adapter.readers.pymol.PyMOL.v177b;
              break;
            case 181:
              va = J.adapter.readers.pymol.PyMOL.v181b;
              break;
          }
          if (va != null) {
            varray = Clazz_newIntArray(10, 0);
            for (var i = 0; i < va.length; ) varray[va[i++]] = va[i++];
          }
          return varray;
        },
        '~N',
      );
      Clazz_defineStatics(
        c$,
        'OBJECT_SELECTION',
        -1,
        'OBJECT_MOLECULE',
        1,
        'OBJECT_MAPDATA',
        2,
        'OBJECT_MAPMESH',
        3,
        'OBJECT_MEASURE',
        4,
        'OBJECT_CALLBACK',
        5,
        'OBJECT_CGO',
        6,
        'OBJECT_SURFACE',
        7,
        'OBJECT_GADGET',
        8,
        'OBJECT_CALCULATOR',
        9,
        'OBJECT_SLICE',
        10,
        'OBJECT_ALIGNMENT',
        11,
        'OBJECT_GROUP',
        12,
      );
      c$.REP_LIST = c$.prototype.REP_LIST = Clazz_newArray(-1, [
        'sticks',
        'spheres',
        'surface',
        'labels',
        'nb_spheres',
        'cartoon',
        'ribbon',
        'lines',
        'mesh',
        'dots',
        'dashes',
        'nonbonded',
        'cell',
        'cgo',
        'callback',
        'extent',
        'slice',
        'angles',
        'dihedrals',
        'ellipsoid',
        'volume',
      ]);
      Clazz_defineStatics(
        c$,
        'REP_STICKS',
        0,
        'REP_SPHERES',
        1,
        'REP_SURFACE',
        2,
        'REP_LABELS',
        3,
        'REP_NBSPHERES',
        4,
        'REP_CARTOON',
        5,
        'REP_RIBBON',
        6,
        'REP_LINES',
        7,
        'REP_MESH',
        8,
        'REP_DOTS',
        9,
        'REP_DASHES',
        10,
        'REP_NONBONDED',
        11,
        'REP_CELL',
        12,
        'REP_CGO',
        13,
        'REP_CALLBACK',
        14,
        'REP_EXTENT',
        15,
        'REP_SLICE',
        16,
        'REP_ANGLES',
        17,
        'REP_DIHEDRALS',
        18,
        'REP_ELLIPSOID',
        19,
        'REP_VOLUME',
        20,
        'REP_MAX',
        21,
        'REP_JMOL_TRACE',
        21,
        'REP_JMOL_PUTTY',
        22,
        'REP_JMOL_MAX',
        23,
        'FLAG_exfoliate',
        0x01000000,
        'FLAG_ignore',
        0x02000000,
        'FLAG_no_smooth',
        0x04000000,
        'FLAG_polymer',
        0x08000000,
        'FLAG_solvent',
        0x10000000,
        'FLAG_organic',
        0x20000000,
        'FLAG_inorganic',
        0x40000000,
      );
      c$.FLAG_NOSURFACE = c$.prototype.FLAG_NOSURFACE =
        J.adapter.readers.pymol.PyMOL.FLAG_ignore |
        J.adapter.readers.pymol.PyMOL.FLAG_exfoliate;
      Clazz_defineStatics(
        c$,
        'active_selections',
        351,
        'alignment_as_cylinders',
        692,
        'all_states',
        49,
        'ambient',
        7,
        'ambient_occlusion_mode',
        702,
        'ambient_occlusion_scale',
        703,
        'ambient_occlusion_smooth',
        704,
        'anaglyph_mode',
        706,
        'angle_color',
        575,
        'angle_label_position',
        406,
        'angle_size',
        405,
        'animation',
        388,
        'animation_duration',
        389,
        'antialias',
        12,
        'async_builds',
        506,
        'ati_bugs',
        585,
        'atom_name_wildcard',
        413,
        'atom_type_format',
        660,
        'auto_classify_atoms',
        360,
        'auto_color',
        238,
        'auto_color_next',
        239,
        'auto_copy_images',
        557,
        'auto_defer_atom_count',
        653,
        'auto_defer_builds',
        567,
        'auto_dss',
        323,
        'auto_hide_selections',
        79,
        'auto_indicate_flags',
        147,
        'auto_number_selections',
        443,
        'auto_overlay',
        603,
        'auto_remove_hydrogens',
        158,
        'auto_rename_duplicate_objects',
        561,
        'auto_sculpt',
        162,
        'auto_show_lines',
        51,
        'auto_show_nonbonded',
        72,
        'auto_show_selections',
        78,
        'auto_show_spheres',
        420,
        'auto_zoom',
        60,
        'autoclose_dialogs',
        661,
        'backface_cull',
        75,
        'batch_prefix',
        187,
        'bg_gradient',
        662,
        'bg_image_filename',
        712,
        'bg_image_mode',
        713,
        'bg_image_tilesize',
        714,
        'bg_image_linear',
        715,
        'bg_rgb',
        6,
        'bg_rgb_bottom',
        664,
        'bg_rgb_top',
        663,
        'bonding_vdw_cutoff',
        0,
        'button_mode',
        63,
        'button_mode_name',
        330,
        'cache_display',
        73,
        'cache_frames',
        31,
        'cache_max',
        578,
        'cache_memory',
        264,
        'cache_mode',
        573,
        'cartoon_color',
        236,
        'cartoon_cylindrical_helices',
        180,
        'cartoon_debug',
        105,
        'cartoon_discrete_colors',
        125,
        'cartoon_dumbbell_length',
        115,
        'cartoon_dumbbell_radius',
        117,
        'cartoon_dumbbell_width',
        116,
        'cartoon_fancy_helices',
        118,
        'cartoon_fancy_sheets',
        119,
        'cartoon_flat_cycles',
        260,
        'cartoon_flat_sheets',
        113,
        'cartoon_helix_radius',
        181,
        'cartoon_highlight_color',
        241,
        'cartoon_ladder_color',
        450,
        'cartoon_ladder_mode',
        448,
        'cartoon_ladder_radius',
        449,
        'cartoon_loop_cap',
        432,
        'cartoon_loop_quality',
        93,
        'cartoon_loop_radius',
        92,
        'cartoon_nucleic_acid_as_cylinders',
        693,
        'cartoon_nucleic_acid_color',
        451,
        'cartoon_nucleic_acid_mode',
        361,
        'cartoon_oval_length',
        100,
        'cartoon_oval_quality',
        102,
        'cartoon_oval_width',
        101,
        'cartoon_power',
        94,
        'cartoon_power_b',
        95,
        'cartoon_putty_quality',
        378,
        'cartoon_putty_radius',
        377,
        'cartoon_putty_range',
        382,
        'cartoon_putty_scale_max',
        380,
        'cartoon_putty_scale_min',
        379,
        'cartoon_putty_scale_power',
        381,
        'cartoon_putty_transform',
        581,
        'cartoon_rect_length',
        96,
        'cartoon_rect_width',
        97,
        'cartoon_refine',
        123,
        'cartoon_refine_normals',
        112,
        'cartoon_refine_tips',
        124,
        'cartoon_ring_color',
        429,
        'cartoon_ring_finder',
        430,
        'cartoon_ring_mode',
        427,
        'cartoon_ring_radius',
        508,
        'cartoon_ring_transparency',
        452,
        'cartoon_ring_width',
        428,
        'cartoon_round_helices',
        111,
        'cartoon_sampling',
        91,
        'cartoon_side_chain_helper',
        383,
        'cartoon_smooth_cycles',
        259,
        'cartoon_smooth_first',
        257,
        'cartoon_smooth_last',
        258,
        'cartoon_smooth_loops',
        114,
        'cartoon_throw',
        122,
        'cartoon_trace_atoms',
        269,
        'cartoon_transparency',
        279,
        'cartoon_tube_cap',
        431,
        'cartoon_tube_quality',
        104,
        'cartoon_tube_radius',
        103,
        'cartoon_use_shader',
        643,
        'cavity_cull',
        13,
        'cgo_debug',
        674,
        'cgo_dot_radius',
        303,
        'cgo_dot_width',
        302,
        'cgo_ellipsoid_quality',
        564,
        'cgo_lighting',
        671,
        'cgo_line_radius',
        130,
        'cgo_line_width',
        129,
        'cgo_ray_width_scale',
        109,
        'cgo_shader_ub_color',
        669,
        'cgo_shader_ub_flags',
        694,
        'cgo_shader_ub_normal',
        670,
        'cgo_sphere_quality',
        189,
        'cgo_transparency',
        441,
        'cgo_use_shader',
        668,
        'clamp_colors',
        214,
        'clean_electro_mode',
        615,
        'cone_quality',
        583,
        'connect_bonded',
        487,
        'connect_cutoff',
        182,
        'connect_mode',
        179,
        'coulomb_cutoff',
        367,
        'coulomb_dielectric',
        243,
        'coulomb_units_factor',
        242,
        'cull_spheres',
        33,
        'cylinder_shader_ff_workaround',
        697,
        'cylinders_shader_filter_faces',
        687,
        'dash_as_cylinders',
        684,
        'dash_color',
        574,
        'dash_gap',
        59,
        'dash_length',
        58,
        'dash_radius',
        108,
        'dash_round_ends',
        280,
        'dash_use_shader',
        683,
        'dash_width',
        107,
        'debug_pick',
        209,
        'default_2fofc_map_rep',
        659,
        'default_buster_names',
        657,
        'default_fofc_map_rep',
        658,
        'default_phenix_names',
        655,
        'default_phenix_no_fill_names',
        656,
        'default_refmac_names',
        654,
        'defer_builds_mode',
        409,
        'defer_updates',
        304,
        'depth_cue',
        84,
        'dihedral_color',
        576,
        'dihedral_label_position',
        408,
        'dihedral_size',
        407,
        'direct',
        8,
        'dist_counter',
        57,
        'distance_exclusion',
        460,
        'dot_as_spheres',
        701,
        'dot_color',
        210,
        'dot_density',
        2,
        'dot_hydrogens',
        28,
        'dot_lighting',
        336,
        'dot_mode',
        3,
        'dot_normals',
        332,
        'dot_radius',
        29,
        'dot_solvent',
        206,
        'dot_use_shader',
        700,
        'dot_width',
        77,
        'draw_frames',
        436,
        'draw_mode',
        614,
        'dump_binary',
        749,
        'dynamic_measures',
        637,
        'dynamic_width',
        610,
        'dynamic_width_factor',
        611,
        'dynamic_width_max',
        613,
        'dynamic_width_min',
        612,
        'edit_light',
        707,
        'editor_auto_dihedral',
        416,
        'editor_auto_origin',
        439,
        'editor_bond_cycle_mode',
        633,
        'editor_label_fragments',
        321,
        'ellipsoid_color',
        570,
        'ellipsoid_probability',
        568,
        'ellipsoid_quality',
        563,
        'ellipsoid_scale',
        569,
        'ellipsoid_transparency',
        571,
        'excl_display_lists_shaders',
        682,
        'fast_idle',
        54,
        'fetch_host',
        636,
        'fetch_path',
        507,
        'field_of_view',
        152,
        'fit_iterations',
        185,
        'fit_kabsch',
        608,
        'fit_tolerance',
        186,
        'float_labels',
        232,
        'fog',
        88,
        'fog_start',
        192,
        'frame',
        194,
        'full_screen',
        142,
        'gamma',
        76,
        'gaussian_b_adjust',
        255,
        'gaussian_b_floor',
        272,
        'gaussian_resolution',
        271,
        'geometry_export_mode',
        586,
        'gl_ambient',
        14,
        'gradient_max_length',
        539,
        'gradient_min_length',
        540,
        'gradient_min_slope',
        541,
        'gradient_normal_min_dot',
        542,
        'gradient_spacing',
        544,
        'gradient_step_size',
        543,
        'gradient_symmetry',
        545,
        'grid_max',
        580,
        'grid_mode',
        577,
        'grid_slot',
        579,
        'group_arrow_prefix',
        547,
        'group_auto_mode',
        537,
        'group_full_member_names',
        538,
        'h_bond_cone',
        286,
        'h_bond_cutoff_center',
        282,
        'h_bond_cutoff_edge',
        283,
        'h_bond_exclusion',
        461,
        'h_bond_from_proton',
        556,
        'h_bond_max_angle',
        281,
        'h_bond_power_a',
        284,
        'h_bond_power_b',
        285,
        'half_bonds',
        45,
        'hash_max',
        22,
        'heavy_neighbor_cutoff',
        639,
        'hide_long_bonds',
        560,
        'hide_underscore_names',
        458,
        'idle_delay',
        52,
        'ignore_case',
        414,
        'ignore_pdb_segi',
        120,
        'image_copy_always',
        601,
        'image_dots_per_inch',
        434,
        'INIT',
        710,
        'internal_feedback',
        128,
        'internal_gui',
        99,
        'internal_gui_control_size',
        322,
        'internal_gui_mode',
        341,
        'internal_gui_width',
        98,
        'internal_prompt',
        313,
        'isomesh_auto_state',
        89,
        'keep_alive',
        607,
        'label_anchor',
        635,
        'label_angle_digits',
        531,
        'label_color',
        66,
        'label_digits',
        529,
        'label_dihedral_digits',
        532,
        'label_distance_digits',
        530,
        'label_font_id',
        328,
        'label_outline_color',
        467,
        'label_position',
        471,
        'label_shadow_mode',
        462,
        'label_size',
        453,
        'legacy_mouse_zoom',
        442,
        'legacy_vdw_radii',
        177,
        'light',
        10,
        'light_count',
        455,
        'light2',
        456,
        'light3',
        457,
        'light4',
        463,
        'light5',
        464,
        'light6',
        465,
        'light7',
        466,
        'light8',
        489,
        'light9',
        490,
        'line_as_cylinders',
        679,
        'line_color',
        526,
        'line_radius',
        110,
        'line_smooth',
        43,
        'line_stick_helper',
        391,
        'line_use_shader',
        645,
        'line_width',
        44,
        'log_box_selections',
        133,
        'log_conformations',
        134,
        'logging',
        131,
        'map_auto_expand_sym',
        600,
        'matrix_mode',
        438,
        'max_threads',
        261,
        'max_triangles',
        83,
        'max_ups',
        602,
        'mesh_as_cylinders',
        678,
        'mesh_carve_cutoff',
        591,
        'mesh_carve_selection',
        589,
        'mesh_carve_state',
        590,
        'mesh_clear_cutoff',
        594,
        'mesh_clear_selection',
        592,
        'mesh_clear_state',
        593,
        'mesh_color',
        146,
        'mesh_cutoff',
        588,
        'mesh_grid_max',
        595,
        'mesh_lighting',
        337,
        'mesh_mode',
        145,
        'mesh_negative_color',
        536,
        'mesh_negative_visible',
        535,
        'mesh_normals',
        334,
        'mesh_quality',
        204,
        'mesh_radius',
        74,
        'mesh_skip',
        528,
        'mesh_solvent',
        205,
        'mesh_type',
        335,
        'mesh_use_shader',
        672,
        'mesh_width',
        90,
        'min_mesh_spacing',
        1,
        'moe_separate_chains',
        558,
        'motion_bias',
        628,
        'motion_hand',
        631,
        'motion_linear',
        630,
        'motion_power',
        627,
        'motion_simple',
        629,
        'mouse_grid',
        587,
        'mouse_limit',
        211,
        'mouse_restart_movie_delay',
        404,
        'mouse_scale',
        212,
        'mouse_selection_mode',
        354,
        'mouse_wheel_scale',
        523,
        'mouse_z_scale',
        619,
        'movie_animate_by_frame',
        565,
        'movie_auto_interpolate',
        621,
        'movie_auto_store',
        620,
        'movie_delay',
        16,
        'movie_fps',
        550,
        'movie_loop',
        299,
        'movie_panel',
        618,
        'movie_panel_row_height',
        622,
        'movie_quality',
        634,
        'movie_rock',
        572,
        'multiplex',
        385,
        'nb_spheres_quality',
        689,
        'nb_spheres_size',
        688,
        'nb_spheres_use_shader',
        690,
        'neighbor_cutoff',
        638,
        'no_idle',
        53,
        'nonbonded_as_cylinders',
        686,
        'nonbonded_size',
        65,
        'nonbonded_transparency',
        524,
        'nonbonded_use_shader',
        685,
        'normal_workaround',
        40,
        'normalize_ccp4_maps',
        126,
        'normalize_grd_maps',
        314,
        'normalize_o_maps',
        305,
        'nvidia_bugs',
        433,
        'offscreen_rendering_for_antialiasing',
        695,
        'offscreen_rendering_multiplier',
        696,
        'opaque_background',
        435,
        'orthoscopic',
        23,
        'overlay',
        61,
        'overlay_lines',
        311,
        'pdb_conect_all',
        329,
        'pdb_discrete_chains',
        479,
        'pdb_echo_tags',
        486,
        'pdb_formal_charges',
        584,
        'pdb_hetatm_guess_valences',
        562,
        'pdb_hetatm_sort',
        267,
        'pdb_honor_model_number',
        424,
        'pdb_ignore_conect',
        632,
        'pdb_insertions_go_first',
        307,
        'pdb_insure_orthogonal',
        374,
        'pdb_literal_names',
        190,
        'pdb_no_end_record',
        301,
        'pdb_reformat_names_mode',
        326,
        'pdb_retain_ids',
        300,
        'pdb_standard_order',
        256,
        'pdb_truncate_residue_name',
        399,
        'pdb_unbond_cations',
        480,
        'pdb_use_ter_records',
        268,
        'pickable',
        50,
        'png_file_gamma',
        320,
        'png_screen_gamma',
        319,
        'polar_neighbor_cutoff',
        640,
        'power',
        11,
        'pqr_workarounds',
        387,
        'presentation',
        397,
        'presentation_auto_quit',
        415,
        'presentation_auto_start',
        417,
        'presentation_mode',
        398,
        'preserve_chempy_ids',
        154,
        'pymol_space_max_blue',
        217,
        'pymol_space_max_green',
        216,
        'pymol_space_max_red',
        215,
        'pymol_space_min_factor',
        218,
        'raise_exceptions',
        159,
        'ramp_blend_nearby_colors',
        566,
        'rank_assisted_sorts',
        425,
        'ray_blend_blue',
        318,
        'ray_blend_colors',
        315,
        'ray_blend_green',
        317,
        'ray_blend_red',
        316,
        'ray_clip_shadows',
        522,
        'ray_color_ramps',
        509,
        'ray_default_renderer',
        151,
        'ray_direct_shade',
        375,
        'ray_hint_camera',
        510,
        'ray_hint_shadow',
        511,
        'ray_improve_shadows',
        149,
        'ray_interior_color',
        240,
        'ray_interior_mode',
        476,
        'ray_interior_reflect',
        340,
        'ray_interior_shadows',
        244,
        'ray_interior_texture',
        245,
        'ray_label_specular',
        527,
        'ray_legacy_lighting',
        477,
        'ray_max_passes',
        350,
        'ray_opaque_background',
        137,
        'ray_orthoscopic',
        392,
        'ray_oversample_cutoff',
        270,
        'ray_pixel_scale',
        327,
        'ray_scatter',
        555,
        'ray_shadow_decay_factor',
        475,
        'ray_shadow_decay_range',
        491,
        'ray_shadow_fudge',
        207,
        'ray_shadows',
        195,
        'ray_spec_local',
        525,
        'ray_texture',
        139,
        'ray_texture_settings',
        140,
        'ray_trace_color',
        546,
        'ray_trace_depth_factor',
        472,
        'ray_trace_disco_factor',
        474,
        'ray_trace_fog',
        67,
        'ray_trace_fog_start',
        69,
        'ray_trace_frames',
        30,
        'ray_trace_gain',
        469,
        'ray_trace_mode',
        468,
        'ray_trace_persist_cutoff',
        553,
        'ray_trace_slope_factor',
        473,
        'ray_trace_trans_cutoff',
        552,
        'ray_transparency_contrast',
        352,
        'ray_transparency_oblique',
        551,
        'ray_transparency_oblique_power',
        554,
        'ray_transparency_shadows',
        199,
        'ray_transparency_spec_cut',
        312,
        'ray_transparency_specular',
        201,
        'ray_triangle_fudge',
        208,
        'ray_volume',
        665,
        'reflect',
        9,
        'reflect_power',
        153,
        'render_as_cylinders',
        691,
        'retain_order',
        266,
        'ribbon_as_cylinders',
        680,
        'ribbon_color',
        235,
        'ribbon_nucleic_acid_mode',
        426,
        'ribbon_power',
        17,
        'ribbon_power_b',
        18,
        'ribbon_radius',
        20,
        'ribbon_sampling',
        19,
        'ribbon_side_chain_helper',
        393,
        'ribbon_smooth',
        237,
        'ribbon_throw',
        121,
        'ribbon_trace_atoms',
        196,
        'ribbon_transparency',
        666,
        'ribbon_use_shader',
        681,
        'ribbon_width',
        106,
        'robust_logs',
        132,
        'rock',
        582,
        'rock_delay',
        56,
        'roving_byres',
        226,
        'roving_cartoon',
        228,
        'roving_delay',
        224,
        'roving_detail',
        233,
        'roving_isomesh',
        252,
        'roving_isosurface',
        253,
        'roving_labels',
        223,
        'roving_lines',
        220,
        'roving_map1_level',
        249,
        'roving_map1_name',
        246,
        'roving_map2_level',
        250,
        'roving_map2_name',
        247,
        'roving_map3_level',
        251,
        'roving_map3_name',
        248,
        'roving_nb_spheres',
        234,
        'roving_nonbonded',
        231,
        'roving_origin',
        219,
        'roving_origin_z',
        308,
        'roving_origin_z_cushion',
        309,
        'roving_polar_contacts',
        229,
        'roving_polar_cutoff',
        230,
        'roving_ribbon',
        227,
        'roving_selection',
        225,
        'roving_spheres',
        222,
        'roving_sticks',
        221,
        'save_pdb_ss',
        183,
        'scene_animation',
        390,
        'scene_animation_duration',
        411,
        'scene_buttons',
        599,
        'scene_buttons_mode',
        598,
        'scene_current_name',
        396,
        'scene_frame_mode',
        623,
        'scene_loop',
        400,
        'scene_restart_movie_delay',
        403,
        'scenes_changed',
        254,
        'sculpt_angl_weight',
        168,
        'sculpt_auto_center',
        478,
        'sculpt_avd_excl',
        505,
        'sculpt_avd_gap',
        503,
        'sculpt_avd_range',
        504,
        'sculpt_avd_weight',
        502,
        'sculpt_bond_weight',
        167,
        'sculpt_field_mask',
        174,
        'sculpt_hb_overlap',
        175,
        'sculpt_hb_overlap_base',
        176,
        'sculpt_line_weight',
        184,
        'sculpt_max_max',
        500,
        'sculpt_max_min',
        499,
        'sculpt_max_scale',
        497,
        'sculpt_max_weight',
        498,
        'sculpt_memory',
        178,
        'sculpt_min_max',
        496,
        'sculpt_min_min',
        495,
        'sculpt_min_scale',
        493,
        'sculpt_min_weight',
        494,
        'sculpt_nb_interval',
        273,
        'sculpt_plan_weight',
        170,
        'sculpt_pyra_inv_weight',
        606,
        'sculpt_pyra_weight',
        169,
        'sculpt_tors_tolerance',
        275,
        'sculpt_tors_weight',
        274,
        'sculpt_tri_max',
        484,
        'sculpt_tri_min',
        483,
        'sculpt_tri_mode',
        485,
        'sculpt_tri_scale',
        481,
        'sculpt_tri_weight',
        482,
        'sculpt_vdw_scale',
        163,
        'sculpt_vdw_scale14',
        164,
        'sculpt_vdw_vis_max',
        447,
        'sculpt_vdw_vis_mid',
        446,
        'sculpt_vdw_vis_min',
        445,
        'sculpt_vdw_vis_mode',
        444,
        'sculpt_vdw_weight',
        165,
        'sculpt_vdw_weight14',
        166,
        'sculpting',
        161,
        'sculpting_cycles',
        171,
        'sdof_drag_scale',
        597,
        'secondary_structure',
        157,
        'security',
        197,
        'sel_counter',
        5,
        'selection_overlay',
        81,
        'selection_round_points',
        459,
        'selection_visible_only',
        470,
        'selection_width',
        80,
        'selection_width_max',
        394,
        'selection_width_scale',
        395,
        'seq_view',
        353,
        'seq_view_alignment',
        513,
        'seq_view_color',
        362,
        'seq_view_discrete_by_state',
        410,
        'seq_view_fill_char',
        516,
        'seq_view_fill_color',
        517,
        'seq_view_format',
        357,
        'seq_view_label_color',
        518,
        'seq_view_label_mode',
        363,
        'seq_view_label_spacing',
        355,
        'seq_view_label_start',
        356,
        'seq_view_location',
        358,
        'seq_view_overlay',
        359,
        'seq_view_unaligned_color',
        515,
        'seq_view_unaligned_mode',
        514,
        'session_cache_optimize',
        596,
        'session_changed',
        521,
        'session_compression',
        549,
        'session_file',
        440,
        'session_migration',
        333,
        'session_version_check',
        200,
        'shader_path',
        648,
        'shininess',
        86,
        'show_alpha_checker',
        437,
        'show_frame_rate',
        617,
        'show_progress',
        262,
        'simplify_display_lists',
        265,
        'single_image',
        15,
        'slice_dynamic_grid',
        372,
        'slice_dynamic_grid_resolution',
        373,
        'slice_grid',
        371,
        'slice_height_map',
        370,
        'slice_height_scale',
        369,
        'slice_track_camera',
        368,
        'slow_idle',
        55,
        'smooth_color_triangle',
        150,
        'smooth_half_bonds',
        705,
        'solvent_radius',
        4,
        'spec_count',
        492,
        'spec_direct',
        454,
        'spec_direct_power',
        488,
        'spec_power',
        25,
        'spec_reflect',
        24,
        'specular',
        85,
        'specular_intensity',
        310,
        'sphere_color',
        173,
        'sphere_mode',
        421,
        'sphere_point_max_size',
        422,
        'sphere_point_size',
        423,
        'sphere_quality',
        87,
        'sphere_scale',
        155,
        'sphere_solvent',
        203,
        'sphere_transparency',
        172,
        'sphere_use_shader',
        646,
        'spheroid_fill',
        71,
        'spheroid_scale',
        68,
        'spheroid_smooth',
        70,
        'ss_helix_phi_exclude',
        292,
        'ss_helix_phi_include',
        291,
        'ss_helix_phi_target',
        290,
        'ss_helix_psi_exclude',
        289,
        'ss_helix_psi_include',
        288,
        'ss_helix_psi_target',
        287,
        'ss_strand_phi_exclude',
        298,
        'ss_strand_phi_include',
        297,
        'ss_strand_phi_target',
        296,
        'ss_strand_psi_exclude',
        295,
        'ss_strand_psi_include',
        294,
        'ss_strand_psi_target',
        293,
        'state',
        193,
        'state_counter_mode',
        667,
        'static_singletons',
        82,
        'stereo',
        365,
        'stereo_angle',
        41,
        'stereo_double_pump_mono',
        202,
        'stereo_dynamic_strength',
        609,
        'stereo_mode',
        188,
        'stereo_shift',
        42,
        'stick_as_cylinders',
        677,
        'stick_ball',
        276,
        'stick_ball_color',
        604,
        'stick_ball_ratio',
        277,
        'stick_color',
        376,
        'stick_debug',
        673,
        'stick_fixed_radius',
        278,
        'stick_good_geometry',
        676,
        'stick_h_scale',
        605,
        'stick_nub',
        48,
        'stick_overlap',
        47,
        'stick_quality',
        46,
        'stick_radius',
        21,
        'stick_round_nub',
        675,
        'stick_transparency',
        198,
        'stick_use_shader',
        644,
        'stick_valence_scale',
        512,
        'stop_on_exceptions',
        160,
        'suppress_hidden',
        548,
        'surface_best',
        36,
        'surface_carve_cutoff',
        344,
        'surface_carve_normal_cutoff',
        519,
        'surface_carve_selection',
        342,
        'surface_carve_state',
        343,
        'surface_cavity_cutoff',
        626,
        'surface_cavity_mode',
        624,
        'surface_cavity_radius',
        625,
        'surface_circumscribe',
        501,
        'surface_clear_cutoff',
        347,
        'surface_clear_selection',
        345,
        'surface_clear_state',
        346,
        'surface_color',
        144,
        'surface_color_smoothing',
        698,
        'surface_color_smoothing_threshold',
        699,
        'surface_debug',
        148,
        'surface_miserable',
        136,
        'surface_mode',
        143,
        'surface_negative_color',
        534,
        'surface_negative_visible',
        533,
        'surface_normal',
        37,
        'surface_optimize_subsets',
        384,
        'surface_poor',
        127,
        'surface_proximity',
        39,
        'surface_quality',
        38,
        'surface_ramp_above_mode',
        364,
        'surface_residue_cutoff',
        641,
        'surface_solvent',
        338,
        'surface_trim_cutoff',
        348,
        'surface_trim_factor',
        349,
        'surface_type',
        331,
        'surface_use_shader',
        642,
        'suspend_undo',
        708,
        'suspend_undo_atom_count',
        709,
        'suspend_updates',
        141,
        'swap_dsn6_bytes',
        306,
        'sweep_angle',
        26,
        'sweep_mode',
        401,
        'sweep_phase',
        402,
        'sweep_speed',
        27,
        'test1',
        34,
        'test2',
        35,
        'text',
        62,
        'texture_fonts',
        386,
        'trace_atoms_mode',
        520,
        'transparency',
        138,
        'transparency_global_sort',
        559,
        'transparency_mode',
        213,
        'transparency_picking_mode',
        324,
        'triangle_max_passes',
        339,
        'trim_dots',
        32,
        'two_sided_lighting',
        156,
        'unused_boolean_def_true',
        419,
        'use_display_lists',
        263,
        'use_shaders',
        647,
        'valence',
        64,
        'valence_mode',
        616,
        'valence_size',
        135,
        'validate_object_names',
        418,
        'virtual_trackball',
        325,
        'volume_bit_depth',
        649,
        'volume_color',
        650,
        'volume_data_range',
        652,
        'volume_layers',
        651,
        'wildcard',
        412,
        'wizard_prompt_mode',
        366,
        'wrap_output',
        191,
        'COLOR_FRONT',
        -6,
        'COLOR_BACK',
        -7,
        'COLOR_BLACK',
        1,
        'colors',
        Clazz_newIntArray(
          -1,
          [
            0xffffffff, 0xff000000, 0xff0000ff, 0xff00ff00, 0xffff0000,
            0xff00ffff, 0xffffff00, 0xffffff00, 0xffff00ff, 0xffff9999,
            0xff7fff7f, 0xff7f7fff, 0xffff007f, 0xffff7f00, 0xff7fff00,
            0xff00ff7f, 0xff7f00ff, 0xff007fff, 0xffc4b200, 0xffbf00bf,
            0xff00bfbf, 0xff993333, 0xff339933, 0xff3f3fa5, 0xff7f7f7f,
            0xff7f7f7f, 0xff33ff33, 0xff3333ff, 0xffff4c4c, 0xffe5e5e5,
            0xffffb233, 0xffe5c53f, 0xffff3333, 0xff33ff33, 0xff4c4cff,
            0xffffff33, 0xffffdd5e, 0xffff8c26, 0xff1919ff, 0xff3319e5,
            0xff4c19cc, 0xff6619b2, 0xff7f1999, 0xff99197f, 0xffb21966,
            0xffcc194c, 0xffe51933, 0xffff1919, 0xffffa5d8, 0xffb12121,
            0xff8d381c, 0xffa5512b, 0xfffcd1a5, 0xffff7fff, 0xff000000,
            0xff020202, 0xff050505, 0xff070707, 0xff0a0a0a, 0xff0c0c0c,
            0xff0f0f0f, 0xff121212, 0xff141414, 0xff171717, 0xff191919,
            0xff1c1c1c, 0xff1e1e1e, 0xff212121, 0xff242424, 0xff262626,
            0xff292929, 0xff2b2b2b, 0xff2e2e2e, 0xff303030, 0xff333333,
            0xff363636, 0xff383838, 0xff3b3b3b, 0xff3d3d3d, 0xff404040,
            0xff424242, 0xff454545, 0xff484848, 0xff4a4a4a, 0xff4d4d4d,
            0xff4f4f4f, 0xff525252, 0xff555555, 0xff575757, 0xff5a5a5a,
            0xff5c5c5c, 0xff5f5f5f, 0xff616161, 0xff646464, 0xff676767,
            0xff696969, 0xff6c6c6c, 0xff6e6e6e, 0xff717171, 0xff737373,
            0xff767676, 0xff797979, 0xff7b7b7b, 0xff7e7e7e, 0xff808080,
            0xff838383, 0xff858585, 0xff888888, 0xff8b8b8b, 0xff8d8d8d,
            0xff909090, 0xff929292, 0xff959595, 0xff979797, 0xff9a9a9a,
            0xff9d9d9d, 0xff9f9f9f, 0xffa2a2a2, 0xffa4a4a4, 0xffa7a7a7,
            0xffaaaaaa, 0xffacacac, 0xffafafaf, 0xffb1b1b1, 0xffb4b4b4,
            0xffb6b6b6, 0xffb9b9b9, 0xffbcbcbc, 0xffbebebe, 0xffc1c1c1,
            0xffc3c3c3, 0xffc6c6c6, 0xffc8c8c8, 0xffcbcbcb, 0xffcecece,
            0xffd0d0d0, 0xffd3d3d3, 0xffd5d5d5, 0xffd8d8d8, 0xffdadada,
            0xffdddddd, 0xffe0e0e0, 0xffe2e2e2, 0xffe5e5e5, 0xffe7e7e7,
            0xffeaeaea, 0xffececec, 0xffefefef, 0xfff2f2f2, 0xfff4f4f4,
            0xfff7f7f7, 0xfff9f9f9, 0xfffcfcfc, 0xffffffff, 0xffff33cc,
            0xffff00ff, 0xfffd00ff, 0xfffb00ff, 0xfffa00ff, 0xfff800ff,
            0xfff700ff, 0xfff500ff, 0xfff400ff, 0xfff200ff, 0xfff100ff,
            0xffef00ff, 0xffee00ff, 0xffec00ff, 0xffeb00ff, 0xffe900ff,
            0xffe800ff, 0xffe600ff, 0xffe400ff, 0xffe300ff, 0xffe100ff,
            0xffe000ff, 0xffde00ff, 0xffdd00ff, 0xffdb00ff, 0xffda00ff,
            0xffd800ff, 0xffd700ff, 0xffd500ff, 0xffd400ff, 0xffd200ff,
            0xffd100ff, 0xffcf00ff, 0xffce00ff, 0xffcc00ff, 0xffca00ff,
            0xffc900ff, 0xffc700ff, 0xffc600ff, 0xffc400ff, 0xffc300ff,
            0xffc100ff, 0xffc000ff, 0xffbe00ff, 0xffbd00ff, 0xffbb00ff,
            0xffba00ff, 0xffb800ff, 0xffb700ff, 0xffb500ff, 0xffb400ff,
            0xffb200ff, 0xffb000ff, 0xffaf00ff, 0xffad00ff, 0xffac00ff,
            0xffaa00ff, 0xffa900ff, 0xffa700ff, 0xffa600ff, 0xffa400ff,
            0xffa300ff, 0xffa100ff, 0xffa000ff, 0xff9e00ff, 0xff9d00ff,
            0xff9b00ff, 0xff9a00ff, 0xff9800ff, 0xff9600ff, 0xff9500ff,
            0xff9300ff, 0xff9200ff, 0xff9000ff, 0xff8f00ff, 0xff8d00ff,
            0xff8c00ff, 0xff8a00ff, 0xff8900ff, 0xff8700ff, 0xff8600ff,
            0xff8400ff, 0xff8300ff, 0xff8100ff, 0xff8000ff, 0xff7e00ff,
            0xff7c00ff, 0xff7b00ff, 0xff7900ff, 0xff7800ff, 0xff7600ff,
            0xff7500ff, 0xff7300ff, 0xff7200ff, 0xff7000ff, 0xff6f00ff,
            0xff6d00ff, 0xff6c00ff, 0xff6a00ff, 0xff6900ff, 0xff6700ff,
            0xff6600ff, 0xff6400ff, 0xff6200ff, 0xff6100ff, 0xff5f00ff,
            0xff5e00ff, 0xff5c00ff, 0xff5b00ff, 0xff5900ff, 0xff5800ff,
            0xff5600ff, 0xff5500ff, 0xff5300ff, 0xff5200ff, 0xff5000ff,
            0xff4f00ff, 0xff4d00ff, 0xff4b00ff, 0xff4a00ff, 0xff4800ff,
            0xff4700ff, 0xff4500ff, 0xff4400ff, 0xff4200ff, 0xff4100ff,
            0xff3f00ff, 0xff3e00ff, 0xff3c00ff, 0xff3b00ff, 0xff3900ff,
            0xff3800ff, 0xff3600ff, 0xff3500ff, 0xff3300ff, 0xff3100ff,
            0xff3000ff, 0xff2e00ff, 0xff2d00ff, 0xff2b00ff, 0xff2a00ff,
            0xff2800ff, 0xff2700ff, 0xff2500ff, 0xff2400ff, 0xff2200ff,
            0xff2100ff, 0xff1f00ff, 0xff1e00ff, 0xff1c00ff, 0xff1b00ff,
            0xff1900ff, 0xff1700ff, 0xff1600ff, 0xff1400ff, 0xff1300ff,
            0xff1100ff, 0xff1000ff, 0xff0e00ff, 0xff0d00ff, 0xff0b00ff,
            0xff0a00ff, 0xff0800ff, 0xff0700ff, 0xff0500ff, 0xff0400ff,
            0xff0200ff, 0xff0100ff, 0xff0000ff, 0xff0002ff, 0xff0003ff,
            0xff0005ff, 0xff0006ff, 0xff0008ff, 0xff0009ff, 0xff000bff,
            0xff000cff, 0xff000eff, 0xff000fff, 0xff0011ff, 0xff0012ff,
            0xff0014ff, 0xff0015ff, 0xff0017ff, 0xff0018ff, 0xff001aff,
            0xff001cff, 0xff001dff, 0xff001fff, 0xff0020ff, 0xff0022ff,
            0xff0023ff, 0xff0025ff, 0xff0026ff, 0xff0028ff, 0xff0029ff,
            0xff002bff, 0xff002cff, 0xff002eff, 0xff002fff, 0xff0031ff,
            0xff0032ff, 0xff0034ff, 0xff0036ff, 0xff0037ff, 0xff0039ff,
            0xff003aff, 0xff003cff, 0xff003dff, 0xff003fff, 0xff0040ff,
            0xff0042ff, 0xff0043ff, 0xff0045ff, 0xff0046ff, 0xff0048ff,
            0xff0049ff, 0xff004bff, 0xff004dff, 0xff004eff, 0xff0050ff,
            0xff0051ff, 0xff0053ff, 0xff0054ff, 0xff0056ff, 0xff0057ff,
            0xff0059ff, 0xff005aff, 0xff005cff, 0xff005dff, 0xff005fff,
            0xff0060ff, 0xff0062ff, 0xff0063ff, 0xff0065ff, 0xff0067ff,
            0xff0068ff, 0xff006aff, 0xff006bff, 0xff006dff, 0xff006eff,
            0xff0070ff, 0xff0071ff, 0xff0073ff, 0xff0074ff, 0xff0076ff,
            0xff0077ff, 0xff0079ff, 0xff007aff, 0xff007cff, 0xff007dff,
            0xff007fff, 0xff0081ff, 0xff0082ff, 0xff0084ff, 0xff0085ff,
            0xff0087ff, 0xff0088ff, 0xff008aff, 0xff008bff, 0xff008dff,
            0xff008eff, 0xff0090ff, 0xff0091ff, 0xff0093ff, 0xff0094ff,
            0xff0096ff, 0xff0097ff, 0xff0099ff, 0xff009bff, 0xff009cff,
            0xff009eff, 0xff009fff, 0xff00a1ff, 0xff00a2ff, 0xff00a4ff,
            0xff00a5ff, 0xff00a7ff, 0xff00a8ff, 0xff00aaff, 0xff00abff,
            0xff00adff, 0xff00aeff, 0xff00b0ff, 0xff00b1ff, 0xff00b3ff,
            0xff00b5ff, 0xff00b6ff, 0xff00b8ff, 0xff00b9ff, 0xff00bbff,
            0xff00bcff, 0xff00beff, 0xff00bfff, 0xff00c1ff, 0xff00c2ff,
            0xff00c4ff, 0xff00c5ff, 0xff00c7ff, 0xff00c8ff, 0xff00caff,
            0xff00cbff, 0xff00cdff, 0xff00cfff, 0xff00d0ff, 0xff00d2ff,
            0xff00d3ff, 0xff00d5ff, 0xff00d6ff, 0xff00d8ff, 0xff00d9ff,
            0xff00dbff, 0xff00dcff, 0xff00deff, 0xff00dfff, 0xff00e1ff,
            0xff00e2ff, 0xff00e4ff, 0xff00e6ff, 0xff00e7ff, 0xff00e9ff,
            0xff00eaff, 0xff00ecff, 0xff00edff, 0xff00efff, 0xff00f0ff,
            0xff00f2ff, 0xff00f3ff, 0xff00f5ff, 0xff00f6ff, 0xff00f8ff,
            0xff00f9ff, 0xff00fbff, 0xff00fcff, 0xff00feff, 0xff00fffd,
            0xff00fffc, 0xff00fffa, 0xff00fff9, 0xff00fff7, 0xff00fff6,
            0xff00fff4, 0xff00fff3, 0xff00fff1, 0xff00fff0, 0xff00ffee,
            0xff00ffed, 0xff00ffeb, 0xff00ffea, 0xff00ffe8, 0xff00ffe7,
            0xff00ffe5, 0xff00ffe3, 0xff00ffe2, 0xff00ffe0, 0xff00ffdf,
            0xff00ffdd, 0xff00ffdc, 0xff00ffda, 0xff00ffd9, 0xff00ffd7,
            0xff00ffd6, 0xff00ffd4, 0xff00ffd3, 0xff00ffd1, 0xff00ffd0,
            0xff00ffce, 0xff00ffcd, 0xff00ffcb, 0xff00ffc9, 0xff00ffc8,
            0xff00ffc6, 0xff00ffc5, 0xff00ffc3, 0xff00ffc2, 0xff00ffc0,
            0xff00ffbf, 0xff00ffbd, 0xff00ffbc, 0xff00ffba, 0xff00ffb9,
            0xff00ffb7, 0xff00ffb6, 0xff00ffb4, 0xff00ffb3, 0xff00ffb1,
            0xff00ffaf, 0xff00ffae, 0xff00ffac, 0xff00ffab, 0xff00ffa9,
            0xff00ffa8, 0xff00ffa6, 0xff00ffa5, 0xff00ffa3, 0xff00ffa2,
            0xff00ffa0, 0xff00ff9f, 0xff00ff9d, 0xff00ff9c, 0xff00ff9a,
            0xff00ff99, 0xff00ff97, 0xff00ff95, 0xff00ff94, 0xff00ff92,
            0xff00ff91, 0xff00ff8f, 0xff00ff8e, 0xff00ff8c, 0xff00ff8b,
            0xff00ff89, 0xff00ff88, 0xff00ff86, 0xff00ff85, 0xff00ff83,
            0xff00ff82, 0xff00ff80, 0xff00ff7e, 0xff00ff7d, 0xff00ff7b,
            0xff00ff7a, 0xff00ff78, 0xff00ff77, 0xff00ff75, 0xff00ff74,
            0xff00ff72, 0xff00ff71, 0xff00ff6f, 0xff00ff6e, 0xff00ff6c,
            0xff00ff6b, 0xff00ff69, 0xff00ff68, 0xff00ff66, 0xff00ff64,
            0xff00ff63, 0xff00ff61, 0xff00ff60, 0xff00ff5e, 0xff00ff5d,
            0xff00ff5b, 0xff00ff5a, 0xff00ff58, 0xff00ff57, 0xff00ff55,
            0xff00ff54, 0xff00ff52, 0xff00ff51, 0xff00ff4f, 0xff00ff4e,
            0xff00ff4c, 0xff00ff4a, 0xff00ff49, 0xff00ff47, 0xff00ff46,
            0xff00ff44, 0xff00ff43, 0xff00ff41, 0xff00ff40, 0xff00ff3e,
            0xff00ff3d, 0xff00ff3b, 0xff00ff3a, 0xff00ff38, 0xff00ff37,
            0xff00ff35, 0xff00ff34, 0xff00ff32, 0xff00ff30, 0xff00ff2f,
            0xff00ff2d, 0xff00ff2c, 0xff00ff2a, 0xff00ff29, 0xff00ff27,
            0xff00ff26, 0xff00ff24, 0xff00ff23, 0xff00ff21, 0xff00ff20,
            0xff00ff1e, 0xff00ff1d, 0xff00ff1b, 0xff00ff1a, 0xff00ff18,
            0xff00ff16, 0xff00ff15, 0xff00ff13, 0xff00ff12, 0xff00ff10,
            0xff00ff0f, 0xff00ff0d, 0xff00ff0c, 0xff00ff0a, 0xff00ff09,
            0xff00ff07, 0xff00ff06, 0xff00ff04, 0xff00ff03, 0xff00ff01,
            0xff00ff00, 0xff01ff00, 0xff03ff00, 0xff04ff00, 0xff06ff00,
            0xff07ff00, 0xff09ff00, 0xff0aff00, 0xff0cff00, 0xff0dff00,
            0xff0fff00, 0xff10ff00, 0xff12ff00, 0xff13ff00, 0xff15ff00,
            0xff16ff00, 0xff18ff00, 0xff1aff00, 0xff1bff00, 0xff1dff00,
            0xff1eff00, 0xff20ff00, 0xff21ff00, 0xff23ff00, 0xff24ff00,
            0xff26ff00, 0xff27ff00, 0xff29ff00, 0xff2aff00, 0xff2cff00,
            0xff2dff00, 0xff2fff00, 0xff30ff00, 0xff32ff00, 0xff34ff00,
            0xff35ff00, 0xff37ff00, 0xff38ff00, 0xff3aff00, 0xff3bff00,
            0xff3dff00, 0xff3eff00, 0xff40ff00, 0xff41ff00, 0xff43ff00,
            0xff44ff00, 0xff46ff00, 0xff47ff00, 0xff49ff00, 0xff4aff00,
            0xff4cff00, 0xff4eff00, 0xff4fff00, 0xff51ff00, 0xff52ff00,
            0xff54ff00, 0xff55ff00, 0xff57ff00, 0xff58ff00, 0xff5aff00,
            0xff5bff00, 0xff5dff00, 0xff5eff00, 0xff60ff00, 0xff61ff00,
            0xff63ff00, 0xff64ff00, 0xff66ff00, 0xff68ff00, 0xff69ff00,
            0xff6bff00, 0xff6cff00, 0xff6eff00, 0xff6fff00, 0xff71ff00,
            0xff72ff00, 0xff74ff00, 0xff75ff00, 0xff77ff00, 0xff78ff00,
            0xff7aff00, 0xff7bff00, 0xff7dff00, 0xff7eff00, 0xff80ff00,
            0xff82ff00, 0xff83ff00, 0xff85ff00, 0xff86ff00, 0xff88ff00,
            0xff89ff00, 0xff8bff00, 0xff8cff00, 0xff8eff00, 0xff8fff00,
            0xff91ff00, 0xff92ff00, 0xff94ff00, 0xff95ff00, 0xff97ff00,
            0xff98ff00, 0xff9aff00, 0xff9cff00, 0xff9dff00, 0xff9fff00,
            0xffa0ff00, 0xffa2ff00, 0xffa3ff00, 0xffa5ff00, 0xffa6ff00,
            0xffa8ff00, 0xffa9ff00, 0xffabff00, 0xffacff00, 0xffaeff00,
            0xffafff00, 0xffb1ff00, 0xffb3ff00, 0xffb4ff00, 0xffb6ff00,
            0xffb7ff00, 0xffb9ff00, 0xffbaff00, 0xffbcff00, 0xffbdff00,
            0xffbfff00, 0xffc0ff00, 0xffc2ff00, 0xffc3ff00, 0xffc5ff00,
            0xffc6ff00, 0xffc8ff00, 0xffc9ff00, 0xffcbff00, 0xffcdff00,
            0xffceff00, 0xffd0ff00, 0xffd1ff00, 0xffd3ff00, 0xffd4ff00,
            0xffd6ff00, 0xffd7ff00, 0xffd9ff00, 0xffdaff00, 0xffdcff00,
            0xffddff00, 0xffdfff00, 0xffe0ff00, 0xffe2ff00, 0xffe3ff00,
            0xffe5ff00, 0xffe7ff00, 0xffe8ff00, 0xffeaff00, 0xffebff00,
            0xffedff00, 0xffeeff00, 0xfff0ff00, 0xfff1ff00, 0xfff3ff00,
            0xfff4ff00, 0xfff6ff00, 0xfff7ff00, 0xfff9ff00, 0xfffaff00,
            0xfffcff00, 0xfffdff00, 0xfffffe00, 0xfffffc00, 0xfffffb00,
            0xfffff900, 0xfffff800, 0xfffff600, 0xfffff500, 0xfffff300,
            0xfffff200, 0xfffff000, 0xffffef00, 0xffffed00, 0xffffec00,
            0xffffea00, 0xffffe900, 0xffffe700, 0xffffe600, 0xffffe400,
            0xffffe200, 0xffffe100, 0xffffdf00, 0xffffde00, 0xffffdc00,
            0xffffdb00, 0xffffd900, 0xffffd800, 0xffffd600, 0xffffd500,
            0xffffd300, 0xffffd200, 0xffffd000, 0xffffcf00, 0xffffcd00,
            0xffffcc00, 0xffffca00, 0xffffc800, 0xffffc700, 0xffffc500,
            0xffffc400, 0xffffc200, 0xffffc100, 0xffffbf00, 0xffffbe00,
            0xffffbc00, 0xffffbb00, 0xffffb900, 0xffffb800, 0xffffb600,
            0xffffb500, 0xffffb300, 0xffffb100, 0xffffb000, 0xffffae00,
            0xffffad00, 0xffffab00, 0xffffaa00, 0xffffa800, 0xffffa700,
            0xffffa500, 0xffffa400, 0xffffa200, 0xffffa100, 0xffff9f00,
            0xffff9e00, 0xffff9c00, 0xffff9b00, 0xffff9900, 0xffff9700,
            0xffff9600, 0xffff9400, 0xffff9300, 0xffff9100, 0xffff9000,
            0xffff8e00, 0xffff8d00, 0xffff8b00, 0xffff8a00, 0xffff8800,
            0xffff8700, 0xffff8500, 0xffff8400, 0xffff8200, 0xffff8100,
            0xffff7f00, 0xffff7d00, 0xffff7c00, 0xffff7a00, 0xffff7900,
            0xffff7700, 0xffff7600, 0xffff7400, 0xffff7300, 0xffff7100,
            0xffff7000, 0xffff6e00, 0xffff6d00, 0xffff6b00, 0xffff6a00,
            0xffff6800, 0xffff6700, 0xffff6500, 0xffff6300, 0xffff6200,
            0xffff6000, 0xffff5f00, 0xffff5d00, 0xffff5c00, 0xffff5a00,
            0xffff5900, 0xffff5700, 0xffff5600, 0xffff5400, 0xffff5300,
            0xffff5100, 0xffff5000, 0xffff4e00, 0xffff4d00, 0xffff4b00,
            0xffff4900, 0xffff4800, 0xffff4600, 0xffff4500, 0xffff4300,
            0xffff4200, 0xffff4000, 0xffff3f00, 0xffff3d00, 0xffff3c00,
            0xffff3a00, 0xffff3900, 0xffff3700, 0xffff3600, 0xffff3400,
            0xffff3300, 0xffff3100, 0xffff2f00, 0xffff2e00, 0xffff2c00,
            0xffff2b00, 0xffff2900, 0xffff2800, 0xffff2600, 0xffff2500,
            0xffff2300, 0xffff2200, 0xffff2000, 0xffff1f00, 0xffff1d00,
            0xffff1c00, 0xffff1a00, 0xffff1800, 0xffff1700, 0xffff1500,
            0xffff1400, 0xffff1200, 0xffff1100, 0xffff0f00, 0xffff0e00,
            0xffff0c00, 0xffff0b00, 0xffff0900, 0xffff0800, 0xffff0600,
            0xffff0500, 0xffff0300, 0xffff0200, 0xffff0000, 0xffff0001,
            0xffff0002, 0xffff0004, 0xffff0005, 0xffff0007, 0xffff0008,
            0xffff000a, 0xffff000b, 0xffff000d, 0xffff000e, 0xffff0010,
            0xffff0011, 0xffff0013, 0xffff0014, 0xffff0016, 0xffff0017,
            0xffff0019, 0xffff001b, 0xffff001c, 0xffff001e, 0xffff001f,
            0xffff0021, 0xffff0022, 0xffff0024, 0xffff0025, 0xffff0027,
            0xffff0028, 0xffff002a, 0xffff002b, 0xffff002d, 0xffff002e,
            0xffff0030, 0xffff0031, 0xffff0033, 0xffff0035, 0xffff0036,
            0xffff0038, 0xffff0039, 0xffff003b, 0xffff003c, 0xffff003e,
            0xffff003f, 0xffff0041, 0xffff0042, 0xffff0044, 0xffff0045,
            0xffff0047, 0xffff0048, 0xffff004a, 0xffff004b, 0xffff004d,
            0xffff004f, 0xffff0050, 0xffff0052, 0xffff0053, 0xffff0055,
            0xffff0056, 0xffff0058, 0xffff0059, 0xffff005b, 0xffff005c,
            0xffff005e, 0xffff005f, 0xffff0061, 0xffff0062, 0xffff0064,
            0xffff0065, 0xffff0067, 0xffff0069, 0xffff006a, 0xffff006c,
            0xffff006d, 0xffff006f, 0xffff0070, 0xffff0072, 0xffff0073,
            0xffff0075, 0xffff0076, 0xffff0078, 0xffff0079, 0xffff007b,
            0xffff007c, 0xffff007e, 0xffff0080, 0xffff0081, 0xffff0083,
            0xffff0084, 0xffff0086, 0xffff0087, 0xffff0089, 0xffff008a,
            0xffff008c, 0xffff008d, 0xffff008f, 0xffff0090, 0xffff0092,
            0xffff0093, 0xffff0095, 0xffff0096, 0xffff0098, 0xffff009a,
            0xffff009b, 0xffff009d, 0xffff009e, 0xffff00a0, 0xffff00a1,
            0xffff00a3, 0xffff00a4, 0xffff00a6, 0xffff00a7, 0xffff00a9,
            0xffff00aa, 0xffff00ac, 0xffff00ad, 0xffff00af, 0xffff00b0,
            0xffff00b2, 0xffff00b4, 0xffff00b5, 0xffff00b7, 0xffff00b8,
            0xffff00ba, 0xffff00bb, 0xffff00bd, 0xffff00be, 0xffff00c0,
            0xffff00c1, 0xffff00c3, 0xffff00c4, 0xffff00c6, 0xffff00c7,
            0xffff00c9, 0xffff00ca, 0xffff00cc, 0xffff00ce, 0xffff00cf,
            0xffff00d1, 0xffff00d2, 0xffff00d4, 0xffff00d5, 0xffff00d7,
            0xffff00d8, 0xffff00da, 0xffff00db, 0xffff00dd, 0xffff00de,
            0xffff00e0, 0xffff00e1, 0xffff00e3, 0xffff00e4, 0xffff00e6,
            0xffff00e8, 0xffff00e9, 0xffff00eb, 0xffff00ec, 0xffff00ee,
            0xffff00ef, 0xffff00f1, 0xffff00f2, 0xffff00f4, 0xffff00f5,
            0xffff00f7, 0xffff00f8, 0xffff00fa, 0xffff00fb, 0xffff00fd,
            0xffffff00, 0xfffdff00, 0xfffbff00, 0xfffaff00, 0xfff8ff00,
            0xfff7ff00, 0xfff5ff00, 0xfff4ff00, 0xfff2ff00, 0xfff1ff00,
            0xffefff00, 0xffeeff00, 0xffecff00, 0xffebff00, 0xffe9ff00,
            0xffe8ff00, 0xffe6ff00, 0xffe4ff00, 0xffe3ff00, 0xffe1ff00,
            0xffe0ff00, 0xffdeff00, 0xffddff00, 0xffdbff00, 0xffdaff00,
            0xffd8ff00, 0xffd7ff00, 0xffd5ff00, 0xffd4ff00, 0xffd2ff00,
            0xffd1ff00, 0xffcfff00, 0xffceff00, 0xffccff00, 0xffcaff00,
            0xffc9ff00, 0xffc7ff00, 0xffc6ff00, 0xffc4ff00, 0xffc3ff00,
            0xffc1ff00, 0xffc0ff00, 0xffbeff00, 0xffbdff00, 0xffbbff00,
            0xffbaff00, 0xffb8ff00, 0xffb7ff00, 0xffb5ff00, 0xffb4ff00,
            0xffb2ff00, 0xffb0ff00, 0xffafff00, 0xffadff00, 0xffacff00,
            0xffaaff00, 0xffa9ff00, 0xffa7ff00, 0xffa6ff00, 0xffa4ff00,
            0xffa3ff00, 0xffa1ff00, 0xffa0ff00, 0xff9eff00, 0xff9dff00,
            0xff9bff00, 0xff9aff00, 0xff98ff00, 0xff96ff00, 0xff95ff00,
            0xff93ff00, 0xff92ff00, 0xff90ff00, 0xff8fff00, 0xff8dff00,
            0xff8cff00, 0xff8aff00, 0xff89ff00, 0xff87ff00, 0xff86ff00,
            0xff84ff00, 0xff83ff00, 0xff81ff00, 0xff80ff00, 0xff7eff00,
            0xff7cff00, 0xff7bff00, 0xff79ff00, 0xff78ff00, 0xff76ff00,
            0xff75ff00, 0xff73ff00, 0xff72ff00, 0xff70ff00, 0xff6fff00,
            0xff6dff00, 0xff6cff00, 0xff6aff00, 0xff69ff00, 0xff67ff00,
            0xff66ff00, 0xff64ff00, 0xff62ff00, 0xff61ff00, 0xff5fff00,
            0xff5eff00, 0xff5cff00, 0xff5bff00, 0xff59ff00, 0xff58ff00,
            0xff56ff00, 0xff55ff00, 0xff53ff00, 0xff52ff00, 0xff50ff00,
            0xff4fff00, 0xff4dff00, 0xff4bff00, 0xff4aff00, 0xff48ff00,
            0xff47ff00, 0xff45ff00, 0xff44ff00, 0xff42ff00, 0xff41ff00,
            0xff3fff00, 0xff3eff00, 0xff3cff00, 0xff3bff00, 0xff39ff00,
            0xff38ff00, 0xff36ff00, 0xff35ff00, 0xff33ff00, 0xff31ff00,
            0xff30ff00, 0xff2eff00, 0xff2dff00, 0xff2bff00, 0xff2aff00,
            0xff28ff00, 0xff27ff00, 0xff25ff00, 0xff24ff00, 0xff22ff00,
            0xff21ff00, 0xff1fff00, 0xff1eff00, 0xff1cff00, 0xff1bff00,
            0xff19ff00, 0xff17ff00, 0xff16ff00, 0xff14ff00, 0xff13ff00,
            0xff11ff00, 0xff10ff00, 0xff0eff00, 0xff0dff00, 0xff0bff00,
            0xff0aff00, 0xff08ff00, 0xff07ff00, 0xff05ff00, 0xff04ff00,
            0xff02ff00, 0xff01ff00, 0xff00ff00, 0xff00ff02, 0xff00ff03,
            0xff00ff05, 0xff00ff06, 0xff00ff08, 0xff00ff09, 0xff00ff0b,
            0xff00ff0c, 0xff00ff0e, 0xff00ff0f, 0xff00ff11, 0xff00ff12,
            0xff00ff14, 0xff00ff15, 0xff00ff17, 0xff00ff18, 0xff00ff1a,
            0xff00ff1c, 0xff00ff1d, 0xff00ff1f, 0xff00ff20, 0xff00ff22,
            0xff00ff23, 0xff00ff25, 0xff00ff26, 0xff00ff28, 0xff00ff29,
            0xff00ff2b, 0xff00ff2c, 0xff00ff2e, 0xff00ff2f, 0xff00ff31,
            0xff00ff32, 0xff00ff34, 0xff00ff36, 0xff00ff37, 0xff00ff39,
            0xff00ff3a, 0xff00ff3c, 0xff00ff3d, 0xff00ff3f, 0xff00ff40,
            0xff00ff42, 0xff00ff43, 0xff00ff45, 0xff00ff46, 0xff00ff48,
            0xff00ff49, 0xff00ff4b, 0xff00ff4d, 0xff00ff4e, 0xff00ff50,
            0xff00ff51, 0xff00ff53, 0xff00ff54, 0xff00ff56, 0xff00ff57,
            0xff00ff59, 0xff00ff5a, 0xff00ff5c, 0xff00ff5d, 0xff00ff5f,
            0xff00ff60, 0xff00ff62, 0xff00ff63, 0xff00ff65, 0xff00ff67,
            0xff00ff68, 0xff00ff6a, 0xff00ff6b, 0xff00ff6d, 0xff00ff6e,
            0xff00ff70, 0xff00ff71, 0xff00ff73, 0xff00ff74, 0xff00ff76,
            0xff00ff77, 0xff00ff79, 0xff00ff7a, 0xff00ff7c, 0xff00ff7d,
            0xff00ff7f, 0xff00ff81, 0xff00ff82, 0xff00ff84, 0xff00ff85,
            0xff00ff87, 0xff00ff88, 0xff00ff8a, 0xff00ff8b, 0xff00ff8d,
            0xff00ff8e, 0xff00ff90, 0xff00ff91, 0xff00ff93, 0xff00ff94,
            0xff00ff96, 0xff00ff97, 0xff00ff99, 0xff00ff9b, 0xff00ff9c,
            0xff00ff9e, 0xff00ff9f, 0xff00ffa1, 0xff00ffa2, 0xff00ffa4,
            0xff00ffa5, 0xff00ffa7, 0xff00ffa8, 0xff00ffaa, 0xff00ffab,
            0xff00ffad, 0xff00ffae, 0xff00ffb0, 0xff00ffb1, 0xff00ffb3,
            0xff00ffb5, 0xff00ffb6, 0xff00ffb8, 0xff00ffb9, 0xff00ffbb,
            0xff00ffbc, 0xff00ffbe, 0xff00ffbf, 0xff00ffc1, 0xff00ffc2,
            0xff00ffc4, 0xff00ffc5, 0xff00ffc7, 0xff00ffc8, 0xff00ffca,
            0xff00ffcb, 0xff00ffcd, 0xff00ffcf, 0xff00ffd0, 0xff00ffd2,
            0xff00ffd3, 0xff00ffd5, 0xff00ffd6, 0xff00ffd8, 0xff00ffd9,
            0xff00ffdb, 0xff00ffdc, 0xff00ffde, 0xff00ffdf, 0xff00ffe1,
            0xff00ffe2, 0xff00ffe4, 0xff00ffe6, 0xff00ffe7, 0xff00ffe9,
            0xff00ffea, 0xff00ffec, 0xff00ffed, 0xff00ffef, 0xff00fff0,
            0xff00fff2, 0xff00fff3, 0xff00fff5, 0xff00fff6, 0xff00fff8,
            0xff00fff9, 0xff00fffb, 0xff00fffc, 0xff00fffe, 0xff00fdff,
            0xff00fcff, 0xff00faff, 0xff00f9ff, 0xff00f7ff, 0xff00f6ff,
            0xff00f4ff, 0xff00f3ff, 0xff00f1ff, 0xff00f0ff, 0xff00eeff,
            0xff00edff, 0xff00ebff, 0xff00eaff, 0xff00e8ff, 0xff00e7ff,
            0xff00e5ff, 0xff00e3ff, 0xff00e2ff, 0xff00e0ff, 0xff00dfff,
            0xff00ddff, 0xff00dcff, 0xff00daff, 0xff00d9ff, 0xff00d7ff,
            0xff00d6ff, 0xff00d4ff, 0xff00d3ff, 0xff00d1ff, 0xff00d0ff,
            0xff00ceff, 0xff00cdff, 0xff00cbff, 0xff00c9ff, 0xff00c8ff,
            0xff00c6ff, 0xff00c5ff, 0xff00c3ff, 0xff00c2ff, 0xff00c0ff,
            0xff00bfff, 0xff00bdff, 0xff00bcff, 0xff00baff, 0xff00b9ff,
            0xff00b7ff, 0xff00b6ff, 0xff00b4ff, 0xff00b3ff, 0xff00b1ff,
            0xff00afff, 0xff00aeff, 0xff00acff, 0xff00abff, 0xff00a9ff,
            0xff00a8ff, 0xff00a6ff, 0xff00a5ff, 0xff00a3ff, 0xff00a2ff,
            0xff00a0ff, 0xff009fff, 0xff009dff, 0xff009cff, 0xff009aff,
            0xff0099ff, 0xff0097ff, 0xff0095ff, 0xff0094ff, 0xff0092ff,
            0xff0091ff, 0xff008fff, 0xff008eff, 0xff008cff, 0xff008bff,
            0xff0089ff, 0xff0088ff, 0xff0086ff, 0xff0085ff, 0xff0083ff,
            0xff0082ff, 0xff0080ff, 0xff007eff, 0xff007dff, 0xff007bff,
            0xff007aff, 0xff0078ff, 0xff0077ff, 0xff0075ff, 0xff0074ff,
            0xff0072ff, 0xff0071ff, 0xff006fff, 0xff006eff, 0xff006cff,
            0xff006bff, 0xff0069ff, 0xff0068ff, 0xff0066ff, 0xff0064ff,
            0xff0063ff, 0xff0061ff, 0xff0060ff, 0xff005eff, 0xff005dff,
            0xff005bff, 0xff005aff, 0xff0058ff, 0xff0057ff, 0xff0055ff,
            0xff0054ff, 0xff0052ff, 0xff0051ff, 0xff004fff, 0xff004eff,
            0xff004cff, 0xff004aff, 0xff0049ff, 0xff0047ff, 0xff0046ff,
            0xff0044ff, 0xff0043ff, 0xff0041ff, 0xff0040ff, 0xff003eff,
            0xff003dff, 0xff003bff, 0xff003aff, 0xff0038ff, 0xff0037ff,
            0xff0035ff, 0xff0034ff, 0xff0032ff, 0xff0030ff, 0xff002fff,
            0xff002dff, 0xff002cff, 0xff002aff, 0xff0029ff, 0xff0027ff,
            0xff0026ff, 0xff0024ff, 0xff0023ff, 0xff0021ff, 0xff0020ff,
            0xff001eff, 0xff001dff, 0xff001bff, 0xff001aff, 0xff0018ff,
            0xff0016ff, 0xff0015ff, 0xff0013ff, 0xff0012ff, 0xff0010ff,
            0xff000fff, 0xff000dff, 0xff000cff, 0xff000aff, 0xff0009ff,
            0xff0007ff, 0xff0006ff, 0xff0004ff, 0xff0003ff, 0xff0001ff,
            0xff0000ff, 0xff0100ff, 0xff0300ff, 0xff0400ff, 0xff0600ff,
            0xff0700ff, 0xff0900ff, 0xff0a00ff, 0xff0c00ff, 0xff0d00ff,
            0xff0f00ff, 0xff1000ff, 0xff1200ff, 0xff1300ff, 0xff1500ff,
            0xff1600ff, 0xff1800ff, 0xff1a00ff, 0xff1b00ff, 0xff1d00ff,
            0xff1e00ff, 0xff2000ff, 0xff2100ff, 0xff2300ff, 0xff2400ff,
            0xff2600ff, 0xff2700ff, 0xff2900ff, 0xff2a00ff, 0xff2c00ff,
            0xff2d00ff, 0xff2f00ff, 0xff3000ff, 0xff3200ff, 0xff3400ff,
            0xff3500ff, 0xff3700ff, 0xff3800ff, 0xff3a00ff, 0xff3b00ff,
            0xff3d00ff, 0xff3e00ff, 0xff4000ff, 0xff4100ff, 0xff4300ff,
            0xff4400ff, 0xff4600ff, 0xff4700ff, 0xff4900ff, 0xff4a00ff,
            0xff4c00ff, 0xff4e00ff, 0xff4f00ff, 0xff5100ff, 0xff5200ff,
            0xff5400ff, 0xff5500ff, 0xff5700ff, 0xff5800ff, 0xff5a00ff,
            0xff5b00ff, 0xff5d00ff, 0xff5e00ff, 0xff6000ff, 0xff6100ff,
            0xff6300ff, 0xff6400ff, 0xff6600ff, 0xff6800ff, 0xff6900ff,
            0xff6b00ff, 0xff6c00ff, 0xff6e00ff, 0xff6f00ff, 0xff7100ff,
            0xff7200ff, 0xff7400ff, 0xff7500ff, 0xff7700ff, 0xff7800ff,
            0xff7a00ff, 0xff7b00ff, 0xff7d00ff, 0xff7e00ff, 0xff8000ff,
            0xff8200ff, 0xff8300ff, 0xff8500ff, 0xff8600ff, 0xff8800ff,
            0xff8900ff, 0xff8b00ff, 0xff8c00ff, 0xff8e00ff, 0xff8f00ff,
            0xff9100ff, 0xff9200ff, 0xff9400ff, 0xff9500ff, 0xff9700ff,
            0xff9800ff, 0xff9a00ff, 0xff9c00ff, 0xff9d00ff, 0xff9f00ff,
            0xffa000ff, 0xffa200ff, 0xffa300ff, 0xffa500ff, 0xffa600ff,
            0xffa800ff, 0xffa900ff, 0xffab00ff, 0xffac00ff, 0xffae00ff,
            0xffaf00ff, 0xffb100ff, 0xffb300ff, 0xffb400ff, 0xffb600ff,
            0xffb700ff, 0xffb900ff, 0xffba00ff, 0xffbc00ff, 0xffbd00ff,
            0xffbf00ff, 0xffc000ff, 0xffc200ff, 0xffc300ff, 0xffc500ff,
            0xffc600ff, 0xffc800ff, 0xffc900ff, 0xffcb00ff, 0xffcd00ff,
            0xffce00ff, 0xffd000ff, 0xffd100ff, 0xffd300ff, 0xffd400ff,
            0xffd600ff, 0xffd700ff, 0xffd900ff, 0xffda00ff, 0xffdc00ff,
            0xffdd00ff, 0xffdf00ff, 0xffe000ff, 0xffe200ff, 0xffe300ff,
            0xffe500ff, 0xffe700ff, 0xffe800ff, 0xffea00ff, 0xffeb00ff,
            0xffed00ff, 0xffee00ff, 0xfff000ff, 0xfff100ff, 0xfff300ff,
            0xfff400ff, 0xfff600ff, 0xfff700ff, 0xfff900ff, 0xfffa00ff,
            0xfffc00ff, 0xfffd00ff, 0xffff00fe, 0xffff00fc, 0xffff00fb,
            0xffff00f9, 0xffff00f8, 0xffff00f6, 0xffff00f5, 0xffff00f3,
            0xffff00f2, 0xffff00f0, 0xffff00ef, 0xffff00ed, 0xffff00ec,
            0xffff00ea, 0xffff00e9, 0xffff00e7, 0xffff00e6, 0xffff00e4,
            0xffff00e2, 0xffff00e1, 0xffff00df, 0xffff00de, 0xffff00dc,
            0xffff00db, 0xffff00d9, 0xffff00d8, 0xffff00d6, 0xffff00d5,
            0xffff00d3, 0xffff00d2, 0xffff00d0, 0xffff00cf, 0xffff00cd,
            0xffff00cc, 0xffff00ca, 0xffff00c8, 0xffff00c7, 0xffff00c5,
            0xffff00c4, 0xffff00c2, 0xffff00c1, 0xffff00bf, 0xffff00be,
            0xffff00bc, 0xffff00bb, 0xffff00b9, 0xffff00b8, 0xffff00b6,
            0xffff00b5, 0xffff00b3, 0xffff00b1, 0xffff00b0, 0xffff00ae,
            0xffff00ad, 0xffff00ab, 0xffff00aa, 0xffff00a8, 0xffff00a7,
            0xffff00a5, 0xffff00a4, 0xffff00a2, 0xffff00a1, 0xffff009f,
            0xffff009e, 0xffff009c, 0xffff009b, 0xffff0099, 0xffff0097,
            0xffff0096, 0xffff0094, 0xffff0093, 0xffff0091, 0xffff0090,
            0xffff008e, 0xffff008d, 0xffff008b, 0xffff008a, 0xffff0088,
            0xffff0087, 0xffff0085, 0xffff0084, 0xffff0082, 0xffff0081,
            0xffff007f, 0xffff007d, 0xffff007c, 0xffff007a, 0xffff0079,
            0xffff0077, 0xffff0076, 0xffff0074, 0xffff0073, 0xffff0071,
            0xffff0070, 0xffff006e, 0xffff006d, 0xffff006b, 0xffff006a,
            0xffff0068, 0xffff0067, 0xffff0065, 0xffff0063, 0xffff0062,
            0xffff0060, 0xffff005f, 0xffff005d, 0xffff005c, 0xffff005a,
            0xffff0059, 0xffff0057, 0xffff0056, 0xffff0054, 0xffff0053,
            0xffff0051, 0xffff0050, 0xffff004e, 0xffff004d, 0xffff004b,
            0xffff0049, 0xffff0048, 0xffff0046, 0xffff0045, 0xffff0043,
            0xffff0042, 0xffff0040, 0xffff003f, 0xffff003d, 0xffff003c,
            0xffff003a, 0xffff0039, 0xffff0037, 0xffff0036, 0xffff0034,
            0xffff0033, 0xffff0031, 0xffff002f, 0xffff002e, 0xffff002c,
            0xffff002b, 0xffff0029, 0xffff0028, 0xffff0026, 0xffff0025,
            0xffff0023, 0xffff0022, 0xffff0020, 0xffff001f, 0xffff001d,
            0xffff001c, 0xffff001a, 0xffff0018, 0xffff0017, 0xffff0015,
            0xffff0014, 0xffff0012, 0xffff0011, 0xffff000f, 0xffff000e,
            0xffff000c, 0xffff000b, 0xffff0009, 0xffff0008, 0xffff0006,
            0xffff0005, 0xffff0003, 0xffff0002, 0xffff0000, 0xffff0100,
            0xffff0200, 0xffff0400, 0xffff0500, 0xffff0700, 0xffff0800,
            0xffff0a00, 0xffff0b00, 0xffff0d00, 0xffff0e00, 0xffff1000,
            0xffff1100, 0xffff1300, 0xffff1400, 0xffff1600, 0xffff1700,
            0xffff1900, 0xffff1b00, 0xffff1c00, 0xffff1e00, 0xffff1f00,
            0xffff2100, 0xffff2200, 0xffff2400, 0xffff2500, 0xffff2700,
            0xffff2800, 0xffff2a00, 0xffff2b00, 0xffff2d00, 0xffff2e00,
            0xffff3000, 0xffff3100, 0xffff3300, 0xffff3500, 0xffff3600,
            0xffff3800, 0xffff3900, 0xffff3b00, 0xffff3c00, 0xffff3e00,
            0xffff3f00, 0xffff4100, 0xffff4200, 0xffff4400, 0xffff4500,
            0xffff4700, 0xffff4800, 0xffff4a00, 0xffff4b00, 0xffff4d00,
            0xffff4f00, 0xffff5000, 0xffff5200, 0xffff5300, 0xffff5500,
            0xffff5600, 0xffff5800, 0xffff5900, 0xffff5b00, 0xffff5c00,
            0xffff5e00, 0xffff5f00, 0xffff6100, 0xffff6200, 0xffff6400,
            0xffff6500, 0xffff6700, 0xffff6900, 0xffff6a00, 0xffff6c00,
            0xffff6d00, 0xffff6f00, 0xffff7000, 0xffff7200, 0xffff7300,
            0xffff7500, 0xffff7600, 0xffff7800, 0xffff7900, 0xffff7b00,
            0xffff7c00, 0xffff7e00, 0xffff8000, 0xffff8100, 0xffff8300,
            0xffff8400, 0xffff8600, 0xffff8700, 0xffff8900, 0xffff8a00,
            0xffff8c00, 0xffff8d00, 0xffff8f00, 0xffff9000, 0xffff9200,
            0xffff9300, 0xffff9500, 0xffff9600, 0xffff9800, 0xffff9a00,
            0xffff9b00, 0xffff9d00, 0xffff9e00, 0xffffa000, 0xffffa100,
            0xffffa300, 0xffffa400, 0xffffa600, 0xffffa700, 0xffffa900,
            0xffffaa00, 0xffffac00, 0xffffad00, 0xffffaf00, 0xffffb000,
            0xffffb200, 0xffffb400, 0xffffb500, 0xffffb700, 0xffffb800,
            0xffffba00, 0xffffbb00, 0xffffbd00, 0xffffbe00, 0xffffc000,
            0xffffc100, 0xffffc300, 0xffffc400, 0xffffc600, 0xffffc700,
            0xffffc900, 0xffffca00, 0xffffcc00, 0xffffce00, 0xffffcf00,
            0xffffd100, 0xffffd200, 0xffffd400, 0xffffd500, 0xffffd700,
            0xffffd800, 0xffffda00, 0xffffdb00, 0xffffdd00, 0xffffde00,
            0xffffe000, 0xffffe100, 0xffffe300, 0xffffe400, 0xffffe600,
            0xffffe800, 0xffffe900, 0xffffeb00, 0xffffec00, 0xffffee00,
            0xffffef00, 0xfffff100, 0xfffff200, 0xfffff400, 0xfffff500,
            0xfffff700, 0xfffff800, 0xfffffa00, 0xfffffb00, 0xfffffd00,
            0xffffff00, 0xfffbfb03, 0xfff8f806, 0xfff5f509, 0xfff2f20c,
            0xffefef0f, 0xffecec12, 0xffe9e915, 0xffe6e618, 0xffe3e31b,
            0xffe0e01e, 0xffdddd21, 0xffdada24, 0xffd7d727, 0xffd4d42a,
            0xffd1d12d, 0xffcece30, 0xffcaca34, 0xffc7c737, 0xffc4c43a,
            0xffc1c13d, 0xffbebe40, 0xffbbbb43, 0xffb8b846, 0xffb5b549,
            0xffb2b24c, 0xffafaf4f, 0xffacac52, 0xffa9a955, 0xffa6a658,
            0xffa3a35b, 0xffa0a05e, 0xff9d9d61, 0xff9a9a64, 0xff969668,
            0xff93936b, 0xff90906e, 0xff8d8d71, 0xff8a8a74, 0xff878777,
            0xff84847a, 0xff81817d, 0xff7e7e80, 0xff7b7b83, 0xff787886,
            0xff757589, 0xff72728c, 0xff6f6f8f, 0xff6c6c92, 0xff696995,
            0xff666698, 0xff62629c, 0xff5f5f9f, 0xff5c5ca2, 0xff5959a5,
            0xff5656a8, 0xff5353ab, 0xff5050ae, 0xff4d4db1, 0xff4a4ab4,
            0xff4747b7, 0xff4444ba, 0xff4141bd, 0xff3e3ec0, 0xff3b3bc3,
            0xff3838c6, 0xff3535c9, 0xff3131cd, 0xff2e2ed0, 0xff2b2bd3,
            0xff2828d6, 0xff2525d9, 0xff2222dc, 0xff1f1fdf, 0xff1c1ce2,
            0xff1919e5, 0xff1616e8, 0xff1313eb, 0xff1010ee, 0xff0d0df1,
            0xff0a0af4, 0xff0707f7, 0xff0404fa, 0xff0101fd, 0xff0200fc,
            0xff0500f9, 0xff0800f6, 0xff0b00f3, 0xff0e00f0, 0xff1100ed,
            0xff1400ea, 0xff1700e7, 0xff1a00e4, 0xff1d00e1, 0xff2000de,
            0xff2300db, 0xff2600d8, 0xff2900d5, 0xff2c00d2, 0xff2f00cf,
            0xff3200cc, 0xff3600c8, 0xff3900c5, 0xff3c00c2, 0xff3f00bf,
            0xff4200bc, 0xff4500b9, 0xff4800b6, 0xff4b00b3, 0xff4e00b0,
            0xff5100ad, 0xff5400aa, 0xff5700a7, 0xff5a00a4, 0xff5d00a1,
            0xff60009e, 0xff63009b, 0xff670097, 0xff6a0094, 0xff6d0091,
            0xff70008e, 0xff73008b, 0xff760088, 0xff790085, 0xff7c0082,
            0xff7f007f, 0xff82007c, 0xff850079, 0xff880076, 0xff8b0073,
            0xff8e0070, 0xff91006d, 0xff94006a, 0xff970067, 0xff9b0063,
            0xff9e0060, 0xffa1005d, 0xffa4005a, 0xffa70057, 0xffaa0054,
            0xffad0051, 0xffb0004e, 0xffb3004b, 0xffb60048, 0xffb90045,
            0xffbc0042, 0xffbf003f, 0xffc2003c, 0xffc50039, 0xffc80036,
            0xffcb0033, 0xffcf002f, 0xffd2002c, 0xffd50029, 0xffd80026,
            0xffdb0023, 0xffde0020, 0xffe1001d, 0xffe4001a, 0xffe70017,
            0xffea0014, 0xffed0011, 0xfff0000e, 0xfff3000b, 0xfff60008,
            0xfff90005, 0xfffc0002, 0xfffd0100, 0xfffa0400, 0xfff70700,
            0xfff40a00, 0xfff10d00, 0xffee1000, 0xffeb1300, 0xffe81600,
            0xffe51900, 0xffe21c00, 0xffdf1f00, 0xffdc2200, 0xffd92500,
            0xffd62800, 0xffd32b00, 0xffd02e00, 0xffcd3100, 0xffc93500,
            0xffc63800, 0xffc33b00, 0xffc03e00, 0xffbd4100, 0xffba4400,
            0xffb74700, 0xffb44a00, 0xffb14d00, 0xffae5000, 0xffab5300,
            0xffa85600, 0xffa55900, 0xffa25c00, 0xff9f5f00, 0xff9c6200,
            0xff996500, 0xff956900, 0xff926c00, 0xff8f6f00, 0xff8c7200,
            0xff897500, 0xff867800, 0xff837b00, 0xff807e00, 0xff7d8100,
            0xff7a8400, 0xff778700, 0xff748a00, 0xff718d00, 0xff6e9000,
            0xff6b9300, 0xff689600, 0xff649a00, 0xff619d00, 0xff5ea000,
            0xff5ba300, 0xff58a600, 0xff55a900, 0xff52ac00, 0xff4faf00,
            0xff4cb200, 0xff49b500, 0xff46b800, 0xff43bb00, 0xff40be00,
            0xff3dc100, 0xff3ac400, 0xff37c700, 0xff34ca00, 0xff30ce00,
            0xff2dd100, 0xff2ad400, 0xff27d700, 0xff24da00, 0xff21dd00,
            0xff1ee000, 0xff1be300, 0xff18e600, 0xff15e900, 0xff12ec00,
            0xff0fef00, 0xff0cf200, 0xff09f500, 0xff06f800, 0xff03fb00,
            0xff00fe00, 0xff03fb03, 0xff06f806, 0xff09f509, 0xff0cf20c,
            0xff0fef0f, 0xff12ec12, 0xff15e915, 0xff18e618, 0xff1be31b,
            0xff1ee01e, 0xff21dd21, 0xff24da24, 0xff27d727, 0xff2ad42a,
            0xff2dd12d, 0xff30ce30, 0xff34ca34, 0xff37c737, 0xff3ac43a,
            0xff3dc13d, 0xff40be40, 0xff43bb43, 0xff46b846, 0xff49b549,
            0xff4cb24c, 0xff4faf4f, 0xff52ac52, 0xff55a955, 0xff58a658,
            0xff5ba35b, 0xff5ea05e, 0xff619d61, 0xff649a64, 0xff689668,
            0xff6b936b, 0xff6e906e, 0xff718d71, 0xff748a74, 0xff778777,
            0xff7a847a, 0xff7d817d, 0xff807e80, 0xff837b83, 0xff867886,
            0xff897589, 0xff8c728c, 0xff8f6f8f, 0xff926c92, 0xff956995,
            0xff986698, 0xff9c629c, 0xff9f5f9f, 0xffa25ca2, 0xffa559a5,
            0xffa856a8, 0xffab53ab, 0xffae50ae, 0xffb14db1, 0xffb44ab4,
            0xffb747b7, 0xffba44ba, 0xffbd41bd, 0xffc03ec0, 0xffc33bc3,
            0xffc638c6, 0xffc935c9, 0xffcd31cd, 0xffd02ed0, 0xffd32bd3,
            0xffd628d6, 0xffd925d9, 0xffdc22dc, 0xffdf1fdf, 0xffe21ce2,
            0xffe519e5, 0xffe816e8, 0xffeb13eb, 0xffee10ee, 0xfff10df1,
            0xfff40af4, 0xfff707f7, 0xfffa04fa, 0xfffd01fd, 0xfffc02ff,
            0xfff905ff, 0xfff608ff, 0xfff30bff, 0xfff00eff, 0xffed11ff,
            0xffea14ff, 0xffe717ff, 0xffe41aff, 0xffe11dff, 0xffde20ff,
            0xffdb23ff, 0xffd826ff, 0xffd529ff, 0xffd22cff, 0xffcf2fff,
            0xffcc32ff, 0xffc836ff, 0xffc539ff, 0xffc23cff, 0xffbf3fff,
            0xffbc42ff, 0xffb945ff, 0xffb648ff, 0xffb34bff, 0xffb04eff,
            0xffad51ff, 0xffaa54ff, 0xffa757ff, 0xffa45aff, 0xffa15dff,
            0xff9e60ff, 0xff9b63ff, 0xff9767ff, 0xff946aff, 0xff916dff,
            0xff8e70ff, 0xff8b73ff, 0xff8876ff, 0xff8579ff, 0xff827cff,
            0xff7f7fff, 0xff7c82ff, 0xff7985ff, 0xff7688ff, 0xff738bff,
            0xff708eff, 0xff6d91ff, 0xff6a94ff, 0xff6797ff, 0xff639bff,
            0xff609eff, 0xff5da1ff, 0xff5aa4ff, 0xff57a7ff, 0xff54aaff,
            0xff51adff, 0xff4eb0ff, 0xff4bb3ff, 0xff48b6ff, 0xff45b9ff,
            0xff42bcff, 0xff3fbfff, 0xff3cc2ff, 0xff39c5ff, 0xff36c8ff,
            0xff33cbff, 0xff2fcfff, 0xff2cd2ff, 0xff29d5ff, 0xff26d8ff,
            0xff23dbff, 0xff20deff, 0xff1de1ff, 0xff1ae4ff, 0xff17e7ff,
            0xff14eaff, 0xff11edff, 0xff0ef0ff, 0xff0bf3ff, 0xff08f6ff,
            0xff05f9ff, 0xff02fcff, 0xff01fffd, 0xff04fffa, 0xff07fff7,
            0xff0afff4, 0xff0dfff1, 0xff10ffee, 0xff13ffeb, 0xff16ffe8,
            0xff19ffe5, 0xff1cffe2, 0xff1fffdf, 0xff22ffdc, 0xff25ffd9,
            0xff28ffd6, 0xff2bffd3, 0xff2effd0, 0xff31ffcd, 0xff35ffc9,
            0xff38ffc6, 0xff3bffc3, 0xff3effc0, 0xff41ffbd, 0xff44ffba,
            0xff47ffb7, 0xff4affb4, 0xff4dffb1, 0xff50ffae, 0xff53ffab,
            0xff56ffa8, 0xff59ffa5, 0xff5cffa2, 0xff5fff9f, 0xff62ff9c,
            0xff65ff99, 0xff69ff95, 0xff6cff92, 0xff6fff8f, 0xff72ff8c,
            0xff75ff89, 0xff78ff86, 0xff7bff83, 0xff7eff80, 0xff81ff7d,
            0xff84ff7a, 0xff87ff77, 0xff8aff74, 0xff8dff71, 0xff90ff6e,
            0xff93ff6b, 0xff96ff68, 0xff9aff64, 0xff9dff61, 0xffa0ff5e,
            0xffa3ff5b, 0xffa6ff58, 0xffa9ff55, 0xffacff52, 0xffafff4f,
            0xffb2ff4c, 0xffb5ff49, 0xffb8ff46, 0xffbbff43, 0xffbeff40,
            0xffc1ff3d, 0xffc4ff3a, 0xffc7ff37, 0xffcaff34, 0xffceff30,
            0xffd1ff2d, 0xffd4ff2a, 0xffd7ff27, 0xffdaff24, 0xffddff21,
            0xffe0ff1e, 0xffe3ff1b, 0xffe6ff18, 0xffe9ff15, 0xffecff12,
            0xffefff0f, 0xfff2ff0c, 0xfff5ff09, 0xfff8ff06, 0xfffbff03,
            0xfffeff00, 0xfffbff00, 0xfff8ff00, 0xfff5ff00, 0xfff2ff00,
            0xffefff00, 0xffecff00, 0xffe9ff00, 0xffe6ff00, 0xffe3ff00,
            0xffe0ff00, 0xffddff00, 0xffdaff00, 0xffd7ff00, 0xffd4ff00,
            0xffd1ff00, 0xffceff00, 0xffcaff00, 0xffc7ff00, 0xffc4ff00,
            0xffc1ff00, 0xffbeff00, 0xffbbff00, 0xffb8ff00, 0xffb5ff00,
            0xffb2ff00, 0xffafff00, 0xffacff00, 0xffa9ff00, 0xffa6ff00,
            0xffa3ff00, 0xffa0ff00, 0xff9dff00, 0xff9aff00, 0xff96ff00,
            0xff93ff00, 0xff90ff00, 0xff8dff00, 0xff8aff00, 0xff87ff00,
            0xff84ff00, 0xff81ff00, 0xff7eff00, 0xff7bff00, 0xff78ff00,
            0xff75ff00, 0xff72ff00, 0xff6fff00, 0xff6cff00, 0xff69ff00,
            0xff66ff00, 0xff62ff00, 0xff5fff00, 0xff5cff00, 0xff59ff00,
            0xff56ff00, 0xff53ff00, 0xff50ff00, 0xff4dff00, 0xff4aff00,
            0xff47ff00, 0xff44ff00, 0xff41ff00, 0xff3eff00, 0xff3bff00,
            0xff38ff00, 0xff35ff00, 0xff31ff00, 0xff2eff00, 0xff2bff00,
            0xff28ff00, 0xff25ff00, 0xff22ff00, 0xff1fff00, 0xff1cff00,
            0xff19ff00, 0xff16ff00, 0xff13ff00, 0xff10ff00, 0xff0dff00,
            0xff0aff00, 0xff07ff00, 0xff04ff00, 0xff01ff00, 0xff00fc02,
            0xff00f905, 0xff00f608, 0xff00f30b, 0xff00f00e, 0xff00ed11,
            0xff00ea14, 0xff00e717, 0xff00e41a, 0xff00e11d, 0xff00de20,
            0xff00db23, 0xff00d826, 0xff00d529, 0xff00d22c, 0xff00cf2f,
            0xff00cc32, 0xff00c836, 0xff00c539, 0xff00c23c, 0xff00bf3f,
            0xff00bc42, 0xff00b945, 0xff00b648, 0xff00b34b, 0xff00b04e,
            0xff00ad51, 0xff00aa54, 0xff00a757, 0xff00a45a, 0xff00a15d,
            0xff009e60, 0xff009b63, 0xff009767, 0xff00946a, 0xff00916d,
            0xff008e70, 0xff008b73, 0xff008876, 0xff008579, 0xff00827c,
            0xff007f7f, 0xff007c82, 0xff007985, 0xff007688, 0xff00738b,
            0xff00708e, 0xff006d91, 0xff006a94, 0xff006797, 0xff00639b,
            0xff00609e, 0xff005da1, 0xff005aa4, 0xff0057a7, 0xff0054aa,
            0xff0051ad, 0xff004eb0, 0xff004bb3, 0xff0048b6, 0xff0045b9,
            0xff0042bc, 0xff003fbf, 0xff003cc2, 0xff0039c5, 0xff0036c8,
            0xff0033cb, 0xff002fcf, 0xff002cd2, 0xff0029d5, 0xff0026d8,
            0xff0023db, 0xff0020de, 0xff001de1, 0xff001ae4, 0xff0017e7,
            0xff0014ea, 0xff0011ed, 0xff000ef0, 0xff000bf3, 0xff0008f6,
            0xff0005f9, 0xff0002fc, 0xff0100ff, 0xff0400ff, 0xff0700ff,
            0xff0a00ff, 0xff0d00ff, 0xff1000ff, 0xff1300ff, 0xff1600ff,
            0xff1900ff, 0xff1c00ff, 0xff1f00ff, 0xff2200ff, 0xff2500ff,
            0xff2800ff, 0xff2b00ff, 0xff2e00ff, 0xff3100ff, 0xff3500ff,
            0xff3800ff, 0xff3b00ff, 0xff3e00ff, 0xff4100ff, 0xff4400ff,
            0xff4700ff, 0xff4a00ff, 0xff4d00ff, 0xff5000ff, 0xff5300ff,
            0xff5600ff, 0xff5900ff, 0xff5c00ff, 0xff5f00ff, 0xff6200ff,
            0xff6500ff, 0xff6900ff, 0xff6c00ff, 0xff6f00ff, 0xff7200ff,
            0xff7500ff, 0xff7800ff, 0xff7b00ff, 0xff7e00ff, 0xff8100ff,
            0xff8400ff, 0xff8700ff, 0xff8a00ff, 0xff8d00ff, 0xff9000ff,
            0xff9300ff, 0xff9600ff, 0xff9a00ff, 0xff9d00ff, 0xffa000ff,
            0xffa300ff, 0xffa600ff, 0xffa900ff, 0xffac00ff, 0xffaf00ff,
            0xffb200ff, 0xffb500ff, 0xffb800ff, 0xffbb00ff, 0xffbe00ff,
            0xffc100ff, 0xffc400ff, 0xffc700ff, 0xffca00ff, 0xffce00ff,
            0xffd100ff, 0xffd400ff, 0xffd700ff, 0xffda00ff, 0xffdd00ff,
            0xffe000ff, 0xffe300ff, 0xffe600ff, 0xffe900ff, 0xffec00ff,
            0xffef00ff, 0xfff200ff, 0xfff500ff, 0xfff800ff, 0xfffb00ff,
            0xfffe00ff, 0xffff03fb, 0xffff06f8, 0xffff09f5, 0xffff0cf2,
            0xffff0fef, 0xffff12ec, 0xffff15e9, 0xffff18e6, 0xffff1be3,
            0xffff1ee0, 0xffff21dd, 0xffff24da, 0xffff27d7, 0xffff2ad4,
            0xffff2dd1, 0xffff30ce, 0xffff34ca, 0xffff37c7, 0xffff3ac4,
            0xffff3dc1, 0xffff40be, 0xffff43bb, 0xffff46b8, 0xffff49b5,
            0xffff4cb2, 0xffff4faf, 0xffff52ac, 0xffff55a9, 0xffff58a6,
            0xffff5ba3, 0xffff5ea0, 0xffff619d, 0xffff649a, 0xffff6896,
            0xffff6b93, 0xffff6e90, 0xffff718d, 0xffff748a, 0xffff7787,
            0xffff7a84, 0xffff7d81, 0xffff807e, 0xffff837b, 0xffff8678,
            0xffff8975, 0xffff8c72, 0xffff8f6f, 0xffff926c, 0xffff9569,
            0xffff9866, 0xffff9c62, 0xffff9f5f, 0xffffa25c, 0xffffa559,
            0xffffa856, 0xffffab53, 0xffffae50, 0xffffb14d, 0xffffb44a,
            0xffffb747, 0xffffba44, 0xffffbd41, 0xffffc03e, 0xffffc33b,
            0xffffc638, 0xffffc935, 0xffffcd31, 0xffffd02e, 0xffffd32b,
            0xffffd628, 0xffffd925, 0xffffdc22, 0xffffdf1f, 0xffffe21c,
            0xffffe519, 0xffffe816, 0xffffeb13, 0xffffee10, 0xfffff10d,
            0xfffff40a, 0xfffff707, 0xfffffa04, 0xfffffd01, 0xfffffc00,
            0xfffff900, 0xfffff600, 0xfffff300, 0xfffff000, 0xffffed00,
            0xffffea00, 0xffffe700, 0xffffe400, 0xffffe100, 0xffffde00,
            0xffffdb00, 0xffffd800, 0xffffd500, 0xffffd200, 0xffffcf00,
            0xffffcc00, 0xffffc800, 0xffffc500, 0xffffc200, 0xffffbf00,
            0xffffbc00, 0xffffb900, 0xffffb600, 0xffffb300, 0xffffb000,
            0xffffad00, 0xffffaa00, 0xffffa700, 0xffffa400, 0xffffa100,
            0xffff9e00, 0xffff9b00, 0xffff9700, 0xffff9400, 0xffff9100,
            0xffff8e00, 0xffff8b00, 0xffff8800, 0xffff8500, 0xffff8200,
            0xffff7f00, 0xffff7c00, 0xffff7900, 0xffff7600, 0xffff7300,
            0xffff7000, 0xffff6d00, 0xffff6a00, 0xffff6700, 0xffff6300,
            0xffff6000, 0xffff5d00, 0xffff5a00, 0xffff5700, 0xffff5400,
            0xffff5100, 0xffff4e00, 0xffff4b00, 0xffff4800, 0xffff4500,
            0xffff4200, 0xffff3f00, 0xffff3c00, 0xffff3900, 0xffff3600,
            0xffff3300, 0xffff2f00, 0xffff2c00, 0xffff2900, 0xffff2600,
            0xffff2300, 0xffff2000, 0xffff1d00, 0xffff1a00, 0xffff1700,
            0xffff1400, 0xffff1100, 0xffff0e00, 0xffff0b00, 0xffff0800,
            0xffff0500, 0xffff0200, 0xfffd0101, 0xfffa0404, 0xfff70707,
            0xfff40a0a, 0xfff10d0d, 0xffee1010, 0xffeb1313, 0xffe81616,
            0xffe51919, 0xffe21c1c, 0xffdf1f1f, 0xffdc2222, 0xffd92525,
            0xffd62828, 0xffd32b2b, 0xffd02e2e, 0xffcd3131, 0xffc93535,
            0xffc63838, 0xffc33b3b, 0xffc03e3e, 0xffbd4141, 0xffba4444,
            0xffb74747, 0xffb44a4a, 0xffb14d4d, 0xffae5050, 0xffab5353,
            0xffa85656, 0xffa55959, 0xffa25c5c, 0xff9f5f5f, 0xff9c6262,
            0xff996565, 0xff956969, 0xff926c6c, 0xff8f6f6f, 0xff8c7272,
            0xff897575, 0xff867878, 0xff837b7b, 0xff807e7e, 0xff7d8181,
            0xff7a8484, 0xff778787, 0xff748a8a, 0xff718d8d, 0xff6e9090,
            0xff6b9393, 0xff689696, 0xff649a9a, 0xff619d9d, 0xff5ea0a0,
            0xff5ba3a3, 0xff58a6a6, 0xff55a9a9, 0xff52acac, 0xff4fafaf,
            0xff4cb2b2, 0xff49b5b5, 0xff46b8b8, 0xff43bbbb, 0xff40bebe,
            0xff3dc1c1, 0xff3ac4c4, 0xff37c7c7, 0xff34caca, 0xff30cece,
            0xff2dd1d1, 0xff2ad4d4, 0xff27d7d7, 0xff24dada, 0xff21dddd,
            0xff1ee0e0, 0xff1be3e3, 0xff18e6e6, 0xff15e9e9, 0xff12ecec,
            0xff0fefef, 0xff0cf2f2, 0xff09f5f5, 0xff06f8f8, 0xff03fbfb,
            0xffffff00, 0xffffff06, 0xffffff0c, 0xffffff12, 0xffffff18,
            0xffffff1e, 0xffffff24, 0xffffff2a, 0xffffff30, 0xffffff37,
            0xffffff3d, 0xffffff43, 0xffffff49, 0xffffff4f, 0xffffff55,
            0xffffff5b, 0xffffff61, 0xffffff68, 0xffffff6e, 0xffffff74,
            0xffffff7a, 0xffffff80, 0xffffff86, 0xffffff8c, 0xffffff92,
            0xffffff98, 0xffffff9f, 0xffffffa5, 0xffffffab, 0xffffffb1,
            0xffffffb7, 0xffffffbd, 0xffffffc3, 0xffffffc9, 0xffffffd0,
            0xffffffd6, 0xffffffdc, 0xffffffe2, 0xffffffe8, 0xffffffee,
            0xfffffff4, 0xfffffffa, 0xfffcfcff, 0xfff6f6ff, 0xfff0f0ff,
            0xffeaeaff, 0xffe4e4ff, 0xffdedeff, 0xffd8d8ff, 0xffd2d2ff,
            0xffccccff, 0xffc5c5ff, 0xffbfbfff, 0xffb9b9ff, 0xffb3b3ff,
            0xffadadff, 0xffa7a7ff, 0xffa1a1ff, 0xff9b9bff, 0xff9494ff,
            0xff8e8eff, 0xff8888ff, 0xff8282ff, 0xff7c7cff, 0xff7676ff,
            0xff7070ff, 0xff6a6aff, 0xff6363ff, 0xff5d5dff, 0xff5757ff,
            0xff5151ff, 0xff4b4bff, 0xff4545ff, 0xff3f3fff, 0xff3939ff,
            0xff3333ff, 0xff2c2cff, 0xff2626ff, 0xff2020ff, 0xff1a1aff,
            0xff1414ff, 0xff0e0eff, 0xff0808ff, 0xff0202ff, 0xff0404ff,
            0xff0a0aff, 0xff1010ff, 0xff1616ff, 0xff1c1cff, 0xff2222ff,
            0xff2828ff, 0xff2e2eff, 0xff3535ff, 0xff3b3bff, 0xff4141ff,
            0xff4747ff, 0xff4d4dff, 0xff5353ff, 0xff5959ff, 0xff5f5fff,
            0xff6565ff, 0xff6c6cff, 0xff7272ff, 0xff7878ff, 0xff7e7eff,
            0xff8484ff, 0xff8a8aff, 0xff9090ff, 0xff9696ff, 0xff9d9dff,
            0xffa3a3ff, 0xffa9a9ff, 0xffafafff, 0xffb5b5ff, 0xffbbbbff,
            0xffc1c1ff, 0xffc7c7ff, 0xffceceff, 0xffd4d4ff, 0xffdadaff,
            0xffe0e0ff, 0xffe6e6ff, 0xffececff, 0xfff2f2ff, 0xfff8f8ff,
            0xfffefeff, 0xfffff8f8, 0xfffff2f2, 0xffffecec, 0xffffe6e6,
            0xffffe0e0, 0xffffdada, 0xffffd4d4, 0xffffcece, 0xffffc7c7,
            0xffffc1c1, 0xffffbbbb, 0xffffb5b5, 0xffffafaf, 0xffffa9a9,
            0xffffa3a3, 0xffff9d9d, 0xffff9696, 0xffff9090, 0xffff8a8a,
            0xffff8484, 0xffff7e7e, 0xffff7878, 0xffff7272, 0xffff6c6c,
            0xffff6666, 0xffff5f5f, 0xffff5959, 0xffff5353, 0xffff4d4d,
            0xffff4747, 0xffff4141, 0xffff3b3b, 0xffff3535, 0xffff2e2e,
            0xffff2828, 0xffff2222, 0xffff1c1c, 0xffff1616, 0xffff1010,
            0xffff0a0a, 0xffff0404, 0xffff0202, 0xffff0808, 0xffff0e0e,
            0xffff1414, 0xffff1a1a, 0xffff2020, 0xffff2626, 0xffff2c2c,
            0xffff3232, 0xffff3939, 0xffff3f3f, 0xffff4545, 0xffff4b4b,
            0xffff5151, 0xffff5757, 0xffff5d5d, 0xffff6363, 0xffff6a6a,
            0xffff7070, 0xffff7676, 0xffff7c7c, 0xffff8282, 0xffff8888,
            0xffff8e8e, 0xffff9494, 0xffff9b9b, 0xffffa1a1, 0xffffa7a7,
            0xffffadad, 0xffffb3b3, 0xffffb9b9, 0xffffbfbf, 0xffffc5c5,
            0xffffcbcb, 0xffffd2d2, 0xffffd8d8, 0xffffdede, 0xffffe4e4,
            0xffffeaea, 0xfffff0f0, 0xfffff6f6, 0xfffffcfc, 0xfffafffa,
            0xfff4fff4, 0xffeeffee, 0xffe8ffe8, 0xffe2ffe2, 0xffdcffdc,
            0xffd6ffd6, 0xffd0ffd0, 0xffc9ffc9, 0xffc3ffc3, 0xffbdffbd,
            0xffb7ffb7, 0xffb1ffb1, 0xffabffab, 0xffa5ffa5, 0xff9fff9f,
            0xff99ff99, 0xff92ff92, 0xff8cff8c, 0xff86ff86, 0xff80ff80,
            0xff7aff7a, 0xff74ff74, 0xff6eff6e, 0xff68ff68, 0xff61ff61,
            0xff5bff5b, 0xff55ff55, 0xff4fff4f, 0xff49ff49, 0xff43ff43,
            0xff3dff3d, 0xff37ff37, 0xff30ff30, 0xff2aff2a, 0xff24ff24,
            0xff1eff1e, 0xff18ff18, 0xff12ff12, 0xff0cff0c, 0xff06ff06,
            0xff00ff00, 0xff06ff06, 0xff0cff0c, 0xff12ff12, 0xff18ff18,
            0xff1eff1e, 0xff24ff24, 0xff2aff2a, 0xff30ff30, 0xff37ff37,
            0xff3dff3d, 0xff43ff43, 0xff49ff49, 0xff4fff4f, 0xff55ff55,
            0xff5bff5b, 0xff61ff61, 0xff68ff68, 0xff6eff6e, 0xff74ff74,
            0xff7aff7a, 0xff80ff80, 0xff86ff86, 0xff8cff8c, 0xff92ff92,
            0xff98ff98, 0xff9fff9f, 0xffa5ffa5, 0xffabffab, 0xffb1ffb1,
            0xffb7ffb7, 0xffbdffbd, 0xffc3ffc3, 0xffc9ffc9, 0xffd0ffd0,
            0xffd6ffd6, 0xffdcffdc, 0xffe2ffe2, 0xffe8ffe8, 0xffeeffee,
            0xfff4fff4, 0xfffafffa, 0xfffffcff, 0xfffff6ff, 0xfffff0ff,
            0xffffeaff, 0xffffe4ff, 0xffffdeff, 0xffffd8ff, 0xffffd2ff,
            0xffffccff, 0xffffc5ff, 0xffffbfff, 0xffffb9ff, 0xffffb3ff,
            0xffffadff, 0xffffa7ff, 0xffffa1ff, 0xffff9bff, 0xffff94ff,
            0xffff8eff, 0xffff88ff, 0xffff82ff, 0xffff7cff, 0xffff76ff,
            0xffff70ff, 0xffff6aff, 0xffff63ff, 0xffff5dff, 0xffff57ff,
            0xffff51ff, 0xffff4bff, 0xffff45ff, 0xffff3fff, 0xffff39ff,
            0xffff33ff, 0xffff2cff, 0xffff26ff, 0xffff20ff, 0xffff1aff,
            0xffff14ff, 0xffff0eff, 0xffff08ff, 0xffff02ff, 0xffff04ff,
            0xffff0aff, 0xffff10ff, 0xffff16ff, 0xffff1cff, 0xffff22ff,
            0xffff28ff, 0xffff2eff, 0xffff35ff, 0xffff3bff, 0xffff41ff,
            0xffff47ff, 0xffff4dff, 0xffff53ff, 0xffff59ff, 0xffff5fff,
            0xffff65ff, 0xffff6cff, 0xffff72ff, 0xffff78ff, 0xffff7eff,
            0xffff84ff, 0xffff8aff, 0xffff90ff, 0xffff96ff, 0xffff9dff,
            0xffffa3ff, 0xffffa9ff, 0xffffafff, 0xffffb5ff, 0xffffbbff,
            0xffffc1ff, 0xffffc7ff, 0xffffceff, 0xffffd4ff, 0xffffdaff,
            0xffffe0ff, 0xffffe6ff, 0xffffecff, 0xfffff2ff, 0xfffff8ff,
            0xfffffeff, 0xfff8ffff, 0xfff2ffff, 0xffecffff, 0xffe6ffff,
            0xffe0ffff, 0xffdaffff, 0xffd4ffff, 0xffceffff, 0xffc7ffff,
            0xffc1ffff, 0xffbbffff, 0xffb5ffff, 0xffafffff, 0xffa9ffff,
            0xffa3ffff, 0xff9dffff, 0xff96ffff, 0xff90ffff, 0xff8affff,
            0xff84ffff, 0xff7effff, 0xff78ffff, 0xff72ffff, 0xff6cffff,
            0xff66ffff, 0xff5fffff, 0xff59ffff, 0xff53ffff, 0xff4dffff,
            0xff47ffff, 0xff41ffff, 0xff3bffff, 0xff35ffff, 0xff2effff,
            0xff28ffff, 0xff22ffff, 0xff1cffff, 0xff16ffff, 0xff10ffff,
            0xff0affff, 0xff04ffff, 0xff02ffff, 0xff08ffff, 0xff0effff,
            0xff14ffff, 0xff1affff, 0xff20ffff, 0xff26ffff, 0xff2cffff,
            0xff32ffff, 0xff39ffff, 0xff3fffff, 0xff45ffff, 0xff4bffff,
            0xff51ffff, 0xff57ffff, 0xff5dffff, 0xff63ffff, 0xff6affff,
            0xff70ffff, 0xff76ffff, 0xff7cffff, 0xff82ffff, 0xff88ffff,
            0xff8effff, 0xff94ffff, 0xff9bffff, 0xffa1ffff, 0xffa7ffff,
            0xffadffff, 0xffb3ffff, 0xffb9ffff, 0xffbfffff, 0xffc5ffff,
            0xffcbffff, 0xffd2ffff, 0xffd8ffff, 0xffdeffff, 0xffe4ffff,
            0xffeaffff, 0xfff0ffff, 0xfff6ffff, 0xfffcffff, 0xfffffffa,
            0xfffffff4, 0xffffffee, 0xffffffe8, 0xffffffe2, 0xffffffdc,
            0xffffffd6, 0xffffffd0, 0xffffffc9, 0xffffffc3, 0xffffffbd,
            0xffffffb7, 0xffffffb1, 0xffffffab, 0xffffffa5, 0xffffff9f,
            0xffffff99, 0xffffff92, 0xffffff8c, 0xffffff86, 0xffffff80,
            0xffffff7a, 0xffffff74, 0xffffff6e, 0xffffff68, 0xffffff61,
            0xffffff5b, 0xffffff55, 0xffffff4f, 0xffffff49, 0xffffff43,
            0xffffff3d, 0xffffff37, 0xffffff30, 0xffffff2a, 0xffffff24,
            0xffffff1e, 0xffffff18, 0xffffff12, 0xffffff0c, 0xffffff06,
            0xffffff00, 0xffffff06, 0xffffff0c, 0xffffff12, 0xffffff18,
            0xffffff1e, 0xffffff24, 0xffffff2a, 0xffffff30, 0xffffff37,
            0xffffff3d, 0xffffff43, 0xffffff49, 0xffffff4f, 0xffffff55,
            0xffffff5b, 0xffffff61, 0xffffff68, 0xffffff6e, 0xffffff74,
            0xffffff7a, 0xffffff80, 0xffffff86, 0xffffff8c, 0xffffff92,
            0xffffff98, 0xffffff9f, 0xffffffa5, 0xffffffab, 0xffffffb1,
            0xffffffb7, 0xffffffbd, 0xffffffc3, 0xffffffc9, 0xffffffd0,
            0xffffffd6, 0xffffffdc, 0xffffffe2, 0xffffffe8, 0xffffffee,
            0xfffffff4, 0xfffffffa, 0xfffcfffc, 0xfff6fff6, 0xfff0fff0,
            0xffeaffea, 0xffe4ffe4, 0xffdeffde, 0xffd8ffd8, 0xffd2ffd2,
            0xffccffcc, 0xffc5ffc5, 0xffbfffbf, 0xffb9ffb9, 0xffb3ffb3,
            0xffadffad, 0xffa7ffa7, 0xffa1ffa1, 0xff9bff9b, 0xff94ff94,
            0xff8eff8e, 0xff88ff88, 0xff82ff82, 0xff7cff7c, 0xff76ff76,
            0xff70ff70, 0xff6aff6a, 0xff63ff63, 0xff5dff5d, 0xff57ff57,
            0xff51ff51, 0xff4bff4b, 0xff45ff45, 0xff3fff3f, 0xff39ff39,
            0xff33ff33, 0xff2cff2c, 0xff26ff26, 0xff20ff20, 0xff1aff1a,
            0xff14ff14, 0xff0eff0e, 0xff08ff08, 0xff02ff02, 0xff04ff04,
            0xff0aff0a, 0xff10ff10, 0xff16ff16, 0xff1cff1c, 0xff22ff22,
            0xff28ff28, 0xff2eff2e, 0xff35ff35, 0xff3bff3b, 0xff41ff41,
            0xff47ff47, 0xff4dff4d, 0xff53ff53, 0xff59ff59, 0xff5fff5f,
            0xff65ff65, 0xff6cff6c, 0xff72ff72, 0xff78ff78, 0xff7eff7e,
            0xff84ff84, 0xff8aff8a, 0xff90ff90, 0xff96ff96, 0xff9dff9d,
            0xffa3ffa3, 0xffa9ffa9, 0xffafffaf, 0xffb5ffb5, 0xffbbffbb,
            0xffc1ffc1, 0xffc7ffc7, 0xffceffce, 0xffd4ffd4, 0xffdaffda,
            0xffe0ffe0, 0xffe6ffe6, 0xffecffec, 0xfff2fff2, 0xfff8fff8,
            0xfffefffe, 0xfff8f8ff, 0xfff2f2ff, 0xffececff, 0xffe6e6ff,
            0xffe0e0ff, 0xffdadaff, 0xffd4d4ff, 0xffceceff, 0xffc7c7ff,
            0xffc1c1ff, 0xffbbbbff, 0xffb5b5ff, 0xffafafff, 0xffa9a9ff,
            0xffa3a3ff, 0xff9d9dff, 0xff9696ff, 0xff9090ff, 0xff8a8aff,
            0xff8484ff, 0xff7e7eff, 0xff7878ff, 0xff7272ff, 0xff6c6cff,
            0xff6666ff, 0xff5f5fff, 0xff5959ff, 0xff5353ff, 0xff4d4dff,
            0xff4747ff, 0xff4141ff, 0xff3b3bff, 0xff3535ff, 0xff2e2eff,
            0xff2828ff, 0xff2222ff, 0xff1c1cff, 0xff1616ff, 0xff1010ff,
            0xff0a0aff, 0xff0404ff, 0xff0202ff, 0xff0808ff, 0xff0e0eff,
            0xff1414ff, 0xff1a1aff, 0xff2020ff, 0xff2626ff, 0xff2c2cff,
            0xff3232ff, 0xff3939ff, 0xff3f3fff, 0xff4545ff, 0xff4b4bff,
            0xff5151ff, 0xff5757ff, 0xff5d5dff, 0xff6363ff, 0xff6a6aff,
            0xff7070ff, 0xff7676ff, 0xff7c7cff, 0xff8282ff, 0xff8888ff,
            0xff8e8eff, 0xff9494ff, 0xff9b9bff, 0xffa1a1ff, 0xffa7a7ff,
            0xffadadff, 0xffb3b3ff, 0xffb9b9ff, 0xffbfbfff, 0xffc5c5ff,
            0xffcbcbff, 0xffd2d2ff, 0xffd8d8ff, 0xffdedeff, 0xffe4e4ff,
            0xffeaeaff, 0xfff0f0ff, 0xfff6f6ff, 0xfffcfcff, 0xfffffaff,
            0xfffff4ff, 0xffffeeff, 0xffffe8ff, 0xffffe2ff, 0xffffdcff,
            0xffffd6ff, 0xffffd0ff, 0xffffc9ff, 0xffffc3ff, 0xffffbdff,
            0xffffb7ff, 0xffffb1ff, 0xffffabff, 0xffffa5ff, 0xffff9fff,
            0xffff99ff, 0xffff92ff, 0xffff8cff, 0xffff86ff, 0xffff80ff,
            0xffff7aff, 0xffff74ff, 0xffff6eff, 0xffff68ff, 0xffff61ff,
            0xffff5bff, 0xffff55ff, 0xffff4fff, 0xffff49ff, 0xffff43ff,
            0xffff3dff, 0xffff37ff, 0xffff30ff, 0xffff2aff, 0xffff24ff,
            0xffff1eff, 0xffff18ff, 0xffff12ff, 0xffff0cff, 0xffff06ff,
            0xffff00ff, 0xffff06ff, 0xffff0cff, 0xffff12ff, 0xffff18ff,
            0xffff1eff, 0xffff24ff, 0xffff2aff, 0xffff30ff, 0xffff37ff,
            0xffff3dff, 0xffff43ff, 0xffff49ff, 0xffff4fff, 0xffff55ff,
            0xffff5bff, 0xffff61ff, 0xffff68ff, 0xffff6eff, 0xffff74ff,
            0xffff7aff, 0xffff80ff, 0xffff86ff, 0xffff8cff, 0xffff92ff,
            0xffff98ff, 0xffff9fff, 0xffffa5ff, 0xffffabff, 0xffffb1ff,
            0xffffb7ff, 0xffffbdff, 0xffffc3ff, 0xffffc9ff, 0xffffd0ff,
            0xffffd6ff, 0xffffdcff, 0xffffe2ff, 0xffffe8ff, 0xffffeeff,
            0xfffff4ff, 0xfffffaff, 0xfffffffc, 0xfffffff6, 0xfffffff0,
            0xffffffea, 0xffffffe4, 0xffffffde, 0xffffffd8, 0xffffffd2,
            0xffffffcc, 0xffffffc5, 0xffffffbf, 0xffffffb9, 0xffffffb3,
            0xffffffad, 0xffffffa7, 0xffffffa1, 0xffffff9b, 0xffffff94,
            0xffffff8e, 0xffffff88, 0xffffff82, 0xffffff7c, 0xffffff76,
            0xffffff70, 0xffffff6a, 0xffffff63, 0xffffff5d, 0xffffff57,
            0xffffff51, 0xffffff4b, 0xffffff45, 0xffffff3f, 0xffffff39,
            0xffffff33, 0xffffff2c, 0xffffff26, 0xffffff20, 0xffffff1a,
            0xffffff14, 0xffffff0e, 0xffffff08, 0xffffff02, 0xffffff04,
            0xffffff0a, 0xffffff10, 0xffffff16, 0xffffff1c, 0xffffff22,
            0xffffff28, 0xffffff2e, 0xffffff35, 0xffffff3b, 0xffffff41,
            0xffffff47, 0xffffff4d, 0xffffff53, 0xffffff59, 0xffffff5f,
            0xffffff65, 0xffffff6c, 0xffffff72, 0xffffff78, 0xffffff7e,
            0xffffff84, 0xffffff8a, 0xffffff90, 0xffffff96, 0xffffff9d,
            0xffffffa3, 0xffffffa9, 0xffffffaf, 0xffffffb5, 0xffffffbb,
            0xffffffc1, 0xffffffc7, 0xffffffce, 0xffffffd4, 0xffffffda,
            0xffffffe0, 0xffffffe6, 0xffffffec, 0xfffffff2, 0xfffffff8,
            0xfffffffe, 0xfffff8f8, 0xfffff2f2, 0xffffecec, 0xffffe6e6,
            0xffffe0e0, 0xffffdada, 0xffffd4d4, 0xffffcece, 0xffffc7c7,
            0xffffc1c1, 0xffffbbbb, 0xffffb5b5, 0xffffafaf, 0xffffa9a9,
            0xffffa3a3, 0xffff9d9d, 0xffff9696, 0xffff9090, 0xffff8a8a,
            0xffff8484, 0xffff7e7e, 0xffff7878, 0xffff7272, 0xffff6c6c,
            0xffff6666, 0xffff5f5f, 0xffff5959, 0xffff5353, 0xffff4d4d,
            0xffff4747, 0xffff4141, 0xffff3b3b, 0xffff3535, 0xffff2e2e,
            0xffff2828, 0xffff2222, 0xffff1c1c, 0xffff1616, 0xffff1010,
            0xffff0a0a, 0xffff0404, 0xffff0202, 0xffff0808, 0xffff0e0e,
            0xffff1414, 0xffff1a1a, 0xffff2020, 0xffff2626, 0xffff2c2c,
            0xffff3232, 0xffff3939, 0xffff3f3f, 0xffff4545, 0xffff4b4b,
            0xffff5151, 0xffff5757, 0xffff5d5d, 0xffff6363, 0xffff6a6a,
            0xffff7070, 0xffff7676, 0xffff7c7c, 0xffff8282, 0xffff8888,
            0xffff8e8e, 0xffff9494, 0xffff9b9b, 0xffffa1a1, 0xffffa7a7,
            0xffffadad, 0xffffb3b3, 0xffffb9b9, 0xffffbfbf, 0xffffc5c5,
            0xffffcbcb, 0xffffd2d2, 0xffffd8d8, 0xffffdede, 0xffffe4e4,
            0xffffeaea, 0xfffff0f0, 0xfffff6f6, 0xfffffcfc, 0xfffaffff,
            0xfff4ffff, 0xffeeffff, 0xffe8ffff, 0xffe2ffff, 0xffdcffff,
            0xffd6ffff, 0xffd0ffff, 0xffc9ffff, 0xffc3ffff, 0xffbdffff,
            0xffb7ffff, 0xffb1ffff, 0xffabffff, 0xffa5ffff, 0xff9fffff,
            0xff99ffff, 0xff92ffff, 0xff8cffff, 0xff86ffff, 0xff80ffff,
            0xff7affff, 0xff74ffff, 0xff6effff, 0xff68ffff, 0xff61ffff,
            0xff5bffff, 0xff55ffff, 0xff4fffff, 0xff49ffff, 0xff43ffff,
            0xff3dffff, 0xff37ffff, 0xff30ffff, 0xff2affff, 0xff24ffff,
            0xff1effff, 0xff18ffff, 0xff12ffff, 0xff0cffff, 0xff06ffff,
            0xff191999, 0xff000000, 0xff020202, 0xff050505, 0xff070707,
            0xff0a0a0a, 0xff0c0c0c, 0xff0f0f0f, 0xff121212, 0xff141414,
            0xff171717, 0xff191919, 0xff1c1c1c, 0xff1e1e1e, 0xff212121,
            0xff242424, 0xff262626, 0xff292929, 0xff2b2b2b, 0xff2e2e2e,
            0xff303030, 0xff333333, 0xff363636, 0xff383838, 0xff3b3b3b,
            0xff3d3d3d, 0xff404040, 0xff424242, 0xff454545, 0xff484848,
            0xff4a4a4a, 0xff4d4d4d, 0xff4f4f4f, 0xff525252, 0xff555555,
            0xff575757, 0xff5a5a5a, 0xff5c5c5c, 0xff5f5f5f, 0xff616161,
            0xff646464, 0xff676767, 0xff696969, 0xff6c6c6c, 0xff6e6e6e,
            0xff717171, 0xff737373, 0xff767676, 0xff797979, 0xff7b7b7b,
            0xff7e7e7e, 0xff808080, 0xff838383, 0xff858585, 0xff888888,
            0xff8b8b8b, 0xff8d8d8d, 0xff909090, 0xff929292, 0xff959595,
            0xff979797, 0xff9a9a9a, 0xff9d9d9d, 0xff9f9f9f, 0xffa2a2a2,
            0xffa4a4a4, 0xffa7a7a7, 0xffaaaaaa, 0xffacacac, 0xffafafaf,
            0xffb1b1b1, 0xffb4b4b4, 0xffb6b6b6, 0xffb9b9b9, 0xffbcbcbc,
            0xffbebebe, 0xffc1c1c1, 0xffc3c3c3, 0xffc6c6c6, 0xffc8c8c8,
            0xffcbcbcb, 0xffcecece, 0xffd0d0d0, 0xffd3d3d3, 0xffd5d5d5,
            0xffd8d8d8, 0xffdadada, 0xffdddddd, 0xffe0e0e0, 0xffe2e2e2,
            0xffe5e5e5, 0xffe7e7e7, 0xffeaeaea, 0xffececec, 0xffefefef,
            0xfff2f2f2, 0xfff4f4f4, 0xfff7f7f7, 0xfff9f9f9, 0xfffcfcfc,
            0xffffffff, 0xffff00ff, 0xfffd00ff, 0xfffc00ff, 0xfffa00ff,
            0xfff900ff, 0xfff700ff, 0xfff600ff, 0xfff500ff, 0xfff300ff,
            0xfff200ff, 0xfff000ff, 0xffef00ff, 0xffed00ff, 0xffec00ff,
            0xffeb00ff, 0xffe900ff, 0xffe800ff, 0xffe600ff, 0xffe500ff,
            0xffe300ff, 0xffe200ff, 0xffe100ff, 0xffdf00ff, 0xffde00ff,
            0xffdc00ff, 0xffdb00ff, 0xffd900ff, 0xffd800ff, 0xffd700ff,
            0xffd500ff, 0xffd400ff, 0xffd200ff, 0xffd100ff, 0xffcf00ff,
            0xffce00ff, 0xffcd00ff, 0xffcb00ff, 0xffc900ff, 0xffc700ff,
            0xffc400ff, 0xffc200ff, 0xffc000ff, 0xffbe00ff, 0xffbc00ff,
            0xffba00ff, 0xffb800ff, 0xffb500ff, 0xffb300ff, 0xffb100ff,
            0xffaf00ff, 0xffad00ff, 0xffab00ff, 0xffa900ff, 0xffa600ff,
            0xffa400ff, 0xffa200ff, 0xffa000ff, 0xff9e00ff, 0xff9c00ff,
            0xff9a00ff, 0xff9700ff, 0xff9500ff, 0xff9300ff, 0xff9100ff,
            0xff8f00ff, 0xff8d00ff, 0xff8b00ff, 0xff8800ff, 0xff8600ff,
            0xff8400ff, 0xff8200ff, 0xff8000ff, 0xff7d00ff, 0xff7900ff,
            0xff7600ff, 0xff7200ff, 0xff6f00ff, 0xff6b00ff, 0xff6800ff,
            0xff6400ff, 0xff6000ff, 0xff5d00ff, 0xff5900ff, 0xff5600ff,
            0xff5200ff, 0xff4f00ff, 0xff4b00ff, 0xff4700ff, 0xff4400ff,
            0xff4000ff, 0xff3d00ff, 0xff3900ff, 0xff3600ff, 0xff3200ff,
            0xff2e00ff, 0xff2b00ff, 0xff2700ff, 0xff2400ff, 0xff2000ff,
            0xff1d00ff, 0xff1900ff, 0xff1500ff, 0xff1200ff, 0xff0e00ff,
            0xff0b00ff, 0xff0700ff, 0xff0400ff, 0xff0000ff, 0xff0000ff,
            0xff0000ff, 0xff0000ff, 0xff0000ff, 0xff0000ff, 0xff0000ff,
            0xff0000ff, 0xff0000ff, 0xff0000ff, 0xff0000ff, 0xff0000ff,
            0xff0000ff, 0xff0000ff, 0xff0000ff, 0xff0000ff, 0xff0000ff,
            0xff0000ff, 0xff0000ff, 0xff0000ff, 0xff0000ff, 0xff0000ff,
            0xff0000ff, 0xff0000ff, 0xff0000ff, 0xff0000ff, 0xff0000ff,
            0xff0000ff, 0xff0000ff, 0xff0000ff, 0xff0000ff, 0xff0000ff,
            0xff0000ff, 0xff0000ff, 0xff0000ff, 0xff0000ff, 0xff0000ff,
            0xff0001ff, 0xff0003ff, 0xff0004ff, 0xff0005ff, 0xff0007ff,
            0xff0008ff, 0xff000aff, 0xff000bff, 0xff000dff, 0xff000eff,
            0xff000fff, 0xff0011ff, 0xff0012ff, 0xff0014ff, 0xff0015ff,
            0xff0017ff, 0xff0018ff, 0xff0019ff, 0xff001bff, 0xff001cff,
            0xff001eff, 0xff001fff, 0xff0021ff, 0xff0022ff, 0xff0023ff,
            0xff0025ff, 0xff0026ff, 0xff0028ff, 0xff0029ff, 0xff002bff,
            0xff002cff, 0xff002dff, 0xff002fff, 0xff0030ff, 0xff0032ff,
            0xff0033ff, 0xff0036ff, 0xff0038ff, 0xff003aff, 0xff003cff,
            0xff003eff, 0xff0040ff, 0xff0042ff, 0xff0045ff, 0xff0047ff,
            0xff0049ff, 0xff004bff, 0xff004dff, 0xff004fff, 0xff0051ff,
            0xff0054ff, 0xff0056ff, 0xff0058ff, 0xff005aff, 0xff005cff,
            0xff005eff, 0xff0060ff, 0xff0063ff, 0xff0065ff, 0xff0067ff,
            0xff0069ff, 0xff006bff, 0xff006dff, 0xff006fff, 0xff0072ff,
            0xff0074ff, 0xff0076ff, 0xff0078ff, 0xff007aff, 0xff007cff,
            0xff007eff, 0xff0081ff, 0xff0083ff, 0xff0085ff, 0xff0087ff,
            0xff0089ff, 0xff008bff, 0xff008dff, 0xff0090ff, 0xff0092ff,
            0xff0094ff, 0xff0096ff, 0xff0098ff, 0xff009aff, 0xff009cff,
            0xff009fff, 0xff00a1ff, 0xff00a3ff, 0xff00a5ff, 0xff00a7ff,
            0xff00a9ff, 0xff00abff, 0xff00aeff, 0xff00b0ff, 0xff00b2ff,
            0xff00b4ff, 0xff00b6ff, 0xff00b8ff, 0xff00baff, 0xff00bdff,
            0xff00bfff, 0xff00c1ff, 0xff00c3ff, 0xff00c5ff, 0xff00c7ff,
            0xff00c9ff, 0xff00cbff, 0xff00cdff, 0xff00ceff, 0xff00d0ff,
            0xff00d1ff, 0xff00d3ff, 0xff00d4ff, 0xff00d5ff, 0xff00d7ff,
            0xff00d8ff, 0xff00daff, 0xff00dbff, 0xff00ddff, 0xff00deff,
            0xff00dfff, 0xff00e1ff, 0xff00e2ff, 0xff00e4ff, 0xff00e5ff,
            0xff00e7ff, 0xff00e8ff, 0xff00e9ff, 0xff00ebff, 0xff00ecff,
            0xff00eeff, 0xff00efff, 0xff00f1ff, 0xff00f2ff, 0xff00f3ff,
            0xff00f5ff, 0xff00f6ff, 0xff00f8ff, 0xff00f9ff, 0xff00fbff,
            0xff00fcff, 0xff00fdff, 0xff00fffe, 0xff00fffd, 0xff00fffb,
            0xff00fffa, 0xff00fff8, 0xff00fff7, 0xff00fff6, 0xff00fff4,
            0xff00fff3, 0xff00fff1, 0xff00fff0, 0xff00ffee, 0xff00ffed,
            0xff00ffec, 0xff00ffea, 0xff00ffe9, 0xff00ffe7, 0xff00ffe6,
            0xff00ffe4, 0xff00ffe3, 0xff00ffe2, 0xff00ffe0, 0xff00ffdf,
            0xff00ffdd, 0xff00ffdc, 0xff00ffda, 0xff00ffd9, 0xff00ffd8,
            0xff00ffd6, 0xff00ffd5, 0xff00ffd3, 0xff00ffd2, 0xff00ffd0,
            0xff00ffcf, 0xff00ffce, 0xff00ffcc, 0xff00ffca, 0xff00ffc8,
            0xff00ffc6, 0xff00ffc4, 0xff00ffc2, 0xff00ffc0, 0xff00ffbd,
            0xff00ffbb, 0xff00ffb9, 0xff00ffb7, 0xff00ffb5, 0xff00ffb3,
            0xff00ffb1, 0xff00ffae, 0xff00ffac, 0xff00ffaa, 0xff00ffa8,
            0xff00ffa6, 0xff00ffa4, 0xff00ffa2, 0xff00ff9f, 0xff00ff9d,
            0xff00ff9b, 0xff00ff99, 0xff00ff97, 0xff00ff95, 0xff00ff93,
            0xff00ff90, 0xff00ff8e, 0xff00ff8c, 0xff00ff8a, 0xff00ff88,
            0xff00ff86, 0xff00ff84, 0xff00ff81, 0xff00ff7f, 0xff00ff7d,
            0xff00ff7b, 0xff00ff79, 0xff00ff77, 0xff00ff75, 0xff00ff72,
            0xff00ff70, 0xff00ff6e, 0xff00ff6c, 0xff00ff6a, 0xff00ff68,
            0xff00ff66, 0xff00ff63, 0xff00ff61, 0xff00ff5f, 0xff00ff5d,
            0xff00ff5b, 0xff00ff59, 0xff00ff57, 0xff00ff54, 0xff00ff52,
            0xff00ff50, 0xff00ff4e, 0xff00ff4c, 0xff00ff4a, 0xff00ff48,
            0xff00ff45, 0xff00ff43, 0xff00ff41, 0xff00ff3f, 0xff00ff3d,
            0xff00ff3b, 0xff00ff39, 0xff00ff36, 0xff00ff34, 0xff00ff32,
            0xff00ff31, 0xff00ff2f, 0xff00ff2e, 0xff00ff2d, 0xff00ff2b,
            0xff00ff2a, 0xff00ff28, 0xff00ff27, 0xff00ff25, 0xff00ff24,
            0xff00ff23, 0xff00ff21, 0xff00ff20, 0xff00ff1e, 0xff00ff1d,
            0xff00ff1b, 0xff00ff1a, 0xff00ff19, 0xff00ff17, 0xff00ff16,
            0xff00ff14, 0xff00ff13, 0xff00ff11, 0xff00ff10, 0xff00ff0f,
            0xff00ff0d, 0xff00ff0c, 0xff00ff0a, 0xff00ff09, 0xff00ff07,
            0xff00ff06, 0xff00ff05, 0xff00ff03, 0xff00ff02, 0xff00ff00,
            0xff00ff00, 0xff02ff00, 0xff03ff00, 0xff04ff00, 0xff06ff00,
            0xff07ff00, 0xff09ff00, 0xff0aff00, 0xff0cff00, 0xff0dff00,
            0xff0eff00, 0xff10ff00, 0xff11ff00, 0xff13ff00, 0xff14ff00,
            0xff16ff00, 0xff17ff00, 0xff18ff00, 0xff1aff00, 0xff1bff00,
            0xff1dff00, 0xff1eff00, 0xff20ff00, 0xff21ff00, 0xff22ff00,
            0xff24ff00, 0xff25ff00, 0xff27ff00, 0xff28ff00, 0xff2aff00,
            0xff2bff00, 0xff2cff00, 0xff2eff00, 0xff2fff00, 0xff31ff00,
            0xff32ff00, 0xff34ff00, 0xff36ff00, 0xff38ff00, 0xff3aff00,
            0xff3dff00, 0xff3fff00, 0xff41ff00, 0xff43ff00, 0xff45ff00,
            0xff47ff00, 0xff49ff00, 0xff4cff00, 0xff4eff00, 0xff50ff00,
            0xff52ff00, 0xff54ff00, 0xff56ff00, 0xff58ff00, 0xff5bff00,
            0xff5dff00, 0xff5fff00, 0xff61ff00, 0xff63ff00, 0xff65ff00,
            0xff67ff00, 0xff6aff00, 0xff6cff00, 0xff6eff00, 0xff70ff00,
            0xff72ff00, 0xff74ff00, 0xff76ff00, 0xff79ff00, 0xff7bff00,
            0xff7dff00, 0xff7fff00, 0xff81ff00, 0xff83ff00, 0xff85ff00,
            0xff88ff00, 0xff8aff00, 0xff8cff00, 0xff8eff00, 0xff90ff00,
            0xff92ff00, 0xff94ff00, 0xff97ff00, 0xff99ff00, 0xff9bff00,
            0xff9dff00, 0xff9fff00, 0xffa1ff00, 0xffa3ff00, 0xffa6ff00,
            0xffa8ff00, 0xffaaff00, 0xffacff00, 0xffaeff00, 0xffb0ff00,
            0xffb2ff00, 0xffb5ff00, 0xffb7ff00, 0xffb9ff00, 0xffbbff00,
            0xffbdff00, 0xffbfff00, 0xffc1ff00, 0xffc4ff00, 0xffc6ff00,
            0xffc8ff00, 0xffcaff00, 0xffccff00, 0xffcdff00, 0xffcfff00,
            0xffd0ff00, 0xffd2ff00, 0xffd3ff00, 0xffd4ff00, 0xffd6ff00,
            0xffd7ff00, 0xffd9ff00, 0xffdaff00, 0xffdcff00, 0xffddff00,
            0xffdeff00, 0xffe0ff00, 0xffe1ff00, 0xffe3ff00, 0xffe4ff00,
            0xffe6ff00, 0xffe7ff00, 0xffe8ff00, 0xffeaff00, 0xffebff00,
            0xffedff00, 0xffeeff00, 0xfff0ff00, 0xfff1ff00, 0xfff2ff00,
            0xfff4ff00, 0xfff5ff00, 0xfff7ff00, 0xfff8ff00, 0xfffaff00,
            0xfffbff00, 0xfffcff00, 0xfffeff00, 0xfffffe00, 0xfffffd00,
            0xfffffd00, 0xfffffc00, 0xfffffb00, 0xfffffb00, 0xfffffa00,
            0xfffff900, 0xfffff800, 0xfffff800, 0xfffff700, 0xfffff600,
            0xfffff600, 0xfffff500, 0xfffff400, 0xfffff300, 0xfffff300,
            0xfffff200, 0xfffff100, 0xfffff100, 0xfffff000, 0xffffef00,
            0xffffee00, 0xffffee00, 0xffffed00, 0xffffec00, 0xffffec00,
            0xffffeb00, 0xffffea00, 0xffffe900, 0xffffe900, 0xffffe800,
            0xffffe700, 0xffffe700, 0xffffe600, 0xffffe500, 0xffffe400,
            0xffffe300, 0xffffe200, 0xffffe100, 0xffffe000, 0xffffdf00,
            0xffffde00, 0xffffdd00, 0xffffdc00, 0xffffda00, 0xffffd900,
            0xffffd800, 0xffffd700, 0xffffd600, 0xffffd500, 0xffffd400,
            0xffffd300, 0xffffd200, 0xffffd100, 0xffffd000, 0xffffcf00,
            0xffffce00, 0xffffcd00, 0xffffcb00, 0xffffca00, 0xffffc900,
            0xffffc800, 0xffffc700, 0xffffc600, 0xffffc500, 0xffffc400,
            0xffffc300, 0xffffc200, 0xffffc100, 0xffffc000, 0xffffbf00,
            0xffffbe00, 0xffffbc00, 0xffffbb00, 0xffffba00, 0xffffb900,
            0xffffb800, 0xffffb700, 0xffffb600, 0xffffb500, 0xffffb400,
            0xffffb300, 0xffffb200, 0xffffb100, 0xffffb000, 0xffffaf00,
            0xffffad00, 0xffffac00, 0xffffab00, 0xffffaa00, 0xffffa900,
            0xffffa800, 0xffffa700, 0xffffa600, 0xffffa500, 0xffffa400,
            0xffffa300, 0xffffa200, 0xffffa100, 0xffffa000, 0xffff9e00,
            0xffff9d00, 0xffff9c00, 0xffff9b00, 0xffff9a00, 0xffff9900,
            0xffff9800, 0xffff9700, 0xffff9700, 0xffff9600, 0xffff9500,
            0xffff9500, 0xffff9400, 0xffff9300, 0xffff9200, 0xffff9200,
            0xffff9100, 0xffff9000, 0xffff9000, 0xffff8f00, 0xffff8e00,
            0xffff8d00, 0xffff8d00, 0xffff8c00, 0xffff8b00, 0xffff8b00,
            0xffff8a00, 0xffff8900, 0xffff8800, 0xffff8800, 0xffff8700,
            0xffff8600, 0xffff8600, 0xffff8500, 0xffff8400, 0xffff8300,
            0xffff8300, 0xffff8200, 0xffff8100, 0xffff8100, 0xffff8000,
            0xffff7f00, 0xffff7e00, 0xffff7e00, 0xffff7d00, 0xffff7c00,
            0xffff7c00, 0xffff7b00, 0xffff7a00, 0xffff7900, 0xffff7900,
            0xffff7800, 0xffff7700, 0xffff7700, 0xffff7600, 0xffff7500,
            0xffff7400, 0xffff7400, 0xffff7300, 0xffff7200, 0xffff7200,
            0xffff7100, 0xffff7000, 0xffff6f00, 0xffff6f00, 0xffff6e00,
            0xffff6d00, 0xffff6d00, 0xffff6c00, 0xffff6b00, 0xffff6a00,
            0xffff6a00, 0xffff6900, 0xffff6800, 0xffff6800, 0xffff6700,
            0xffff6600, 0xffff6600, 0xffff6500, 0xffff6400, 0xffff6300,
            0xffff6300, 0xffff6200, 0xffff6100, 0xffff6100, 0xffff6000,
            0xffff5f00, 0xffff5e00, 0xffff5e00, 0xffff5d00, 0xffff5c00,
            0xffff5c00, 0xffff5b00, 0xffff5a00, 0xffff5900, 0xffff5900,
            0xffff5800, 0xffff5700, 0xffff5700, 0xffff5600, 0xffff5500,
            0xffff5400, 0xffff5400, 0xffff5300, 0xffff5200, 0xffff5200,
            0xffff5100, 0xffff5000, 0xffff4f00, 0xffff4f00, 0xffff4e00,
            0xffff4d00, 0xffff4d00, 0xffff4c00, 0xffff4b00, 0xffff4a00,
            0xffff4a00, 0xffff4900, 0xffff4800, 0xffff4800, 0xffff4700,
            0xffff4600, 0xffff4500, 0xffff4500, 0xffff4400, 0xffff4300,
            0xffff4300, 0xffff4200, 0xffff4100, 0xffff4000, 0xffff4000,
            0xffff3f00, 0xffff3e00, 0xffff3e00, 0xffff3d00, 0xffff3c00,
            0xffff3b00, 0xffff3b00, 0xffff3a00, 0xffff3900, 0xffff3900,
            0xffff3800, 0xffff3700, 0xffff3600, 0xffff3600, 0xffff3500,
            0xffff3400, 0xffff3400, 0xffff3300, 0xffff3200, 0xffff3000,
            0xffff2f00, 0xffff2d00, 0xffff2c00, 0xffff2b00, 0xffff2900,
            0xffff2800, 0xffff2600, 0xffff2500, 0xffff2300, 0xffff2200,
            0xffff2100, 0xffff1f00, 0xffff1e00, 0xffff1c00, 0xffff1b00,
            0xffff1900, 0xffff1800, 0xffff1700, 0xffff1500, 0xffff1400,
            0xffff1200, 0xffff1100, 0xffff0f00, 0xffff0e00, 0xffff0d00,
            0xffff0b00, 0xffff0a00, 0xffff0800, 0xffff0700, 0xffff0500,
            0xffff0400, 0xffff0300, 0xffff0100, 0xffff0000, 0xffff0000,
            0xffff0000, 0xffff0000, 0xffff0000, 0xffff0000, 0xffff0000,
            0xffff0000, 0xffff0000, 0xffff0000, 0xffff0000, 0xffff0000,
            0xffff0000, 0xffff0000, 0xffff0000, 0xffff0000, 0xffff0000,
            0xffff0000, 0xffff0000, 0xffff0000, 0xffff0000, 0xffff0000,
            0xffff0000, 0xffff0000, 0xffff0000, 0xffff0000, 0xffff0000,
            0xffff0000, 0xffff0000, 0xffff0000, 0xffff0000, 0xffff0000,
            0xffff0000, 0xffff0000, 0xffff0000, 0xffff0000, 0xffff0000,
            0xffff0004, 0xffff0007, 0xffff000b, 0xffff000e, 0xffff0012,
            0xffff0015, 0xffff0019, 0xffff001d, 0xffff0020, 0xffff0024,
            0xffff0027, 0xffff002b, 0xffff002e, 0xffff0032, 0xffff0036,
            0xffff0039, 0xffff003d, 0xffff0040, 0xffff0044, 0xffff0047,
            0xffff004b, 0xffff004f, 0xffff0052, 0xffff0056, 0xffff0059,
            0xffff005d, 0xffff0060, 0xffff0064, 0xffff0068, 0xffff006b,
            0xffff006f, 0xffff0072, 0xffff0076, 0xffff0079, 0xffff007d,
            0xffff0080, 0xffff0082, 0xffff0084, 0xffff0086, 0xffff0088,
            0xffff008b, 0xffff008d, 0xffff008f, 0xffff0091, 0xffff0093,
            0xffff0095, 0xffff0097, 0xffff009a, 0xffff009c, 0xffff009e,
            0xffff00a0, 0xffff00a2, 0xffff00a4, 0xffff00a6, 0xffff00a9,
            0xffff00ab, 0xffff00ad, 0xffff00af, 0xffff00b1, 0xffff00b3,
            0xffff00b5, 0xffff00b8, 0xffff00ba, 0xffff00bc, 0xffff00be,
            0xffff00c0, 0xffff00c2, 0xffff00c4, 0xffff00c7, 0xffff00c9,
            0xffff00cb, 0xffff00cd, 0xffff00ce, 0xffff00cf, 0xffff00d1,
            0xffff00d2, 0xffff00d4, 0xffff00d5, 0xffff00d7, 0xffff00d8,
            0xffff00d9, 0xffff00db, 0xffff00dc, 0xffff00de, 0xffff00df,
            0xffff00e1, 0xffff00e2, 0xffff00e3, 0xffff00e5, 0xffff00e6,
            0xffff00e8, 0xffff00e9, 0xffff00eb, 0xffff00ec, 0xffff00ed,
            0xffff00ef, 0xffff00f0, 0xffff00f2, 0xffff00f3, 0xffff00f5,
            0xffff00f6, 0xffff00f7, 0xffff00f9, 0xffff00fa, 0xffff00fc,
            0xffff00fd, 0xffffff7f, 0xff7fffff, 0xffff7f7f, 0xffa5e5a5,
            0xff999919, 0xff991999, 0xff199999, 0xffbfbfff, 0xffffcc7f,
            0xffccffff, 0xff66b2b2, 0xff84bf00, 0xffb24c66, 0xffb78c4c,
            0xff8cb266, 0xff8c3f99, 0xffb27f7f, 0xffff7f7f, 0xffffbfdd,
            0xff3fffbf, 0xffbfff3f, 0xff337fcc, 0xffd8d8ff, 0xffd8337f,
            0xffba8c84, 0xffd9ffff, 0xffcc7fff, 0xffc2ff00, 0xffffb5b5,
            0xffb3ffff, 0xffb3e3f5, 0xffab5cf2, 0xff8aff00, 0xffbfa6a6,
            0xfff0c8a0, 0xffff7f00, 0xff1ff01f, 0xff7fd1e3, 0xff8f3fd4,
            0xff3dff00, 0xffe6e6e6, 0xffbfc2c7, 0xffa6a6ab, 0xff8a99c7,
            0xff9c7ac7, 0xffe06633, 0xfff090a0, 0xff50d050, 0xffc87f33,
            0xff7d7fb0, 0xffc28f8f, 0xff668f8f, 0xffbd7fe3, 0xffffa100,
            0xffa62929, 0xff5cb8d1, 0xff702eb0, 0xff00ff00, 0xff94ffff,
            0xff94e0e0, 0xff73c2c9, 0xff54b5b5, 0xff3b9e9e, 0xff248f8f,
            0xff0a7d8c, 0xff006985, 0xffc0c0c0, 0xffffd98f, 0xffa67573,
            0xff667f7f, 0xff9e63b5, 0xffd47a00, 0xff940094, 0xff429eb0,
            0xff57178f, 0xff00c900, 0xff70d4ff, 0xffffffc7, 0xffd9ffc7,
            0xffc7ffc7, 0xffa3ffc7, 0xff8fffc7, 0xff61ffc7, 0xff45ffc7,
            0xff30ffc7, 0xff1fffc7, 0xff00ff9c, 0xff00e675, 0xff00d452,
            0xff00bf38, 0xff00ab24, 0xff4dc2ff, 0xff4da6ff, 0xff2194d6,
            0xff267dab, 0xff266696, 0xff175487, 0xffd0d0e0, 0xffffd123,
            0xffb8b8d0, 0xffa6544d, 0xff575961, 0xff9e4fb5, 0xffab5c00,
            0xff754f45, 0xff428296, 0xff420066, 0xff007d00, 0xff70abfa,
            0xff00baff, 0xff00a1ff, 0xff008fff, 0xff007fff, 0xff006bff,
            0xff545cf2, 0xff785ce3, 0xff8a4fe3, 0xffa136d4, 0xffb31fd4,
            0xffb31fba, 0xffb30da6, 0xffbd0d87, 0xffc70066, 0xffcc0059,
            0xffd1004f, 0xffd90045, 0xffe00038, 0xffe6002e, 0xffeb0026,
            0xffe5e5e5,
          ],
        ),
      );
      c$.moreColors = c$.prototype.moreColors = new java.util.Hashtable();
      Clazz_defineStatics(
        c$,
        'LEN',
        0,
        'RESV',
        1,
        'CUSTOMTYPE',
        2,
        'PRIORITY',
        3,
        'BFACTOR',
        4,
        'OCCUPANCY',
        5,
        'VDW',
        6,
        'PARTIALCHARGE',
        7,
        'COLOR',
        9,
        'ID',
        10,
        'FLAGS',
        11,
        'UNIQUEID',
        13,
        'DISCRETESTATE',
        14,
        'ELECRADIUS',
        15,
        'RANK',
        16,
        'TEXTTYPE',
        17,
        'CUSTOM',
        18,
        'LABEL',
        19,
        'VISREP',
        20,
        'HETATM',
        21,
        'BONDED',
        22,
        'MASK',
        24,
        'HBDONOR',
        25,
        'HBACCEPT',
        26,
        'HASSETTING',
        27,
        'FORMALCHARGE',
        28,
        'MMSTEREO',
        29,
        'CARTOON',
        30,
        'GEOM',
        31,
        'VALENCE',
        32,
        'PROTONS',
        33,
        'CHAIN',
        34,
        'SEGI',
        35,
        'NAME',
        36,
        'ELEM',
        37,
        'RESI',
        38,
        'SSTYPE',
        39,
        'ALTLOC',
        40,
        'RESN',
        41,
        'INSCODE',
        42,
        'CHEMFLAG',
        43,
        'PROTEKTED',
        44,
        'ANISOU',
        45,
        'HETMASK',
        46,
        'BONMASK',
        47,
        'MASMASK',
        48,
        'HBDMASK',
        49,
        'HBAMASK',
        50,
        'SETMASK',
        51,
        'v176',
        Clazz_newIntArray(
          -1,
          [
            0, 164, 1, 0, 2, 4, 3, 8, 4, 12, 5, 16, 6, 20, 7, 24, 9, 32, 10, 36,
            11, 40, 13, 48, 14, 52, 15, 56, 16, 60, 17, -64, 18, -68, 19, -72,
            20, 76, 28, 80, 29, 82, 30, 83, 21, 84, 22, 85, 43, 86, 31, 87, 32,
            88, 24, 90, 44, 91, 33, 92, 25, 93, 26, 94, 27, 95, 46, 0x01, 47,
            0x01, 48, 0x01, 49, 0x01, 50, 0x01, 51, 0x01, 34, 96, 35, 100, 36,
            105, 37, 110, 38, 115, 39, 122, 40, 124, 41, 126, 45, 132,
          ],
        ),
        'v177',
        Clazz_newIntArray(
          -1,
          [
            0, 144, 1, 8, 2, 12, 3, 16, 4, 20, 5, 24, 6, 28, 7, 32, 9, 40, 10,
            44, 11, 48, 13, 56, 14, 60, 15, 64, 16, 68, 17, -72, 18, -76, 19,
            -80, 20, 84, 21, 96, 22, 96, 24, 96, 25, 97, 26, 97, 27, 97, 46,
            0x01, 47, 0x02, 48, 0x08, 49, 0x01, 50, 0x02, 51, 0x04, 28, 98, 29,
            99, 30, 100, 31, 101, 32, 102, 33, 103, 34, 104, 35, 108, 36, 113,
            37, 118, 38, 123, 39, 129, 40, 131, 41, 133, 43, 140, 44, 141,
          ],
        ),
        'v181',
        Clazz_newIntArray(
          -1,
          [
            0, 120, 45, 0, 35, -12, 34, -16, 41, -20, 36, -24, 17, -28, 18, -32,
            19, -36, 1, 40, 2, 44, 3, 48, 4, 52, 5, 56, 6, 60, 7, 64, 9, 68, 10,
            72, 11, 76, 13, 80, 14, 84, 15, 88, 16, 92, 20, 96, 21, 100, 22,
            100, 24, 100, 25, 100, 26, 100, 27, 100, 46, 0x01, 47, 0x02, 48,
            0x04, 49, 0x08, 50, 0x10, 51, 0x20, 28, 101, 30, 102, 31, 103, 32,
            104, 33, 105, 42, 106, 37, 107, 39, 112, 40, 114, 29, 116, 43, 117,
            44, 118,
          ],
        ),
        'BATOM1',
        1,
        'BATOM2',
        2,
        'BORDER',
        3,
        'BID',
        4,
        'BUNIQUEID',
        5,
        'BHASSETTING',
        6,
        'v176b',
        Clazz_newIntArray(-1, [0, 32, 1, 0, 2, 4, 3, 8, 4, 12, 5, 16, 6, 26]),
        'v177b',
        Clazz_newIntArray(-1, [0, 24, 1, 0, 2, 4, 4, 8, 5, 12, 3, 20, 6, 23]),
        'v181b',
        Clazz_newIntArray(-1, [0, 20, 1, 0, 2, 4, 4, 8, 5, 12, 3, 16, 6, 18]),
      );
    },
  );
  Clazz_declarePackage('J.adapter.readers.pymol');
  Clazz_load(
    null,
    'J.adapter.readers.pymol.JmolObject',
    [
      'java.lang.Float',
      'JU.P3',
      '$.PT',
      '$.SB',
      'J.adapter.readers.pymol.PyMOLReader',
      'JU.BSUtil',
      '$.Escape',
    ],
    function () {
      c$ = Clazz_decorateAsClass(
        function () {
          this.id = 0;
          this.bsAtoms = null;
          this.info = null;
          this.size = -1;
          this.colors = null;
          this.modelIndex = -2147483648;
          this.jmolName = null;
          this.argb = 0;
          this.translucency = 0;
          this.visible = true;
          this.rd = null;
          this.cacheID = null;
          Clazz_instantialize(this, arguments);
        },
        J.adapter.readers.pymol,
        'JmolObject',
      );
      Clazz_makeConstructor(
        c$,
        function (id, branchNameID, bsAtoms, info) {
          this.id = id;
          this.bsAtoms = bsAtoms;
          this.info = info;
          this.jmolName = branchNameID;
        },
        '~N,~S,JU.BS,~O',
      );
      Clazz_defineMethod(
        c$,
        'offset',
        function (modelOffset, atomOffset) {
          if (modelOffset > 0) {
            if (this.modelIndex != -2147483648) this.modelIndex += modelOffset;
            switch (this.id) {
              case 1610625028:
              case 12294:
                return;
              case 4115:
                var i = this.info.intValue();
                if (i >= 0) this.info = Integer.$valueOf(modelOffset + i);
                return;
              case 1073742031:
                var movie = this.info;
                var frames = movie.get('frames');
                for (var j = frames.length; --j >= 0; )
                  frames[j] += modelOffset;

                return;
            }
          }
          if (atomOffset <= 0) return;
          if (this.id == 12290) {
            var map = this.info.values();
            for (
              var o, $o = map.iterator();
              $o.hasNext() && ((o = $o.next()) || true);

            )
              JU.BSUtil.offset(o, 0, atomOffset);

            return;
          }
          if (this.bsAtoms != null)
            JU.BSUtil.offset(this.bsAtoms, 0, atomOffset);
          if (this.colors != null) {
            var colixes = this.colors[0];
            var c = Clazz_newShortArray(colixes.length + atomOffset, 0);
            System.arraycopy(colixes, 0, c, atomOffset, colixes.length);
            this.colors[0] = c;
          }
        },
        '~N,~N',
      );
      Clazz_defineMethod(
        c$,
        'finalizeObject',
        function (pymolScene, m, mepList, doCache) {
          var sm = m.sm;
          var color = 'color';
          var sID;
          var sb = null;
          if (this.bsAtoms != null) this.modelIndex = this.getModelIndex(m);
          switch (this.id) {
            case 2097194:
              sm.vwr.displayAtoms(this.bsAtoms, false, false, 1275069441, true);
              return;
            case 12295:
              var bs = sm.vwr.getModelUndeletedAtomsBitSet(this.argb);
              JU.BSUtil.invertInPlace(bs, sm.vwr.ms.ac);
              sm.vwr.select(bs, false, 0, true);
              sm.restrictSelected(false, true);
              return;
            case 1610625028:
            case 12294:
              if (this.bsAtoms == null) {
                if (this.info == null) {
                  sm.vwr.displayAtoms(null, true, false, 0, true);
                }
                sm.vwr.setObjectProp(this.info, this.id);
              } else {
                sm.vwr.displayAtoms(
                  this.bsAtoms,
                  this.id == 1610625028,
                  false,
                  1275069441,
                  true,
                );
              }
              return;
            case 12290:
              sm.vwr.defineAtomSets(this.info);
              return;
            case 1073742031:
              sm.vwr.am.setMovie(this.info);
              return;
            case 4115:
              var frame = this.info.intValue();
              if (frame >= 0) {
                sm.vwr.setCurrentModelIndex(frame);
              } else {
                sm.vwr.setAnimationRange(-1, -1);
                sm.vwr.setCurrentModelIndex(-1);
              }
              return;
            case 1073742139:
              sm.vwr.stm.saveScene(this.jmolName, this.info);
              sm.vwr.stm.saveOrientation(
                this.jmolName,
                this.info.get('pymolView'),
              );
              return;
            case 5:
              sm.loadShape(this.id);
              sm.setShapePropertyBs(
                this.id,
                'pymolLabels',
                this.info,
                this.bsAtoms,
              );
              return;
            case 1677721602:
              break;
            case 659488:
            case 1:
              if (this.size != -1) {
                sm.setShapeSizeBs(1, this.size, null, this.bsAtoms);
                var bsBonds = sm.getShapePropertyIndex(1, 'sets', 0)[1];
                pymolScene.setUniqueBonds(bsBonds, this.id == 1);
                this.size = -1;
              }
              this.id = 1;
              break;
            case 1140850689:
              this.id = 0;
              break;
            case 0:
              break;
            case 10:
            case 9:
              sm.loadShape(this.id);
              var bsCarb = m.getAtoms(2097188, null);
              JU.BSUtil.andNot(this.bsAtoms, bsCarb);
              break;
            case 16:
              sm.loadShape(this.id);
              sm.setShapePropertyBs(
                this.id,
                'ignore',
                JU.BSUtil.copyInvert(this.bsAtoms, sm.vwr.ms.ac),
                null,
              );
              break;
            default:
              if (!this.visible) return;
              break;
          }
          switch (this.id) {
            case 23:
              sm.vwr.setCGO(this.info);
              break;
            case 16:
            case 0:
            case 7:
            case 20:
            case 11:
            case 9:
            case 10:
            case 24:
              if (Clazz_instanceOf(this.info, Array)) {
                sm.loadShape(this.id);
                sm.setShapePropertyBs(
                  this.id,
                  'params',
                  this.info,
                  this.bsAtoms,
                );
              }
              break;
            case 6:
              if (this.modelIndex < 0) return;
              sm.loadShape(this.id);
              var md = this.info;
              md.setModelSet(m);
              var points = md.points;
              for (var i = points.size(); --i >= 0; )
                points.get(i).mi = this.modelIndex;

              sm.setShapePropertyBs(this.id, 'measure', md, this.bsAtoms);
              return;
            case 135180:
              sID = this.bsAtoms == null ? this.info : this.jmolName;
              if (sm.getShapeIdFromObjectName(sID) >= 0) {
                sm.vwr.setObjectProp(sID, 1610625028);
                return;
              }
              sb = new JU.SB();
              sb.append('isosurface ID ').append(JU.PT.esc(sID));
              if (this.modelIndex < 0) this.modelIndex = sm.vwr.am.cmi;
              if (this.bsAtoms == null) {
                sb.append(' model ')
                  .append(m.getModelNumberDotted(this.modelIndex))
                  .append(' color density sigma 1.0 ')
                  .append(JU.PT.esc(this.cacheID))
                  .append(' ')
                  .append(JU.PT.esc(sID));
                if (doCache) sb.append(';isosurface cache');
              } else {
                var lighting = this.info[0];
                var only = this.info[1];
                only = ' only';
                var bsCarve = this.info[2];
                var carveDistance = this.info[3].floatValue();
                var resolution = '';
                if (lighting == null) {
                  lighting = 'mesh nofill';
                  resolution = ' resolution 1.5';
                }
                var haveMep = JU.PT.isOneOf(sID, mepList);
                var model = m.getModelNumberDotted(this.modelIndex);
                var ignore = '';
                var type = this.size < 0 ? ' sasurface ' : ' solvent ';
                sb.append(' model ')
                  .append(model)
                  .append(resolution)
                  .append(' select ')
                  .append(JU.Escape.eBS(this.bsAtoms))
                  .append(only)
                  .append(ignore)
                  .append(type)
                  .appendF(Math.abs(this.size / 1000));
                if (!haveMep) {
                  if (this.argb == 0) sb.append(' map property color');
                  else
                    sb.append(';color isosurface ').append(
                      JU.Escape.escapeColor(this.argb),
                    );
                }
                sb.append(';isosurface frontOnly ').append(lighting);
                if (this.translucency > 0)
                  sb.append(
                    ';color isosurface translucent ' + this.translucency,
                  );
                if (bsCarve != null && !bsCarve.isEmpty())
                  sb.append(
                    ';isosurface slab within ' +
                      carveDistance +
                      ' {' +
                      model +
                      ' and ' +
                      JU.Escape.eBS(bsCarve) +
                      '}',
                  );
                if (doCache && !haveMep) sb.append(';isosurface cache');
              }
              break;
            case 1073742016:
              var mep = this.info;
              sID = mep.get(mep.size() - 2).toString();
              var mapID = mep.get(mep.size() - 1).toString();
              var min = J.adapter.readers.pymol.PyMOLReader.floatAt(
                J.adapter.readers.pymol.PyMOLReader.listAt(mep, 3),
                0,
              );
              var max = J.adapter.readers.pymol.PyMOLReader.floatAt(
                J.adapter.readers.pymol.PyMOLReader.listAt(mep, 3),
                2,
              );
              sb = new JU.SB();
              sb.append(';isosurface ID ')
                .append(JU.PT.esc(sID))
                .append(' map ')
                .append(JU.PT.esc(this.cacheID))
                .append(' ')
                .append(JU.PT.esc(mapID))
                .append(
                  ';color isosurface range ' +
                    min +
                    ' ' +
                    max +
                    ';isosurface colorscheme rwb;set isosurfacekey true',
                );
              if (this.translucency > 0)
                sb.append(';color isosurface translucent ' + this.translucency);
              if (doCache) sb.append(';isosurface cache');
              break;
            case 1073742018:
              this.modelIndex = sm.vwr.am.cmi;
              var mesh = this.info;
              sID = mesh.get(mesh.size() - 2).toString();
              sb = new JU.SB();
              sb.append('isosurface ID ')
                .append(JU.PT.esc(sID))
                .append(' model ')
                .append(m.getModelNumberDotted(this.modelIndex))
                .append(' color ')
                .append(JU.Escape.escapeColor(this.argb))
                .append('  ')
                .append(JU.PT.esc(this.cacheID))
                .append(' ')
                .append(JU.PT.esc(sID))
                .append(' mesh nofill frontonly');
              var list = J.adapter.readers.pymol.PyMOLReader.sublistAt(
                mesh,
                [2, 0],
              );
              var within = J.adapter.readers.pymol.PyMOLReader.floatAt(
                list,
                11,
              );
              list = J.adapter.readers.pymol.PyMOLReader.listAt(list, 12);
              if (within > 0) {
                var pt = new JU.P3();
                sb.append(';isosurface slab within ')
                  .appendF(within)
                  .append(' [ ');
                for (var j = list.size() - 3; j >= 0; j -= 3) {
                  J.adapter.readers.pymol.PyMOLReader.pointAt(list, j, pt);
                  sb.append(JU.Escape.eP(pt));
                }
                sb.append(' ]');
              }
              if (doCache && !JU.PT.isOneOf(sID, mepList))
                sb.append(';isosurface cache');
              sb.append(';set meshScale ').appendI(
                Clazz_doubleToInt(this.size / 500),
              );
              break;
            case 134222850:
              sb = this.info;
              break;
            case 1112152078:
              sm.loadShape((this.id = 10));
              sm.setShapePropertyBs(this.id, 'putty', this.info, this.bsAtoms);
              break;
          }
          if (sb != null) {
            sm.vwr.runScriptCautiously(sb.toString());
            return;
          }
          if (this.size != -1 || this.rd != null)
            sm.setShapeSizeBs(this.id, this.size, this.rd, this.bsAtoms);
          if (this.argb != 0)
            sm.setShapePropertyBs(
              this.id,
              color,
              Integer.$valueOf(this.argb),
              this.bsAtoms,
            );
          if (this.translucency > 0) {
            sm.setShapePropertyBs(
              this.id,
              'translucentLevel',
              Float.$valueOf(this.translucency),
              this.bsAtoms,
            );
            sm.setShapePropertyBs(
              this.id,
              'translucency',
              'translucent',
              this.bsAtoms,
            );
          } else if (this.colors != null)
            sm.setShapePropertyBs(this.id, 'colors', this.colors, this.bsAtoms);
        },
        'J.adapter.readers.pymol.PyMOLScene,JM.ModelSet,~S,~B',
      );
      Clazz_defineMethod(
        c$,
        'getModelIndex',
        function (m) {
          if (this.bsAtoms == null) return -1;
          var iAtom = this.bsAtoms.nextSetBit(0);
          if (iAtom >= m.at.length)
            System.out.println('PyMOL LOADING ERROR IN MERGE');
          return iAtom < 0 ? -1 : m.at[iAtom].mi;
        },
        'JM.ModelSet',
      );
      Clazz_defineMethod(
        c$,
        'setColors',
        function (colixes, translucency) {
          this.colors = Clazz_newArray(-1, [
            colixes,
            Float.$valueOf(translucency),
          ]);
        },
        '~A,~N',
      );
      Clazz_defineMethod(
        c$,
        'setSize',
        function (size) {
          this.size = Clazz_floatToInt(size * 1000);
        },
        '~N',
      );
    },
  );
  Clazz_declarePackage('J.adapter.readers.pymol');
  Clazz_load(
    ['java.util.Hashtable', 'JU.BS'],
    'J.adapter.readers.pymol.PyMOLGroup',
    null,
    function () {
      c$ = Clazz_decorateAsClass(
        function () {
          this.name = null;
          this.objectNameID = null;
          this.list = null;
          this.object = null;
          this.visible = true;
          this.occluded = false;
          this.bsAtoms = null;
          this.firstAtom = 0;
          this.type = 0;
          this.parent = null;
          Clazz_instantialize(this, arguments);
        },
        J.adapter.readers.pymol,
        'PyMOLGroup',
      );
      Clazz_prepareFields(c$, function () {
        this.list = new java.util.Hashtable();
        this.bsAtoms = new JU.BS();
      });
      Clazz_makeConstructor(
        c$,
        function (name) {
          this.name = name;
        },
        '~S',
      );
      Clazz_defineMethod(
        c$,
        'addList',
        function (child) {
          var group = this.list.get(child.name);
          if (group != null) return;
          this.list.put(child.name, child);
          child.parent = this;
        },
        'J.adapter.readers.pymol.PyMOLGroup',
      );
      Clazz_defineMethod(c$, 'set', function () {
        if (this.parent != null) return;
      });
      Clazz_defineMethod(
        c$,
        'addGroupAtoms',
        function (bs) {
          this.bsAtoms.or(bs);
          if (this.parent != null) this.parent.addGroupAtoms(this.bsAtoms);
        },
        'JU.BS',
      );
      Clazz_overrideMethod(c$, 'toString', function () {
        return this.name;
      });
    },
  );
  Clazz_declarePackage('J.adapter.readers.pymol');
  Clazz_load(
    [
      'J.api.JmolSceneGenerator',
      'java.util.Hashtable',
      'JU.BS',
      '$.Lst',
      '$.P3',
    ],
    'J.adapter.readers.pymol.PyMOLScene',
    [
      'java.lang.Boolean',
      '$.Double',
      '$.Float',
      'JU.AU',
      '$.CU',
      '$.PT',
      '$.SB',
      'J.adapter.readers.pymol.JmolObject',
      '$.PyMOL',
      '$.PyMOLGroup',
      '$.PyMOLReader',
      'J.atomdata.RadiusData',
      'J.c.VDW',
      'JM.Text',
      'JU.BSUtil',
      '$.C',
      '$.Escape',
      '$.Logger',
      '$.Point3fi',
    ],
    function () {
      c$ = Clazz_decorateAsClass(
        function () {
          this.vwr = null;
          this.pymolVersion = 0;
          this.bsHidden = null;
          this.bsNucleic = null;
          this.bsNonbonded = null;
          this.bsLabeled = null;
          this.bsHydrogen = null;
          this.bsNoSurface = null;
          this.htSpacefill = null;
          this.ssMapAtom = null;
          this.atomColorList = null;
          this.occludedObjects = null;
          this.labels = null;
          this.colixes = null;
          this.frameObj = null;
          this.groups = null;
          this.objectSettings = null;
          this.bsCartoon = null;
          this.htCarveSets = null;
          this.htDefinedAtoms = null;
          this.htHiddenObjects = null;
          this.moleculeNames = null;
          this.jmolObjects = null;
          this.htAtomMap = null;
          this.htObjectAtoms = null;
          this.htObjectGroups = null;
          this.htMeasures = null;
          this.htObjectSettings = null;
          this.objectInfo = null;
          this.settings = null;
          this.htStateSettings = null;
          this.stateSettings = null;
          this.uniqueSettings = null;
          this.uniqueList = null;
          this.bsUniqueBonds = null;
          this.bgRgb = 0;
          this.dotColor = 0;
          this.surfaceMode = 0;
          this.surfaceColor = 0;
          this.cartoonColor = 0;
          this.ribbonColor = 0;
          this.sphereColor = 0;
          this.labelFontId = 0;
          this.labelColor = 0;
          this.cartoonTranslucency = 0;
          this.ribbonTranslucency = 0;
          this.labelSize = 0;
          this.meshWidth = 0;
          this.nonbondedSize = 0;
          this.nonbondedTranslucency = 0;
          this.sphereScale = 0;
          this.sphereTranslucency = 0;
          this.stickTranslucency = 0;
          this.transparency = 0;
          this.cartoonLadderMode = false;
          this.cartoonRockets = false;
          this.haveNucleicLadder = false;
          this.labelPosition = null;
          this.labelPosition0 = null;
          this.objectName = null;
          this.objectNameID = null;
          this.objectJmolName = null;
          this.objectType = 0;
          this.bsAtoms = null;
          this.objectHidden = false;
          this.reader = null;
          this.uniqueIDs = null;
          this.cartoonTypes = null;
          this.sequenceNumbers = null;
          this.newChain = null;
          this.radii = null;
          this.baseModelIndex = 0;
          this.baseAtomIndex = 0;
          this.stateCount = 0;
          this.mepList = '';
          this.doCache = false;
          this.haveScenes = false;
          this.bsCarve = null;
          this.solventAccessible = false;
          this.bsLineBonds = null;
          this.bsStickBonds = null;
          this.thisState = 0;
          this.currentAtomSetIndex = 0;
          this.surfaceInfoName = null;
          this.ptTemp = null;
          Clazz_instantialize(this, arguments);
        },
        J.adapter.readers.pymol,
        'PyMOLScene',
        null,
        J.api.JmolSceneGenerator,
      );
      Clazz_prepareFields(c$, function () {
        this.bsHidden = new JU.BS();
        this.bsNucleic = new JU.BS();
        this.bsNonbonded = new JU.BS();
        this.bsLabeled = new JU.BS();
        this.bsHydrogen = new JU.BS();
        this.bsNoSurface = new JU.BS();
        this.htSpacefill = new java.util.Hashtable();
        this.ssMapAtom = new java.util.Hashtable();
        this.atomColorList = new JU.Lst();
        this.occludedObjects = new java.util.Hashtable();
        this.labels = new java.util.Hashtable();
        this.bsCartoon = new JU.BS();
        this.htCarveSets = new java.util.Hashtable();
        this.htDefinedAtoms = new java.util.Hashtable();
        this.htHiddenObjects = new java.util.Hashtable();
        this.moleculeNames = new JU.Lst();
        this.jmolObjects = new JU.Lst();
        this.htAtomMap = new java.util.Hashtable();
        this.htObjectAtoms = new java.util.Hashtable();
        this.htObjectGroups = new java.util.Hashtable();
        this.htMeasures = new java.util.Hashtable();
        this.htObjectSettings = new java.util.Hashtable();
        this.objectInfo = new java.util.Hashtable();
        this.htStateSettings = new java.util.Hashtable();
        this.labelPosition0 = new JU.P3();
        this.bsLineBonds = new JU.BS();
        this.bsStickBonds = new JU.BS();
        this.ptTemp = new JU.P3();
      });
      Clazz_defineMethod(c$, 'clearReaderData', function () {
        this.reader = null;
        this.colixes = null;
        this.atomColorList = null;
        this.objectSettings = null;
        this.stateSettings = null;
        if (this.haveScenes) return;
        this.settings = null;
        this.groups = null;
        this.labels = null;
        this.ssMapAtom = null;
        this.htSpacefill = null;
        this.htAtomMap = null;
        this.htMeasures = null;
        this.htObjectGroups = null;
        this.htObjectAtoms = null;
        this.htObjectSettings = null;
        this.htStateSettings = null;
        this.htHiddenObjects = null;
        this.objectInfo = null;
        this.occludedObjects = null;
        this.bsHidden =
          this.bsNucleic =
          this.bsNonbonded =
          this.bsLabeled =
          this.bsHydrogen =
          this.bsNoSurface =
          this.bsCartoon =
            null;
      });
      Clazz_defineMethod(
        c$,
        'setUniqueBond',
        function (index, uniqueID) {
          if (uniqueID < 0) return;
          if (this.uniqueList == null) {
            this.uniqueList = new java.util.Hashtable();
            this.bsUniqueBonds = new JU.BS();
          }
          this.uniqueList.put(
            Integer.$valueOf(index),
            Integer.$valueOf(uniqueID),
          );
          this.bsUniqueBonds.set(index);
        },
        '~N,~N',
      );
      Clazz_defineMethod(
        c$,
        'setStateCount',
        function (stateCount) {
          this.stateCount = stateCount;
        },
        '~N',
      );
      Clazz_makeConstructor(
        c$,
        function (
          reader,
          vwr,
          settings,
          uniqueSettings,
          pymolVersion,
          haveScenes,
          baseAtomIndex,
          baseModelIndex,
          doCache,
          filePath,
        ) {
          this.reader = reader;
          this.vwr = vwr;
          this.settings = settings;
          this.uniqueSettings = uniqueSettings;
          this.pymolVersion = pymolVersion;
          this.haveScenes = haveScenes;
          this.baseAtomIndex = baseAtomIndex;
          this.baseModelIndex = baseModelIndex;
          this.doCache = doCache;
          this.surfaceInfoName = filePath + '##JmolSurfaceInfo##';
          this.setVersionSettings();
          settings.trimToSize();
          this.bgRgb = this.colorSetting(6);
          this.labelPosition0 = this.pointSetting(471);
        },
        'J.api.PymolAtomReader,JV.Viewer,JU.Lst,java.util.Map,~N,~B,~N,~N,~B,~S',
      );
      Clazz_defineMethod(
        c$,
        'colorSetting',
        function (i) {
          var pos = J.adapter.readers.pymol.PyMOLReader.listAt(
            this.settings,
            i,
          );
          var o = pos == null || pos.size() != 3 ? null : pos.get(2);
          if (o == null)
            return Clazz_floatToInt(
              J.adapter.readers.pymol.PyMOL.getDefaultSetting(
                i,
                this.pymolVersion,
              ),
            );
          return Clazz_instanceOf(o, Integer)
            ? o.intValue()
            : JU.CU.colorPtToFFRGB(
                J.adapter.readers.pymol.PyMOLReader.pointAt(o, 0, this.ptTemp),
              );
        },
        '~N',
      );
      Clazz_defineMethod(
        c$,
        'pointSetting',
        function (i) {
          var pt = new JU.P3();
          var pos = J.adapter.readers.pymol.PyMOLReader.listAt(
            this.settings,
            i,
          );
          if (pos != null && pos.size() == 3)
            return J.adapter.readers.pymol.PyMOLReader.pointAt(
              pos.get(2),
              0,
              pt,
            );
          return J.adapter.readers.pymol.PyMOL.getDefaultSettingPt(
            i,
            this.pymolVersion,
            pt,
          );
        },
        '~N',
      );
      Clazz_defineMethod(
        c$,
        'ensureCapacity',
        function (n) {
          this.atomColorList.ensureCapacity(this.atomColorList.size() + n);
        },
        '~N',
      );
      Clazz_defineMethod(
        c$,
        'setReaderObjectInfo',
        function (
          name,
          type,
          groupName,
          isHidden,
          listObjSettings,
          listStateSettings,
          ext,
        ) {
          this.objectName = name;
          this.objectHidden = isHidden;
          this.objectNameID =
            this.objectName == null
              ? null
              : this.fixName(this.objectName + ext);
          this.objectSettings = new java.util.Hashtable();
          this.stateSettings = new java.util.Hashtable();
          if (this.objectName != null) {
            this.objectJmolName = this.getJmolName(name);
            if (groupName != null) {
              this.htObjectGroups.put(this.objectName, groupName);
              this.htObjectGroups.put(this.objectNameID, groupName);
            }
            this.objectInfo.put(
              this.objectName,
              Clazz_newArray(-1, [this.objectNameID, Integer.$valueOf(type)]),
            );
            if (this.htObjectSettings.get(this.objectName) == null) {
              this.listToSettings(listObjSettings, this.objectSettings);
              this.htObjectSettings.put(this.objectName, this.objectSettings);
            }
            if (this.htStateSettings.get(this.objectNameID) == null) {
              this.listToSettings(listStateSettings, this.stateSettings);
              this.htStateSettings.put(this.objectNameID, this.stateSettings);
            }
          }
          this.getObjectSettings();
        },
        '~S,~N,~S,~B,JU.Lst,JU.Lst,~S',
      );
      Clazz_defineMethod(
        c$,
        'listToSettings',
        function (list, objectSettings) {
          if (list != null && list.size() != 0) {
            for (var i = list.size(); --i >= 0; ) {
              var setting = list.get(i);
              objectSettings.put(setting.get(0), setting);
            }
          }
        },
        'JU.Lst,java.util.Map',
      );
      Clazz_defineMethod(c$, 'getObjectSettings', function () {
        this.transparency = this.floatSetting(138);
        this.dotColor = Clazz_floatToInt(this.floatSetting(210));
        this.nonbondedSize = this.floatSetting(65);
        this.nonbondedTranslucency = this.floatSetting(524);
        this.sphereScale = this.floatSetting(155);
        this.cartoonColor = Clazz_floatToInt(this.floatSetting(236));
        this.ribbonColor = Clazz_floatToInt(this.floatSetting(235));
        this.sphereColor = Clazz_floatToInt(this.floatSetting(173));
        this.cartoonTranslucency = this.floatSetting(279);
        this.ribbonTranslucency = this.floatSetting(666);
        this.stickTranslucency = this.floatSetting(198);
        this.sphereTranslucency = this.floatSetting(172);
        this.cartoonLadderMode = this.booleanSetting(448);
        this.cartoonRockets = this.booleanSetting(180);
        this.surfaceMode = Clazz_floatToInt(this.floatSetting(143));
        this.surfaceColor = Clazz_floatToInt(this.floatSetting(144));
        this.solventAccessible = this.booleanSetting(338);
        this.meshWidth = this.floatSetting(90);
        var carveSet = this.stringSetting(342).trim();
        if (carveSet.length == 0) {
          this.bsCarve = null;
        } else {
          this.bsCarve = this.htCarveSets.get(carveSet);
          if (this.bsCarve == null)
            this.htCarveSets.put(carveSet, (this.bsCarve = new JU.BS()));
        }
        this.labelPosition = new JU.P3();
        try {
          var setting = this.getObjectSetting(471);
          J.adapter.readers.pymol.PyMOLReader.pointAt(
            J.adapter.readers.pymol.PyMOLReader.listAt(setting, 2),
            0,
            this.labelPosition,
          );
        } catch (e) {
          if (Clazz_exceptionOf(e, Exception)) {
          } else {
            throw e;
          }
        }
        this.labelPosition.add(this.labelPosition0);
        this.labelColor = Clazz_floatToInt(this.floatSetting(66));
        this.labelSize = this.floatSetting(453);
        this.labelFontId = Clazz_floatToInt(this.floatSetting(328));
      });
      Clazz_defineMethod(
        c$,
        'setAtomInfo',
        function (uniqueIDs, cartoonTypes, sequenceNumbers, newChain, radii) {
          this.uniqueIDs = uniqueIDs;
          this.cartoonTypes = cartoonTypes;
          this.sequenceNumbers = sequenceNumbers;
          this.newChain = newChain;
          this.radii = radii;
        },
        '~A,~A,~A,~A,~A',
      );
      Clazz_defineMethod(
        c$,
        'setSceneObject',
        function (name, istate) {
          this.objectName = name;
          this.objectType = this.getObjectType(name);
          this.objectJmolName = this.getJmolName(name);
          this.objectNameID =
            istate == 0 && this.objectType != 0
              ? this.getObjectID(name)
              : this.objectJmolName + '_' + istate;
          this.bsAtoms = this.htObjectAtoms.get(name);
          this.objectSettings = this.htObjectSettings.get(name);
          this.stateSettings = this.htStateSettings.get(name + '_' + istate);
          var groupName = this.htObjectGroups.get(name);
          this.objectHidden =
            this.htHiddenObjects.containsKey(name) ||
            (groupName != null && !this.groups.get(groupName).visible);
          this.getObjectSettings();
        },
        '~S,~N',
      );
      Clazz_defineMethod(
        c$,
        'buildScene',
        function (name, thisScene, htObjNames, htSecrets) {
          var frame = thisScene.get(2);
          var smap = new java.util.Hashtable();
          smap.put('pymolFrame', frame);
          smap.put('generator', this);
          smap.put('name', name);
          var view = J.adapter.readers.pymol.PyMOLReader.listAt(thisScene, 0);
          if (view != null)
            smap.put('pymolView', this.getPymolView(view, false));
          var visibilities = thisScene.get(1);
          smap.put('visibilities', visibilities);
          var sname = '_scene_' + name + '_';
          var reps = new Array(J.adapter.readers.pymol.PyMOL.REP_LIST.length);
          for (
            var j = J.adapter.readers.pymol.PyMOL.REP_LIST.length;
            --j >= 0;

          ) {
            var list = htObjNames.get(
              sname + J.adapter.readers.pymol.PyMOL.REP_LIST[j],
            );
            var data = J.adapter.readers.pymol.PyMOLReader.listAt(list, 5);
            if (data != null && data.size() > 0)
              reps[j] = J.adapter.readers.pymol.PyMOLReader.listToMap(data);
          }
          smap.put('moleculeReps', reps);
          sname = '_!c_' + name + '_';
          var colorection = J.adapter.readers.pymol.PyMOLReader.listAt(
            thisScene,
            3,
          );
          var n = colorection.size();
          n -= n % 2;
          var colors = new Array(Clazz_doubleToInt(n / 2));
          for (var j = 0, i = 0; j < n; j += 2) {
            var color = J.adapter.readers.pymol.PyMOLReader.intAt(
              colorection,
              j,
            );
            var c = htSecrets.get(sname + color);
            if (c != null && c.size() > 1)
              colors[i++] = Clazz_newArray(-1, [
                Integer.$valueOf(color),
                c.get(1),
              ]);
          }
          smap.put('colors', colors);
          this.addJmolObject(1073742139, null, smap).jmolName = name;
        },
        '~S,JU.Lst,java.util.Map,java.util.Map',
      );
      Clazz_overrideMethod(
        c$,
        'generateScene',
        function (scene) {
          JU.Logger.info('PyMOLScene - generateScene ' + scene.get('name'));
          this.jmolObjects.clear();
          this.bsHidden.clearAll();
          this.occludedObjects.clear();
          this.htHiddenObjects.clear();
          var frame = scene.get('pymolFrame');
          this.thisState = frame.intValue();
          this.addJmolObject(4115, null, Integer.$valueOf(this.thisState - 1));
          try {
            this.generateVisibilities(scene.get('visibilities'));
            this.generateColors(scene.get('colors'));
            this.generateShapes(scene.get('moleculeReps'));
            this.finalizeVisibility();
            this.offsetObjects();
            this.finalizeObjects();
          } catch (e) {
            if (Clazz_exceptionOf(e, Exception)) {
              JU.Logger.info('PyMOLScene exception ' + e);
              e.printStackTrace();
            } else {
              throw e;
            }
          }
        },
        'java.util.Map',
      );
      Clazz_defineMethod(
        c$,
        'generateColors',
        function (colors) {
          if (colors == null) return;
          for (var i = colors.length; --i >= 0; ) {
            var item = colors[i];
            var color = item[0].intValue();
            var icolor = J.adapter.readers.pymol.PyMOL.getRGB(color);
            var molecules = item[1];
            var bs = this.getSelectionAtoms(
              molecules,
              this.thisState,
              new JU.BS(),
            );
            this.addJmolObject(1140850689, bs, null).argb = icolor;
          }
        },
        '~A',
      );
      Clazz_defineMethod(
        c$,
        'processSelection',
        function (selection) {
          var id = J.adapter.readers.pymol.PyMOLReader.stringAt(selection, 0);
          id = '_' + (id.equals('sele') ? id : 'sele_' + id);
          var g = this.getGroup(id);
          this.getSelectionAtoms(
            J.adapter.readers.pymol.PyMOLReader.listAt(selection, 5),
            0,
            g.bsAtoms,
          );
        },
        'JU.Lst',
      );
      Clazz_defineMethod(
        c$,
        'getSelectionAtoms',
        function (molecules, istate, bs) {
          if (molecules != null)
            for (var j = molecules.size(); --j >= 0; )
              this.selectAllAtoms(
                J.adapter.readers.pymol.PyMOLReader.listAt(molecules, j),
                istate,
                bs,
              );

          return bs;
        },
        'JU.Lst,~N,JU.BS',
      );
      Clazz_defineMethod(
        c$,
        'selectAllAtoms',
        function (obj, istate, bs) {
          var name = J.adapter.readers.pymol.PyMOLReader.stringAt(obj, 0);
          this.setSceneObject(name, istate);
          var atomList = J.adapter.readers.pymol.PyMOLReader.listAt(obj, 1);
          var k0 = istate == 0 ? 1 : istate;
          var k1 = istate == 0 ? this.stateCount : istate;
          for (var k = k0; k <= k1; k++) {
            var atomMap = this.htAtomMap.get(this.fixName(name + '_' + k));
            if (atomMap == null) continue;
            this.getBsAtoms(atomList, atomMap, bs);
          }
        },
        'JU.Lst,~N,JU.BS',
      );
      Clazz_defineMethod(
        c$,
        'generateVisibilities',
        function (vis) {
          if (vis == null) return;
          var bs = new JU.BS();
          this.addJmolObject(12294, null, null);
          for (
            var e, $e = this.groups.entrySet().iterator();
            $e.hasNext() && ((e = $e.next()) || true);

          )
            e.getValue().visible = true;

          for (
            var e, $e = vis.entrySet().iterator();
            $e.hasNext() && ((e = $e.next()) || true);

          ) {
            var name = e.getKey();
            if (name.equals('all')) continue;
            var list = e.getValue();
            var tok =
              J.adapter.readers.pymol.PyMOLReader.intAt(list, 0) == 1
                ? 1610625028
                : 12294;
            if (tok == 12294) this.htHiddenObjects.put(name, Boolean.TRUE);
            switch (this.getObjectType(name)) {
              case 12:
                var g = this.groups.get(name);
                if (g != null) g.visible = tok == 1610625028;
                break;
            }
          }
          this.setGroupVisibilities();
          for (
            var e, $e = vis.entrySet().iterator();
            $e.hasNext() && ((e = $e.next()) || true);

          ) {
            var name = e.getKey();
            if (name.equals('all')) continue;
            this.setSceneObject(name, this.thisState);
            if (this.objectHidden) continue;
            var list = e.getValue();
            var tok = this.objectHidden ? 12294 : 1610625028;
            bs = null;
            var info = this.objectJmolName;
            switch (this.objectType) {
              case 0:
              case 12:
                continue;
              case 1:
                bs = this.vwr.getDefinedAtomSet(info);
                if (bs.nextSetBit(0) < 0) continue;
                break;
              case 4:
                if (tok == 1610625028) {
                  var mdList = this.htMeasures.get(name);
                  if (mdList != null)
                    this.addMeasurements(
                      mdList,
                      mdList[0].points.size(),
                      null,
                      this.getBS(
                        J.adapter.readers.pymol.PyMOLReader.listAt(list, 2),
                      ),
                      J.adapter.readers.pymol.PyMOLReader.intAt(list, 3),
                      null,
                      true,
                    );
                }
                info += '_*';
                break;
              case 6:
              case 3:
              case 2:
                break;
            }
            this.addJmolObject(tok, bs, info);
          }
        },
        'java.util.Map',
      );
      Clazz_defineMethod(
        c$,
        'generateShapes',
        function (reps) {
          if (reps == null) return;
          this.addJmolObject(12295, null, null).argb = this.thisState - 1;
          for (var m = 0; m < this.moleculeNames.size(); m++) {
            this.setSceneObject(this.moleculeNames.get(m), this.thisState);
            if (this.objectHidden) continue;
            var molReps = new Array(23);
            for (var i = 0; i < 23; i++) molReps[i] = new JU.BS();

            for (var i = reps.length; --i >= 0; ) {
              var repMap = reps[i];
              var list = repMap == null ? null : repMap.get(this.objectName);
              if (list != null)
                this.selectAllAtoms(list, this.thisState, molReps[i]);
            }
            this.createShapeObjects(molReps, true, -1, -1);
          }
        },
        '~A',
      );
      Clazz_defineMethod(
        c$,
        'getBS',
        function (list) {
          var bs = new JU.BS();
          for (var i = list.size(); --i >= 0; )
            bs.set(J.adapter.readers.pymol.PyMOLReader.intAt(list, i));

          return bs;
        },
        'JU.Lst',
      );
      Clazz_defineMethod(
        c$,
        'getBsAtoms',
        function (list, atomMap, bs) {
          for (var i = list.size(); --i >= 0; )
            bs.set(atomMap[J.adapter.readers.pymol.PyMOLReader.intAt(list, i)]);
        },
        'JU.Lst,~A,JU.BS',
      );
      Clazz_defineMethod(c$, 'setReaderObjects', function () {
        this.clearReaderData();
        this.finalizeObjects();
        if (!this.haveScenes) {
          this.uniqueSettings = null;
          this.bsUniqueBonds = this.bsStickBonds = this.bsLineBonds = null;
        }
      });
      Clazz_defineMethod(c$, 'finalizeObjects', function () {
        this.vwr.setStringProperty('defaults', 'PyMOL');
        for (var i = 0; i < this.jmolObjects.size(); i++) {
          try {
            var obj = this.jmolObjects.get(i);
            obj.finalizeObject(this, this.vwr.ms, this.mepList, this.doCache);
          } catch (e) {
            if (Clazz_exceptionOf(e, Exception)) {
              System.out.println(e);
              e.printStackTrace();
            } else {
              throw e;
            }
          }
        }
        this.finalizeUniqueBonds();
        this.jmolObjects.clear();
      });
      Clazz_defineMethod(c$, 'offsetObjects', function () {
        for (var i = 0, n = this.jmolObjects.size(); i < n; i++)
          this.jmolObjects
            .get(i)
            .offset(this.baseModelIndex, this.baseAtomIndex);
      });
      Clazz_defineMethod(
        c$,
        'getJmolObject',
        function (id, bsAtoms, info) {
          if (this.baseAtomIndex > 0) bsAtoms = JU.BSUtil.copy(bsAtoms);
          return new J.adapter.readers.pymol.JmolObject(
            id,
            this.objectNameID,
            bsAtoms,
            info,
          );
        },
        '~N,JU.BS,~O',
      );
      Clazz_defineMethod(
        c$,
        'addJmolObject',
        function (id, bsAtoms, info) {
          return this.addObject(this.getJmolObject(id, bsAtoms, info));
        },
        '~N,JU.BS,~O',
      );
      Clazz_defineMethod(
        c$,
        'getPymolView',
        function (view, isViewObj) {
          var pymolView = Clazz_newFloatArray(21, 0);
          var depthCue = this.booleanSetting(84);
          var fog = this.booleanSetting(88);
          var fog_start = this.floatSetting(192);
          var pt = 0;
          var i = 0;
          for (var j = 0; j < 3; j++)
            pymolView[pt++] = J.adapter.readers.pymol.PyMOLReader.floatAt(
              view,
              i++,
            );

          if (isViewObj) i++;
          for (var j = 0; j < 3; j++)
            pymolView[pt++] = J.adapter.readers.pymol.PyMOLReader.floatAt(
              view,
              i++,
            );

          if (isViewObj) i++;
          for (var j = 0; j < 3; j++)
            pymolView[pt++] = J.adapter.readers.pymol.PyMOLReader.floatAt(
              view,
              i++,
            );

          if (isViewObj) i += 5;
          for (var j = 0; j < 8; j++)
            pymolView[pt++] = J.adapter.readers.pymol.PyMOLReader.floatAt(
              view,
              i++,
            );

          var isOrtho = this.booleanSetting(23);
          var fov = this.floatSetting(152);
          pymolView[pt++] = isOrtho ? fov : -fov;
          pymolView[pt++] = depthCue ? 1 : 0;
          pymolView[pt++] = fog ? 1 : 0;
          pymolView[pt++] = fog_start;
          return pymolView;
        },
        'JU.Lst,~B',
      );
      Clazz_defineMethod(
        c$,
        'globalSetting',
        function (i) {
          var setting = J.adapter.readers.pymol.PyMOLReader.listAt(
            this.settings,
            i,
          );
          if (setting != null && setting.size() == 3)
            return setting.get(2).floatValue();
          return J.adapter.readers.pymol.PyMOL.getDefaultSetting(
            i,
            this.pymolVersion,
          );
        },
        '~N',
      );
      Clazz_defineMethod(
        c$,
        'addGroup',
        function (object, parent, type, bsAtoms) {
          if (this.groups == null) this.groups = new java.util.Hashtable();
          var myGroup = this.getGroup(this.objectName);
          myGroup.object = object;
          myGroup.objectNameID = this.objectNameID;
          myGroup.visible = !this.objectHidden;
          myGroup.type = type;
          if (!myGroup.visible) {
            this.occludedObjects.put(this.objectNameID, Boolean.TRUE);
            this.htHiddenObjects.put(this.objectName, Boolean.TRUE);
          }
          if (parent != null && parent.length != 0)
            this.getGroup(parent).addList(myGroup);
          if (bsAtoms != null) myGroup.addGroupAtoms(bsAtoms);
          return myGroup;
        },
        'JU.Lst,~S,~N,JU.BS',
      );
      Clazz_defineMethod(
        c$,
        'getGroup',
        function (name) {
          var g = this.groups.get(name);
          if (g == null) {
            this.groups.put(
              name,
              (g = new J.adapter.readers.pymol.PyMOLGroup(name)),
            );
            this.defineAtoms(name, g.bsAtoms);
          }
          return g;
        },
        '~S',
      );
      Clazz_defineMethod(c$, 'finalizeVisibility', function () {
        this.setGroupVisibilities();
        if (this.groups != null)
          for (var i = this.jmolObjects.size(); --i >= 0; ) {
            var obj = this.jmolObjects.get(i);
            if (
              obj.jmolName != null &&
              this.occludedObjects.containsKey(obj.jmolName)
            )
              obj.visible = false;
          }
        if (!this.bsHidden.isEmpty())
          this.addJmolObject(2097194, this.bsHidden, null);
      });
      Clazz_defineMethod(
        c$,
        'setCarveSets',
        function (htObjNames) {
          if (this.htCarveSets.isEmpty()) return;
          for (
            var e, $e = this.htCarveSets.entrySet().iterator();
            $e.hasNext() && ((e = $e.next()) || true);

          )
            this.getSelectionAtoms(
              J.adapter.readers.pymol.PyMOLReader.listAt(
                htObjNames.get(e.getKey()),
                5,
              ),
              0,
              e.getValue(),
            );
        },
        'java.util.Map',
      );
      Clazz_defineMethod(c$, 'setGroupVisibilities', function () {
        if (this.groups == null) return;
        var list = this.groups.values();
        var bsAll = new JU.BS();
        for (
          var g, $g = list.iterator();
          $g.hasNext() && ((g = $g.next()) || true);

        ) {
          bsAll.or(g.bsAtoms);
          if (g.parent == null) this.setGroupVisible(g, true);
          else if (g.list.isEmpty()) g.addGroupAtoms(new JU.BS());
        }
        this.defineAtoms('all', bsAll);
      });
      Clazz_defineMethod(
        c$,
        'defineAtoms',
        function (name, bs) {
          this.htDefinedAtoms.put(this.getJmolName(name), bs);
        },
        '~S,JU.BS',
      );
      Clazz_defineMethod(
        c$,
        'getJmolName',
        function (name) {
          return '__' + this.fixName(name);
        },
        '~S',
      );
      Clazz_defineMethod(
        c$,
        'createShapeObjects',
        function (reps, allowSurface, ac0, ac) {
          if (ac >= 0) {
            this.bsAtoms = JU.BSUtil.newBitSet2(ac0, ac);
            var jo;
            jo = this.addJmolObject(1140850689, this.bsAtoms, null);
            this.colixes = JU.AU.ensureLengthShort(this.colixes, ac);
            for (var i = ac; --i >= ac0; )
              this.colixes[i] = this.atomColorList.get(i).intValue();

            jo.setColors(this.colixes, 0);
            jo.setSize(0);
            jo = this.addJmolObject(1, this.bsAtoms, null);
            jo.setSize(0);
          }
          this.createShapeObject(7, reps[7]);
          this.createShapeObject(0, reps[0]);
          this.fixReps(reps);
          this.createSpacefillObjects();
          for (var i = 0; i < 23; i++)
            switch (i) {
              case 7:
              case 0:
                continue;
              case 8:
              case 2:
                if (!allowSurface) continue;
                switch (this.surfaceMode) {
                  case 0:
                    reps[i].andNot(this.bsNoSurface);
                    break;
                  case 1:
                  case 3:
                    break;
                  case 2:
                  case 4:
                    reps[i].andNot(this.bsHydrogen);
                    break;
                }
              default:
                this.createShapeObject(i, reps[i]);
                continue;
            }

          this.bsAtoms = null;
        },
        '~A,~B,~N,~N',
      );
      Clazz_defineMethod(
        c$,
        'addLabel',
        function (atomIndex, uniqueID, atomColor, labelPos, label) {
          var icolor = Clazz_floatToInt(
            this.getUniqueFloatDef(uniqueID, 66, this.labelColor),
          );
          if (icolor == -7 || icolor == -6) {
          } else if (icolor < 0) {
            icolor = atomColor;
          }
          if (labelPos == null) {
            var offset = this.getUniquePoint(uniqueID, 471, null);
            if (offset == null) offset = this.labelPosition;
            else offset.add(this.labelPosition);
            this.setLabelPosition(offset, labelPos);
          }
          this.labels.put(
            Integer.$valueOf(atomIndex),
            this.newTextLabel(
              label,
              labelPos,
              icolor,
              this.labelFontId,
              this.labelSize,
            ),
          );
        },
        '~N,~N,~N,~A,~S',
      );
      Clazz_defineMethod(
        c$,
        'getUniqueFloatDef',
        function (id, key, defaultValue) {
          var setting;
          if (
            id <= 0 ||
            (setting = this.uniqueSettings.get(
              Integer.$valueOf((id << 10) + key),
            )) == null
          )
            return defaultValue;
          var v = setting.get(2).floatValue();
          if (JU.Logger.debugging)
            JU.Logger.debug(
              'Pymol unique setting for ' + id + ': [' + key + '] = ' + v,
            );
          return v;
        },
        '~N,~N,~N',
      );
      Clazz_defineMethod(
        c$,
        'getUniquePoint',
        function (id, key, pt) {
          var setting;
          if (
            id <= 0 ||
            (setting = this.uniqueSettings.get(
              Integer.$valueOf((id << 10) + key),
            )) == null
          )
            return pt;
          pt = new JU.P3();
          J.adapter.readers.pymol.PyMOLReader.pointAt(setting.get(2), 0, pt);
          JU.Logger.info(
            'Pymol unique setting for ' + id + ': ' + key + ' = ' + pt,
          );
          return pt;
        },
        '~N,~N,JU.P3',
      );
      Clazz_defineMethod(
        c$,
        'getObjectSetting',
        function (i) {
          return this.objectSettings.get(Integer.$valueOf(i));
        },
        '~N',
      );
      Clazz_defineMethod(
        c$,
        'booleanSetting',
        function (i) {
          return this.floatSetting(i) != 0;
        },
        '~N',
      );
      Clazz_defineMethod(
        c$,
        'floatSetting',
        function (i) {
          var setting = this.getSetting(i);
          if (setting != null && setting.size() == 3)
            return setting.get(2).floatValue();
          return J.adapter.readers.pymol.PyMOL.getDefaultSetting(
            i,
            this.pymolVersion,
          );
        },
        '~N',
      );
      Clazz_defineMethod(
        c$,
        'stringSetting',
        function (i) {
          var setting = this.getSetting(i);
          if (setting != null && setting.size() == 3)
            return J.adapter.readers.pymol.PyMOLReader.stringAt(setting, 2);
          return J.adapter.readers.pymol.PyMOL.getDefaultSettingS(
            i,
            this.pymolVersion,
          );
        },
        '~N',
      );
      Clazz_defineMethod(
        c$,
        'getSetting',
        function (i) {
          var setting = null;
          if (this.stateSettings != null)
            setting = this.stateSettings.get(Integer.$valueOf(i));
          if (setting == null && this.objectSettings != null)
            setting = this.objectSettings.get(Integer.$valueOf(i));
          if (setting == null && i < this.settings.size())
            setting = this.settings.get(i);
          return setting;
        },
        '~N',
      );
      Clazz_defineMethod(
        c$,
        'setLabelPosition',
        function (offset, labelPos) {
          labelPos[0] = 1;
          labelPos[1] = offset.x;
          labelPos[2] = offset.y;
          labelPos[3] = offset.z;
          return labelPos;
        },
        'JU.P3,~A',
      );
      Clazz_defineMethod(
        c$,
        'addCGO',
        function (data, color) {
          data.addLast(this.objectName);
          var jo = this.addJmolObject(23, null, data);
          jo.argb = color;
          jo.translucency = this.floatSetting(441);
          return this.fixName(this.objectName);
        },
        'JU.Lst,~N',
      );
      Clazz_defineMethod(
        c$,
        'addMeasurements',
        function (mdList, nCoord, list, bsReps, color, offsets, haveLabels) {
          var isNew = mdList == null;
          var n = isNew
            ? Clazz_doubleToInt(Clazz_doubleToInt(list.size() / 3) / nCoord)
            : mdList.length;
          if (n == 0) return false;
          var drawLabel = haveLabels && bsReps.get(3);
          var drawDashes = bsReps.get(10);
          var rad = this.floatSetting(107) / 20;
          if (rad == 0) rad = 0.05;
          if (!drawDashes) rad = -5.0e-4;
          if (color < 0) color = Clazz_floatToInt(this.floatSetting(574));
          var c = J.adapter.readers.pymol.PyMOL.getRGB(color);
          var colix = JU.C.getColix(c);
          var clabel = this.labelColor < 0 ? color : this.labelColor;
          if (isNew) {
            mdList = new Array(n);
            this.htMeasures.put(this.objectName, mdList);
          }
          var bs = JU.BSUtil.newAndSetBit(0);
          for (var index = 0, p = 0; index < n; index++) {
            var md;
            var offset;
            if (isNew) {
              var points = new JU.Lst();
              for (var i = 0; i < nCoord; i++, p += 3)
                points.addLast(
                  J.adapter.readers.pymol.PyMOLReader.pointAt(
                    list,
                    p,
                    new JU.Point3fi(),
                  ),
                );

              offset = J.adapter.readers.pymol.PyMOLReader.floatsAt(
                J.adapter.readers.pymol.PyMOLReader.listAt(offsets, index),
                0,
                Clazz_newFloatArray(7, 0),
                7,
              );
              if (offset == null)
                offset = this.setLabelPosition(
                  this.labelPosition,
                  Clazz_newFloatArray(7, 0),
                );
              md = mdList[index] = this.vwr.newMeasurementData(
                this.objectNameID + '_' + (index + 1),
                points,
              );
              md.note = this.objectName;
            } else {
              md = mdList[index];
              offset = md.text.pymolOffset;
            }
            var nDigits = Clazz_floatToInt(
              this.floatSetting(
                J.adapter.readers.pymol.PyMOLScene.MEAS_DIGITS[nCoord - 2],
              ),
            );
            var strFormat =
              nCoord +
              ': ' +
              (drawLabel ? '%0.' + (nDigits < 0 ? 1 : nDigits) + 'VALUE' : '');
            var text = this.newTextLabel(
              strFormat,
              offset,
              clabel,
              Clazz_floatToInt(this.floatSetting(328)),
              this.floatSetting(453),
            );
            md.set(
              12290,
              null,
              null,
              null,
              strFormat,
              'angstroms',
              null,
              false,
              false,
              null,
              false,
              Clazz_floatToInt(rad * 2000),
              colix,
              text,
              NaN,
              null,
            );
            this.addJmolObject(6, bs, md);
          }
          return true;
        },
        '~A,~N,JU.Lst,JU.BS,~N,JU.Lst,~B',
      );
      Clazz_defineMethod(
        c$,
        'getViewScript',
        function (view) {
          var sb = new JU.SB();
          var pymolView = this.getPymolView(view, true);
          sb.append(
            ';set translucent ' +
              (this.globalSetting(213) != 2) +
              ';set zshadePower 1;set traceAlpha ' +
              (this.globalSetting(111) != 0),
          );
          var rockets = this.cartoonRockets;
          sb.append(';set cartoonRockets ' + rockets);
          if (rockets) sb.append(';set rocketBarrels ' + rockets);
          sb.append(';set cartoonLadders ' + this.haveNucleicLadder);
          sb.append(';set ribbonBorder ' + (this.globalSetting(118) != 0));
          sb.append(';set cartoonFancy ' + (this.globalSetting(118) == 0));
          var s = '000000' + Integer.toHexString(this.bgRgb & 0xffffff);
          s = '[x' + s.substring(s.length - 6) + ']';
          sb.append(';background ' + s);
          sb.append(';moveto 0 PyMOL ' + JU.Escape.eAF(pymolView));
          sb.append(";save orientation 'default';");
          return sb;
        },
        'JU.Lst',
      );
      Clazz_defineMethod(
        c$,
        'getColix',
        function (colorIndex, translucency) {
          var colix =
            colorIndex == -7
              ? JU.C.getBgContrast(this.bgRgb) == 8
                ? 4
                : 8
              : colorIndex == -6
              ? JU.C.getBgContrast(this.bgRgb)
              : JU.C.getColixO(
                  Integer.$valueOf(
                    J.adapter.readers.pymol.PyMOL.getRGB(colorIndex),
                  ),
                );
          return JU.C.getColixTranslucent3(
            colix,
            translucency > 0,
            translucency,
          );
        },
        '~N,~N',
      );
      Clazz_defineMethod(
        c$,
        'setAtomColor',
        function (atomColor) {
          this.atomColorList.addLast(
            Integer.$valueOf(this.getColix(atomColor, 0)),
          );
        },
        '~N',
      );
      Clazz_defineMethod(
        c$,
        'setFrameObject',
        function (type, info) {
          if (info != null) {
            this.frameObj = this.getJmolObject(type, null, info);
            return;
          }
          if (this.frameObj == null) return;
          this.frameObj.finalizeObject(this, this.vwr.ms, null, false);
          this.frameObj = null;
        },
        '~N,~O',
      );
      Clazz_defineMethod(
        c$,
        'fixName',
        function (name) {
          var chars = name.toLowerCase().toCharArray();
          for (var i = chars.length; --i >= 0; )
            if (!JU.PT.isLetterOrDigit(chars[i])) chars[i] = '_';

          return String.valueOf(chars);
        },
        '~S',
      );
      Clazz_defineMethod(
        c$,
        'getObjectID',
        function (name) {
          return this.objectInfo.get(name)[0];
        },
        '~S',
      );
      Clazz_defineMethod(
        c$,
        'getObjectType',
        function (name) {
          var o = this.objectInfo.get(name);
          return o == null ? 0 : o[1].intValue();
        },
        '~S',
      );
      Clazz_defineMethod(
        c$,
        'setAtomMap',
        function (atomMap, ac0) {
          this.htAtomMap.put(this.objectNameID, atomMap);
          var bsAtoms = this.htDefinedAtoms.get(this.objectJmolName);
          if (bsAtoms == null) {
            bsAtoms = JU.BS.newN(ac0 + atomMap.length);
            JU.Logger.info('PyMOL molecule ' + this.objectName);
            this.htDefinedAtoms.put(this.objectJmolName, bsAtoms);
            this.htObjectAtoms.put(this.objectName, bsAtoms);
            this.moleculeNames.addLast(this.objectName);
          }
          return bsAtoms;
        },
        '~A,~N',
      );
      Clazz_defineMethod(
        c$,
        'newTextLabel',
        function (label, labelOffset, colorIndex, fontID, fontSize) {
          var face;
          var factor = 1;
          switch (fontID) {
            default:
            case 11:
            case 12:
            case 13:
            case 14:
              face = 'SansSerif';
              break;
            case 0:
            case 1:
              face = 'Monospaced';
              break;
            case 9:
            case 10:
            case 15:
            case 16:
            case 17:
            case 18:
              face = 'Serif';
              break;
          }
          var style;
          switch (fontID) {
            default:
              style = 'Plain';
              break;
            case 6:
            case 12:
            case 16:
            case 17:
              style = 'Italic';
              break;
            case 7:
            case 10:
            case 13:
              style = 'Bold';
              break;
            case 8:
            case 14:
            case 18:
              style = 'BoldItalic';
              break;
          }
          var font = this.vwr.getFont3D(
            face,
            style,
            fontSize == 0 ? 12 : fontSize * factor,
          );
          var t = JM.Text.newLabel(
            this.vwr,
            font,
            label,
            this.getColix(colorIndex, 0),
            0,
            0,
            0,
          );
          if (t != null) t.pymolOffset = labelOffset;
          return t;
        },
        '~S,~A,~N,~N,~N',
      );
      Clazz_defineMethod(c$, 'setVersionSettings', function () {
        if (this.pymolVersion < 100) {
          this.addSetting(550, 2, Integer.$valueOf(0));
          this.addSetting(529, 2, Integer.$valueOf(2));
          this.addSetting(471, 4, Clazz_newDoubleArray(-1, [1, 1, 0]));
          if (this.pymolVersion < 99) {
            this.addSetting(448, 2, Integer.$valueOf(0));
            this.addSetting(431, 2, Integer.$valueOf(0));
            this.addSetting(361, 2, Integer.$valueOf(1));
          }
        }
      });
      Clazz_defineMethod(
        c$,
        'addSetting',
        function (key, type, val) {
          var settingCount = this.settings.size();
          if (settingCount <= key)
            for (var i = key + 1; --i >= settingCount; )
              this.settings.addLast(null);

          if (type == 4) {
            var d = val;
            var list;
            val = list = new JU.Lst();
            for (var i = 0; i < 3; i++) list.addLast(Double.$valueOf(d[i]));
          }
          var setting = new JU.Lst();
          setting.addLast(Integer.$valueOf(key));
          setting.addLast(Integer.$valueOf(type));
          setting.addLast(val);
          this.settings.set(key, setting);
        },
        '~N,~N,~O',
      );
      Clazz_defineMethod(
        c$,
        'fixReps',
        function (reps) {
          this.htSpacefill.clear();
          this.bsCartoon.clearAll();
          for (
            var iAtom = this.bsAtoms.nextSetBit(0);
            iAtom >= 0;
            iAtom = this.bsAtoms.nextSetBit(iAtom + 1)
          ) {
            var rad = 0;
            var uniqueID =
              this.reader == null
                ? this.uniqueIDs[iAtom]
                : this.reader.getUniqueID(iAtom);
            if (reps[1].get(iAtom)) {
              rad =
                (this.reader == null
                  ? this.radii[iAtom]
                  : this.reader.getVDW(iAtom)) *
                this.getUniqueFloatDef(uniqueID, 155, this.sphereScale);
            } else if (reps[4].get(iAtom)) {
              rad = this.nonbondedSize;
            }
            if (rad != 0) {
              var r = Float.$valueOf(rad);
              var bsr = this.htSpacefill.get(r);
              if (bsr == null) this.htSpacefill.put(r, (bsr = new JU.BS()));
              bsr.set(iAtom);
            }
            var cartoonType =
              this.reader == null
                ? this.cartoonTypes[iAtom]
                : this.reader.getCartoonType(iAtom);
            if (reps[5].get(iAtom)) {
              switch (cartoonType) {
                case 1:
                case 4:
                  reps[21].set(iAtom);
                case -1:
                  reps[5].clear(iAtom);
                  this.bsCartoon.clear(iAtom);
                  break;
                case 7:
                  reps[22].set(iAtom);
                  reps[5].clear(iAtom);
                  this.bsCartoon.clear(iAtom);
                  break;
                default:
                  this.bsCartoon.set(iAtom);
              }
            }
          }
          reps[5].and(this.bsCartoon);
          this.cleanSingletons(reps[5]);
          this.cleanSingletons(reps[6]);
          this.cleanSingletons(reps[21]);
          this.cleanSingletons(reps[22]);
          this.bsCartoon.and(reps[5]);
        },
        '~A',
      );
      Clazz_defineMethod(
        c$,
        'cleanSingletons',
        function (bs) {
          if (bs.isEmpty()) return;
          bs.and(this.bsAtoms);
          var bsr = new JU.BS();
          var n = bs.length();
          var pass = 0;
          while (true) {
            for (
              var i = 0,
                offset = 0,
                iPrev = -2147483648,
                iSeqLast = -2147483648,
                iSeq = -2147483648;
              i < n;
              i++
            ) {
              if (
                iPrev < 0 ||
                (this.reader == null
                  ? this.newChain[i]
                  : this.reader.compareAtoms(iPrev, i))
              )
                offset++;
              iSeq =
                this.reader == null
                  ? this.sequenceNumbers[i]
                  : this.reader.getSequenceNumber(i);
              if (iSeq != iSeqLast) {
                iSeqLast = iSeq;
                offset++;
              }
              if (pass == 0) {
                if (bs.get(i)) bsr.set(offset);
              } else if (!bsr.get(offset)) bs.clear(i);
              iPrev = i;
            }
            if (++pass == 2) break;
            var bsnot = new JU.BS();
            for (var i = bsr.nextSetBit(0); i >= 0; i = bsr.nextSetBit(i + 1))
              if (!bsr.get(i - 1) && !bsr.get(i + 1)) bsnot.set(i);

            bsr.andNot(bsnot);
          }
        },
        'JU.BS',
      );
      Clazz_defineMethod(
        c$,
        'createShapeObject',
        function (shapeID, bs) {
          if (bs.isEmpty()) return;
          var jo = null;
          switch (shapeID) {
            case 11:
              bs.and(this.bsNonbonded);
              if (bs.isEmpty()) return;
              this.setUniqueObjects(
                7,
                bs,
                0,
                0,
                524,
                this.nonbondedTranslucency,
                0,
                this.nonbondedSize,
                0.5,
              );
              break;
            case 4:
            case 1:
              this.setUniqueObjects(
                0,
                bs,
                173,
                this.sphereColor,
                172,
                this.sphereTranslucency,
                155,
                this.sphereScale,
                1,
              );
              break;
            case 19:
              var ellipsoidTranslucency = this.floatSetting(571);
              var ellipsoidColor = Clazz_floatToInt(this.floatSetting(570));
              var ellipsoidScale = this.floatSetting(569);
              this.setUniqueObjects(
                20,
                bs,
                570,
                ellipsoidColor,
                571,
                ellipsoidTranslucency,
                569,
                ellipsoidScale,
                50,
              );
              break;
            case 9:
              this.setUniqueObjects(
                16,
                bs,
                210,
                this.dotColor,
                0,
                0,
                155,
                this.sphereScale,
                1,
              );
              break;
            case 2:
              var withinDistance = this.floatSetting(344);
              jo = this.addJmolObject(
                135180,
                bs,
                Clazz_newArray(-1, [
                  this.booleanSetting(156) ? 'FULLYLIT' : 'FRONTLIT',
                  this.surfaceMode == 3 || this.surfaceMode == 4 ? ' only' : '',
                  this.bsCarve,
                  Float.$valueOf(withinDistance),
                ]),
              );
              jo.setSize(
                this.floatSetting(4) * (this.solventAccessible ? -1 : 1),
              );
              jo.translucency = this.transparency;
              if (this.surfaceColor >= 0)
                jo.argb = J.adapter.readers.pymol.PyMOL.getRGB(
                  this.surfaceColor,
                );
              jo.modelIndex = this.currentAtomSetIndex;
              jo.cacheID = this.surfaceInfoName;
              this.setUniqueObjects(
                24,
                bs,
                144,
                this.surfaceColor,
                138,
                this.transparency,
                0,
                0,
                0,
              );
              break;
            case 8:
              jo = this.addJmolObject(135180, bs, null);
              jo.setSize(this.floatSetting(4));
              jo.translucency = this.transparency;
              this.setUniqueObjects(
                24,
                bs,
                144,
                this.surfaceColor,
                138,
                this.transparency,
                0,
                0,
                0,
              );
              break;
            case 3:
              bs.and(this.bsLabeled);
              if (bs.isEmpty()) return;
              jo = this.addJmolObject(5, bs, this.labels);
              break;
            case 10:
            case 7:
              jo = this.addJmolObject(659488, bs, null);
              jo.setSize(this.floatSetting(44) / 15);
              var color = Clazz_floatToInt(this.floatSetting(526));
              if (color >= 0)
                jo.argb = J.adapter.readers.pymol.PyMOL.getRGB(color);
              break;
            case 0:
              jo = this.addJmolObject(1, bs, null);
              jo.setSize(this.floatSetting(21) * 2);
              jo.translucency = this.stickTranslucency;
              var col = Clazz_floatToInt(this.floatSetting(376));
              if (col >= 0) jo.argb = J.adapter.readers.pymol.PyMOL.getRGB(col);
              break;
            case 5:
              this.createCartoonObject('H', this.cartoonRockets ? 181 : 100);
              this.createCartoonObject('S', 96);
              this.createCartoonObject('L', 92);
              this.createCartoonObject(' ', 92);
              break;
            case 22:
              this.createPuttyObject(bs);
              break;
            case 21:
              this.createTraceObject(bs);
              break;
            case 6:
              this.createRibbonObject(bs);
              break;
            default:
              JU.Logger.error('Unprocessed representation type ' + shapeID);
          }
        },
        '~N,JU.BS',
      );
      Clazz_defineMethod(
        c$,
        'setUniqueObjects',
        function (
          shape,
          bs,
          setColor,
          color,
          setTrans,
          trans,
          setSize,
          size,
          f,
        ) {
          var n = bs.cardinality();
          var colixes = setColor == 0 ? null : Clazz_newShortArray(n, 0);
          var atrans = setTrans == 0 ? null : Clazz_newFloatArray(n, 0);
          var sizes = Clazz_newFloatArray(n, 0);
          for (
            var pt = 0, i = bs.nextSetBit(0);
            i >= 0;
            i = bs.nextSetBit(i + 1), pt++
          ) {
            var id =
              this.reader == null
                ? this.uniqueIDs[i]
                : this.reader.getUniqueID(i);
            if (colixes != null) {
              var c = Clazz_floatToInt(
                this.getUniqueFloatDef(id, setColor, color),
              );
              if (c > 0) colixes[pt] = this.getColix(c, 0);
            }
            if (atrans != null) {
              atrans[pt] = this.getUniqueFloatDef(id, setTrans, trans);
            }
            sizes[pt] = this.getUniqueFloatDef(id, setSize, size) * f;
          }
          return this.addJmolObject(
            shape,
            bs,
            Clazz_newArray(-1, [colixes, atrans, sizes]),
          );
        },
        '~N,JU.BS,~N,~N,~N,~N,~N,~N,~N',
      );
      Clazz_defineMethod(c$, 'createSpacefillObjects', function () {
        for (
          var e, $e = this.htSpacefill.entrySet().iterator();
          $e.hasNext() && ((e = $e.next()) || true);

        ) {
          var r = e.getKey().floatValue();
          var bs = e.getValue();
          this.addJmolObject(1140850689, bs, null).rd =
            new J.atomdata.RadiusData(
              null,
              r,
              J.atomdata.RadiusData.EnumType.ABSOLUTE,
              J.c.VDW.AUTO,
            );
        }
        this.htSpacefill.clear();
      });
      Clazz_defineMethod(
        c$,
        'createTraceObject',
        function (bs) {
          this.checkNucleicObject(bs, true);
          if (bs.isEmpty()) return;
          var r = this.floatSetting(103);
          var jo = this.setUniqueObjects(
            10,
            bs,
            236,
            this.cartoonColor,
            0,
            0,
            0,
            0,
            0,
          );
          jo.setSize(r * 2);
          jo.translucency = this.cartoonTranslucency;
        },
        'JU.BS',
      );
      Clazz_defineMethod(
        c$,
        'checkNucleicObject',
        function (bs, isTrace) {
          var jo;
          var bsNuc = JU.BSUtil.copy(this.bsNucleic);
          bsNuc.and(bs);
          if (!bsNuc.isEmpty()) {
            if (isTrace && this.cartoonLadderMode)
              this.haveNucleicLadder = true;
            jo = this.addJmolObject(11, bsNuc, null);
            jo.translucency = this.cartoonTranslucency;
            jo.setSize(this.floatSetting(103) * 2);
            bs.andNot(bsNuc);
          }
        },
        'JU.BS,~B',
      );
      Clazz_defineMethod(
        c$,
        'createPuttyObject',
        function (bs) {
          var info = Clazz_newFloatArray(-1, [
            this.floatSetting(378),
            this.floatSetting(377),
            this.floatSetting(382),
            this.floatSetting(379),
            this.floatSetting(380),
            this.floatSetting(381),
            this.floatSetting(581),
          ]);
          this.addJmolObject(1112152078, bs, info).translucency =
            this.cartoonTranslucency;
        },
        'JU.BS',
      );
      Clazz_defineMethod(
        c$,
        'createRibbonObject',
        function (bs) {
          var isTrace = this.floatSetting(19) > 1;
          var r = this.floatSetting(20) * 2;
          var rayScale = this.floatSetting(327);
          if (r == 0)
            r =
              this.floatSetting(106) *
              (isTrace ? 1 : rayScale <= 1 ? 0.5 : rayScale) *
              0.1;
          var jo = this.setUniqueObjects(
            isTrace ? 10 : 9,
            bs,
            235,
            this.ribbonColor,
            0,
            0,
            0,
            0,
            0,
          );
          jo.setSize(r);
          jo.translucency = this.ribbonTranslucency;
        },
        'JU.BS',
      );
      Clazz_defineMethod(
        c$,
        'createCartoonObject',
        function (key, sizeID) {
          var bs = JU.BSUtil.copy(this.ssMapAtom.get(key));
          if (bs == null) return;
          bs.and(this.bsCartoon);
          if (bs.isEmpty()) return;
          if (key.equals(' ')) {
            this.checkNucleicObject(bs, false);
            if (bs.isEmpty()) return;
          }
          var jo = this.setUniqueObjects(
            11,
            bs,
            236,
            this.cartoonColor,
            0,
            0,
            0,
            0,
            0,
          );
          jo.setSize(this.floatSetting(sizeID) * 2);
          jo.translucency = this.cartoonTranslucency;
        },
        '~S,~N',
      );
      Clazz_defineMethod(
        c$,
        'addObject',
        function (obj) {
          this.jmolObjects.addLast(obj);
          return obj;
        },
        'J.adapter.readers.pymol.JmolObject',
      );
      Clazz_defineMethod(
        c$,
        'setGroupVisible',
        function (g, parentVis) {
          var vis = parentVis && g.visible;
          if (vis) return;
          g.visible = false;
          this.occludedObjects.put(g.objectNameID, Boolean.TRUE);
          this.htHiddenObjects.put(g.name, Boolean.TRUE);
          switch (g.type) {
            case 1:
              this.bsHidden.or(g.bsAtoms);
              break;
            default:
              g.occluded = true;
              break;
          }
          for (
            var gg, $gg = g.list.values().iterator();
            $gg.hasNext() && ((gg = $gg.next()) || true);

          ) {
            this.setGroupVisible(gg, vis);
          }
        },
        'J.adapter.readers.pymol.PyMOLGroup,~B',
      );
      Clazz_defineMethod(
        c$,
        'getSSMapAtom',
        function (ssType) {
          var bs = this.ssMapAtom.get(ssType);
          if (bs == null) this.ssMapAtom.put(ssType, (bs = new JU.BS()));
          return bs;
        },
        '~S',
      );
      Clazz_defineMethod(c$, 'setAtomDefs', function () {
        this.setGroupVisibilities();
        var defs = new java.util.Hashtable();
        for (
          var e, $e = this.htDefinedAtoms.entrySet().iterator();
          $e.hasNext() && ((e = $e.next()) || true);

        ) {
          var bs = e.getValue();
          if (!bs.isEmpty()) defs.put(e.getKey(), bs);
        }
        this.addJmolObject(12290, null, defs);
        return defs;
      });
      Clazz_defineMethod(c$, 'needSelections', function () {
        return this.haveScenes || !this.htCarveSets.isEmpty();
      });
      Clazz_defineMethod(
        c$,
        'setUniqueBonds',
        function (bsBonds, isSticks) {
          if (isSticks) {
            this.bsStickBonds.or(bsBonds);
            this.bsStickBonds.andNot(this.bsLineBonds);
          } else {
            this.bsLineBonds.or(bsBonds);
            this.bsLineBonds.andNot(this.bsStickBonds);
          }
        },
        'JU.BS,~B',
      );
      Clazz_defineMethod(c$, 'finalizeUniqueBonds', function () {
        if (this.uniqueList == null) return;
        var bondCount = this.vwr.ms.bondCount;
        var bonds = this.vwr.ms.bo;
        for (
          var i = this.bsUniqueBonds.nextSetBit(0);
          i >= 0;
          i = this.bsUniqueBonds.nextSetBit(i + 1)
        ) {
          var rad = NaN;
          var id = this.uniqueList.get(Integer.$valueOf(i)).intValue();
          if (this.bsLineBonds.get(i)) {
            rad = this.getUniqueFloatDef(id, 44, NaN) / 30;
          } else if (this.bsStickBonds.get(i)) {
            rad = this.getUniqueFloatDef(id, 21, NaN);
          }
          var c = Clazz_floatToInt(this.getUniqueFloatDef(id, 376, 2147483647));
          if (c != 2147483647) c = J.adapter.readers.pymol.PyMOL.getRGB(c);
          var valence = this.getUniqueFloatDef(id, 64, NaN);
          var t = this.getUniqueFloatDef(id, 198, NaN);
          if (i < 0 || i >= bondCount) return;
          var b = bonds[i];
          this.setBondParameters(b, this.thisState - 1, rad, valence, c, t);
        }
      });
      Clazz_defineMethod(
        c$,
        'setBondParameters',
        function (b, modelIndex, rad, pymolValence, argb, trans) {
          if (modelIndex >= 0 && b.atom1.mi != modelIndex) return;
          if (!Float.isNaN(rad)) b.mad = Clazz_floatToShort(rad * 2000);
          var colix = b.colix;
          if (argb != 2147483647) colix = JU.C.getColix(argb);
          if (!Float.isNaN(trans))
            b.colix = JU.C.getColixTranslucent3(colix, trans != 0, trans);
          else if (b.colix != colix)
            b.colix = JU.C.copyColixTranslucency(b.colix, colix);
          if (pymolValence == 1) b.order |= 98304;
          else if (pymolValence == 0) b.order |= 65536;
        },
        'JM.Bond,~N,~N,~N,~N,~N',
      );
      Clazz_defineMethod(
        c$,
        'addMesh',
        function (tok, obj, objName, isMep) {
          var jo = this.addJmolObject(tok, null, obj);
          this.setSceneObject(objName, -1);
          var meshColor = Clazz_floatToInt(this.floatSetting(146));
          if (meshColor < 0)
            meshColor = J.adapter.readers.pymol.PyMOLReader.intAt(
              J.adapter.readers.pymol.PyMOLReader.listAt(obj, 0),
              2,
            );
          if (!isMep) {
            jo.setSize(this.meshWidth);
            jo.argb = J.adapter.readers.pymol.PyMOL.getRGB(meshColor);
          }
          jo.translucency = this.transparency;
          jo.cacheID = this.surfaceInfoName;
        },
        '~N,JU.Lst,~S,~B',
      );
      Clazz_defineMethod(
        c$,
        'addIsosurface',
        function (objectName) {
          var jo = this.addJmolObject(135180, null, objectName);
          jo.cacheID = this.surfaceInfoName;
          return jo;
        },
        '~S',
      );
      Clazz_defineStatics(
        c$,
        'MEAS_DIGITS',
        Clazz_newIntArray(-1, [530, 531, 532]),
      );
    },
  );
  Clazz_declarePackage('J.adapter.readers.pymol');
  Clazz_load(
    [
      'J.adapter.readers.pdb.PdbReader',
      'J.api.PymolAtomReader',
      'JU.BS',
      '$.P3',
    ],
    'J.adapter.readers.pymol.PyMOLReader',
    [
      'java.lang.Boolean',
      'java.util.Hashtable',
      'JU.AU',
      '$.BC',
      '$.CU',
      '$.Lst',
      '$.PT',
      '$.V3',
      'J.adapter.readers.pymol.PickleReader',
      '$.PyMOL',
      '$.PyMOLScene',
      'J.adapter.smarter.Atom',
      '$.Bond',
      '$.Structure',
      'J.c.STR',
      'JU.BSUtil',
      '$.BoxInfo',
      '$.Logger',
    ],
    function () {
      c$ = Clazz_decorateAsClass(
        function () {
          this.allowSurface = true;
          this.doResize = false;
          this.doCache = false;
          this.isStateScript = false;
          this.sourcePNGJ = false;
          this.ac0 = 0;
          this.$ac = 0;
          this.stateCount = 0;
          this.structureCount = 0;
          this.isHidden = false;
          this.bsStructureDefined = null;
          this.bsBytesExcluded = null;
          this.atomMap = null;
          this.ssMapSeq = null;
          this.pymolScene = null;
          this.xyzMin = null;
          this.xyzMax = null;
          this.nModels = 0;
          this.logging = false;
          this.reps = null;
          this.isMovie = false;
          this.pymolFrame = 0;
          this.allStates = false;
          this.totalAtomCount = 0;
          this.pymolVersion = 0;
          this.trajectoryStep = null;
          this.trajectoryPtr = 0;
          this.objectName = null;
          this.volumeData = null;
          this.mapObjects = null;
          this.haveMeasurements = false;
          this.frames = null;
          this.uniqueSettings = null;
          this.atoms = null;
          this.haveScenes = false;
          this.baseModelIndex = 0;
          this.sceneOrder = null;
          this.bondCount = 0;
          this.haveBinaryArrays = true;
          this.ptTemp = null;
          this.aTemp = null;
          Clazz_instantialize(this, arguments);
        },
        J.adapter.readers.pymol,
        'PyMOLReader',
        J.adapter.readers.pdb.PdbReader,
        J.api.PymolAtomReader,
      );
      Clazz_prepareFields(c$, function () {
        this.bsStructureDefined = new JU.BS();
        this.xyzMin = JU.P3.new3(1e6, 1e6, 1e6);
        this.xyzMax = JU.P3.new3(-1000000.0, -1000000.0, -1000000.0);
        this.reps = new Array(23);
        this.ptTemp = new JU.P3();
        this.aTemp = Clazz_newByteArray(16, 0);
      });
      Clazz_overrideMethod(
        c$,
        'setup',
        function (fullPath, htParams, reader) {
          this.isBinary = this.mustFinalizeModelSet = true;
          this.setupASCR(fullPath, htParams, reader);
        },
        '~S,java.util.Map,~O',
      );
      Clazz_defineMethod(c$, 'initializeReader', function () {
        this.baseAtomIndex = this.htParams.get('baseAtomIndex').intValue();
        this.baseModelIndex = this.htParams.get('baseModelIndex').intValue();
        this.asc.setInfo('noAutoBond', Boolean.TRUE);
        this.asc.setCurrentModelInfo('pdbNoHydrogens', Boolean.TRUE);
        this.asc.setInfo('isPyMOL', Boolean.TRUE);
        if (this.isTrajectory) this.trajectorySteps = new JU.Lst();
        this.isStateScript = this.htParams.containsKey('isStateScript');
        this.sourcePNGJ = this.htParams.containsKey('sourcePNGJ');
        this.doResize = this.checkFilterKey('DORESIZE');
        this.allowSurface = !this.checkFilterKey('NOSURFACE');
        this.doCache = this.checkFilterKey('DOCACHE');
        if (this.doCache && this.sourcePNGJ) this.doCache = false;
        else if (this.sourcePNGJ && !this.doCache) this.sourcePNGJ = false;
        if (this.doCache) this.bsBytesExcluded = new JU.BS();
        Clazz_superCall(
          this,
          J.adapter.readers.pymol.PyMOLReader,
          'initializeReader',
          [],
        );
      });
      Clazz_overrideMethod(c$, 'processBinaryDocument', function () {
        var logFile = this.vwr.getLogFileName();
        this.logging = logFile.length > 0;
        JU.Logger.info(
          this.logging
            ? 'PyMOL (1) file data streaming to ' + logFile
            : 'To view raw PyMOL file data, use \'set logFile "some_filename" ',
        );
        var reader = new J.adapter.readers.pymol.PickleReader(
          this.binaryDoc,
          this.vwr,
        );
        var map = reader.getMap(this.logging && JU.Logger.debuggingHigh);
        reader = null;
        this.process(map);
      });
      Clazz_overrideMethod(
        c$,
        'setAdditionalAtomParameters',
        function (atom) {},
        'J.adapter.smarter.Atom',
      );
      Clazz_overrideMethod(c$, 'finalizeSubclassReader', function () {
        this.finalizeReaderPDB();
        this.asc.setTensors();
      });
      Clazz_overrideMethod(c$, 'finalizeModelSet', function () {
        this.pymolScene.setReaderObjects();
        if (this.haveMeasurements) {
          this.appendLoadNote(this.vwr.getMeasurementInfoAsString());
          this.setLoadNote();
        }
        if (this.haveScenes) {
          var scenes = new Array(this.sceneOrder.size());
          for (var i = scenes.length; --i >= 0; )
            scenes[i] = J.adapter.readers.pymol.PyMOLReader.stringAt(
              this.sceneOrder,
              i,
            );

          this.vwr.ms.msInfo.put('scenes', scenes);
        }
        this.vwr.ms.setTrajectoryBs(
          JU.BSUtil.newBitSet2(this.baseModelIndex, this.vwr.ms.mc),
        );
        if (!this.isStateScript) this.pymolScene.setFrameObject(0, null);
        if (this.bsBytesExcluded != null) {
          var nExcluded = this.bsBytesExcluded.cardinality();
          var bytes0 = this.vwr.fm.getFileAsBytes(this.filePath, null);
          var bytes = Clazz_newByteArray(bytes0.length - nExcluded, 0);
          for (
            var i = this.bsBytesExcluded.nextClearBit(0),
              n = bytes0.length,
              pt = 0;
            i < n;
            i = this.bsBytesExcluded.nextClearBit(i + 1)
          )
            bytes[pt++] = bytes0[i];

          bytes0 = null;
          var fileName = this.filePath;
          this.vwr.cachePut(fileName, bytes);
        }
      });
      Clazz_defineMethod(
        c$,
        'process',
        function (map) {
          this.pymolVersion = map.get('version').intValue();
          this.appendLoadNote('PyMOL version: ' + this.pymolVersion);
          var settings = this.fixSettings(
            J.adapter.readers.pymol.PyMOLReader.getMapList(map, 'settings'),
          );
          var lst = J.adapter.readers.pymol.PyMOLReader.listAt(settings, 749);
          this.haveBinaryArrays =
            lst != null &&
            J.adapter.readers.pymol.PyMOLReader.floatAt(lst, 2) == 1;
          this.sceneOrder = J.adapter.readers.pymol.PyMOLReader.getMapList(
            map,
            'scene_order',
          );
          this.haveScenes = this.getFrameScenes(map);
          var file = J.adapter.readers.pymol.PyMOLReader.listAt(settings, 440);
          if (file != null && file.size() > 2)
            JU.Logger.info('PyMOL session file: ' + file.get(2));
          this.setUniqueSettings(
            J.adapter.readers.pymol.PyMOLReader.getMapList(
              map,
              'unique_settings',
            ),
          );
          this.pymolScene = new J.adapter.readers.pymol.PyMOLScene(
            this,
            this.vwr,
            settings,
            this.uniqueSettings,
            this.pymolVersion,
            this.haveScenes,
            this.baseAtomIndex,
            this.baseModelIndex,
            this.doCache,
            this.filePath,
          );
          var logFile = this.vwr.getLogFileName();
          this.logging = logFile.length > 0;
          JU.Logger.info(
            this.logging
              ? 'PyMOL file data streaming to ' + logFile
              : 'To view raw PyMOL file data, use \'set logFile "some_filename" ',
          );
          var names = J.adapter.readers.pymol.PyMOLReader.getMapList(
            map,
            'names',
          );
          for (
            var e, $e = map.entrySet().iterator();
            $e.hasNext() && ((e = $e.next()) || true);

          ) {
            var name = e.getKey();
            JU.Logger.info(name);
            if (name.equals('names')) {
              for (var i = 1; i < names.size(); i++) {
                var obj = J.adapter.readers.pymol.PyMOLReader.listAt(names, i);
                JU.Logger.info(
                  '  ' + J.adapter.readers.pymol.PyMOLReader.stringAt(obj, 0),
                );
              }
            }
          }
          if (this.logging) {
            if (this.logging) this.vwr.log('$CLEAR$');
            for (
              var e, $e = map.entrySet().iterator();
              $e.hasNext() && ((e = $e.next()) || true);

            ) {
              var name = e.getKey();
              if (!'names'.equals(name)) {
                this.vwr.log('\n===' + name + '===');
                this.vwr.log(JU.PT.rep(e.getValue().toString(), '[', '\n['));
              }
            }
            this.vwr.log('\n===names===');
            for (var i = 1; i < names.size(); i++) {
              this.vwr.log('');
              var list = names.get(i);
              this.vwr.log(
                ' =' +
                  J.adapter.readers.pymol.PyMOLReader.bytesToString(
                    list.get(0),
                  ) +
                  '=',
              );
              try {
                this.vwr.log(JU.PT.rep(list.toString(), '[', '\n['));
              } catch (e) {}
            }
          }
          this.addColors(
            J.adapter.readers.pymol.PyMOLReader.getMapList(map, 'colors'),
            this.pymolScene.globalSetting(214) != 0,
          );
          this.allStates = this.pymolScene.globalSetting(49) != 0;
          this.pymolFrame = Clazz_floatToInt(
            this.pymolScene.globalSetting(194),
          );
          this.getAtomAndStateCount(names);
          this.pymolScene.setStateCount(this.stateCount);
          var pymolState = Clazz_floatToInt(this.pymolScene.globalSetting(193));
          if (!this.isMovie)
            this.pymolScene.setFrameObject(
              4115,
              this.allStates
                ? Integer.$valueOf(-1)
                : Integer.$valueOf(pymolState - 1),
            );
          this.appendLoadNote(
            'frame=' +
              this.pymolFrame +
              ' state=' +
              pymolState +
              ' all_states=' +
              this.allStates,
          );
          if (!this.isStateScript && this.doResize) {
            var width = 0;
            var height = 0;
            var main = J.adapter.readers.pymol.PyMOLReader.getMapList(
              map,
              'main',
            );
            if (main != null) {
              width = J.adapter.readers.pymol.PyMOLReader.intAt(main, 0);
              height = J.adapter.readers.pymol.PyMOLReader.intAt(main, 1);
            }
            var note;
            if (width > 0 && height > 0) {
              note = 'PyMOL dimensions width=' + width + ' height=' + height;
              this.asc.setInfo(
                'preferredWidthHeight',
                Clazz_newIntArray(-1, [width, height]),
              );
              this.vwr.resizeInnerPanel(width, height);
            } else {
              note = 'PyMOL dimensions?';
            }
            this.appendLoadNote(note);
          }
          var mov;
          if (
            !this.isStateScript &&
            !this.allStates &&
            (mov = J.adapter.readers.pymol.PyMOLReader.getMapList(
              map,
              'movie',
            )) != null
          ) {
            var frameCount = J.adapter.readers.pymol.PyMOLReader.intAt(mov, 0);
            if (frameCount > 0) this.processMovie(mov, frameCount);
          }
          if (this.totalAtomCount == 0) this.asc.newAtomSet();
          if (this.allStates && this.desiredModelNumber == -2147483648) {
          } else if (this.isMovie) {
            switch (this.desiredModelNumber) {
              case -2147483648:
                break;
              default:
                this.desiredModelNumber =
                  this.frames[
                    (this.desiredModelNumber > 0 &&
                    this.desiredModelNumber <= this.frames.length
                      ? this.desiredModelNumber
                      : this.pymolFrame) - 1
                  ];
                this.pymolScene.setFrameObject(
                  4115,
                  Integer.$valueOf(this.desiredModelNumber - 1),
                );
                break;
            }
          } else if (this.desiredModelNumber == 0) {
            this.desiredModelNumber = pymolState;
          } else {
          }
          var n = names.size();
          for (var j = 0; j < this.stateCount; j++) {
            if (!this.doGetModel(++this.nModels, null)) continue;
            this.model(this.nModels, null);
            this.pymolScene.currentAtomSetIndex = this.asc.iSet;
            if (this.isTrajectory) {
              this.trajectoryStep = new Array(this.totalAtomCount);
              this.trajectorySteps.addLast(this.trajectoryStep);
              this.trajectoryPtr = 0;
            }
            for (var i = 1; i < n; i++)
              this.processObject(
                J.adapter.readers.pymol.PyMOLReader.listAt(names, i),
                true,
                j,
              );
          }
          for (var i = 1; i < n; i++)
            this.processObject(
              J.adapter.readers.pymol.PyMOLReader.listAt(names, i),
              false,
              0,
            );

          this.pymolScene.setReaderObjectInfo(
            null,
            0,
            null,
            false,
            null,
            null,
            null,
          );
          if (this.mapObjects != null && this.allowSurface)
            this.processMeshes();
          if (this.isTrajectory) {
            this.appendLoadNote(
              'PyMOL trajectories read: ' + this.trajectorySteps.size(),
            );
            this.asc.finalizeTrajectoryAs(this.trajectorySteps, null);
          }
          this.processDefinitions();
          this.processSelectionsAndScenes(map);
          this.pymolScene.finalizeVisibility();
          if (!this.isStateScript) {
            this.vwr.initialize(false, true);
            this.addJmolScript(
              this.pymolScene
                .getViewScript(
                  J.adapter.readers.pymol.PyMOLReader.getMapList(map, 'view'),
                )
                .toString(),
            );
          }
          if (this.$ac == 0) this.asc.setInfo('dataOnly', Boolean.TRUE);
          this.pymolScene.offsetObjects();
        },
        'java.util.Map',
      );
      Clazz_defineMethod(
        c$,
        'fixSettings',
        function (settings) {
          var n = settings.size();
          for (var i = 0; i < n; i++) {
            var i2 = J.adapter.readers.pymol.PyMOLReader.intAt(
              settings.get(i),
              0,
            );
            if (i2 == -1) {
              JU.Logger.info('PyMOL reader adding null setting #' + i);
              settings.set(i, new JU.Lst());
            } else {
              while (i < i2) {
                JU.Logger.info('PyMOL reader adding null setting #' + i);
                settings.add(i++, new JU.Lst());
                n++;
              }
            }
          }
          return settings;
        },
        'JU.Lst',
      );
      Clazz_defineMethod(
        c$,
        'getFrameScenes',
        function (map) {
          if (this.sceneOrder == null) return false;
          var scenes = map.get('scene_dict');
          for (var i = 0; i < this.sceneOrder.size(); i++) {
            var name = J.adapter.readers.pymol.PyMOLReader.stringAt(
              this.sceneOrder,
              i,
            );
            var thisScene = J.adapter.readers.pymol.PyMOLReader.getMapList(
              scenes,
              name,
            );
            if (thisScene == null || thisScene.get(2) == null)
              this.sceneOrder.removeItemAt(i--);
          }
          return this.sceneOrder != null && this.sceneOrder.size() != 0;
        },
        'java.util.Map',
      );
      Clazz_defineMethod(
        c$,
        'setUniqueSettings',
        function (list) {
          this.uniqueSettings = new java.util.Hashtable();
          var max = 0;
          if (list != null && list.size() != 0) {
            for (var i = list.size(); --i >= 0; ) {
              var atomSettings = list.get(i);
              var id = J.adapter.readers.pymol.PyMOLReader.intAt(
                atomSettings,
                0,
              );
              if (id > max) max = id;
              var mySettings = atomSettings.get(1);
              for (var j = mySettings.size(); --j >= 0; ) {
                var setting = mySettings.get(j);
                var uid =
                  (id << 10) +
                  J.adapter.readers.pymol.PyMOLReader.intAt(setting, 0);
                this.uniqueSettings.put(Integer.$valueOf(uid), setting);
              }
            }
          }
          return max;
        },
        'JU.Lst',
      );
      Clazz_defineMethod(
        c$,
        'addColors',
        function (colors, isClamped) {
          if (colors == null || colors.size() == 0) return;
          for (var i = colors.size(); --i >= 0; ) {
            var c = J.adapter.readers.pymol.PyMOLReader.listAt(colors, i);
            J.adapter.readers.pymol.PyMOL.addColor(
              c.get(1),
              isClamped
                ? J.adapter.readers.pymol.PyMOLReader.colorSettingClamped(
                    c,
                    this.ptTemp,
                  )
                : J.adapter.readers.pymol.PyMOLReader.getColorPt(
                    c.get(2),
                    this.ptTemp,
                  ),
            );
          }
        },
        'JU.Lst,~B',
      );
      Clazz_defineMethod(
        c$,
        'getAtomAndStateCount',
        function (names) {
          var n = 0;
          for (var i = 1; i < names.size(); i++) {
            var execObject = J.adapter.readers.pymol.PyMOLReader.listAt(
              names,
              i,
            );
            var type = J.adapter.readers.pymol.PyMOLReader.intAt(execObject, 4);
            if (!this.checkObject(execObject)) continue;
            if (type == 1) {
              var pymolObject = J.adapter.readers.pymol.PyMOLReader.listAt(
                execObject,
                5,
              );
              var states = J.adapter.readers.pymol.PyMOLReader.listAt(
                pymolObject,
                4,
              );
              var ns = states.size();
              if (ns > this.stateCount) this.stateCount = ns;
              var nAtoms;
              var nBonds;
              if (this.haveBinaryArrays) {
                nBonds = Clazz_doubleToInt(
                  J.adapter.readers.pymol.PyMOLReader.listAt(
                    pymolObject,
                    6,
                  ).get(1).length / 20,
                );
                nAtoms = Clazz_doubleToInt(
                  J.adapter.readers.pymol.PyMOLReader.listAt(
                    pymolObject,
                    7,
                  ).get(1).length / 120,
                );
                n += nAtoms;
              } else {
                nBonds = J.adapter.readers.pymol.PyMOLReader.listAt(
                  pymolObject,
                  6,
                ).size();
                nAtoms = J.adapter.readers.pymol.PyMOLReader.listAt(
                  pymolObject,
                  7,
                ).size();
              }
              System.out.println(
                'Object ' +
                  this.objectName +
                  ' nBonds=' +
                  nBonds +
                  ', nAtoms = ' +
                  nAtoms,
              );
              for (var j = 0; j < ns; j++) {
                var state = J.adapter.readers.pymol.PyMOLReader.listAt(
                  states,
                  j,
                );
                var idxToAtm = J.adapter.readers.pymol.PyMOLReader.listAt(
                  state,
                  3,
                );
                if (idxToAtm == null) {
                  this.isTrajectory = false;
                } else {
                  var m = idxToAtm.size();
                  n += m;
                  if (this.isTrajectory && m != nAtoms)
                    this.isTrajectory = false;
                }
              }
            }
          }
          this.totalAtomCount = n;
          JU.Logger.info('PyMOL total atom count = ' + this.totalAtomCount);
          JU.Logger.info('PyMOL state count = ' + this.stateCount);
        },
        'JU.Lst',
      );
      Clazz_defineMethod(
        c$,
        'checkObject',
        function (execObject) {
          this.objectName = J.adapter.readers.pymol.PyMOLReader.stringAt(
            execObject,
            0,
          );
          this.isHidden =
            J.adapter.readers.pymol.PyMOLReader.intAt(execObject, 2) != 1;
          return this.objectName.indexOf('_') != 0;
        },
        'JU.Lst',
      );
      Clazz_defineMethod(
        c$,
        'processMovie',
        function (mov, frameCount) {
          var movie = new java.util.Hashtable();
          movie.put('frameCount', Integer.$valueOf(frameCount));
          movie.put('currentFrame', Integer.$valueOf(this.pymolFrame - 1));
          var haveCommands = false;
          var haveViews = false;
          var haveFrames = false;
          var list = J.adapter.readers.pymol.PyMOLReader.listAt(mov, 4);
          for (var i = list.size(); --i >= 0; )
            if (J.adapter.readers.pymol.PyMOLReader.intAt(list, i) != 0) {
              this.frames = Clazz_newIntArray(list.size(), 0);
              for (var j = this.frames.length; --j >= 0; )
                this.frames[j] =
                  J.adapter.readers.pymol.PyMOLReader.intAt(list, j) + 1;

              movie.put('frames', this.frames);
              haveFrames = true;
              break;
            }
          var cmds = J.adapter.readers.pymol.PyMOLReader.listAt(mov, 5);
          var cmd;
          for (var i = cmds.size(); --i >= 0; )
            if (
              (cmd = J.adapter.readers.pymol.PyMOLReader.stringAt(cmds, i)) !=
                null &&
              cmd.length > 1
            ) {
              cmds = J.adapter.readers.pymol.PyMOLReader.fixMovieCommands(cmds);
              if (cmds != null) {
                movie.put('commands', cmds);
                haveCommands = true;
                break;
              }
            }
          var views = J.adapter.readers.pymol.PyMOLReader.listAt(mov, 6);
          var view;
          for (var i = views.size(); --i >= 0; )
            if (
              (view = J.adapter.readers.pymol.PyMOLReader.listAt(views, i)) !=
                null &&
              view.size() >= 12 &&
              view.get(1) != null
            ) {
              haveViews = true;
              views = J.adapter.readers.pymol.PyMOLReader.fixMovieViews(views);
              if (views != null) {
                movie.put('views', views);
                break;
              }
            }
          this.appendLoadNote('PyMOL movie frameCount = ' + frameCount);
          if (haveFrames && !haveCommands && !haveViews) {
            this.isMovie = true;
            this.pymolScene.setReaderObjectInfo(
              null,
              0,
              null,
              false,
              null,
              null,
              null,
            );
            this.pymolScene.setFrameObject(1073742031, movie);
          } else {
          }
        },
        'JU.Lst,~N',
      );
      c$.fixMovieViews = Clazz_defineMethod(
        c$,
        'fixMovieViews',
        function (views) {
          return views;
        },
        'JU.Lst',
      );
      c$.fixMovieCommands = Clazz_defineMethod(
        c$,
        'fixMovieCommands',
        function (cmds) {
          return cmds;
        },
        'JU.Lst',
      );
      Clazz_defineMethod(
        c$,
        'processObject',
        function (execObject, moleculeOnly, iState) {
          if (execObject == null) return;
          var type = J.adapter.readers.pymol.PyMOLReader.intAt(execObject, 4);
          var startLen = execObject.get(execObject.size() - 1);
          if ((type == 1) != moleculeOnly || !this.checkObject(execObject))
            return;
          var pymolObject = J.adapter.readers.pymol.PyMOLReader.listAt(
            execObject,
            5,
          );
          var stateSettings = null;
          if (type == 1) {
            var states = J.adapter.readers.pymol.PyMOLReader.listAt(
              pymolObject,
              4,
            );
            var state = J.adapter.readers.pymol.PyMOLReader.listAt(
              states,
              iState,
            );
            var idxToAtm = J.adapter.readers.pymol.PyMOLReader.listAt(state, 3);
            if (iState > 0 && (idxToAtm == null || idxToAtm.size() == 0))
              return;
            stateSettings = J.adapter.readers.pymol.PyMOLReader.listAt(
              state,
              7,
            );
          } else if (iState > 0) {
            return;
          }
          JU.Logger.info(
            'PyMOL model ' +
              this.nModels +
              ' Object ' +
              this.objectName +
              (this.isHidden ? ' (hidden)' : ' (visible)'),
          );
          if (!this.isHidden && !this.isMovie && !this.allStates) {
            if (this.pymolFrame > 0 && this.pymolFrame != this.nModels) {
              this.pymolFrame = this.nModels;
              this.allStates = true;
              this.pymolScene.setFrameObject(4115, Integer.$valueOf(-1));
            }
          }
          var objectHeader = J.adapter.readers.pymol.PyMOLReader.listAt(
            pymolObject,
            0,
          );
          var parentGroupName =
            execObject.size() < 8
              ? null
              : J.adapter.readers.pymol.PyMOLReader.stringAt(execObject, 6);
          if (parentGroupName != null && ''.equals(parentGroupName.trim()))
            parentGroupName = null;
          this.pymolScene.setReaderObjectInfo(
            this.objectName,
            type,
            parentGroupName,
            this.isHidden,
            J.adapter.readers.pymol.PyMOLReader.listAt(objectHeader, 8),
            stateSettings,
            moleculeOnly ? '_' + (iState + 1) : '',
          );
          var bsAtoms = null;
          var doExclude = this.bsBytesExcluded != null;
          var msg = null;
          switch (type) {
            default:
              msg = '' + type;
              break;
            case -1:
              this.pymolScene.processSelection(execObject);
              break;
            case 1:
              doExclude = false;
              bsAtoms = this.processMolecule(pymolObject, iState);
              break;
            case 4:
              doExclude = false;
              this.processMeasure(pymolObject);
              break;
            case 3:
            case 2:
              this.processMap(pymolObject, type == 3, false);
              break;
            case 8:
              this.processGadget(pymolObject);
              break;
            case 12:
              if (parentGroupName == null) parentGroupName = '';
              break;
            case 6:
              msg = 'CGO';
              this.processCGO(pymolObject);
              break;
            case 11:
              msg = 'ALIGNEMENT';
              break;
            case 9:
              msg = 'CALCULATOR';
              break;
            case 5:
              msg = 'CALLBACK';
              break;
            case 10:
              msg = 'SLICE';
              break;
            case 7:
              msg = 'SURFACE';
              break;
          }
          if (parentGroupName != null || bsAtoms != null)
            this.pymolScene.addGroup(
              execObject,
              parentGroupName,
              type,
              bsAtoms,
            );
          if (doExclude) {
            var i0 = J.adapter.readers.pymol.PyMOLReader.intAt(startLen, 0);
            var len = J.adapter.readers.pymol.PyMOLReader.intAt(startLen, 1);
            this.bsBytesExcluded.setBits(i0, i0 + len);
            JU.Logger.info(
              'cached PSE file excludes PyMOL object type ' +
                type +
                ' name=' +
                this.objectName +
                ' len=' +
                len,
            );
          }
          if (msg != null)
            JU.Logger.error(
              'Unprocessed object type ' + msg + ' ' + this.objectName,
            );
        },
        'JU.Lst,~B,~N',
      );
      Clazz_defineMethod(
        c$,
        'processCGO',
        function (pymolObject) {
          if (this.isStateScript) return;
          if (this.isHidden) return;
          var data = J.adapter.readers.pymol.PyMOLReader.sublistAt(
            pymolObject,
            [2, 0],
          );
          var color = J.adapter.readers.pymol.PyMOL.getRGB(
            J.adapter.readers.pymol.PyMOLReader.intAt(
              J.adapter.readers.pymol.PyMOLReader.listAt(pymolObject, 0),
              2,
            ),
          );
          var name = this.pymolScene.addCGO(data, color);
          if (name != null) this.appendLoadNote('CGO ' + name);
        },
        'JU.Lst',
      );
      Clazz_defineMethod(
        c$,
        'processGadget',
        function (pymolObject) {
          if (this.objectName.endsWith('_e_pot'))
            this.processMap(pymolObject, true, true);
        },
        'JU.Lst',
      );
      Clazz_defineMethod(
        c$,
        'processMap',
        function (pymolObject, isObject, isGadget) {
          if (isObject) {
            if (this.sourcePNGJ) return;
            if (this.isHidden && !isGadget) return;
            if (this.mapObjects == null) this.mapObjects = new JU.Lst();
            this.mapObjects.addLast(pymolObject);
          } else {
            if (this.volumeData == null)
              this.volumeData = new java.util.Hashtable();
            this.volumeData.put(this.objectName, pymolObject);
            if (!this.isHidden && !this.isStateScript)
              this.pymolScene.addIsosurface(this.objectName);
          }
          pymolObject.addLast(this.objectName);
        },
        'JU.Lst,~B,~B',
      );
      Clazz_defineMethod(
        c$,
        'processMeasure',
        function (pymolObject) {
          if (this.isStateScript) return;
          if (this.isHidden) return;
          JU.Logger.info('PyMOL measure ' + this.objectName);
          var measure = J.adapter.readers.pymol.PyMOLReader.sublistAt(
            pymolObject,
            [2, 0],
          );
          var pt;
          var nCoord = Clazz_instanceOf(measure.get((pt = 1)), JU.Lst)
            ? 2
            : Clazz_instanceOf(measure.get((pt = 4)), JU.Lst)
            ? 3
            : Clazz_instanceOf(measure.get((pt = 6)), JU.Lst)
            ? 4
            : 0;
          if (nCoord == 0) return;
          var setting = J.adapter.readers.pymol.PyMOLReader.listAt(
            pymolObject,
            0,
          );
          var bsReps = J.adapter.readers.pymol.PyMOLReader.getBsReps(
            J.adapter.readers.pymol.PyMOLReader.listAt(setting, 3),
          );
          var list = J.adapter.readers.pymol.PyMOLReader.listAt(measure, pt);
          var offsets = J.adapter.readers.pymol.PyMOLReader.listAt(measure, 8);
          var haveLabels = measure.size() > 8;
          var color = J.adapter.readers.pymol.PyMOLReader.intAt(setting, 2);
          if (
            this.pymolScene.addMeasurements(
              null,
              nCoord,
              list,
              bsReps,
              color,
              offsets,
              haveLabels,
            )
          )
            this.haveMeasurements = true;
        },
        'JU.Lst',
      );
      Clazz_defineMethod(
        c$,
        'processMolecule',
        function (pymolObject, iState) {
          var states = J.adapter.readers.pymol.PyMOLReader.listAt(
            pymolObject,
            4,
          );
          var state = J.adapter.readers.pymol.PyMOLReader.listAt(
            states,
            iState,
          );
          var idxToAtm;
          var coords;
          var labelPositions;
          var idxArray = null;
          var coordsArray = null;
          var labelArray = null;
          var nBonds = J.adapter.readers.pymol.PyMOLReader.intAt(
            pymolObject,
            2,
          );
          var nAtoms = J.adapter.readers.pymol.PyMOLReader.intAt(
            pymolObject,
            3,
          );
          var n = nAtoms;
          if (this.haveBinaryArrays && JU.AU.isAB(state.get(3))) {
            idxToAtm = coords = labelPositions = null;
            idxArray = Clazz_newIntArray(nAtoms, 0);
            coordsArray = Clazz_newFloatArray(nAtoms * 3, 0);
            this.fillFloatArrayFromBytes(state.get(2), coordsArray);
            this.fillIntArrayFromBytes(state.get(3), idxArray);
            var b = state.get(8);
            if (b != null) {
              labelArray = Clazz_newFloatArray(nAtoms * 7, 0);
              this.fillFloatArrayFromBytes(b, labelArray);
            }
          } else {
            coords = J.adapter.readers.pymol.PyMOLReader.listAt(state, 2);
            idxToAtm = J.adapter.readers.pymol.PyMOLReader.listAt(state, 3);
            labelPositions = J.adapter.readers.pymol.PyMOLReader.listAt(
              state,
              8,
            );
            if (idxToAtm != null) n = idxToAtm.size();
          }
          if (n == 0) return null;
          this.$ac = this.ac0 = this.asc.ac;
          if (nAtoms == 0) return null;
          this.ssMapSeq = new java.util.Hashtable();
          if (iState == 0)
            this.processMolCryst(
              J.adapter.readers.pymol.PyMOLReader.listAt(pymolObject, 10),
            );
          var bonds = this.getBondList(
            J.adapter.readers.pymol.PyMOLReader.listAt(pymolObject, 6),
          );
          var pymolAtoms = J.adapter.readers.pymol.PyMOLReader.listAt(
            pymolObject,
            7,
          );
          this.atomMap = Clazz_newIntArray(nAtoms, 0);
          var bsAtoms = this.pymolScene.setAtomMap(this.atomMap, this.ac0);
          for (var i = 0; i < 23; i++) this.reps[i] = JU.BS.newN(1000);

          if (iState == 0 || !this.isTrajectory) {
            this.pymolScene.ensureCapacity(n);
            var lexStr = null;
            var atomArray = null;
            var vArray = null;
            if (this.haveBinaryArrays) {
              var ver = J.adapter.readers.pymol.PyMOLReader.intAt(
                pymolAtoms,
                0,
              );
              atomArray = pymolAtoms.get(1);
              lexStr = this.getLexStr(pymolAtoms.get(2));
              System.out.println('PyMOL atom dump version ' + ver);
              vArray = this.haveBinaryArrays
                ? J.adapter.readers.pymol.PyMOL.getVArray(ver)
                : null;
            }
            for (var idx = 0; idx < n; idx++) {
              var a = this.addAtom(
                pymolAtoms,
                idxToAtm != null
                  ? J.adapter.readers.pymol.PyMOLReader.intAt(idxToAtm, idx)
                  : idxArray != null
                  ? idxArray[idx]
                  : idx,
                atomArray,
                vArray,
                lexStr,
                idx,
                coords,
                coordsArray,
                labelPositions,
                labelArray,
                bsAtoms,
                iState,
              );
              if (a != null) this.trajectoryStep[this.trajectoryPtr++] = a;
            }
          }
          this.addBonds(bonds);
          this.addMolStructures();
          this.atoms = this.asc.atoms;
          if (!this.isStateScript) this.createShapeObjects();
          this.ssMapSeq = null;
          JU.Logger.info(
            'reading ' +
              (this.$ac - this.ac0) +
              ' atoms and ' +
              nBonds +
              ' bonds',
          );
          JU.Logger.info('----------');
          return bsAtoms;
        },
        'JU.Lst,~N',
      );
      Clazz_defineMethod(
        c$,
        'getLexStr',
        function (lex) {
          var pt = 0;
          var n = JU.BC.bytesToInt(lex, pt, false);
          var index = Clazz_newIntArray(n, 0);
          var imax = 0;
          for (var i = 0; i < n; i++) {
            pt += 4;
            var ipt = (index[i] = JU.BC.bytesToInt(lex, pt, false));
            if (ipt > imax) imax = ipt;
          }
          var tokens = new Array(imax + 1);
          tokens[0] = ' ';
          pt += 4;
          for (var i = 0; i < n; i++) {
            var s = (tokens[index[i]] = this.getCStr(lex, pt));
            pt += s.length + 1;
          }
          return tokens;
        },
        '~A',
      );
      Clazz_defineMethod(
        c$,
        'getCStr',
        function (lex, pt) {
          try {
            var a = this.aTemp;
            var apt = 0;
            var b = 0;
            while ((b = lex[pt++]) != 0) {
              if (apt >= a.length) a = this.aTemp = JU.AU.doubleLengthByte(a);
              a[apt++] = b;
            }
            return String.instantialize(JU.AU.arrayCopyByte(a, apt), 'UTF-8');
          } catch (e) {
            if (Clazz_exceptionOf(e, java.io.UnsupportedEncodingException)) {
              return null;
            } else {
              throw e;
            }
          }
        },
        '~A,~N',
      );
      Clazz_defineMethod(
        c$,
        'processMolCryst',
        function (cryst) {
          if (cryst == null || cryst.size() == 0) return;
          var l = J.adapter.readers.pymol.PyMOLReader.sublistAt(cryst, [0, 0]);
          var a = J.adapter.readers.pymol.PyMOLReader.sublistAt(cryst, [0, 1]);
          this.setUnitCell(
            J.adapter.readers.pymol.PyMOLReader.floatAt(l, 0),
            J.adapter.readers.pymol.PyMOLReader.floatAt(l, 1),
            J.adapter.readers.pymol.PyMOLReader.floatAt(l, 2),
            J.adapter.readers.pymol.PyMOLReader.floatAt(a, 0),
            J.adapter.readers.pymol.PyMOLReader.floatAt(a, 1),
            J.adapter.readers.pymol.PyMOLReader.floatAt(a, 2),
          );
          this.setSpaceGroupName(
            J.adapter.readers.pymol.PyMOLReader.stringAt(cryst, 1),
          );
        },
        'JU.Lst',
      );
      Clazz_defineMethod(
        c$,
        'getBondList',
        function (bonds) {
          var asSingle = !this.pymolScene.booleanSetting(64);
          var b = null;
          var vArray = null;
          var n = bonds.size();
          var len = 0;
          if (this.haveBinaryArrays && n == 2) {
            var ver = J.adapter.readers.pymol.PyMOLReader.intAt(bonds, 0);
            System.out.println('PyMOL bond dump version ' + ver);
            vArray = J.adapter.readers.pymol.PyMOL.getVArrayB(ver);
            b = bonds.get(1);
            len = vArray[0];
            n = Clazz_doubleToInt(b.length / len);
          }
          var bondList = new JU.Lst();
          bondList.ensureCapacity(n);
          var ia;
          var ib;
          var order;
          var uid = -1;
          for (var i = 0, apt = 0; i < n; i++) {
            if (this.haveBinaryArrays) {
              ia = JU.BC.bytesToInt(b, apt + vArray[1], false);
              ib = JU.BC.bytesToInt(b, apt + vArray[2], false);
              uid =
                b[apt + vArray[6]] == 0
                  ? -1
                  : JU.BC.bytesToInt(b, apt + vArray[5], false);
              order = b[apt + vArray[3]];
              apt += len;
            } else {
              var lst = J.adapter.readers.pymol.PyMOLReader.listAt(bonds, i);
              ia = J.adapter.readers.pymol.PyMOLReader.intAt(lst, 0);
              ib = J.adapter.readers.pymol.PyMOLReader.intAt(lst, 1);
              order = J.adapter.readers.pymol.PyMOLReader.intAt(lst, 2);
              uid =
                lst.size() > 6 &&
                J.adapter.readers.pymol.PyMOLReader.intAt(lst, 6) != 0
                  ? J.adapter.readers.pymol.PyMOLReader.intAt(lst, 5)
                  : -1;
            }
            if (order < 1 || order > 3) order = 1;
            order |= asSingle || order == 1 ? 65536 : 98304;
            var bond = new J.adapter.smarter.Bond(ia, ib, order);
            bond.uniqueID = uid;
            bondList.addLast(bond);
          }
          return bondList;
        },
        'JU.Lst',
      );
      Clazz_defineMethod(
        c$,
        'fillIntArrayFromBytes',
        function (b, array) {
          for (var i = 0, pt = 0; i < b.length; i += 4)
            array[pt++] = JU.BC.bytesToInt(b, i, false);
        },
        '~A,~A',
      );
      Clazz_defineMethod(
        c$,
        'fillFloatArrayFromBytes',
        function (b, array) {
          try {
            for (var i = 0, pt = 0; i < b.length; i += 4)
              array[pt++] = JU.BC.bytesToFloat(b, i, false);
          } catch (e) {
            if (Clazz_exceptionOf(e, Exception)) {
            } else {
              throw e;
            }
          }
        },
        '~A,~A',
      );
      Clazz_defineMethod(
        c$,
        'addAtom',
        function (
          pymolAtoms,
          apt,
          atomArray,
          vArray,
          lexStr,
          icoord,
          coords,
          coordArray,
          labelPositions,
          labelArray,
          bsState,
          iState,
        ) {
          this.atomMap[apt] = -1;
          var chainID;
          var altLoc;
          var group3;
          var name;
          var sym;
          var label;
          var ssType;
          var resi;
          var insCode = null;
          var bfactor;
          var occupancy;
          var radius;
          var partialCharge;
          var seqNo;
          var intReps;
          var formalCharge;
          var atomColor;
          var serNo;
          var cartoonType;
          var flags;
          var uniqueID = -1;
          var isHetero;
          var bonded;
          var anisou = null;
          var bsReps = null;
          if (this.haveBinaryArrays) {
            var vpt;
            var pt = apt * vArray[0];
            seqNo = this.atomInt(atomArray, pt, vArray[1]);
            chainID = this.atomStr(atomArray, pt, vArray[34], lexStr);
            resi = this.atomStr(atomArray, pt, vArray[38], lexStr);
            group3 = this.atomStr(atomArray, pt, vArray[41], lexStr);
            if (group3.length > 3) group3 = group3.substring(0, 3);
            name = this.atomStr(atomArray, pt, vArray[36], lexStr);
            sym = this.atomStr(atomArray, pt, vArray[37], lexStr);
            label = this.atomStr(atomArray, pt, vArray[19], lexStr);
            ssType = this.atomStr(atomArray, pt, vArray[39], null);
            altLoc = this.atomStr(atomArray, pt, vArray[40], null);
            if ((vpt = vArray[42]) == 0) {
              resi = this.atomStr(atomArray, pt, vArray[38], null);
            } else {
              var b = atomArray[pt + vpt];
              insCode = b == 0 ? ' ' : '' + String.fromCharCode(b);
            }
            bfactor = this.atomFloat(atomArray, pt, vArray[4]);
            occupancy = this.atomFloat(atomArray, pt, vArray[5]);
            radius = this.atomFloat(atomArray, pt, vArray[6]);
            partialCharge = this.atomFloat(atomArray, pt, vArray[7]);
            formalCharge = atomArray[pt + vArray[28]];
            if (formalCharge > 125) formalCharge -= 512;
            intReps = this.atomInt(atomArray, pt, vArray[20]);
            atomColor = this.atomInt(atomArray, pt, vArray[9]);
            serNo = this.atomInt(atomArray, pt, vArray[10]);
            cartoonType = this.atomInt(atomArray, pt, vArray[30]);
            flags = this.atomInt(atomArray, pt, vArray[11]);
            uniqueID = this.atomInt(atomArray, pt, vArray[13]);
            if (uniqueID == 0) uniqueID = -1;
            anisou = Clazz_newFloatArray(8, 0);
            if ((vpt = vArray[45]) > 0)
              for (var i = 0; i < 6; i++)
                anisou[i] = JU.BC.bytesToShort(
                  atomArray,
                  pt + vpt + (i << 1),
                  false,
                );

            bonded = this.atomBool(atomArray, pt, vArray[22], vArray[47]);
            isHetero = this.atomBool(atomArray, pt, vArray[21], vArray[46]);
          } else {
            var a = J.adapter.readers.pymol.PyMOLReader.listAt(pymolAtoms, apt);
            seqNo = J.adapter.readers.pymol.PyMOLReader.intAt(a, 0);
            chainID = J.adapter.readers.pymol.PyMOLReader.stringAt(a, 1);
            if (chainID.length == 0) chainID = ' ';
            altLoc = J.adapter.readers.pymol.PyMOLReader.stringAt(a, 2);
            resi = J.adapter.readers.pymol.PyMOLReader.stringAt(a, 3);
            group3 = J.adapter.readers.pymol.PyMOLReader.stringAt(a, 5);
            name = J.adapter.readers.pymol.PyMOLReader.stringAt(a, 6);
            sym = J.adapter.readers.pymol.PyMOLReader.stringAt(a, 7);
            label = J.adapter.readers.pymol.PyMOLReader.stringAt(a, 9);
            ssType = J.adapter.readers.pymol.PyMOLReader.stringAt(a, 10);
            if (ssType.length == 0) ssType = ' ';
            ssType = ssType.substring(0, 1);
            bfactor = J.adapter.readers.pymol.PyMOLReader.floatAt(a, 14);
            occupancy = J.adapter.readers.pymol.PyMOLReader.floatAt(a, 15);
            radius = J.adapter.readers.pymol.PyMOLReader.floatAt(a, 16);
            partialCharge = J.adapter.readers.pymol.PyMOLReader.floatAt(a, 17);
            formalCharge = J.adapter.readers.pymol.PyMOLReader.intAt(a, 18);
            isHetero = J.adapter.readers.pymol.PyMOLReader.intAt(a, 19) != 0;
            bsReps = J.adapter.readers.pymol.PyMOLReader.getBsReps(
              J.adapter.readers.pymol.PyMOLReader.listAt(a, 20),
            );
            intReps =
              bsReps == null
                ? J.adapter.readers.pymol.PyMOLReader.intAt(a, 20)
                : 0;
            atomColor = J.adapter.readers.pymol.PyMOLReader.intAt(a, 21);
            serNo = J.adapter.readers.pymol.PyMOLReader.intAt(a, 22);
            cartoonType = J.adapter.readers.pymol.PyMOLReader.intAt(a, 23);
            flags = J.adapter.readers.pymol.PyMOLReader.intAt(a, 24);
            bonded = J.adapter.readers.pymol.PyMOLReader.intAt(a, 25) != 0;
            uniqueID =
              a.size() > 40 &&
              J.adapter.readers.pymol.PyMOLReader.intAt(a, 40) == 1
                ? J.adapter.readers.pymol.PyMOLReader.intAt(a, 32)
                : -1;
            if (a.size() > 46)
              anisou = J.adapter.readers.pymol.PyMOLReader.floatsAt(
                a,
                41,
                Clazz_newFloatArray(8, 0),
                6,
              );
          }
          if (insCode == null) {
            var len = resi.length;
            var ch = len > 0 ? resi.charAt(len - 1) : ' ';
            insCode = JU.PT.isDigit(ch) ? ' ' : '' + ch;
          }
          if (group3.length > 3) group3 = group3.substring(0, 3);
          if (group3.equals(' ')) group3 = 'UNK';
          if (sym.equals('A')) sym = 'C';
          var ichain = this.vwr.getChainID(chainID, true);
          var atom = this.processAtom(
            new J.adapter.smarter.Atom(),
            name,
            altLoc.length == 0 ? ' ' : altLoc.charAt(0),
            group3,
            ichain,
            seqNo,
            insCode.charAt(0),
            isHetero,
            sym,
          );
          if (!this.filterPDBAtom(atom, this.fileAtomIndex++)) return null;
          var x;
          var y;
          var z;
          icoord *= 3;
          if (this.haveBinaryArrays) {
            x = coordArray[icoord];
            y = coordArray[++icoord];
            z = coordArray[++icoord];
          } else {
            x = J.adapter.readers.pymol.PyMOLReader.floatAt(coords, icoord);
            y = J.adapter.readers.pymol.PyMOLReader.floatAt(coords, ++icoord);
            z = J.adapter.readers.pymol.PyMOLReader.floatAt(coords, ++icoord);
          }
          JU.BoxInfo.addPointXYZ(x, y, z, this.xyzMin, this.xyzMax, 0);
          if (this.isTrajectory && iState > 0) return null;
          var isNucleic =
            J.adapter.readers.pymol.PyMOLReader.nucleic.indexOf(group3) >= 0;
          if (bsState != null) bsState.set(this.$ac);
          if (
            seqNo >= -1000 &&
            (!ssType.equals(' ') || name.equals('CA') || isNucleic)
          ) {
            var bs = this.ssMapSeq.get(ssType);
            if (bs == null) this.ssMapSeq.put(ssType, (bs = new JU.BS()));
            bs.set(seqNo - -1000);
            ssType += ichain;
            bs = this.ssMapSeq.get(ssType);
            if (bs == null) this.ssMapSeq.put(ssType, (bs = new JU.BS()));
            bs.set(seqNo - -1000);
          }
          atom.bfactor = bfactor;
          atom.foccupancy = occupancy;
          atom.radius = radius;
          if (atom.radius == 0) atom.radius = 1;
          atom.partialCharge = partialCharge;
          atom.vib = JU.V3.new3(uniqueID, cartoonType, NaN);
          if (anisou != null && anisou[0] != 0)
            this.asc.setAnisoBorU(atom, anisou, 12);
          this.pymolScene.setAtomColor(atomColor);
          this.processAtom2(atom, serNo, x, y, z, formalCharge);
          if (!bonded) this.pymolScene.bsNonbonded.set(this.$ac);
          if (!label.equals(' ')) {
            this.pymolScene.bsLabeled.set(this.$ac);
            var labelPos = Clazz_newFloatArray(7, 0);
            if (labelArray != null) {
              for (var i = 0; i < 7; i++) labelPos[i] = labelArray[apt * 7 + i];
            } else {
              var labelOffset = J.adapter.readers.pymol.PyMOLReader.listAt(
                labelPositions,
                apt,
              );
              if (labelOffset != null) {
                for (var i = 0; i < 7; i++)
                  labelPos[i] = J.adapter.readers.pymol.PyMOLReader.floatAt(
                    labelOffset,
                    i,
                  );
              }
            }
            this.pymolScene.addLabel(
              this.$ac,
              uniqueID,
              atomColor,
              labelPos,
              label,
            );
          }
          if (this.isHidden) this.pymolScene.bsHidden.set(this.$ac);
          if (isNucleic) this.pymolScene.bsNucleic.set(this.$ac);
          for (var i = 0; i < 21; i++)
            if (bsReps == null ? (intReps & (1 << i)) != 0 : bsReps.get(i))
              this.reps[i].set(this.$ac);

          if (atom.elementSymbol.equals('H'))
            this.pymolScene.bsHydrogen.set(this.$ac);
          if ((flags & J.adapter.readers.pymol.PyMOL.FLAG_NOSURFACE) != 0)
            this.pymolScene.bsNoSurface.set(this.$ac);
          this.atomMap[apt] = this.$ac++;
          return null;
        },
        'JU.Lst,~N,~A,~A,~A,~N,JU.Lst,~A,JU.Lst,~A,JU.BS,~N',
      );
      Clazz_defineMethod(
        c$,
        'atomBool',
        function (atomArray, pt, offset, mask) {
          return (atomArray[pt + offset] & mask) != 0;
        },
        '~A,~N,~N,~N',
      );
      Clazz_defineMethod(
        c$,
        'atomFloat',
        function (atomArray, pt, offset) {
          try {
            return JU.BC.bytesToFloat(atomArray, pt + offset, false);
          } catch (e) {
            if (Clazz_exceptionOf(e, Exception)) {
              return 0;
            } else {
              throw e;
            }
          }
        },
        '~A,~N,~N',
      );
      Clazz_defineMethod(
        c$,
        'atomStr',
        function (atomArray, pt, offset, lexStr) {
          if (offset < 0)
            return lexStr[JU.BC.bytesToInt(atomArray, pt - offset, false)];
          var s = this.getCStr(atomArray, pt + offset);
          return s.length == 0 ? ' ' : s;
        },
        '~A,~N,~N,~A',
      );
      Clazz_defineMethod(
        c$,
        'atomInt',
        function (atomArray, pt, offset) {
          return JU.BC.bytesToInt(atomArray, pt + offset, false);
        },
        '~A,~N,~N',
      );
      Clazz_defineMethod(
        c$,
        'addBonds',
        function (bonds) {
          var n = bonds.size();
          for (var i = 0; i < n; i++) {
            var bond = bonds.get(i);
            bond.atomIndex1 = this.atomMap[bond.atomIndex1];
            bond.atomIndex2 = this.atomMap[bond.atomIndex2];
            if (bond.atomIndex1 < 0 || bond.atomIndex2 < 0) continue;
            this.pymolScene.setUniqueBond(this.bondCount++, bond.uniqueID);
            this.asc.addBond(bond);
          }
        },
        'JU.Lst',
      );
      Clazz_defineMethod(c$, 'addMolStructures', function () {
        this.addMolSS('H', J.c.STR.HELIX);
        this.addMolSS('S', J.c.STR.SHEET);
        this.addMolSS('L', J.c.STR.TURN);
        this.addMolSS(' ', J.c.STR.NONE);
      });
      Clazz_defineMethod(
        c$,
        'addMolSS',
        function (ssType, type) {
          if (this.ssMapSeq.get(ssType) == null) return;
          var istart = -1;
          var iend = -1;
          var ichain = 0;
          var atoms = this.asc.atoms;
          var bsSeq = null;
          var bsAtom = this.pymolScene.getSSMapAtom(ssType);
          var n = this.$ac + 1;
          var seqNo = -1;
          var thischain = 0;
          var imodel = -1;
          var thisModel = -1;
          for (var i = this.ac0; i < n; i++) {
            if (i == this.$ac) {
              thischain = 0;
            } else {
              seqNo = atoms[i].sequenceNumber;
              thischain = atoms[i].chainID;
              thisModel = atoms[i].atomSetIndex;
            }
            if (thischain != ichain || thisModel != imodel) {
              ichain = thischain;
              imodel = thisModel;
              bsSeq = this.ssMapSeq.get(ssType + thischain);
              --i;
              if (istart < 0) continue;
            } else if (
              bsSeq != null &&
              seqNo >= -1000 &&
              bsSeq.get(seqNo - -1000)
            ) {
              iend = i;
              if (istart < 0) istart = i;
              continue;
            } else if (istart < 0) {
              continue;
            }
            if (type !== J.c.STR.NONE) {
              var pt = this.bsStructureDefined.nextSetBit(istart);
              if (pt >= 0 && pt <= iend) continue;
              this.bsStructureDefined.setBits(istart, iend + 1);
              var structure = new J.adapter.smarter.Structure(
                imodel,
                type,
                type,
                type.toString(),
                ++this.structureCount,
                type === J.c.STR.SHEET ? 1 : 0,
                null,
              );
              var a = atoms[istart];
              var b = atoms[iend];
              var i0 = this.asc.getAtomSetAtomIndex(thisModel);
              structure.set(
                a.chainID,
                a.sequenceNumber,
                a.insertionCode,
                b.chainID,
                b.sequenceNumber,
                b.insertionCode,
                istart - i0,
                iend - i0,
              );
              this.asc.addStructure(structure);
            }
            bsAtom.setBits(istart, iend + 1);
            istart = -1;
          }
        },
        '~S,J.c.STR',
      );
      Clazz_defineMethod(c$, 'createShapeObjects', function () {
        this.pymolScene.createShapeObjects(
          this.reps,
          this.allowSurface && !this.isHidden,
          this.ac0,
          this.$ac,
        );
      });
      Clazz_defineMethod(c$, 'processMeshes', function () {
        var fileName = this.vwr.fm.getFilePath(
          this.pymolScene.surfaceInfoName,
          true,
          false,
        );
        this.vwr.cachePut(fileName, this.volumeData);
        for (var i = this.mapObjects.size(); --i >= 0; ) {
          var obj = this.mapObjects.get(i);
          var objName = obj.get(obj.size() - 1).toString();
          var isMep = objName.endsWith('_e_pot');
          var mapName;
          var tok;
          if (isMep) {
            tok = 1073742016;
            var root = objName.substring(0, objName.length - 3);
            mapName = root + 'map';
            var isosurfaceName = this.pymolScene.getObjectID(root + 'chg');
            if (isosurfaceName == null) continue;
            obj.addLast(isosurfaceName);
            this.pymolScene.mepList += ';' + isosurfaceName + ';';
          } else {
            tok = 1073742018;
            mapName = J.adapter.readers.pymol.PyMOLReader.stringAt(
              J.adapter.readers.pymol.PyMOLReader.sublistAt(obj, [2, 0]),
              1,
            );
          }
          var surface = this.volumeData.get(mapName);
          if (surface == null) continue;
          obj.addLast(mapName);
          this.volumeData.put(objName, obj);
          this.volumeData.put('__pymolSurfaceData__', obj);
          if (!this.isStateScript)
            this.pymolScene.addMesh(tok, obj, objName, isMep);
          this.appendLoadNote(
            'PyMOL object ' + objName + ' references map ' + mapName,
          );
        }
      });
      Clazz_defineMethod(c$, 'processDefinitions', function () {
        var s = this.vwr.getAtomDefs(this.pymolScene.setAtomDefs());
        if (s.length > 2) s = s.substring(0, s.length - 2);
        this.appendLoadNote(s);
      });
      Clazz_defineMethod(
        c$,
        'processSelectionsAndScenes',
        function (map) {
          if (!this.pymolScene.needSelections()) return;
          var htObjNames = J.adapter.readers.pymol.PyMOLReader.listToMap(
            J.adapter.readers.pymol.PyMOLReader.getMapList(map, 'names'),
          );
          if (this.haveScenes) {
            var scenes = map.get('scene_dict');
            this.finalizeSceneData();
            var htSecrets = J.adapter.readers.pymol.PyMOLReader.listToMap(
              J.adapter.readers.pymol.PyMOLReader.getMapList(
                map,
                'selector_secrets',
              ),
            );
            for (var i = 0; i < this.sceneOrder.size(); i++) {
              var name = J.adapter.readers.pymol.PyMOLReader.stringAt(
                this.sceneOrder,
                i,
              );
              var thisScene = J.adapter.readers.pymol.PyMOLReader.getMapList(
                scenes,
                name,
              );
              if (thisScene == null) continue;
              this.pymolScene.buildScene(
                name,
                thisScene,
                htObjNames,
                htSecrets,
              );
              this.appendLoadNote('scene: ' + name);
            }
          }
          this.pymolScene.setCarveSets(htObjNames);
        },
        'java.util.Map',
      );
      Clazz_defineMethod(c$, 'finalizeSceneData', function () {
        var cartoonTypes = Clazz_newIntArray(this.$ac, 0);
        var uniqueIDs = Clazz_newIntArray(this.$ac, 0);
        var sequenceNumbers = Clazz_newIntArray(this.$ac, 0);
        var newChain = Clazz_newBooleanArray(this.$ac, false);
        var radii = Clazz_newFloatArray(this.$ac, 0);
        var lastAtomChain = -2147483648;
        var lastAtomSet = -2147483648;
        for (var i = 0; i < this.$ac; i++) {
          cartoonTypes[i] = this.getCartoonType(i);
          uniqueIDs[i] = this.getUniqueID(i);
          sequenceNumbers[i] = this.getSequenceNumber(i);
          radii[i] = this.getVDW(i);
          if (
            lastAtomChain != this.atoms[i].chainID ||
            lastAtomSet != this.atoms[i].atomSetIndex
          ) {
            newChain[i] = true;
            lastAtomChain = this.atoms[i].chainID;
            lastAtomSet = this.atoms[i].atomSetIndex;
          }
        }
        this.pymolScene.setAtomInfo(
          uniqueIDs,
          cartoonTypes,
          sequenceNumbers,
          newChain,
          radii,
        );
      });
      c$.intAt = Clazz_defineMethod(
        c$,
        'intAt',
        function (list, i) {
          return list == null ? -1 : list.get(i).intValue();
        },
        'JU.Lst,~N',
      );
      c$.pointAt = Clazz_defineMethod(
        c$,
        'pointAt',
        function (list, i, pt) {
          pt.set(
            J.adapter.readers.pymol.PyMOLReader.floatAt(list, i++),
            J.adapter.readers.pymol.PyMOLReader.floatAt(list, i++),
            J.adapter.readers.pymol.PyMOLReader.floatAt(list, i),
          );
          return pt;
        },
        'JU.Lst,~N,JU.P3',
      );
      c$.floatsAt = Clazz_defineMethod(
        c$,
        'floatsAt',
        function (a, pt, data, len) {
          if (a == null) return null;
          for (var i = 0; i < len; i++)
            data[i] = J.adapter.readers.pymol.PyMOLReader.floatAt(a, pt++);

          return data;
        },
        'JU.Lst,~N,~A,~N',
      );
      c$.floatAt = Clazz_defineMethod(
        c$,
        'floatAt',
        function (list, i) {
          return list == null || i >= list.size()
            ? 0
            : list.get(i).floatValue();
        },
        'JU.Lst,~N',
      );
      c$.listAt = Clazz_defineMethod(
        c$,
        'listAt',
        function (list, i) {
          if (list == null || i >= list.size()) return null;
          var o = list.get(i);
          return Clazz_instanceOf(o, JU.Lst) ? o : null;
        },
        'JU.Lst,~N',
      );
      c$.sublistAt = Clazz_defineMethod(
        c$,
        'sublistAt',
        function (mesh, pt) {
          for (var i = 0; i < pt.length; i++) mesh = mesh.get(pt[i]);

          return mesh;
        },
        'JU.Lst,~A',
      );
      c$.listToMap = Clazz_defineMethod(
        c$,
        'listToMap',
        function (list) {
          var map = new java.util.Hashtable();
          for (var i = list.size(); --i >= 0; ) {
            var item = J.adapter.readers.pymol.PyMOLReader.listAt(list, i);
            if (item != null && item.size() > 0)
              map.put(
                J.adapter.readers.pymol.PyMOLReader.stringAt(item, 0),
                item,
              );
          }
          return map;
        },
        'JU.Lst',
      );
      c$.stringAt = Clazz_defineMethod(
        c$,
        'stringAt',
        function (list, i) {
          var o = list.get(i);
          if (Clazz_instanceOf(o, String)) return o;
          var a = list.get(i);
          return a.length == 0
            ? ' '
            : J.adapter.readers.pymol.PyMOLReader.bytesToString(a);
        },
        'JU.Lst,~N',
      );
      c$.bytesToString = Clazz_defineMethod(
        c$,
        'bytesToString',
        function (object) {
          try {
            return String.instantialize(object, 'UTF-8');
          } catch (e) {
            if (Clazz_exceptionOf(e, Exception)) {
              return object.toString();
            } else {
              throw e;
            }
          }
        },
        '~O',
      );
      c$.colorSettingClamped = Clazz_defineMethod(
        c$,
        'colorSettingClamped',
        function (c, ptTemp) {
          return J.adapter.readers.pymol.PyMOLReader.getColorPt(
            c.get(
              c.size() < 6 ||
                J.adapter.readers.pymol.PyMOLReader.intAt(c, 4) == 0
                ? 2
                : 5,
            ),
            ptTemp,
          );
        },
        'JU.Lst,JU.P3',
      );
      c$.getColorPt = Clazz_defineMethod(
        c$,
        'getColorPt',
        function (o, ptTemp) {
          return o == null
            ? 0
            : Clazz_instanceOf(o, Integer)
            ? o.intValue()
            : JU.CU.colorPtToFFRGB(
                J.adapter.readers.pymol.PyMOLReader.pointAt(o, 0, ptTemp),
              );
        },
        '~O,JU.P3',
      );
      c$.getMapList = Clazz_defineMethod(
        c$,
        'getMapList',
        function (map, key) {
          return map.get(key);
        },
        'java.util.Map,~S',
      );
      c$.getBsReps = Clazz_defineMethod(
        c$,
        'getBsReps',
        function (list) {
          if (list == null) return null;
          var bsReps = new JU.BS();
          var n = Math.min(list.size(), 21);
          for (var i = 0; i < n; i++) {
            if (J.adapter.readers.pymol.PyMOLReader.intAt(list, i) == 1)
              bsReps.set(i);
          }
          return bsReps;
        },
        'JU.Lst',
      );
      Clazz_overrideMethod(
        c$,
        'getUniqueID',
        function (iAtom) {
          return Clazz_floatToInt(this.atoms[iAtom].vib.x);
        },
        '~N',
      );
      Clazz_overrideMethod(
        c$,
        'getCartoonType',
        function (iAtom) {
          return Clazz_floatToInt(this.atoms[iAtom].vib.y);
        },
        '~N',
      );
      Clazz_overrideMethod(
        c$,
        'getVDW',
        function (iAtom) {
          return this.atoms[iAtom].radius;
        },
        '~N',
      );
      Clazz_overrideMethod(
        c$,
        'getSequenceNumber',
        function (iAtom) {
          return this.atoms[iAtom].sequenceNumber;
        },
        '~N',
      );
      Clazz_overrideMethod(
        c$,
        'compareAtoms',
        function (iPrev, i) {
          return this.atoms[iPrev].chainID != this.atoms[i].chainID;
        },
        '~N,~N',
      );
      Clazz_defineStatics(
        c$,
        'MIN_RESNO',
        -1000,
        'nucleic',
        ' A C G T U ADE THY CYT GUA URI DA DC DG DT DU ',
      );
    },
  );
})(
  Clazz,
  Clazz.getClassName,
  Clazz.newLongArray,
  Clazz.doubleToByte,
  Clazz.doubleToInt,
  Clazz.doubleToLong,
  Clazz.declarePackage,
  Clazz.instanceOf,
  Clazz.load,
  Clazz.instantialize,
  Clazz.decorateAsClass,
  Clazz.floatToInt,
  Clazz.floatToLong,
  Clazz.makeConstructor,
  Clazz.defineEnumConstant,
  Clazz.exceptionOf,
  Clazz.newIntArray,
  Clazz.defineStatics,
  Clazz.newFloatArray,
  Clazz.declareType,
  Clazz.prepareFields,
  Clazz.superConstructor,
  Clazz.newByteArray,
  Clazz.declareInterface,
  Clazz.p0p,
  Clazz.pu$h,
  Clazz.newShortArray,
  Clazz.innerTypeInstance,
  Clazz.isClassDefined,
  Clazz.prepareCallback,
  Clazz.newArray,
  Clazz.castNullAs,
  Clazz.floatToShort,
  Clazz.superCall,
  Clazz.decorateAsType,
  Clazz.newBooleanArray,
  Clazz.newCharArray,
  Clazz.implementOf,
  Clazz.newDoubleArray,
  Clazz.overrideConstructor,
  Clazz.clone,
  Clazz.doubleToShort,
  Clazz.getInheritedLevel,
  Clazz.getParamsType,
  Clazz.isAF,
  Clazz.isAB,
  Clazz.isAI,
  Clazz.isAS,
  Clazz.isASS,
  Clazz.isAP,
  Clazz.isAFloat,
  Clazz.isAII,
  Clazz.isAFF,
  Clazz.isAFFF,
  Clazz.tryToSearchAndExecute,
  Clazz.getStackTrace,
  Clazz.inheritArgs,
  Clazz.alert,
  Clazz.defineMethod,
  Clazz.overrideMethod,
  Clazz.declareAnonymous,
  //,Clazz.checkPrivateMethod
  Clazz.cloneFinals,
);
