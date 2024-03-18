import {
  createElement as createElement,
  Fragment as Fragment,
  lazy as lazy,
  Suspense as Suspense,
  useEffect as useEffect,
  useMemo as useMemo,
  useRef as useRef,
  useState as useState,
} from 'react'
import { flexRender as flexRender, useReactTable as useReactTable } from '@tanstack/react-table'
import { createRoot as createRoot } from 'react-dom/client'
import { QueryClientProvider as QueryClientProvider, useQuery as useQuery } from '@tanstack/react-query'
import {
  Body1 as Body1,
  Breadcrumb as Breadcrumb,
  BreadcrumbButton as BreadcrumbButton,
  BreadcrumbDivider as BreadcrumbDivider,
  BreadcrumbItem as BreadcrumbItem,
  Button as Button,
  Caption1 as Caption1,
  Card as Card,
  CardFooter as CardFooter,
  CardHeader as CardHeader,
  Dialog as Dialog,
  DialogBody as DialogBody,
  DialogContent as DialogContent,
  DialogSurface as DialogSurface,
  DialogTitle as DialogTitle,
  DialogTrigger as DialogTrigger,
  DrawerBody as DrawerBody,
  DrawerHeader as DrawerHeader,
  DrawerHeaderTitle as DrawerHeaderTitle,
  FluentProvider as FluentProvider,
  InlineDrawer as InlineDrawer,
  Skeleton as Skeleton,
  SkeletonItem as SkeletonItem,
  teamsLightTheme as teamsLightTheme,
  Title2 as Title2,
  Title3 as Title3,
} from '@fluentui/react-components'
import {
  Outlet as Outlet,
  RouterProvider as RouterProvider,
  useNavigate as useNavigate,
  useParams as useParams,
} from 'react-router'
import { QueryClient as QueryClient } from '@tanstack/query-core'
import { getCoreRowModel as getCoreRowModel, getExpandedRowModel as getExpandedRowModel } from '@tanstack/table-core'
import {
  ChevronDownRegular as ChevronDownRegular,
  ChevronRightRegular as ChevronRightRegular,
  Dismiss24Regular as Dismiss24Regular,
  GlobePersonRegular as GlobePersonRegular,
} from '@fluentui/react-icons'
import { css as css } from '@emotion/css'
import { createHashRouter as createHashRouter, Link as Link } from 'react-router-dom'
//region block: imports
var clz32 = Math.clz32;
var isView = ArrayBuffer.isView;
var imul = Math.imul;
var constructor = (class IteratorYieldResult {
    static [Symbol.hasInstance](instance) {
        return instance && (typeof instance === 'object') && (instance.done === false)
    }
    }.prototype).constructor;
//endregion
//region block: pre-declaration
class CharSequence {}
class Number_0 {}
class Unit {
  toString() {
    return 'kotlin.Unit';
  }
}
class IntCompanionObject {
  constructor() {
    this.MIN_VALUE = -2147483648;
    this.MAX_VALUE = 2147483647;
    this.SIZE_BYTES = 4;
    this.SIZE_BITS = 32;
  }
  b() {
    return this.MIN_VALUE;
  }
  c() {
    return this.MAX_VALUE;
  }
  d() {
    return this.SIZE_BYTES;
  }
  e() {
    return this.SIZE_BITS;
  }
}
class Collection {}
class AbstractCollection {
  static i() {
    return createThis(this);
  }
  n(element) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp;
      if (isInterface(this, Collection)) {
        tmp = this.p();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var tmp0_iterator = this.m();
      while (tmp0_iterator.t()) {
        var element_0 = tmp0_iterator.u();
        // Inline function 'kotlin.collections.AbstractCollection.contains.<anonymous>' call
        if (equals(element_0, element)) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    return tmp$ret$0;
  }
  o(elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.p();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.m();
      while (tmp0_iterator.t()) {
        var element = tmp0_iterator.u();
        // Inline function 'kotlin.collections.AbstractCollection.containsAll.<anonymous>' call
        if (!this.n(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  }
  p() {
    return this.l() === 0;
  }
  toString() {
    return joinToString_0(this, ', ', '[', ']', VOID, VOID, AbstractCollection$toString$lambda(this));
  }
  toArray() {
    return collectionToArray(this);
  }
}
class AbstractMutableCollection extends AbstractCollection {
  static h() {
    return this.i();
  }
  toJSON() {
    return this.toArray();
  }
  k() {
  }
}
class IteratorImpl {
  constructor($outer) {
    this.s_1 = $outer;
    this.q_1 = 0;
    this.r_1 = -1;
  }
  t() {
    return this.q_1 < this.s_1.l();
  }
  u() {
    if (!this.t())
      throw NoSuchElementException.y();
    var tmp = this;
    var tmp1 = this.q_1;
    this.q_1 = tmp1 + 1 | 0;
    tmp.r_1 = tmp1;
    return this.s_1.z(this.r_1);
  }
}
class List {}
class AbstractMutableList extends AbstractMutableCollection {
  static b1() {
    var $this = this.h();
    $this.a1_1 = 0;
    return $this;
  }
  j(element) {
    this.k();
    this.c1(this.l(), element);
    return true;
  }
  m() {
    return new IteratorImpl(this);
  }
  n(element) {
    return this.e1(element) >= 0;
  }
  e1(element) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.indexOfFirst' call
      var index = 0;
      var tmp0_iterator = this.m();
      while (tmp0_iterator.t()) {
        var item = tmp0_iterator.u();
        // Inline function 'kotlin.collections.AbstractMutableList.indexOf.<anonymous>' call
        if (equals(item, element)) {
          tmp$ret$1 = index;
          break $l$block;
        }
        index = index + 1 | 0;
      }
      tmp$ret$1 = -1;
    }
    return tmp$ret$1;
  }
  equals(other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, List) : false))
      return false;
    return Companion_instance_3.f1(this, other);
  }
  hashCode() {
    return Companion_instance_3.g1(this);
  }
}
class Set {}
class AbstractMutableSet extends AbstractMutableCollection {
  static h1() {
    return this.h();
  }
  equals(other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, Set) : false))
      return false;
    return Companion_instance_4.i1(this, other);
  }
  hashCode() {
    return Companion_instance_4.j1(this);
  }
}
class Companion {
  constructor() {
    Companion_instance = this;
    var tmp = this;
    // Inline function 'kotlin.also' call
    var this_0 = ArrayList.r1(0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.Companion.Empty.<anonymous>' call
    this_0.q1_1 = true;
    tmp.s1_1 = this_0;
  }
}
class ArrayList extends AbstractMutableList {
  static v1(array) {
    Companion_getInstance();
    var $this = this.b1();
    $this.p1_1 = array;
    $this.q1_1 = false;
    return $this;
  }
  static w1() {
    Companion_getInstance();
    // Inline function 'kotlin.emptyArray' call
    var tmp$ret$0 = [];
    return this.v1(tmp$ret$0);
  }
  static r1(initialCapacity) {
    Companion_getInstance();
    // Inline function 'kotlin.emptyArray' call
    var tmp$ret$0 = [];
    var $this = this.v1(tmp$ret$0);
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'kotlin.collections.ArrayList.<init>.<anonymous>' call
      var message = 'Negative initial capacity: ' + initialCapacity;
      throw IllegalArgumentException.n1(toString_1(message));
    }
    return $this;
  }
  static x1(elements) {
    Companion_getInstance();
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(elements);
    return this.v1(tmp$ret$0);
  }
  l() {
    return this.p1_1.length;
  }
  z(index) {
    var tmp = this.p1_1[rangeCheck(this, index)];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  }
  j(element) {
    this.k();
    // Inline function 'kotlin.js.asDynamic' call
    this.p1_1.push(element);
    this.a1_1 = this.a1_1 + 1 | 0;
    return true;
  }
  c1(index, element) {
    this.k();
    // Inline function 'kotlin.js.asDynamic' call
    this.p1_1.splice(insertionRangeCheck(this, index), 0, element);
    this.a1_1 = this.a1_1 + 1 | 0;
  }
  d1(index) {
    this.k();
    rangeCheck(this, index);
    this.a1_1 = this.a1_1 + 1 | 0;
    var tmp;
    if (index === get_lastIndex_0(this)) {
      // Inline function 'kotlin.js.asDynamic' call
      tmp = this.p1_1.pop();
    } else {
      // Inline function 'kotlin.js.asDynamic' call
      tmp = this.p1_1.splice(index, 1)[0];
    }
    return tmp;
  }
  e1(element) {
    return indexOf(this.p1_1, element);
  }
  toString() {
    return arrayToString(this.p1_1);
  }
  y1() {
    return [].slice.call(this.p1_1);
  }
  toArray() {
    return this.y1();
  }
  k() {
    if (this.q1_1)
      throw UnsupportedOperationException.c2();
  }
}
class HashSet extends AbstractMutableSet {
  static e2(map) {
    var $this = this.h1();
    init_kotlin_collections_HashSet($this);
    $this.d2_1 = map;
    return $this;
  }
  static f2() {
    return this.e2(InternalHashMap.q2());
  }
  static r2(initialCapacity, loadFactor) {
    return this.e2(InternalHashMap.s2(initialCapacity, loadFactor));
  }
  static t2(initialCapacity) {
    return this.r2(initialCapacity, 1.0);
  }
  j(element) {
    return this.d2_1.u2(element, true) == null;
  }
  n(element) {
    return this.d2_1.v2(element);
  }
  p() {
    return this.d2_1.l() === 0;
  }
  m() {
    return this.d2_1.w2();
  }
  l() {
    return this.d2_1.l();
  }
}
class Companion_0 {
  constructor() {
    this.h3_1 = -1640531527;
    this.i3_1 = 8;
    this.j3_1 = 2;
    this.k3_1 = -1;
  }
}
class Itr {
  constructor(map) {
    this.l3_1 = map;
    this.m3_1 = 0;
    this.n3_1 = -1;
    this.o3_1 = this.l3_1.n2_1;
    this.p3();
  }
  p3() {
    while (this.m3_1 < this.l3_1.l2_1 ? this.l3_1.i2_1[this.m3_1] < 0 : false) {
      this.m3_1 = this.m3_1 + 1 | 0;
    }
  }
  t() {
    return this.m3_1 < this.l3_1.l2_1;
  }
  q3() {
    if (!(this.l3_1.n2_1 === this.o3_1))
      throw ConcurrentModificationException.u3();
  }
}
class KeysItr extends Itr {
  u() {
    this.q3();
    if (this.m3_1 >= this.l3_1.l2_1)
      throw NoSuchElementException.y();
    var tmp = this;
    var tmp1 = this.m3_1;
    this.m3_1 = tmp1 + 1 | 0;
    tmp.n3_1 = tmp1;
    var result = this.l3_1.g2_1[this.n3_1];
    this.p3();
    return result;
  }
}
class EntriesItr extends Itr {
  u() {
    this.q3();
    if (this.m3_1 >= this.l3_1.l2_1)
      throw NoSuchElementException.y();
    var tmp = this;
    var tmp1 = this.m3_1;
    this.m3_1 = tmp1 + 1 | 0;
    tmp.n3_1 = tmp1;
    var result = new EntryRef(this.l3_1, this.n3_1);
    this.p3();
    return result;
  }
  d4() {
    if (this.m3_1 >= this.l3_1.l2_1)
      throw NoSuchElementException.y();
    var tmp = this;
    var tmp1 = this.m3_1;
    this.m3_1 = tmp1 + 1 | 0;
    tmp.n3_1 = tmp1;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.l3_1.g2_1[this.n3_1];
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp_0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = ensureNotNull(this.l3_1.h2_1)[this.n3_1];
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    var result = tmp_0 ^ (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0);
    this.p3();
    return result;
  }
  e4(sb) {
    if (this.m3_1 >= this.l3_1.l2_1)
      throw NoSuchElementException.y();
    var tmp = this;
    var tmp1 = this.m3_1;
    this.m3_1 = tmp1 + 1 | 0;
    tmp.n3_1 = tmp1;
    var key = this.l3_1.g2_1[this.n3_1];
    if (equals(key, this.l3_1)) {
      sb.h4('(this Map)');
    } else {
      sb.g4(key);
    }
    sb.i4(_Char___init__impl__6a9atx(61));
    var value = ensureNotNull(this.l3_1.h2_1)[this.n3_1];
    if (equals(value, this.l3_1)) {
      sb.h4('(this Map)');
    } else {
      sb.g4(value);
    }
    this.p3();
  }
}
class Entry {}
class EntryRef {
  constructor(map, index) {
    this.j4_1 = map;
    this.k4_1 = index;
  }
  l4() {
    return this.j4_1.g2_1[this.k4_1];
  }
  m4() {
    return ensureNotNull(this.j4_1.h2_1)[this.k4_1];
  }
  equals(other) {
    var tmp;
    var tmp_0;
    if (!(other == null) ? isInterface(other, Entry) : false) {
      tmp_0 = equals(other.l4(), this.l4());
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(other.m4(), this.m4());
    } else {
      tmp = false;
    }
    return tmp;
  }
  hashCode() {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.l4();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.m4();
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    return tmp ^ (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0);
  }
  toString() {
    return '' + this.l4() + '=' + this.m4();
  }
}
class InternalMap {}
function containsAllEntries(m) {
  var tmp$ret$0;
  $l$block_0: {
    // Inline function 'kotlin.collections.all' call
    var tmp;
    if (isInterface(m, Collection)) {
      tmp = m.p();
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$0 = true;
      break $l$block_0;
    }
    var tmp0_iterator = m.m();
    while (tmp0_iterator.t()) {
      var element = tmp0_iterator.u();
      // Inline function 'kotlin.collections.InternalMap.containsAllEntries.<anonymous>' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var entry = element;
      var tmp_0;
      if (!(entry == null) ? isInterface(entry, Entry) : false) {
        tmp_0 = this.s4(entry);
      } else {
        tmp_0 = false;
      }
      if (!tmp_0) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
    }
    tmp$ret$0 = true;
  }
  return tmp$ret$0;
}
class InternalHashMap {
  static n4(keysArray, valuesArray, presenceArray, hashArray, maxProbeDistance, length) {
    var $this = createThis(this);
    $this.g2_1 = keysArray;
    $this.h2_1 = valuesArray;
    $this.i2_1 = presenceArray;
    $this.j2_1 = hashArray;
    $this.k2_1 = maxProbeDistance;
    $this.l2_1 = length;
    $this.m2_1 = computeShift(Companion_instance_0, _get_hashSize__tftcho($this));
    $this.n2_1 = 0;
    $this.o2_1 = 0;
    $this.p2_1 = false;
    return $this;
  }
  l() {
    return this.o2_1;
  }
  static q2() {
    return this.o4(8);
  }
  static o4(initialCapacity) {
    return this.n4(arrayOfUninitializedElements(initialCapacity), null, new Int32Array(initialCapacity), new Int32Array(computeHashSize(Companion_instance_0, initialCapacity)), 2, 0);
  }
  static s2(initialCapacity, loadFactor) {
    var $this = this.o4(initialCapacity);
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(loadFactor > 0.0)) {
      // Inline function 'kotlin.collections.InternalHashMap.<init>.<anonymous>' call
      var message = 'Non-positive load factor: ' + loadFactor;
      throw IllegalArgumentException.n1(toString_1(message));
    }
    return $this;
  }
  v2(key) {
    return findKey(this, key) >= 0;
  }
  u2(key, value) {
    var index = addKey(this, key);
    var valuesArray = allocateValuesArray(this);
    if (index < 0) {
      var oldValue = valuesArray[(-index | 0) - 1 | 0];
      valuesArray[(-index | 0) - 1 | 0] = value;
      return oldValue;
    } else {
      valuesArray[index] = value;
      return null;
    }
  }
  equals(other) {
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      var tmp_0;
      if (!(other == null) ? isInterface(other, Map_0) : false) {
        tmp_0 = contentEquals(this, other);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  hashCode() {
    var result = 0;
    var it = this.p4();
    while (it.t()) {
      result = result + it.d4() | 0;
    }
    return result;
  }
  toString() {
    var sb = StringBuilder.q4(2 + imul(this.o2_1, 3) | 0);
    sb.h4('{');
    var i = 0;
    var it = this.p4();
    while (it.t()) {
      if (i > 0) {
        sb.h4(', ');
      }
      it.e4(sb);
      i = i + 1 | 0;
    }
    sb.h4('}');
    return sb.toString();
  }
  k() {
    if (this.p2_1)
      throw UnsupportedOperationException.c2();
  }
  r4(entry) {
    var index = findKey(this, entry.l4());
    if (index < 0)
      return false;
    return equals(ensureNotNull(this.h2_1)[index], entry.m4());
  }
  s4(entry) {
    return this.r4(isInterface(entry, Entry) ? entry : THROW_CCE());
  }
  w2() {
    return new KeysItr(this);
  }
  p4() {
    return new EntriesItr(this);
  }
}
class LinkedHashSet extends HashSet {
  static u4() {
    var $this = this.f2();
    init_kotlin_collections_LinkedHashSet($this);
    return $this;
  }
}
class Exception extends Error {
  static d9() {
    var $this = createThis(this);
    init_kotlin_Exception($this);
    setPropertiesToThrowableInstance($this);
    return $this;
  }
  static x7(message) {
    var $this = createThis(this);
    init_kotlin_Exception($this);
    setPropertiesToThrowableInstance($this, message);
    return $this;
  }
  static e9(message, cause) {
    var $this = createThis(this);
    init_kotlin_Exception($this);
    setPropertiesToThrowableInstance($this, message, cause);
    return $this;
  }
}
class RuntimeException extends Exception {
  static g9() {
    var $this = this.d9();
    init_kotlin_RuntimeException($this);
    return $this;
  }
  static z2(message) {
    var $this = this.x7(message);
    init_kotlin_RuntimeException($this);
    return $this;
  }
  static m9(message, cause) {
    var $this = this.e9(message, cause);
    init_kotlin_RuntimeException($this);
    return $this;
  }
}
class IllegalStateException extends RuntimeException {
  static a5() {
    var $this = this.g9();
    init_kotlin_IllegalStateException($this);
    return $this;
  }
  static e3(message) {
    var $this = this.z2(message);
    init_kotlin_IllegalStateException($this);
    return $this;
  }
  static c5(message, cause) {
    var $this = this.m9(message, cause);
    init_kotlin_IllegalStateException($this);
    return $this;
  }
}
class CancellationException extends IllegalStateException {
  static z4() {
    var $this = this.a5();
    init_kotlin_coroutines_cancellation_CancellationException($this);
    return $this;
  }
  static b5(message, cause) {
    var $this = this.c5(message, cause);
    init_kotlin_coroutines_cancellation_CancellationException($this);
    return $this;
  }
}
class KClass {}
class KClassImpl {
  constructor(jClass) {
    this.g5_1 = jClass;
  }
  h5() {
    return this.g5_1;
  }
  equals(other) {
    var tmp;
    if (other instanceof NothingKClassImpl) {
      tmp = false;
    } else {
      if (other instanceof ErrorKClass) {
        tmp = false;
      } else {
        if (other instanceof KClassImpl) {
          tmp = equals(this.h5(), other.h5());
        } else {
          tmp = false;
        }
      }
    }
    return tmp;
  }
  hashCode() {
    var tmp0_safe_receiver = this.f5();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getStringHashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  }
  toString() {
    return 'class ' + this.f5();
  }
}
class NothingKClassImpl extends KClassImpl {
  constructor() {
    NothingKClassImpl_instance = null;
    super(Object);
    NothingKClassImpl_instance = this;
    this.j5_1 = 'Nothing';
  }
  f5() {
    return this.j5_1;
  }
  h5() {
    throw UnsupportedOperationException.k5("There's no native JS class for Nothing type");
  }
  equals(other) {
    return other === this;
  }
  hashCode() {
    return 0;
  }
}
class ErrorKClass {
  f5() {
    var message = 'Unknown simpleName for ErrorKClass';
    throw IllegalStateException.e3(toString_1(message));
  }
  equals(other) {
    return other === this;
  }
  hashCode() {
    return 0;
  }
}
class PrimitiveKClassImpl extends KClassImpl {
  constructor(jClass, givenSimpleName, isInstanceFunction) {
    super(jClass);
    this.m5_1 = givenSimpleName;
    this.n5_1 = isInstanceFunction;
  }
  equals(other) {
    if (!(other instanceof PrimitiveKClassImpl))
      return false;
    return super.equals(other) ? this.m5_1 === other.m5_1 : false;
  }
  f5() {
    return this.m5_1;
  }
}
class SimpleKClassImpl extends KClassImpl {
  constructor(jClass) {
    super(jClass);
    var tmp = this;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver = jClass.$metadata$;
    tmp.p5_1 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.simpleName;
  }
  f5() {
    return this.p5_1;
  }
}
class KMutableProperty0 {}
class PrimitiveClasses {
  constructor() {
    PrimitiveClasses_instance = this;
    var tmp = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_0 = Object;
    tmp.anyClass = new PrimitiveKClassImpl(tmp_0, 'Any', PrimitiveClasses$anyClass$lambda);
    var tmp_1 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_2 = Number;
    tmp_1.numberClass = new PrimitiveKClassImpl(tmp_2, 'Number', PrimitiveClasses$numberClass$lambda);
    this.nothingClass = NothingKClassImpl_getInstance();
    var tmp_3 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_4 = Boolean;
    tmp_3.booleanClass = new PrimitiveKClassImpl(tmp_4, 'Boolean', PrimitiveClasses$booleanClass$lambda);
    var tmp_5 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_6 = Number;
    tmp_5.byteClass = new PrimitiveKClassImpl(tmp_6, 'Byte', PrimitiveClasses$byteClass$lambda);
    var tmp_7 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_8 = Number;
    tmp_7.shortClass = new PrimitiveKClassImpl(tmp_8, 'Short', PrimitiveClasses$shortClass$lambda);
    var tmp_9 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_10 = Number;
    tmp_9.intClass = new PrimitiveKClassImpl(tmp_10, 'Int', PrimitiveClasses$intClass$lambda);
    var tmp_11 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_12 = Number;
    tmp_11.floatClass = new PrimitiveKClassImpl(tmp_12, 'Float', PrimitiveClasses$floatClass$lambda);
    var tmp_13 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_14 = Number;
    tmp_13.doubleClass = new PrimitiveKClassImpl(tmp_14, 'Double', PrimitiveClasses$doubleClass$lambda);
    var tmp_15 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_16 = Array;
    tmp_15.arrayClass = new PrimitiveKClassImpl(tmp_16, 'Array', PrimitiveClasses$arrayClass$lambda);
    var tmp_17 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_18 = String;
    tmp_17.stringClass = new PrimitiveKClassImpl(tmp_18, 'String', PrimitiveClasses$stringClass$lambda);
    var tmp_19 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_20 = Error;
    tmp_19.throwableClass = new PrimitiveKClassImpl(tmp_20, 'Throwable', PrimitiveClasses$throwableClass$lambda);
    var tmp_21 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_22 = Array;
    tmp_21.booleanArrayClass = new PrimitiveKClassImpl(tmp_22, 'BooleanArray', PrimitiveClasses$booleanArrayClass$lambda);
    var tmp_23 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_24 = Uint16Array;
    tmp_23.charArrayClass = new PrimitiveKClassImpl(tmp_24, 'CharArray', PrimitiveClasses$charArrayClass$lambda);
    var tmp_25 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_26 = Int8Array;
    tmp_25.byteArrayClass = new PrimitiveKClassImpl(tmp_26, 'ByteArray', PrimitiveClasses$byteArrayClass$lambda);
    var tmp_27 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_28 = Int16Array;
    tmp_27.shortArrayClass = new PrimitiveKClassImpl(tmp_28, 'ShortArray', PrimitiveClasses$shortArrayClass$lambda);
    var tmp_29 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_30 = Int32Array;
    tmp_29.intArrayClass = new PrimitiveKClassImpl(tmp_30, 'IntArray', PrimitiveClasses$intArrayClass$lambda);
    var tmp_31 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_32 = Array;
    tmp_31.longArrayClass = new PrimitiveKClassImpl(tmp_32, 'LongArray', PrimitiveClasses$longArrayClass$lambda);
    var tmp_33 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_34 = Float32Array;
    tmp_33.floatArrayClass = new PrimitiveKClassImpl(tmp_34, 'FloatArray', PrimitiveClasses$floatArrayClass$lambda);
    var tmp_35 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_36 = Float64Array;
    tmp_35.doubleArrayClass = new PrimitiveKClassImpl(tmp_36, 'DoubleArray', PrimitiveClasses$doubleArrayClass$lambda);
  }
  q5() {
    return this.anyClass;
  }
  r5() {
    return this.numberClass;
  }
  s5() {
    return this.nothingClass;
  }
  t5() {
    return this.booleanClass;
  }
  u5() {
    return this.byteClass;
  }
  v5() {
    return this.shortClass;
  }
  w5() {
    return this.intClass;
  }
  x5() {
    return this.floatClass;
  }
  y5() {
    return this.doubleClass;
  }
  z5() {
    return this.arrayClass;
  }
  a6() {
    return this.stringClass;
  }
  b6() {
    return this.throwableClass;
  }
  c6() {
    return this.booleanArrayClass;
  }
  d6() {
    return this.charArrayClass;
  }
  e6() {
    return this.byteArrayClass;
  }
  f6() {
    return this.shortArrayClass;
  }
  g6() {
    return this.intArrayClass;
  }
  h6() {
    return this.longArrayClass;
  }
  i6() {
    return this.floatArrayClass;
  }
  j6() {
    return this.doubleArrayClass;
  }
  functionClass(arity) {
    var tmp0_elvis_lhs = get_functionClasses()[arity];
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.reflect.js.internal.PrimitiveClasses.functionClass.<anonymous>' call
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp_0 = Function;
      var tmp_1 = 'Function' + arity;
      var result = new PrimitiveKClassImpl(tmp_0, tmp_1, PrimitiveClasses$functionClass$lambda(arity));
      // Inline function 'kotlin.js.asDynamic' call
      get_functionClasses()[arity] = result;
      tmp = result;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
}
class StringBuilder {
  static k6(content) {
    var $this = createThis(this);
    $this.f4_1 = !(content === undefined) ? content : '';
    return $this;
  }
  static q4(capacity) {
    return this.l6();
  }
  static l6() {
    return this.k6('');
  }
  a() {
    // Inline function 'kotlin.js.asDynamic' call
    return this.f4_1.length;
  }
  i4(value) {
    this.f4_1 = this.f4_1 + toString(value);
    return this;
  }
  m6(value) {
    this.f4_1 = this.f4_1 + toString_0(value);
    return this;
  }
  g4(value) {
    this.f4_1 = this.f4_1 + toString_0(value);
    return this;
  }
  h4(value) {
    var tmp = this;
    var tmp_0 = this.f4_1;
    tmp.f4_1 = tmp_0 + (value == null ? 'null' : value);
    return this;
  }
  toString() {
    return this.f4_1;
  }
}
class Char {}
class Map_0 {}
class Companion_1 {}
class Enum {
  constructor(name, ordinal) {
    this.n6_1 = name;
    this.o6_1 = ordinal;
  }
  equals(other) {
    return this === other;
  }
  hashCode() {
    return identityHashCode(this);
  }
  toString() {
    return this.n6_1;
  }
}
class arrayIterator$1 {
  constructor($array) {
    this.q6_1 = $array;
    this.p6_1 = 0;
  }
  t() {
    return !(this.p6_1 === this.q6_1.length);
  }
  u() {
    var tmp;
    if (!(this.p6_1 === this.q6_1.length)) {
      var tmp1 = this.p6_1;
      this.p6_1 = tmp1 + 1 | 0;
      tmp = this.q6_1[tmp1];
    } else {
      throw NoSuchElementException.r6('' + this.p6_1);
    }
    return tmp;
  }
}
class Companion_2 {
  constructor() {
    Companion_instance_2 = this;
    this.i7_1 = new Long(0, -2147483648);
    this.j7_1 = new Long(-1, 2147483647);
    this.k7_1 = 8;
    this.l7_1 = 64;
  }
}
class Long extends Number_0 {
  constructor(low, high) {
    Companion_getInstance_2();
    super();
    this.m7_1 = low;
    this.n7_1 = high;
  }
  o7(other) {
    return compare(this, other);
  }
  p7(other) {
    return add(this, other);
  }
  q7(other) {
    return subtract(this, other);
  }
  r7(other) {
    return divide(this, other);
  }
  s7() {
    return this.t7().p7(new Long(1, 0));
  }
  t7() {
    return new Long(~this.m7_1, ~this.n7_1);
  }
  u7() {
    return this.m7_1;
  }
  v7() {
    return toNumber(this);
  }
  valueOf() {
    return this.v7();
  }
  equals(other) {
    var tmp;
    if (other instanceof Long) {
      tmp = equalsLong(this, other);
    } else {
      tmp = false;
    }
    return tmp;
  }
  hashCode() {
    return hashCode_0(this);
  }
  toString() {
    return toStringImpl(this, 10);
  }
}
class Continuation {}
class CoroutineImpl {
  constructor(resultContinuation, $box) {
    boxApply(this, $box);
    this.y7_1 = resultContinuation;
    this.z7_1 = 0;
    this.a8_1 = 0;
    this.b8_1 = null;
    this.c8_1 = null;
    this.d8_1 = null;
    var tmp = this;
    var tmp0_safe_receiver = this.y7_1;
    tmp.e8_1 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.g8();
    this.f8_1 = null;
  }
  g8() {
    return ensureNotNull(this.e8_1);
  }
  j8() {
    var tmp2_elvis_lhs = this.f8_1;
    var tmp;
    if (tmp2_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var tmp0_safe_receiver = this.g8().h8(Key_instance);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k8(this);
      var this_0 = tmp1_elvis_lhs == null ? this : tmp1_elvis_lhs;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.coroutines.CoroutineImpl.intercepted.<anonymous>' call
      this.f8_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp2_elvis_lhs;
    }
    return tmp;
  }
  l8(result) {
    var current = this;
    // Inline function 'kotlin.Result.getOrNull' call
    var tmp;
    if (_Result___get_isFailure__impl__jpiriv(result)) {
      tmp = null;
    } else {
      var tmp_0 = _Result___get_value__impl__bjfvqg(result);
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    }
    var currentResult = tmp;
    var currentException = Result__exceptionOrNull_impl_p6xea9(result);
    while (true) {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = current;
      if (currentException == null) {
        $this$with.b8_1 = currentResult;
      } else {
        $this$with.z7_1 = $this$with.a8_1;
        $this$with.c8_1 = currentException;
      }
      try {
        var outcome = $this$with.m8();
        if (outcome === get_COROUTINE_SUSPENDED())
          return Unit_instance;
        currentResult = outcome;
        currentException = null;
      } catch ($p) {
        var exception = $p;
        currentResult = null;
        // Inline function 'kotlin.js.unsafeCast' call
        currentException = exception;
      }
      releaseIntercepted($this$with);
      var completion = ensureNotNull($this$with.y7_1);
      var tmp_1;
      if (completion instanceof CoroutineImpl) {
        current = completion;
        tmp_1 = Unit_instance;
      } else {
        if (!(currentException == null)) {
          // Inline function 'kotlin.coroutines.resumeWithException' call
          // Inline function 'kotlin.Companion.failure' call
          var exception_0 = ensureNotNull(currentException);
          var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(exception_0));
          completion.n8(tmp$ret$2);
        } else {
          // Inline function 'kotlin.coroutines.resume' call
          // Inline function 'kotlin.Companion.success' call
          var value = currentResult;
          var tmp$ret$4 = _Result___init__impl__xyqfz8(value);
          completion.n8(tmp$ret$4);
        }
        return Unit_instance;
      }
    }
  }
  n8(result) {
    return this.l8(result);
  }
}
class CompletedContinuation {
  g8() {
    var message = 'This continuation is already complete';
    throw IllegalStateException.e3(toString_1(message));
  }
  l8(result) {
    // Inline function 'kotlin.error' call
    var message = 'This continuation is already complete';
    throw IllegalStateException.e3(toString_1(message));
  }
  n8(result) {
    return this.l8(result);
  }
  toString() {
    return 'This continuation is already complete';
  }
}
class _no_name_provided__qut3iv extends CoroutineImpl {
  constructor($completion, $this_createCoroutineUnintercepted, $receiver, $completion$1, $box) {
    if ($box === VOID)
      $box = {};
    $box.z8_1 = $this_createCoroutineUnintercepted;
    $box.a9_1 = $receiver;
    $box.b9_1 = $completion$1;
    super(isInterface($completion, Continuation) ? $completion : THROW_CCE(), $box);
  }
  m8() {
    if (this.c8_1 != null)
      throw this.c8_1;
    // Inline function 'kotlin.coroutines.intrinsics.createCoroutineUnintercepted.<anonymous>' call
    // Inline function 'kotlin.js.asDynamic' call
    var a = this.z8_1;
    return typeof a === 'function' ? a(this.a9_1, this.b9_1) : this.z8_1.c9(this.a9_1, this.b9_1);
  }
}
class IllegalArgumentException extends RuntimeException {
  static f9() {
    var $this = this.g9();
    init_kotlin_IllegalArgumentException($this);
    return $this;
  }
  static n1(message) {
    var $this = this.z2(message);
    init_kotlin_IllegalArgumentException($this);
    return $this;
  }
}
class IndexOutOfBoundsException extends RuntimeException {
  static k9() {
    var $this = this.g9();
    init_kotlin_IndexOutOfBoundsException($this);
    return $this;
  }
  static l9(message) {
    var $this = this.z2(message);
    init_kotlin_IndexOutOfBoundsException($this);
    return $this;
  }
}
class UnsupportedOperationException extends RuntimeException {
  static c2() {
    var $this = this.g9();
    init_kotlin_UnsupportedOperationException($this);
    return $this;
  }
  static k5(message) {
    var $this = this.z2(message);
    init_kotlin_UnsupportedOperationException($this);
    return $this;
  }
}
class NoSuchElementException extends RuntimeException {
  static y() {
    var $this = this.g9();
    init_kotlin_NoSuchElementException($this);
    return $this;
  }
  static r6(message) {
    var $this = this.z2(message);
    init_kotlin_NoSuchElementException($this);
    return $this;
  }
}
class Error_0 extends Error {
  static o9() {
    var $this = createThis(this);
    init_kotlin_Error($this);
    setPropertiesToThrowableInstance($this);
    return $this;
  }
  static p9(message) {
    var $this = createThis(this);
    init_kotlin_Error($this);
    setPropertiesToThrowableInstance($this, message);
    return $this;
  }
  static q9(message, cause) {
    var $this = createThis(this);
    init_kotlin_Error($this);
    setPropertiesToThrowableInstance($this, message, cause);
    return $this;
  }
}
class ConcurrentModificationException extends RuntimeException {
  static u3() {
    var $this = this.g9();
    init_kotlin_ConcurrentModificationException($this);
    return $this;
  }
}
class NullPointerException extends RuntimeException {
  static v6() {
    var $this = this.g9();
    init_kotlin_NullPointerException($this);
    return $this;
  }
}
class NoWhenBranchMatchedException extends RuntimeException {
  static z6() {
    var $this = this.g9();
    init_kotlin_NoWhenBranchMatchedException($this);
    return $this;
  }
}
class ClassCastException extends RuntimeException {
  static d7() {
    var $this = this.g9();
    init_kotlin_ClassCastException($this);
    return $this;
  }
}
class UninitializedPropertyAccessException extends RuntimeException {
  static r9() {
    var $this = this.g9();
    init_kotlin_UninitializedPropertyAccessException($this);
    return $this;
  }
  static h7(message) {
    var $this = this.z2(message);
    init_kotlin_UninitializedPropertyAccessException($this);
    return $this;
  }
}
class Companion_3 {
  constructor() {
    this.f_1 = 2147483639;
  }
  t1(index, size) {
    if (index < 0 ? true : index >= size) {
      throw IndexOutOfBoundsException.l9('index: ' + index + ', size: ' + size);
    }
  }
  u1(index, size) {
    if (index < 0 ? true : index > size) {
      throw IndexOutOfBoundsException.l9('index: ' + index + ', size: ' + size);
    }
  }
  g(fromIndex, toIndex, size) {
    if (fromIndex < 0 ? true : toIndex > size) {
      throw IndexOutOfBoundsException.l9('fromIndex: ' + fromIndex + ', toIndex: ' + toIndex + ', size: ' + size);
    }
    if (fromIndex > toIndex) {
      throw IllegalArgumentException.n1('fromIndex: ' + fromIndex + ' > toIndex: ' + toIndex);
    }
  }
  a3(oldCapacity, minCapacity) {
    var newCapacity = oldCapacity + (oldCapacity >> 1) | 0;
    if ((newCapacity - minCapacity | 0) < 0)
      newCapacity = minCapacity;
    if ((newCapacity - 2147483639 | 0) > 0)
      newCapacity = minCapacity > 2147483639 ? IntCompanionObject_instance.MAX_VALUE : 2147483639;
    return newCapacity;
  }
  g1(c) {
    var hashCode_0 = 1;
    var tmp0_iterator = c.m();
    while (tmp0_iterator.t()) {
      var e = tmp0_iterator.u();
      var tmp = imul(31, hashCode_0);
      var tmp2_elvis_lhs = e == null ? null : hashCode(e);
      hashCode_0 = tmp + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) | 0;
    }
    return hashCode_0;
  }
  f1(c, other) {
    if (!(c.l() === other.l()))
      return false;
    var otherIterator = other.m();
    var tmp0_iterator = c.m();
    while (tmp0_iterator.t()) {
      var elem = tmp0_iterator.u();
      var elemOther = otherIterator.u();
      if (!equals(elem, elemOther)) {
        return false;
      }
    }
    return true;
  }
}
class Companion_4 {
  j1(c) {
    var hashCode_0 = 0;
    var tmp0_iterator = c.m();
    while (tmp0_iterator.t()) {
      var element = tmp0_iterator.u();
      var tmp = hashCode_0;
      var tmp2_elvis_lhs = element == null ? null : hashCode(element);
      hashCode_0 = tmp + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) | 0;
    }
    return hashCode_0;
  }
  i1(c, other) {
    if (!(c.l() === other.l()))
      return false;
    // Inline function 'kotlin.collections.containsAll' call
    return c.o(other);
  }
}
class Companion_5 {
  constructor() {
    Companion_instance_5 = this;
    var tmp = this;
    // Inline function 'kotlin.emptyArray' call
    tmp.w9_1 = [];
    this.x9_1 = 10;
  }
}
class ArrayDeque extends AbstractMutableList {
  l() {
    return this.v9_1;
  }
  static y9() {
    Companion_getInstance_5();
    var $this = this.b1();
    init_kotlin_collections_ArrayDeque($this);
    $this.u9_1 = Companion_getInstance_5().w9_1;
    return $this;
  }
  p() {
    return this.v9_1 === 0;
  }
  z9(element) {
    ensureCapacity_0(this, this.v9_1 + 1 | 0);
    this.t9_1 = decremented(this, this.t9_1);
    this.u9_1[this.t9_1] = element;
    this.v9_1 = this.v9_1 + 1 | 0;
  }
  aa(element) {
    ensureCapacity_0(this, this.v9_1 + 1 | 0);
    var tmp = this.u9_1;
    // Inline function 'kotlin.collections.ArrayDeque.internalIndex' call
    var index = this.v9_1;
    tmp[positiveMod(this, this.t9_1 + index | 0)] = element;
    this.v9_1 = this.v9_1 + 1 | 0;
  }
  ba() {
    if (this.p())
      throw NoSuchElementException.r6('ArrayDeque is empty.');
    // Inline function 'kotlin.collections.ArrayDeque.internalGet' call
    var internalIndex = this.t9_1;
    var tmp = this.u9_1[internalIndex];
    var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    this.u9_1[this.t9_1] = null;
    this.t9_1 = incremented(this, this.t9_1);
    this.v9_1 = this.v9_1 - 1 | 0;
    return element;
  }
  ca() {
    return this.p() ? null : this.ba();
  }
  da() {
    if (this.p())
      throw NoSuchElementException.r6('ArrayDeque is empty.');
    // Inline function 'kotlin.collections.ArrayDeque.internalIndex' call
    var index = get_lastIndex_0(this);
    var internalLastIndex = positiveMod(this, this.t9_1 + index | 0);
    // Inline function 'kotlin.collections.ArrayDeque.internalGet' call
    var tmp = this.u9_1[internalLastIndex];
    var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    this.u9_1[internalLastIndex] = null;
    this.v9_1 = this.v9_1 - 1 | 0;
    return element;
  }
  j(element) {
    this.aa(element);
    return true;
  }
  c1(index, element) {
    Companion_instance_3.u1(index, this.v9_1);
    if (index === this.v9_1) {
      this.aa(element);
      return Unit_instance;
    } else if (index === 0) {
      this.z9(element);
      return Unit_instance;
    }
    ensureCapacity_0(this, this.v9_1 + 1 | 0);
    // Inline function 'kotlin.collections.ArrayDeque.internalIndex' call
    var internalIndex = positiveMod(this, this.t9_1 + index | 0);
    if (index < (this.v9_1 + 1 | 0) >> 1) {
      var decrementedInternalIndex = decremented(this, internalIndex);
      var decrementedHead = decremented(this, this.t9_1);
      if (decrementedInternalIndex >= this.t9_1) {
        this.u9_1[decrementedHead] = this.u9_1[this.t9_1];
        // Inline function 'kotlin.collections.copyInto' call
        var this_0 = this.u9_1;
        var destination = this.u9_1;
        var destinationOffset = this.t9_1;
        var startIndex = this.t9_1 + 1 | 0;
        var endIndex = decrementedInternalIndex + 1 | 0;
        arrayCopy(this_0, destination, destinationOffset, startIndex, endIndex);
      } else {
        // Inline function 'kotlin.collections.copyInto' call
        var this_1 = this.u9_1;
        var destination_0 = this.u9_1;
        var destinationOffset_0 = this.t9_1 - 1 | 0;
        var startIndex_0 = this.t9_1;
        var endIndex_0 = this.u9_1.length;
        arrayCopy(this_1, destination_0, destinationOffset_0, startIndex_0, endIndex_0);
        this.u9_1[this.u9_1.length - 1 | 0] = this.u9_1[0];
        // Inline function 'kotlin.collections.copyInto' call
        var this_2 = this.u9_1;
        var destination_1 = this.u9_1;
        var endIndex_1 = decrementedInternalIndex + 1 | 0;
        arrayCopy(this_2, destination_1, 0, 1, endIndex_1);
      }
      this.u9_1[decrementedInternalIndex] = element;
      this.t9_1 = decrementedHead;
    } else {
      // Inline function 'kotlin.collections.ArrayDeque.internalIndex' call
      var index_0 = this.v9_1;
      var tail = positiveMod(this, this.t9_1 + index_0 | 0);
      if (internalIndex < tail) {
        // Inline function 'kotlin.collections.copyInto' call
        var this_3 = this.u9_1;
        var destination_2 = this.u9_1;
        var destinationOffset_1 = internalIndex + 1 | 0;
        arrayCopy(this_3, destination_2, destinationOffset_1, internalIndex, tail);
      } else {
        // Inline function 'kotlin.collections.copyInto' call
        var this_4 = this.u9_1;
        var destination_3 = this.u9_1;
        arrayCopy(this_4, destination_3, 1, 0, tail);
        this.u9_1[0] = this.u9_1[this.u9_1.length - 1 | 0];
        // Inline function 'kotlin.collections.copyInto' call
        var this_5 = this.u9_1;
        var destination_4 = this.u9_1;
        var destinationOffset_2 = internalIndex + 1 | 0;
        var endIndex_2 = this.u9_1.length - 1 | 0;
        arrayCopy(this_5, destination_4, destinationOffset_2, internalIndex, endIndex_2);
      }
      this.u9_1[internalIndex] = element;
    }
    this.v9_1 = this.v9_1 + 1 | 0;
  }
  z(index) {
    Companion_instance_3.t1(index, this.v9_1);
    // Inline function 'kotlin.collections.ArrayDeque.internalGet' call
    // Inline function 'kotlin.collections.ArrayDeque.internalIndex' call
    var internalIndex = positiveMod(this, this.t9_1 + index | 0);
    var tmp = this.u9_1[internalIndex];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  }
  n(element) {
    return !(this.e1(element) === -1);
  }
  e1(element) {
    // Inline function 'kotlin.collections.ArrayDeque.internalIndex' call
    var index = this.v9_1;
    var tail = positiveMod(this, this.t9_1 + index | 0);
    if (this.t9_1 < tail) {
      var inductionVariable = this.t9_1;
      if (inductionVariable < tail)
        do {
          var index_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (equals(element, this.u9_1[index_0]))
            return index_0 - this.t9_1 | 0;
        }
         while (inductionVariable < tail);
    } else if (this.t9_1 >= tail) {
      var inductionVariable_0 = this.t9_1;
      var last = this.u9_1.length;
      if (inductionVariable_0 < last)
        do {
          var index_1 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          if (equals(element, this.u9_1[index_1]))
            return index_1 - this.t9_1 | 0;
        }
         while (inductionVariable_0 < last);
      var inductionVariable_1 = 0;
      if (inductionVariable_1 < tail)
        do {
          var index_2 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          if (equals(element, this.u9_1[index_2]))
            return (index_2 + this.u9_1.length | 0) - this.t9_1 | 0;
        }
         while (inductionVariable_1 < tail);
    }
    return -1;
  }
  d1(index) {
    Companion_instance_3.t1(index, this.v9_1);
    if (index === get_lastIndex_0(this)) {
      return this.da();
    } else if (index === 0) {
      return this.ba();
    }
    // Inline function 'kotlin.collections.ArrayDeque.internalIndex' call
    var internalIndex = positiveMod(this, this.t9_1 + index | 0);
    // Inline function 'kotlin.collections.ArrayDeque.internalGet' call
    var tmp = this.u9_1[internalIndex];
    var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    if (index < this.v9_1 >> 1) {
      if (internalIndex >= this.t9_1) {
        // Inline function 'kotlin.collections.copyInto' call
        var this_0 = this.u9_1;
        var destination = this.u9_1;
        var destinationOffset = this.t9_1 + 1 | 0;
        var startIndex = this.t9_1;
        arrayCopy(this_0, destination, destinationOffset, startIndex, internalIndex);
      } else {
        // Inline function 'kotlin.collections.copyInto' call
        var this_1 = this.u9_1;
        var destination_0 = this.u9_1;
        arrayCopy(this_1, destination_0, 1, 0, internalIndex);
        this.u9_1[0] = this.u9_1[this.u9_1.length - 1 | 0];
        // Inline function 'kotlin.collections.copyInto' call
        var this_2 = this.u9_1;
        var destination_1 = this.u9_1;
        var destinationOffset_0 = this.t9_1 + 1 | 0;
        var startIndex_0 = this.t9_1;
        var endIndex = this.u9_1.length - 1 | 0;
        arrayCopy(this_2, destination_1, destinationOffset_0, startIndex_0, endIndex);
      }
      this.u9_1[this.t9_1] = null;
      this.t9_1 = incremented(this, this.t9_1);
    } else {
      // Inline function 'kotlin.collections.ArrayDeque.internalIndex' call
      var index_0 = get_lastIndex_0(this);
      var internalLastIndex = positiveMod(this, this.t9_1 + index_0 | 0);
      if (internalIndex <= internalLastIndex) {
        // Inline function 'kotlin.collections.copyInto' call
        var this_3 = this.u9_1;
        var destination_2 = this.u9_1;
        var startIndex_1 = internalIndex + 1 | 0;
        var endIndex_0 = internalLastIndex + 1 | 0;
        arrayCopy(this_3, destination_2, internalIndex, startIndex_1, endIndex_0);
      } else {
        // Inline function 'kotlin.collections.copyInto' call
        var this_4 = this.u9_1;
        var destination_3 = this.u9_1;
        var startIndex_2 = internalIndex + 1 | 0;
        var endIndex_1 = this.u9_1.length;
        arrayCopy(this_4, destination_3, internalIndex, startIndex_2, endIndex_1);
        this.u9_1[this.u9_1.length - 1 | 0] = this.u9_1[0];
        // Inline function 'kotlin.collections.copyInto' call
        var this_5 = this.u9_1;
        var destination_4 = this.u9_1;
        var endIndex_2 = internalLastIndex + 1 | 0;
        arrayCopy(this_5, destination_4, 0, 1, endIndex_2);
      }
      this.u9_1[internalLastIndex] = null;
    }
    this.v9_1 = this.v9_1 - 1 | 0;
    return element;
  }
  ea(array) {
    var tmp = array.length >= this.v9_1 ? array : arrayOfNulls(array, this.v9_1);
    var dest = isArray(tmp) ? tmp : THROW_CCE();
    // Inline function 'kotlin.collections.ArrayDeque.internalIndex' call
    var index = this.v9_1;
    var tail = positiveMod(this, this.t9_1 + index | 0);
    if (this.t9_1 < tail) {
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = this.u9_1;
      var startIndex = this.t9_1;
      arrayCopy(this_0, dest, 0, startIndex, tail);
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!this.p()) {
        // Inline function 'kotlin.collections.copyInto' call
        var this_1 = this.u9_1;
        var startIndex_0 = this.t9_1;
        var endIndex = this.u9_1.length;
        arrayCopy(this_1, dest, 0, startIndex_0, endIndex);
        // Inline function 'kotlin.collections.copyInto' call
        var this_2 = this.u9_1;
        var destinationOffset = this.u9_1.length - this.t9_1 | 0;
        arrayCopy(this_2, dest, destinationOffset, 0, tail);
      }
    }
    var tmp_0 = terminateCollectionToArray(this.v9_1, dest);
    return isArray(tmp_0) ? tmp_0 : THROW_CCE();
  }
  y1() {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.v9_1;
    var tmp$ret$0 = fillArrayVal(Array(size), null);
    return this.ea(tmp$ret$0);
  }
  toArray() {
    return this.y1();
  }
}
class ArrayAsCollection {
  constructor(values, isVarargs) {
    this.fa_1 = values;
    this.ga_1 = isVarargs;
  }
  l() {
    return this.fa_1.length;
  }
  p() {
    // Inline function 'kotlin.collections.isEmpty' call
    return this.fa_1.length === 0;
  }
  ha(element) {
    return contains(this.fa_1, element);
  }
  ia(elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.p();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.m();
      while (tmp0_iterator.t()) {
        var element = tmp0_iterator.u();
        // Inline function 'kotlin.collections.ArrayAsCollection.containsAll.<anonymous>' call
        if (!this.ha(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  }
  o(elements) {
    return this.ia(elements);
  }
  m() {
    return arrayIterator(this.fa_1);
  }
}
class SequenceScope {}
class SequenceBuilderIterator extends SequenceScope {
  constructor() {
    super();
    this.ka_1 = 0;
    this.la_1 = null;
    this.ma_1 = null;
    this.na_1 = null;
  }
  t() {
    while (true) {
      switch (this.ka_1) {
        case 0:
          break;
        case 1:
          if (ensureNotNull(this.ma_1).t()) {
            this.ka_1 = 2;
            return true;
          } else {
            this.ma_1 = null;
          }

          break;
        case 4:
          return false;
        case 3:
        case 2:
          return true;
        default:
          throw exceptionalState(this);
      }
      this.ka_1 = 5;
      var step = ensureNotNull(this.na_1);
      this.na_1 = null;
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
      step.n8(tmp$ret$0);
    }
  }
  u() {
    switch (this.ka_1) {
      case 0:
      case 1:
        return nextNotReady(this);
      case 2:
        this.ka_1 = 1;
        return ensureNotNull(this.ma_1).u();
      case 3:
        this.ka_1 = 0;
        var tmp = this.la_1;
        var result = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
        this.la_1 = null;
        return result;
      default:
        throw exceptionalState(this);
    }
  }
  ja(value, $completion) {
    this.la_1 = value;
    this.ka_1 = 3;
    // Inline function 'kotlin.sequences.SequenceBuilderIterator.yield.<anonymous>' call
    this.na_1 = $completion;
    return get_COROUTINE_SUSPENDED();
  }
  oa(result) {
    // Inline function 'kotlin.getOrThrow' call
    throwOnFailure(result);
    var tmp = _Result___get_value__impl__bjfvqg(result);
    (tmp == null ? true : !(tmp == null)) || THROW_CCE();
    this.ka_1 = 4;
  }
  n8(result) {
    return this.oa(result);
  }
  g8() {
    return EmptyCoroutineContext_getInstance();
  }
}
class Key {}
class CoroutineContext {}
function plus(context) {
  var tmp;
  if (context === EmptyCoroutineContext_getInstance()) {
    tmp = this;
  } else {
    tmp = context.ua(this, CoroutineContext$plus$lambda);
  }
  return tmp;
}
class Element {}
function get(key) {
  var tmp;
  if (equals(this.l4(), key)) {
    tmp = isInterface(this, Element) ? this : THROW_CCE();
  } else {
    tmp = null;
  }
  return tmp;
}
function fold(initial, operation) {
  return operation(initial, this);
}
function minusKey(key) {
  return equals(this.l4(), key) ? EmptyCoroutineContext_getInstance() : this;
}
class ContinuationInterceptor {}
function releaseInterceptedContinuation(continuation) {
}
function get_0(key) {
  if (key instanceof AbstractCoroutineContextKey) {
    var tmp;
    if (key.sa(this.l4())) {
      var tmp_0 = key.ra(this);
      tmp = (!(tmp_0 == null) ? isInterface(tmp_0, Element) : false) ? tmp_0 : null;
    } else {
      tmp = null;
    }
    return tmp;
  }
  var tmp_1;
  if (Key_instance === key) {
    tmp_1 = isInterface(this, Element) ? this : THROW_CCE();
  } else {
    tmp_1 = null;
  }
  return tmp_1;
}
function minusKey_0(key) {
  if (key instanceof AbstractCoroutineContextKey) {
    return (key.sa(this.l4()) ? !(key.ra(this) == null) : false) ? EmptyCoroutineContext_getInstance() : this;
  }
  return Key_instance === key ? EmptyCoroutineContext_getInstance() : this;
}
class EmptyCoroutineContext {
  constructor() {
    EmptyCoroutineContext_instance = this;
    this.wa_1 = new Long(0, 0);
  }
  h8(key) {
    return null;
  }
  ua(initial, operation) {
    return initial;
  }
  va(context) {
    return context;
  }
  ta(key) {
    return this;
  }
  hashCode() {
    return 0;
  }
  toString() {
    return 'EmptyCoroutineContext';
  }
}
class CombinedContext {
  constructor(left, element) {
    this.xa_1 = left;
    this.ya_1 = element;
  }
  h8(key) {
    var cur = this;
    while (true) {
      var tmp0_safe_receiver = cur.ya_1.h8(key);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
      var next = cur.xa_1;
      if (next instanceof CombinedContext) {
        cur = next;
      } else {
        return next.h8(key);
      }
    }
  }
  ua(initial, operation) {
    return operation(this.xa_1.ua(initial, operation), this.ya_1);
  }
  ta(key) {
    if (this.ya_1.h8(key) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return this.xa_1;
    }
    var newLeft = this.xa_1.ta(key);
    return newLeft === this.xa_1 ? this : newLeft === EmptyCoroutineContext_getInstance() ? this.ya_1 : new CombinedContext(newLeft, this.ya_1);
  }
  equals(other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      if (other instanceof CombinedContext) {
        tmp_1 = size(other) === size(this);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = containsAll(other, this);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  hashCode() {
    return hashCode(this.xa_1) + hashCode(this.ya_1) | 0;
  }
  toString() {
    return '[' + this.ua('', CombinedContext$toString$lambda) + ']';
  }
}
class AbstractCoroutineContextKey {
  constructor(baseKey, safeCast) {
    this.pa_1 = safeCast;
    var tmp = this;
    var tmp_0;
    if (baseKey instanceof AbstractCoroutineContextKey) {
      tmp_0 = baseKey.qa_1;
    } else {
      tmp_0 = baseKey;
    }
    tmp.qa_1 = tmp_0;
  }
  ra(element) {
    return this.pa_1(element);
  }
  sa(key) {
    return key === this ? true : this.qa_1 === key;
  }
}
class AbstractCoroutineContextElement {
  constructor(key) {
    this.za_1 = key;
  }
  l4() {
    return this.za_1;
  }
}
class CoroutineSingletons extends Enum {}
class Companion_6 {}
class Failure {
  constructor(exception) {
    this.bb_1 = exception;
  }
  equals(other) {
    var tmp;
    if (other instanceof Failure) {
      tmp = equals(this.bb_1, other.bb_1);
    } else {
      tmp = false;
    }
    return tmp;
  }
  hashCode() {
    return hashCode(this.bb_1);
  }
  toString() {
    return 'Failure(' + this.bb_1 + ')';
  }
}
class NotImplementedError extends Error_0 {
  static q8(message) {
    message = message === VOID ? 'An operation is not implemented.' : message;
    var $this = this.p9(message);
    captureStack($this, $this.p8_1);
    return $this;
  }
}
class atomicfu$TraceBase {
  atomicfu$Trace$append$1(event) {
  }
  atomicfu$Trace$append$2(event1, event2) {
  }
  atomicfu$Trace$append$3(event1, event2, event3) {
  }
  atomicfu$Trace$append$4(event1, event2, event3, event4) {
  }
}
class None extends atomicfu$TraceBase {
  constructor() {
    None_instance = null;
    super();
    None_instance = this;
  }
}
class AtomicRef {
  constructor(value) {
    this.kotlinx$atomicfu$value = value;
  }
  cb(_set____db54di) {
    this.kotlinx$atomicfu$value = _set____db54di;
  }
  db() {
    return this.kotlinx$atomicfu$value;
  }
  atomicfu$compareAndSet(expect, update) {
    if (!(this.kotlinx$atomicfu$value === expect))
      return false;
    this.kotlinx$atomicfu$value = update;
    return true;
  }
  atomicfu$getAndSet(value) {
    var oldValue = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = value;
    return oldValue;
  }
  toString() {
    return toString_0(this.kotlinx$atomicfu$value);
  }
}
class AtomicBoolean {
  constructor(value) {
    this.kotlinx$atomicfu$value = value;
  }
  eb(_set____db54di) {
    this.kotlinx$atomicfu$value = _set____db54di;
  }
  db() {
    return this.kotlinx$atomicfu$value;
  }
  atomicfu$compareAndSet(expect, update) {
    if (!(this.kotlinx$atomicfu$value === expect))
      return false;
    this.kotlinx$atomicfu$value = update;
    return true;
  }
  atomicfu$getAndSet(value) {
    var oldValue = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = value;
    return oldValue;
  }
  toString() {
    return this.kotlinx$atomicfu$value.toString();
  }
}
class AtomicInt {
  constructor(value) {
    this.kotlinx$atomicfu$value = value;
  }
  fb(_set____db54di) {
    this.kotlinx$atomicfu$value = _set____db54di;
  }
  db() {
    return this.kotlinx$atomicfu$value;
  }
  atomicfu$compareAndSet(expect, update) {
    if (!(this.kotlinx$atomicfu$value === expect))
      return false;
    this.kotlinx$atomicfu$value = update;
    return true;
  }
  atomicfu$getAndSet(value) {
    var oldValue = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = value;
    return oldValue;
  }
  atomicfu$getAndIncrement() {
    var tmp1 = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = tmp1 + 1 | 0;
    return tmp1;
  }
  atomicfu$getAndDecrement() {
    var tmp1 = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = tmp1 - 1 | 0;
    return tmp1;
  }
  atomicfu$getAndAdd(delta) {
    var oldValue = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = this.kotlinx$atomicfu$value + delta | 0;
    return oldValue;
  }
  atomicfu$addAndGet(delta) {
    this.kotlinx$atomicfu$value = this.kotlinx$atomicfu$value + delta | 0;
    return this.kotlinx$atomicfu$value;
  }
  atomicfu$incrementAndGet() {
    this.kotlinx$atomicfu$value = this.kotlinx$atomicfu$value + 1 | 0;
    return this.kotlinx$atomicfu$value;
  }
  atomicfu$decrementAndGet() {
    this.kotlinx$atomicfu$value = this.kotlinx$atomicfu$value - 1 | 0;
    return this.kotlinx$atomicfu$value;
  }
  toString() {
    return this.kotlinx$atomicfu$value.toString();
  }
}
class Job {}
function cancel$default(cause, $super) {
  cause = cause === VOID ? null : cause;
  var tmp;
  if ($super === VOID) {
    this.rc(cause);
    tmp = Unit_instance;
  } else {
    tmp = $super.rc.call(this, cause);
  }
  return tmp;
}
function invokeOnCompletion$default(onCancelling, invokeImmediately, handler, $super) {
  onCancelling = onCancelling === VOID ? false : onCancelling;
  invokeImmediately = invokeImmediately === VOID ? true : invokeImmediately;
  return $super === VOID ? this.nc(onCancelling, invokeImmediately, handler) : $super.nc.call(this, onCancelling, invokeImmediately, handler);
}
class ParentJob {}
class JobSupport {
  constructor(active) {
    this.gb_1 = atomic$ref$1(active ? get_EMPTY_ACTIVE() : get_EMPTY_NEW());
    this.hb_1 = atomic$ref$1(null);
  }
  l4() {
    return Key_instance_2;
  }
  ec(value) {
    this.hb_1.kotlinx$atomicfu$value = value;
  }
  fc() {
    return this.hb_1.kotlinx$atomicfu$value;
  }
  ib(parent) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (parent == null) {
      this.ec(NonDisposableHandle_instance);
      return Unit_instance;
    }
    parent.ic();
    var handle = parent.yc(this);
    this.ec(handle);
    if (this.hc()) {
      handle.pd();
      this.ec(NonDisposableHandle_instance);
    }
  }
  gc() {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.gb_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.<get-state>.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (!(state instanceof OpDescriptor))
        return state;
      state.lh(this);
    }
  }
  nb() {
    var state = this.gc();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state.nb();
    } else {
      tmp = false;
    }
    return tmp;
  }
  hc() {
    var tmp = this.gc();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  }
  ic() {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.start.<anonymous>' call
      var state = this.gc();
      var tmp0_subject = startInternal(this, state);
      if (tmp0_subject === 0)
        return false;
      else if (tmp0_subject === 1)
        return true;
    }
  }
  jc() {
  }
  kc() {
    var state = this.gc();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.ug();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.lc(tmp0_safe_receiver, get_classSimpleName(this) + ' is cancelling');
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var message = 'Job is still new or active: ' + this;
        throw IllegalStateException.e3(toString_1(message));
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        var message_0 = 'Job is still new or active: ' + this;
        throw IllegalStateException.e3(toString_1(message_0));
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = this.mc(state.sb_1);
        } else {
          tmp = JobCancellationException.pg(get_classSimpleName(this) + ' has completed normally', null, this);
        }
      }
    }
    return tmp;
  }
  lc(_this__u8e3s4, message) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof CancellationException ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = JobCancellationException.pg(message == null ? this.qb() : message, _this__u8e3s4, this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  mc(_this__u8e3s4, message, $super) {
    message = message === VOID ? null : message;
    return $super === VOID ? this.lc(_this__u8e3s4, message) : $super.lc.call(this, _this__u8e3s4, message);
  }
  nc(onCancelling, invokeImmediately, handler) {
    var node = makeNode(this, handler, onCancelling);
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.invokeOnCompletion.<anonymous>' call
        var state = this.gc();
        if (state instanceof Empty) {
          if (state.if_1) {
            if (this.gb_1.atomicfu$compareAndSet(state, node))
              return node;
          } else {
            promoteEmptyToNodeList(this, state);
          }
        } else {
          if (!(state == null) ? isInterface(state, Incomplete) : false) {
            var list = state.jf();
            if (list == null) {
              promoteSingleToNodeList(this, state instanceof JobNode ? state : THROW_CCE());
            } else {
              var rootCause = null;
              var handle = NonDisposableHandle_instance;
              var tmp;
              if (onCancelling) {
                tmp = state instanceof Finishing;
              } else {
                tmp = false;
              }
              if (tmp) {
                // Inline function 'kotlinx.coroutines.internal.synchronized' call
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
                rootCause = state.ug();
                var tmp_0;
                var tmp_1;
                if (rootCause == null) {
                  tmp_1 = true;
                } else {
                  var tmp_2;
                  // Inline function 'kotlinx.coroutines.isHandlerOf' call
                  if (handler instanceof ChildHandleNode) {
                    tmp_2 = !state.rg();
                  } else {
                    tmp_2 = false;
                  }
                  tmp_1 = tmp_2;
                }
                if (tmp_1) {
                  if (!addLastAtomic(this, state, list, node)) {
                    break $l$block;
                  }
                  if (rootCause == null)
                    return node;
                  handle = node;
                  tmp_0 = Unit_instance;
                }
              }
              if (!(rootCause == null)) {
                if (invokeImmediately) {
                  invokeIt(handler, rootCause);
                }
                return handle;
              } else {
                if (addLastAtomic(this, state, list, node))
                  return node;
              }
            }
          } else {
            if (invokeImmediately) {
              var tmp1_safe_receiver = state instanceof CompletedExceptionally ? state : null;
              invokeIt(handler, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.sb_1);
            }
            return NonDisposableHandle_instance;
          }
        }
      }
    }
  }
  pc(node) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.removeNode.<anonymous>' call
      var state = this.gc();
      if (state instanceof JobNode) {
        if (!(state === node))
          return Unit_instance;
        if (this.gb_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
          return Unit_instance;
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          if (!(state.jf() == null)) {
            node.uf();
          }
          return Unit_instance;
        } else {
          return Unit_instance;
        }
      }
    }
  }
  qc() {
    return false;
  }
  rc(cause) {
    var tmp;
    if (cause == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = JobCancellationException.pg(null == null ? this.qb() : null, null, this);
    } else {
      tmp = cause;
    }
    this.tc(tmp);
  }
  qb() {
    return 'Job was cancelled';
  }
  tc(cause) {
    this.wc(cause);
  }
  uc(parentJob) {
    this.wc(parentJob);
  }
  vc(cause) {
    if (cause instanceof CancellationException)
      return true;
    return this.wc(cause) ? this.bd() : false;
  }
  wc(cause) {
    var finalState = get_COMPLETING_ALREADY();
    if (this.qc()) {
      finalState = cancelMakeCompleting(this, cause);
      if (finalState === get_COMPLETING_WAITING_CHILDREN())
        return true;
    }
    if (finalState === get_COMPLETING_ALREADY()) {
      finalState = makeCancelling(this, cause);
    }
    var tmp;
    if (finalState === get_COMPLETING_ALREADY()) {
      tmp = true;
    } else if (finalState === get_COMPLETING_WAITING_CHILDREN()) {
      tmp = true;
    } else if (finalState === get_TOO_LATE_TO_CANCEL()) {
      tmp = false;
    } else {
      this.xb(finalState);
      tmp = true;
    }
    return tmp;
  }
  xc() {
    var state = this.gc();
    var tmp;
    if (state instanceof Finishing) {
      tmp = state.ug();
    } else {
      if (state instanceof CompletedExceptionally) {
        tmp = state.sb_1;
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          var message = 'Cannot be cancelling child in this state: ' + toString_0(state);
          throw IllegalStateException.e3(toString_1(message));
        } else {
          tmp = null;
        }
      }
    }
    var rootCause = tmp;
    var tmp1_elvis_lhs = rootCause instanceof CancellationException ? rootCause : null;
    return tmp1_elvis_lhs == null ? JobCancellationException.pg('Parent job is ' + stateString(this, state), rootCause, this) : tmp1_elvis_lhs;
  }
  vb(proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCompletingOnce.<anonymous>' call
        var state = this.gc();
        var finalState = tryMakeCompleting(this, state, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          throw IllegalStateException.c5('Job ' + this + ' is already complete or completing, ' + ('but is being completed with ' + toString_0(proposedUpdate)), _get_exceptionOrNull__b3j7js(proposedUpdate, this));
        else if (finalState === get_COMPLETING_RETRY()) {
          break $l$block;
        } else
          return finalState;
      }
    }
  }
  yc(child) {
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new ChildHandleNode(child);
    var tmp = this.oc(true, VOID, tmp$ret$1);
    return isInterface(tmp, ChildHandle) ? tmp : THROW_CCE();
  }
  yb(exception) {
    throw exception;
  }
  zc(cause) {
  }
  ad() {
    return false;
  }
  bd() {
    return true;
  }
  cd(exception) {
    return false;
  }
  rb(state) {
  }
  xb(state) {
  }
  toString() {
    return this.dd() + '@' + get_hexAddress(this);
  }
  dd() {
    return this.zb() + '{' + stateString(this, this.gc()) + '}';
  }
  zb() {
    return get_classSimpleName(this);
  }
}
class CoroutineScope {}
class AbstractCoroutine extends JobSupport {
  constructor(parentContext, initParentJob, active) {
    super(active);
    if (initParentJob) {
      this.ib(parentContext.h8(Key_instance_2));
    }
    this.lb_1 = parentContext.va(this);
  }
  g8() {
    return this.lb_1;
  }
  mb() {
    return this.lb_1;
  }
  nb() {
    return super.nb();
  }
  ob(value) {
  }
  pb(cause, handled) {
  }
  qb() {
    return get_classSimpleName(this) + ' was cancelled';
  }
  rb(state) {
    if (state instanceof CompletedExceptionally) {
      this.pb(state.sb_1, state.ub());
    } else {
      this.ob((state == null ? true : !(state == null)) ? state : THROW_CCE());
    }
  }
  n8(result) {
    var state = this.vb(toState(result));
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return Unit_instance;
    this.wb(state);
  }
  wb(state) {
    return this.xb(state);
  }
  yb(exception) {
    handleCoroutineException(this.lb_1, exception);
  }
  zb() {
    var tmp0_elvis_lhs = get_coroutineName(this.lb_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return super.zb();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var coroutineName = tmp;
    return '"' + coroutineName + '":' + super.zb();
  }
  ac(start, receiver, block) {
    start.dc(block, receiver, this);
  }
}
class StandaloneCoroutine extends AbstractCoroutine {
  constructor(parentContext, active) {
    super(parentContext, true, active);
  }
  cd(exception) {
    handleCoroutineException(this.lb_1, exception);
    return true;
  }
}
class LazyStandaloneCoroutine extends StandaloneCoroutine {
  constructor(parentContext, block) {
    super(parentContext, false);
    this.ld_1 = createCoroutineUnintercepted(block, this, this);
  }
  jc() {
    startCoroutineCancellable(this.ld_1, this);
  }
}
class Runnable {}
class SchedulerTask {}
class DispatchedTask extends SchedulerTask {
  constructor(resumeMode) {
    super();
    this.oe_1 = resumeMode;
  }
  si(takenState, cause) {
  }
  ti(state) {
    return (state == null ? true : !(state == null)) ? state : THROW_CCE();
  }
  ui(state) {
    var tmp0_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.sb_1;
  }
  pe() {
    // Inline function 'kotlinx.coroutines.assert' call
    var taskContext = get_taskContext(this);
    var fatalException = null;
    try {
      var tmp = this.qi();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate.yd_1;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      delegate.ae_1;
      var context = continuation.g8();
      var state = this.pi();
      var exception = this.ui(state);
      var job = (exception == null ? get_isCancellableMode(this.oe_1) : false) ? context.h8(Key_instance_2) : null;
      var tmp_0;
      if (!(job == null) ? !job.nb() : false) {
        var cause = job.kc();
        this.si(state, cause);
        // Inline function 'kotlin.Companion.failure' call
        var exception_0 = recoverStackTrace(cause, continuation);
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception_0));
        continuation.n8(tmp$ret$0);
        tmp_0 = Unit_instance;
      } else {
        var tmp_1;
        if (!(exception == null)) {
          // Inline function 'kotlin.coroutines.resumeWithException' call
          // Inline function 'kotlin.Companion.failure' call
          var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
          continuation.n8(tmp$ret$1);
          tmp_1 = Unit_instance;
        } else {
          // Inline function 'kotlin.coroutines.resume' call
          // Inline function 'kotlin.Companion.success' call
          var value = this.ti(state);
          var tmp$ret$3 = _Result___init__impl__xyqfz8(value);
          continuation.n8(tmp$ret$3);
          tmp_1 = Unit_instance;
        }
        tmp_0 = tmp_1;
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        fatalException = e;
      } else {
        throw $p;
      }
    }
    finally {
      // Inline function 'kotlin.runCatching' call
      var tmp_2;
      try {
        // Inline function 'kotlin.Companion.success' call
        // Inline function 'kotlinx.coroutines.DispatchedTask.run.<anonymous>' call
        // Inline function 'kotlinx.coroutines.afterTask' call
        tmp_2 = _Result___init__impl__xyqfz8(Unit_instance);
      } catch ($p) {
        var tmp_3;
        if ($p instanceof Error) {
          var e_0 = $p;
          // Inline function 'kotlin.Companion.failure' call
          tmp_3 = _Result___init__impl__xyqfz8(createFailure(e_0));
        } else {
          throw $p;
        }
        tmp_2 = tmp_3;
      }
      var result = tmp_2;
      this.ri(fatalException, Result__exceptionOrNull_impl_p6xea9(result));
    }
  }
  ri(exception, finallyException) {
    if (exception === null ? finallyException === null : false)
      return Unit_instance;
    if (!(exception === null) ? !(finallyException === null) : false) {
      addSuppressed(exception, finallyException);
    }
    var cause = exception == null ? finallyException : exception;
    var reason = CoroutinesInternalError.hf('Fatal exception in coroutines machinery for ' + this + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", ensureNotNull(cause));
    handleCoroutineException(this.qi().g8(), reason);
  }
}
class CancellableContinuationImpl extends DispatchedTask {
  od() {
    var tmp0_elvis_lhs = _get_parentHandle__f8dcex(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    handle.pd();
    this.nd_1.kotlinx$atomicfu$value = NonDisposableHandle_instance;
  }
}
class CompletedExceptionally {
  constructor(cause, handled) {
    handled = handled === VOID ? false : handled;
    this.sb_1 = cause;
    this.tb_1 = atomic$boolean$1(handled);
  }
  ub() {
    return this.tb_1.kotlinx$atomicfu$value;
  }
  qd() {
    return this.tb_1.atomicfu$compareAndSet(false, true);
  }
  toString() {
    return get_classSimpleName(this) + '[' + this.sb_1 + ']';
  }
}
class CompletedWithCancellation {
  constructor(result, onCancellation) {
    this.rd_1 = result;
    this.sd_1 = onCancellation;
  }
  toString() {
    return 'CompletedWithCancellation(result=' + toString_0(this.rd_1) + ', onCancellation=' + this.sd_1 + ')';
  }
  hashCode() {
    var result = this.rd_1 == null ? 0 : hashCode(this.rd_1);
    result = imul(result, 31) + hashCode(this.sd_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedWithCancellation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedWithCancellation ? other : THROW_CCE();
    if (!equals(this.rd_1, tmp0_other_with_cast.rd_1))
      return false;
    if (!equals(this.sd_1, tmp0_other_with_cast.sd_1))
      return false;
    return true;
  }
}
class Key_0 extends AbstractCoroutineContextKey {
  constructor() {
    Key_instance_0 = null;
    var tmp = Key_instance;
    super(tmp, CoroutineDispatcher$Key$_init_$lambda_akl8b5);
    Key_instance_0 = this;
  }
}
class CoroutineDispatcher extends AbstractCoroutineContextElement {
  constructor() {
    Key_getInstance_0();
    super(Key_instance);
  }
  ud(context) {
    return true;
  }
  k8(continuation) {
    return new DispatchedContinuation(this, continuation);
  }
  i8(continuation) {
    var dispatched = continuation instanceof DispatchedContinuation ? continuation : THROW_CCE();
    dispatched.ce();
  }
  toString() {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  }
}
class Key_1 {}
class CoroutineStart extends Enum {
  dc(block, receiver, completion) {
    var tmp;
    switch (this.o6_1) {
      case 0:
        startCoroutineCancellable_0(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 2:
        startCoroutine(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 3:
        startCoroutineUndispatched(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 1:
        tmp = Unit_instance;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  ed() {
    return this === CoroutineStart_LAZY_getInstance();
  }
}
class EventLoop extends CoroutineDispatcher {
  constructor() {
    super();
    this.ke_1 = new Long(0, 0);
    this.le_1 = false;
    this.me_1 = null;
  }
  ne() {
    var tmp0_elvis_lhs = this.me_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.ca();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.pe();
    return true;
  }
  qe(task) {
    var tmp0_elvis_lhs = this.me_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = ArrayDeque.y9();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.EventLoop.dispatchUnconfined.<anonymous>' call
      this.me_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.aa(task);
  }
  re() {
    return this.ke_1.o7(delta(this, true)) >= 0;
  }
  se() {
    var tmp0_safe_receiver = this.me_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  }
  te(unconfined) {
    this.ke_1 = this.ke_1.p7(delta(this, unconfined));
    if (!unconfined)
      this.le_1 = true;
  }
  ue(unconfined) {
    this.ke_1 = this.ke_1.q7(delta(this, unconfined));
    if (this.ke_1.o7(new Long(0, 0)) > 0)
      return Unit_instance;
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.le_1) {
      this.ve();
    }
  }
  ve() {
  }
}
class ThreadLocalEventLoop {
  constructor() {
    ThreadLocalEventLoop_instance = this;
    this.we_1 = commonThreadLocal(new Symbol_0('ThreadLocalEventLoop'));
  }
  xe() {
    var tmp0_elvis_lhs = this.we_1.ze();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = createEventLoop();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.ThreadLocalEventLoop.<get-eventLoop>.<anonymous>' call
      ThreadLocalEventLoop_getInstance().we_1.af(this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
}
class CompletionHandlerException extends RuntimeException {
  static ef(message, cause) {
    var $this = this.m9(message, cause);
    captureStack($this, $this.df_1);
    return $this;
  }
}
class CoroutinesInternalError extends Error_0 {
  static hf(message, cause) {
    var $this = this.q9(message, cause);
    captureStack($this, $this.gf_1);
    return $this;
  }
}
class Key_2 {}
class ChildHandle {}
class NonDisposableHandle {
  pd() {
  }
  vc(cause) {
    return false;
  }
  toString() {
    return 'NonDisposableHandle';
  }
}
class Incomplete {}
class Empty {
  constructor(isActive) {
    this.if_1 = isActive;
  }
  nb() {
    return this.if_1;
  }
  jf() {
    return null;
  }
  toString() {
    return 'Empty{' + (this.if_1 ? 'Active' : 'New') + '}';
  }
}
class LinkedListNode {
  constructor() {
    this.of_1 = this;
    this.pf_1 = this;
    this.qf_1 = false;
  }
  vf(node) {
    var prev = this.pf_1;
    node.of_1 = this;
    node.pf_1 = prev;
    prev.of_1 = node;
    this.pf_1 = node;
  }
  uf() {
    return this.wf();
  }
  pd() {
    this.uf();
  }
  wf() {
    if (this.qf_1)
      return false;
    var prev = this.pf_1;
    var next = this.of_1;
    prev.of_1 = next;
    next.pf_1 = prev;
    this.qf_1 = true;
    return true;
  }
  cg(node) {
    if (!(this.of_1 === this))
      return false;
    this.vf(node);
    return true;
  }
}
class LinkedListHead extends LinkedListNode {
  uf() {
    throw UnsupportedOperationException.c2();
  }
}
class NodeList extends LinkedListHead {
  nb() {
    return true;
  }
  jf() {
    return this;
  }
  nf(state) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder.l6();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>' call
    this_0.h4('List{');
    this_0.h4(state);
    this_0.h4('}[');
    var first = true;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = this.of_1;
    while (!equals(cur, this)) {
      if (cur instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>.<anonymous>' call
        var node = cur;
        if (first)
          first = false;
        else {
          this_0.h4(', ');
        }
        this_0.g4(node);
      }
      cur = cur.of_1;
    }
    this_0.h4(']');
    return this_0.toString();
  }
  toString() {
    return get_DEBUG() ? this.nf('Active') : super.toString();
  }
}
class CompletionHandlerBase extends LinkedListNode {}
class JobNode extends CompletionHandlerBase {
  bg() {
    var tmp = this.ag_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('job');
    }
  }
  nb() {
    return true;
  }
  jf() {
    return null;
  }
  pd() {
    return this.bg().pc(this);
  }
  toString() {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '[job@' + get_hexAddress(this.bg()) + ']';
  }
}
class SynchronizedObject {}
class Finishing extends SynchronizedObject {
  constructor(list, isCompleting, rootCause) {
    super();
    this.dg_1 = list;
    this.eg_1 = atomic$boolean$1(isCompleting);
    this.fg_1 = atomic$ref$1(rootCause);
    this.gg_1 = atomic$ref$1(null);
  }
  jf() {
    return this.dg_1;
  }
  vg(value) {
    this.eg_1.kotlinx$atomicfu$value = value;
  }
  rg() {
    return this.eg_1.kotlinx$atomicfu$value;
  }
  bh(value) {
    this.fg_1.kotlinx$atomicfu$value = value;
  }
  ug() {
    return this.fg_1.kotlinx$atomicfu$value;
  }
  sg() {
    return _get_exceptionsHolder__nhszp(this) === get_SEALED();
  }
  hg() {
    return !(this.ug() == null);
  }
  nb() {
    return this.ug() == null;
  }
  ig(proposedException) {
    var eh = _get_exceptionsHolder__nhszp(this);
    var tmp;
    if (eh == null) {
      tmp = allocateList(this);
    } else {
      if (eh instanceof Error) {
        // Inline function 'kotlin.also' call
        var this_0 = allocateList(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.Finishing.sealLocked.<anonymous>' call
        this_0.j(eh);
        tmp = this_0;
      } else {
        if (eh instanceof ArrayList) {
          tmp = eh instanceof ArrayList ? eh : THROW_CCE();
        } else {
          var message = 'State is ' + toString_0(eh);
          throw IllegalStateException.e3(toString_1(message));
        }
      }
    }
    var list = tmp;
    var rootCause = this.ug();
    if (rootCause == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      list.c1(0, rootCause);
    }
    if (!(proposedException == null) ? !equals(proposedException, rootCause) : false) {
      list.j(proposedException);
    }
    _set_exceptionsHolder__tqm22h(this, get_SEALED());
    return list;
  }
  tg(exception) {
    var rootCause = this.ug();
    if (rootCause == null) {
      this.bh(exception);
      return Unit_instance;
    }
    if (exception === rootCause)
      return Unit_instance;
    var eh = _get_exceptionsHolder__nhszp(this);
    if (eh == null) {
      _set_exceptionsHolder__tqm22h(this, exception);
    } else {
      if (eh instanceof Error) {
        if (exception === eh)
          return Unit_instance;
        // Inline function 'kotlin.apply' call
        var this_0 = allocateList(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.Finishing.addExceptionLocked.<anonymous>' call
        this_0.j(eh);
        this_0.j(exception);
        _set_exceptionsHolder__tqm22h(this, this_0);
      } else {
        if (eh instanceof ArrayList) {
          (eh instanceof ArrayList ? eh : THROW_CCE()).j(exception);
        } else {
          var message = 'State is ' + toString_0(eh);
          throw IllegalStateException.e3(toString_1(message));
        }
      }
    }
  }
  toString() {
    return 'Finishing[cancelling=' + this.hg() + ', completing=' + this.rg() + ', rootCause=' + this.ug() + ', exceptions=' + toString_0(_get_exceptionsHolder__nhszp(this)) + ', list=' + this.dg_1 + ']';
  }
}
class ChildCompletion extends JobNode {
  constructor(parent, state, child, proposedUpdate) {
    super();
    this.gh_1 = parent;
    this.hh_1 = state;
    this.ih_1 = child;
    this.jh_1 = proposedUpdate;
  }
  kh(cause) {
    continueCompleting(this.gh_1, this.hh_1, this.ih_1, this.jh_1);
  }
  invoke(cause) {
    return this.kh(cause);
  }
}
class JobCancellingNode extends JobNode {}
class InactiveNodeList {
  constructor(list) {
    this.qg_1 = list;
  }
  jf() {
    return this.qg_1;
  }
  nb() {
    return false;
  }
  toString() {
    return get_DEBUG() ? this.qg_1.nf('New') : anyToString(this);
  }
}
class ChildHandleNode extends JobCancellingNode {
  constructor(childJob) {
    super();
    this.ah_1 = childJob;
  }
  kh(cause) {
    return this.ah_1.uc(this.bg());
  }
  invoke(cause) {
    return this.kh(cause);
  }
  vc(cause) {
    return this.bg().vc(cause);
  }
}
class InvokeOnCancelling extends JobCancellingNode {
  constructor(handler) {
    super();
    this.qh_1 = handler;
    this.rh_1 = atomic$int$1(0);
  }
  kh(cause) {
    if (this.rh_1.atomicfu$compareAndSet(0, 1))
      this.qh_1(cause);
  }
  invoke(cause) {
    return this.kh(cause);
  }
}
class InvokeOnCompletion extends JobNode {
  constructor(handler) {
    super();
    this.wh_1 = handler;
  }
  kh(cause) {
    return this.wh_1(cause);
  }
  invoke(cause) {
    return this.kh(cause);
  }
}
class IncompleteStateBox {
  constructor(state) {
    this.xh_1 = state;
  }
}
class JobImpl extends JobSupport {
  constructor(parent) {
    super(true);
    this.ib(parent);
    this.ai_1 = handlesException(this);
  }
  qc() {
    return true;
  }
  bd() {
    return this.ai_1;
  }
}
class MainCoroutineDispatcher extends CoroutineDispatcher {
  toString() {
    var tmp0_elvis_lhs = this.di();
    return tmp0_elvis_lhs == null ? get_classSimpleName(this) + '@' + get_hexAddress(this) : tmp0_elvis_lhs;
  }
  di() {
    var main = Dispatchers_getInstance().ie();
    if (this === main)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main.ci();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof UnsupportedOperationException) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var immediate = tmp;
    if (this === immediate)
      return 'Dispatchers.Main.immediate';
    return null;
  }
}
class SupervisorJobImpl extends JobImpl {
  vc(cause) {
    return false;
  }
}
class TimeoutCancellationException extends CancellationException {}
class Unconfined extends CoroutineDispatcher {
  constructor() {
    Unconfined_instance = null;
    super();
    Unconfined_instance = this;
  }
  ud(context) {
    return false;
  }
  vd(context, block) {
    var yieldContext = context.h8(Key_instance_3);
    if (!(yieldContext == null)) {
      yieldContext.ji_1 = true;
      return Unit_instance;
    }
    throw UnsupportedOperationException.k5('Dispatchers.Unconfined.dispatch function can only be used by the yield function. If you wrap Unconfined dispatcher in your code, make sure you properly delegate isDispatchNeeded and dispatch calls.');
  }
  toString() {
    return 'Dispatchers.Unconfined';
  }
}
class Key_3 {}
class OpDescriptor {}
class ExceptionSuccessfullyProcessed extends Exception {}
class DispatchedContinuation extends DispatchedTask {
  constructor(dispatcher, continuation) {
    super(get_MODE_UNINITIALIZED());
    this.xd_1 = dispatcher;
    this.yd_1 = continuation;
    this.zd_1 = get_UNDEFINED();
    this.ae_1 = threadContextElements(this.g8());
    this.be_1 = atomic$ref$1(null);
  }
  g8() {
    return this.yd_1.g8();
  }
  oi() {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.be_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.awaitReusability.<anonymous>' call
      if (!(this_0.kotlinx$atomicfu$value === get_REUSABLE_CLAIMED()))
        return Unit_instance;
    }
  }
  ce() {
    this.oi();
    var tmp0_safe_receiver = _get_reusableCancellableContinuation__9qex09(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.od();
    }
  }
  pi() {
    var state = this.zd_1;
    // Inline function 'kotlinx.coroutines.assert' call
    this.zd_1 = get_UNDEFINED();
    return state;
  }
  qi() {
    return this;
  }
  n8(result) {
    var context = this.yd_1.g8();
    var state = toState(result);
    if (this.xd_1.ud(context)) {
      this.zd_1 = state;
      this.oe_1 = get_MODE_ATOMIC();
      this.xd_1.vd(context, this);
    } else {
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
        var mode = get_MODE_ATOMIC();
        // Inline function 'kotlinx.coroutines.assert' call
        var eventLoop = ThreadLocalEventLoop_getInstance().xe();
        if (false ? eventLoop.se() : false) {
          break $l$block;
        }
        var tmp;
        if (eventLoop.re()) {
          this.zd_1 = state;
          this.oe_1 = mode;
          eventLoop.qe(this);
          tmp = true;
        } else {
          // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
          eventLoop.te(true);
          try {
            // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeWith.<anonymous>' call
            // Inline function 'kotlinx.coroutines.withCoroutineContext' call
            this.g8();
            this.ae_1;
            this.yd_1.n8(result);
            while (eventLoop.ne()) {
            }
          } catch ($p) {
            if ($p instanceof Error) {
              var e = $p;
              this.ri(e, null);
            } else {
              throw $p;
            }
          }
          finally {
            eventLoop.ue(true);
          }
          tmp = false;
        }
      }
    }
  }
  si(takenState, cause) {
    if (takenState instanceof CompletedWithCancellation) {
      takenState.sd_1(cause);
    }
  }
  toString() {
    return 'DispatchedContinuation[' + this.xd_1 + ', ' + toDebugString(this.yd_1) + ']';
  }
}
class ContextScope {
  constructor(context) {
    this.vi_1 = context;
  }
  mb() {
    return this.vi_1;
  }
  toString() {
    return 'CoroutineScope(coroutineContext=' + this.vi_1 + ')';
  }
}
class Symbol_0 {
  constructor(symbol) {
    this.wi_1 = symbol;
  }
  toString() {
    return '<' + this.wi_1 + '>';
  }
}
class SetTimeoutBasedDispatcher extends CoroutineDispatcher {
  constructor() {
    super();
    this.gj_1 = new ScheduledMessageQueue(this);
  }
  vd(context, block) {
    this.gj_1.qj(block);
  }
}
class NodeDispatcher extends SetTimeoutBasedDispatcher {
  constructor() {
    NodeDispatcher_instance = null;
    super();
    NodeDispatcher_instance = this;
  }
  zi() {
    process.nextTick(this.gj_1.ej_1);
  }
}
class MessageQueue {
  constructor() {
    this.hj_1 = ArrayDeque.y9();
    this.ij_1 = 16;
    this.jj_1 = false;
  }
  l() {
    return this.hj_1.v9_1;
  }
  oj(element) {
    return this.hj_1.j(element);
  }
  j(element) {
    return this.oj((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  }
  pj(elements) {
    return this.hj_1.o(elements);
  }
  o(elements) {
    return this.pj(elements);
  }
  z(index) {
    return this.hj_1.z(index);
  }
  p() {
    return this.hj_1.p();
  }
  m() {
    return this.hj_1.m();
  }
  d1(index) {
    return this.hj_1.d1(index);
  }
  qj(element) {
    this.oj(element);
    if (!this.jj_1) {
      this.jj_1 = true;
      this.lj();
    }
  }
  kj() {
    try {
      // Inline function 'kotlin.repeat' call
      var times = this.ij_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.MessageQueue.process.<anonymous>' call
          var tmp0_elvis_lhs = removeFirstOrNull(this);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            return Unit_instance;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var element = tmp;
          element.pe();
        }
         while (inductionVariable < times);
    }finally {
      if (this.p()) {
        this.jj_1 = false;
      } else {
        this.mj();
      }
    }
  }
}
class ScheduledMessageQueue extends MessageQueue {
  constructor(dispatcher) {
    super();
    this.dj_1 = dispatcher;
    var tmp = this;
    tmp.ej_1 = ScheduledMessageQueue$processQueue$lambda(this);
  }
  lj() {
    this.dj_1.zi();
  }
  mj() {
    setTimeout(this.ej_1, 0);
  }
  nj(timeout) {
    setTimeout(this.ej_1, timeout);
  }
}
class WindowMessageQueue extends MessageQueue {
  constructor(window_0) {
    super();
    this.uj_1 = window_0;
    this.vj_1 = 'dispatchCoroutine';
    this.uj_1.addEventListener('message', WindowMessageQueue$lambda(this), true);
  }
  lj() {
    var tmp = Promise.resolve(Unit_instance);
    tmp.then(WindowMessageQueue$schedule$lambda(this));
  }
  mj() {
    this.uj_1.postMessage(this.vj_1, '*');
  }
}
class Dispatchers {
  constructor() {
    Dispatchers_instance = this;
    this.ee_1 = createDefaultDispatcher();
    this.fe_1 = Unconfined_getInstance();
    this.ge_1 = new JsMainDispatcher(this.ee_1, false);
    this.he_1 = null;
  }
  ie() {
    var tmp0_elvis_lhs = this.he_1;
    return tmp0_elvis_lhs == null ? this.ge_1 : tmp0_elvis_lhs;
  }
}
class JsMainDispatcher extends MainCoroutineDispatcher {
  constructor(delegate, invokeImmediately) {
    super();
    this.xj_1 = delegate;
    this.yj_1 = invokeImmediately;
    this.zj_1 = this.yj_1 ? this : new JsMainDispatcher(this.xj_1, true);
  }
  ci() {
    return this.zj_1;
  }
  ud(context) {
    return !this.yj_1;
  }
  vd(context, block) {
    return this.xj_1.vd(context, block);
  }
  toString() {
    var tmp0_elvis_lhs = this.di();
    return tmp0_elvis_lhs == null ? this.xj_1.toString() : tmp0_elvis_lhs;
  }
}
class UnconfinedEventLoop extends EventLoop {
  vd(context, block) {
    unsupported();
  }
}
class JobCancellationException extends CancellationException {
  static pg(message, cause, job) {
    var $this = this.b5(message, cause);
    captureStack($this, $this.og_1);
    $this.ng_1 = job;
    return $this;
  }
  toString() {
    return super.toString() + '; job=' + this.ng_1;
  }
  equals(other) {
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      var tmp_2;
      if (other instanceof JobCancellationException) {
        tmp_2 = other.message == this.message;
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp_1 = equals(other.ng_1, this.ng_1);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = equals(other.cause, this.cause);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  hashCode() {
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this.ng_1) | 0, 31);
    var tmp0_safe_receiver = this.cause;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  }
}
class TaskContext {}
class DiagnosticCoroutineContextException extends RuntimeException {
  static ni(context) {
    var $this = this.z2(toString_1(context));
    captureStack($this, $this.mi_1);
    return $this;
  }
}
class SetTimeoutDispatcher extends SetTimeoutBasedDispatcher {
  constructor() {
    SetTimeoutDispatcher_instance = null;
    super();
    SetTimeoutDispatcher_instance = this;
  }
  zi() {
    this.gj_1.nj(0);
  }
}
class WindowDispatcher extends CoroutineDispatcher {
  constructor(window_0) {
    super();
    this.hk_1 = window_0;
    this.ik_1 = new WindowMessageQueue(this.hk_1);
  }
  vd(context, block) {
    return this.ik_1.qj(block);
  }
}
class CommonThreadLocal {
  constructor() {
    this.ye_1 = null;
  }
  ze() {
    var tmp = this.ye_1;
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  }
  af(value) {
    this.ye_1 = value;
  }
}
class iteratorFor$slambda extends CoroutineImpl {
  constructor($source, resultContinuation, $box) {
    if ($box === VOID)
      $box = {};
    $box.rk_1 = $source;
    super(resultContinuation, $box);
  }
  wk($this$iterator, $completion) {
    var tmp = this.xk($this$iterator, $completion);
    tmp.b8_1 = Unit_instance;
    tmp.c8_1 = null;
    return tmp.m8();
  }
  c9(p1, $completion) {
    return this.wk(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  }
  m8() {
    var suspendResult = this.b8_1;
    $sm: do
      try {
        var tmp = this.z7_1;
        switch (tmp) {
          case 0:
            this.a8_1 = 5;
            this.z7_1 = 1;
            continue;
          case 1:
            var tmp_0 = this;
            var tmp_1 = this.rk_1.next();
            tmp_0.tk_1 = tmp_1 instanceof constructor ? tmp_1 : null;
            if (this.tk_1 == null) {
              this.z7_1 = 4;
              var tmp_2 = this;
              continue;
            } else {
              this.uk_1 = this.tk_1;
              this.z7_1 = 2;
              continue;
            }

          case 2:
            this.vk_1 = this.uk_1;
            this.z7_1 = 3;
            suspendResult = this.sk_1.ja(this.vk_1.value, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue;
          case 3:
            this.z7_1 = 1;
            continue;
          case 4:
            return Unit_instance;
          case 5:
            throw this.c8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.a8_1 === 5) {
          throw e;
        } else {
          this.z7_1 = this.a8_1;
          this.c8_1 = e;
        }
      }
     while (true);
  }
  xk($this$iterator, completion) {
    var i = new iteratorFor$slambda(this.rk_1, completion);
    i.sk_1 = $this$iterator;
    return i;
  }
}
class HTML {}
class ReactHTML {}
class SlideShowElement$lambda$lambda$slambda extends CoroutineImpl {
  constructor($props, $view, resultContinuation, $box) {
    if ($box === VOID)
      $box = {};
    $box.gl_1 = $props;
    $box.hl_1 = $view;
    super(resultContinuation, $box);
  }
  jl($this$launch, $completion) {
    var tmp = this.kl($this$launch, $completion);
    tmp.b8_1 = Unit_instance;
    tmp.c8_1 = null;
    return tmp.m8();
  }
  c9(p1, $completion) {
    return this.jl((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
  m8() {
    var suspendResult = this.b8_1;
    do
      try {
        var tmp = this.z7_1;
        if (tmp === 0) {
          this.a8_1 = 1;
          var tmp_0 = get_MainJs();
          var tmp_1 = tmp_0.then(SlideShowElement$lambda$lambda$slambda$lambda);
          var tmp_2 = tmp_1.then(SlideShowElement$lambda$lambda$slambda$lambda_0(this.gl_1, this.hl_1));
          var tmp_3 = tmp_2.then(SlideShowElement$lambda$lambda$slambda$lambda_1(this.hl_1));
          tmp_3.then(SlideShowElement$lambda$lambda$slambda$lambda_2(this.hl_1, this.gl_1));
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.c8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  }
  kl($this$launch, completion) {
    var i = new SlideShowElement$lambda$lambda$slambda(this.gl_1, this.hl_1, completion);
    i.il_1 = $this$launch;
    return i;
  }
}
class AlbumPhotosQueryResult {
  constructor(data, isLoading) {
    this.ol_1 = data;
    this.pl_1 = isLoading;
  }
  toString() {
    return 'AlbumPhotosQueryResult(data=' + toString_1(this.ol_1) + ', isLoading=' + this.pl_1 + ')';
  }
  hashCode() {
    var result = hashCode(this.ol_1);
    result = imul(result, 31) + getBooleanHashCode(this.pl_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof AlbumPhotosQueryResult))
      return false;
    var tmp0_other_with_cast = other instanceof AlbumPhotosQueryResult ? other : THROW_CCE();
    if (!equals(this.ol_1, tmp0_other_with_cast.ol_1))
      return false;
    if (!(this.pl_1 === tmp0_other_with_cast.pl_1))
      return false;
    return true;
  }
}
class useUserAlbumsCoroutine$lambda$slambda extends CoroutineImpl {
  constructor($currentUserId, $userAlbums$delegate, resultContinuation, $box) {
    if ($box === VOID)
      $box = {};
    $box.yl_1 = $currentUserId;
    $box.zl_1 = $userAlbums$delegate;
    super(resultContinuation, $box);
  }
  jl($this$launch, $completion) {
    var tmp = this.kl($this$launch, $completion);
    tmp.b8_1 = Unit_instance;
    tmp.c8_1 = null;
    return tmp.m8();
  }
  c9(p1, $completion) {
    return this.jl((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
  m8() {
    var suspendResult = this.b8_1;
    do
      try {
        var tmp = this.z7_1;
        if (tmp === 0) {
          this.a8_1 = 1;
          var tmp_0 = getUserAlbums(ensureNotNull(this.yl_1));
          tmp_0.then(useUserAlbumsCoroutine$lambda$slambda$lambda(this.zl_1));
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.c8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  }
  kl($this$launch, completion) {
    var i = new useUserAlbumsCoroutine$lambda$slambda(this.yl_1, this.zl_1, completion);
    i.am_1 = $this$launch;
    return i;
  }
}
class Common {
  constructor() {
    Common_instance = this;
    var tmp = this;
    // Inline function 'web.cssom.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.ll_1 = toString_1(15) + 'px';
    var tmp_0 = this;
    // Inline function 'web.cssom.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_0.ml_1 = toString_1(30) + 'px';
    var tmp_1 = this;
    // Inline function 'web.cssom.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_1.nl_1 = toString_1(60) + 'px';
  }
}
class CardImage {
  constructor() {
    CardImage_instance = this;
    var tmp = this;
    // Inline function 'web.cssom.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.bm_1 = toString_1(15) + 'px';
    var tmp_0 = this;
    // Inline function 'web.cssom.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_0.cm_1 = toString_1(30) + 'px';
    var tmp_1 = this;
    // Inline function 'web.cssom.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_1.dm_1 = toString_1(60) + 'px';
  }
}
//endregion
var Unit_instance;
function Unit_getInstance() {
  return Unit_instance;
}
var IntCompanionObject_instance;
function IntCompanionObject_getInstance() {
  return IntCompanionObject_instance;
}
function isNaN_0(_this__u8e3s4) {
  return !(_this__u8e3s4 === _this__u8e3s4);
}
function takeHighestOneBit(_this__u8e3s4) {
  var tmp;
  if (_this__u8e3s4 === 0) {
    tmp = 0;
  } else {
    var tmp_0 = 32 - 1 | 0;
    // Inline function 'kotlin.countLeadingZeroBits' call
    tmp = 1 << (tmp_0 - clz32(_this__u8e3s4) | 0);
  }
  return tmp;
}
function collectionToArray(collection) {
  return collectionToArrayCommonImpl(collection);
}
function terminateCollectionToArray(collectionSize, array) {
  return array;
}
function arrayOfNulls(reference, size) {
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.arrayOfNulls' call
  // Inline function 'kotlin.js.asDynamic' call
  return fillArrayVal(Array(size), null);
}
function copyToArray(collection) {
  var tmp;
  // Inline function 'kotlin.js.asDynamic' call
  if (collection.toArray !== undefined) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp = collection.toArray();
  } else {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp = collectionToArray(collection);
  }
  return tmp;
}
function arrayCopy(source, destination, destinationOffset, startIndex, endIndex) {
  Companion_instance_3.g(startIndex, endIndex, source.length);
  var rangeSize = endIndex - startIndex | 0;
  Companion_instance_3.g(destinationOffset, destinationOffset + rangeSize | 0, destination.length);
  if (isView(destination) ? isView(source) : false) {
    // Inline function 'kotlin.js.asDynamic' call
    var subrange = source.subarray(startIndex, endIndex);
    // Inline function 'kotlin.js.asDynamic' call
    destination.set(subrange, destinationOffset);
  } else {
    if (!(source === destination) ? true : destinationOffset <= startIndex) {
      var inductionVariable = 0;
      if (inductionVariable < rangeSize)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          destination[destinationOffset + index | 0] = source[startIndex + index | 0];
        }
         while (inductionVariable < rangeSize);
    } else {
      var inductionVariable_0 = rangeSize - 1 | 0;
      if (0 <= inductionVariable_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          destination[destinationOffset + index_0 | 0] = source[startIndex + index_0 | 0];
        }
         while (0 <= inductionVariable_0);
    }
  }
}
function arrayOfUninitializedElements(capacity) {
  // Inline function 'kotlin.require' call
  // Inline function 'kotlin.contracts.contract' call
  if (!(capacity >= 0)) {
    // Inline function 'kotlin.collections.arrayOfUninitializedElements.<anonymous>' call
    var message = 'capacity must be non-negative.';
    throw IllegalArgumentException.n1(toString_1(message));
  }
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.arrayOfNulls' call
  // Inline function 'kotlin.js.asDynamic' call
  return fillArrayVal(Array(capacity), null);
}
function resetRange(_this__u8e3s4, fromIndex, toIndex) {
  // Inline function 'kotlin.js.nativeFill' call
  // Inline function 'kotlin.js.asDynamic' call
  _this__u8e3s4.fill(null, fromIndex, toIndex);
}
function copyOfUninitializedElements(_this__u8e3s4, newSize) {
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  return copyOf_0(_this__u8e3s4, newSize);
}
var Companion_instance;
function Companion_getInstance() {
  if (Companion_instance === VOID)
    new Companion();
  return Companion_instance;
}
function rangeCheck($this, index) {
  // Inline function 'kotlin.apply' call
  // Inline function 'kotlin.contracts.contract' call
  // Inline function 'kotlin.collections.ArrayList.rangeCheck.<anonymous>' call
  Companion_instance_3.t1(index, $this.l());
  return index;
}
function insertionRangeCheck($this, index) {
  // Inline function 'kotlin.apply' call
  // Inline function 'kotlin.contracts.contract' call
  // Inline function 'kotlin.collections.ArrayList.insertionRangeCheck.<anonymous>' call
  Companion_instance_3.u1(index, $this.l());
  return index;
}
function init_kotlin_collections_HashSet(_this__u8e3s4) {
}
function computeHashSize($this, capacity) {
  return takeHighestOneBit(imul(coerceAtLeast(capacity, 1), 3));
}
function computeShift($this, hashSize) {
  // Inline function 'kotlin.countLeadingZeroBits' call
  return clz32(hashSize) + 1 | 0;
}
function _get_capacity__a9k9f3($this) {
  return $this.g2_1.length;
}
function _get_hashSize__tftcho($this) {
  return $this.j2_1.length;
}
function registerModification($this) {
  $this.n2_1 = $this.n2_1 + 1 | 0;
}
function ensureExtraCapacity($this, n) {
  if (shouldCompact($this, n)) {
    rehash($this, _get_hashSize__tftcho($this));
  } else {
    ensureCapacity($this, $this.l2_1 + n | 0);
  }
}
function shouldCompact($this, extraCapacity) {
  var spareCapacity = _get_capacity__a9k9f3($this) - $this.l2_1 | 0;
  var gaps = $this.l2_1 - $this.l() | 0;
  return (spareCapacity < extraCapacity ? (gaps + spareCapacity | 0) >= extraCapacity : false) ? gaps >= (_get_capacity__a9k9f3($this) / 4 | 0) : false;
}
function ensureCapacity($this, minCapacity) {
  if (minCapacity < 0)
    throw RuntimeException.z2('too many elements');
  if (minCapacity > _get_capacity__a9k9f3($this)) {
    var newSize = Companion_instance_3.a3(_get_capacity__a9k9f3($this), minCapacity);
    $this.g2_1 = copyOfUninitializedElements($this.g2_1, newSize);
    var tmp = $this;
    var tmp0_safe_receiver = $this.h2_1;
    tmp.h2_1 = tmp0_safe_receiver == null ? null : copyOfUninitializedElements(tmp0_safe_receiver, newSize);
    $this.i2_1 = copyOf($this.i2_1, newSize);
    var newHashSize = computeHashSize(Companion_instance_0, newSize);
    if (newHashSize > _get_hashSize__tftcho($this)) {
      rehash($this, newHashSize);
    }
  }
}
function allocateValuesArray($this) {
  var curValuesArray = $this.h2_1;
  if (!(curValuesArray == null))
    return curValuesArray;
  var newValuesArray = arrayOfUninitializedElements(_get_capacity__a9k9f3($this));
  $this.h2_1 = newValuesArray;
  return newValuesArray;
}
function hash($this, key) {
  return key == null ? 0 : imul(hashCode(key), -1640531527) >>> $this.m2_1 | 0;
}
function compact($this) {
  var i = 0;
  var j = 0;
  var valuesArray = $this.h2_1;
  while (i < $this.l2_1) {
    if ($this.i2_1[i] >= 0) {
      $this.g2_1[j] = $this.g2_1[i];
      if (!(valuesArray == null)) {
        valuesArray[j] = valuesArray[i];
      }
      j = j + 1 | 0;
    }
    i = i + 1 | 0;
  }
  resetRange($this.g2_1, j, $this.l2_1);
  if (valuesArray == null)
    null;
  else {
    resetRange(valuesArray, j, $this.l2_1);
  }
  $this.l2_1 = j;
}
function rehash($this, newHashSize) {
  registerModification($this);
  if ($this.l2_1 > $this.o2_1) {
    compact($this);
  }
  if (!(newHashSize === _get_hashSize__tftcho($this))) {
    $this.j2_1 = new Int32Array(newHashSize);
    $this.m2_1 = computeShift(Companion_instance_0, newHashSize);
  } else {
    fill($this.j2_1, 0, 0, _get_hashSize__tftcho($this));
  }
  var i = 0;
  while (i < $this.l2_1) {
    var tmp0 = i;
    i = tmp0 + 1 | 0;
    if (!putRehash($this, tmp0)) {
      throw IllegalStateException.e3('This cannot happen with fixed magic multiplier and grow-only hash array. Have object hashCodes changed?');
    }
  }
}
function putRehash($this, i) {
  var hash_0 = hash($this, $this.g2_1[i]);
  var probesLeft = $this.k2_1;
  while (true) {
    var index = $this.j2_1[hash_0];
    if (index === 0) {
      $this.j2_1[hash_0] = i + 1 | 0;
      $this.i2_1[i] = hash_0;
      return true;
    }
    probesLeft = probesLeft - 1 | 0;
    if (probesLeft < 0)
      return false;
    var tmp0 = hash_0;
    hash_0 = tmp0 - 1 | 0;
    if (tmp0 === 0)
      hash_0 = _get_hashSize__tftcho($this) - 1 | 0;
  }
}
function findKey($this, key) {
  var hash_0 = hash($this, key);
  var probesLeft = $this.k2_1;
  while (true) {
    var index = $this.j2_1[hash_0];
    if (index === 0)
      return -1;
    if (index > 0 ? equals($this.g2_1[index - 1 | 0], key) : false)
      return index - 1 | 0;
    probesLeft = probesLeft - 1 | 0;
    if (probesLeft < 0)
      return -1;
    var tmp0 = hash_0;
    hash_0 = tmp0 - 1 | 0;
    if (tmp0 === 0)
      hash_0 = _get_hashSize__tftcho($this) - 1 | 0;
  }
}
function addKey($this, key) {
  $this.k();
  retry: while (true) {
    var hash_0 = hash($this, key);
    var tentativeMaxProbeDistance = coerceAtMost(imul($this.k2_1, 2), _get_hashSize__tftcho($this) / 2 | 0);
    var probeDistance = 0;
    while (true) {
      var index = $this.j2_1[hash_0];
      if (index <= 0) {
        if ($this.l2_1 >= _get_capacity__a9k9f3($this)) {
          ensureExtraCapacity($this, 1);
          continue retry;
        }
        var tmp1 = $this.l2_1;
        $this.l2_1 = tmp1 + 1 | 0;
        var putIndex = tmp1;
        $this.g2_1[putIndex] = key;
        $this.i2_1[putIndex] = hash_0;
        $this.j2_1[hash_0] = putIndex + 1 | 0;
        $this.o2_1 = $this.o2_1 + 1 | 0;
        registerModification($this);
        if (probeDistance > $this.k2_1)
          $this.k2_1 = probeDistance;
        return putIndex;
      }
      if (equals($this.g2_1[index - 1 | 0], key)) {
        return -index | 0;
      }
      probeDistance = probeDistance + 1 | 0;
      if (probeDistance > tentativeMaxProbeDistance) {
        rehash($this, imul(_get_hashSize__tftcho($this), 2));
        continue retry;
      }
      var tmp4 = hash_0;
      hash_0 = tmp4 - 1 | 0;
      if (tmp4 === 0)
        hash_0 = _get_hashSize__tftcho($this) - 1 | 0;
    }
  }
}
function contentEquals($this, other) {
  return $this.o2_1 === other.l() ? $this.g3(other.f3()) : false;
}
var Companion_instance_0;
function Companion_getInstance_0() {
  return Companion_instance_0;
}
function init_kotlin_collections_LinkedHashSet(_this__u8e3s4) {
}
function init_kotlin_coroutines_cancellation_CancellationException(_this__u8e3s4) {
  captureStack(_this__u8e3s4, _this__u8e3s4.y4_1);
}
function asDynamic(_this__u8e3s4) {
  return _this__u8e3s4;
}
function unsafeCastDynamic(_this__u8e3s4) {
  return _this__u8e3s4;
}
function unsafeCast(_this__u8e3s4) {
  // Inline function 'kotlin.js.asDynamic' call
  return _this__u8e3s4;
}
var NothingKClassImpl_instance;
function NothingKClassImpl_getInstance() {
  if (NothingKClassImpl_instance === VOID)
    new NothingKClassImpl();
  return NothingKClassImpl_instance;
}
function get_functionClasses() {
  _init_properties_primitives_kt__3fums4();
  return functionClasses;
}
var functionClasses;
function PrimitiveClasses$anyClass$lambda(it) {
  return !(it == null);
}
function PrimitiveClasses$numberClass$lambda(it) {
  return isNumber(it);
}
function PrimitiveClasses$booleanClass$lambda(it) {
  return !(it == null) ? typeof it === 'boolean' : false;
}
function PrimitiveClasses$byteClass$lambda(it) {
  return !(it == null) ? typeof it === 'number' : false;
}
function PrimitiveClasses$shortClass$lambda(it) {
  return !(it == null) ? typeof it === 'number' : false;
}
function PrimitiveClasses$intClass$lambda(it) {
  return !(it == null) ? typeof it === 'number' : false;
}
function PrimitiveClasses$floatClass$lambda(it) {
  return !(it == null) ? typeof it === 'number' : false;
}
function PrimitiveClasses$doubleClass$lambda(it) {
  return !(it == null) ? typeof it === 'number' : false;
}
function PrimitiveClasses$arrayClass$lambda(it) {
  return !(it == null) ? isArray(it) : false;
}
function PrimitiveClasses$stringClass$lambda(it) {
  return !(it == null) ? typeof it === 'string' : false;
}
function PrimitiveClasses$throwableClass$lambda(it) {
  return it instanceof Error;
}
function PrimitiveClasses$booleanArrayClass$lambda(it) {
  return !(it == null) ? isBooleanArray(it) : false;
}
function PrimitiveClasses$charArrayClass$lambda(it) {
  return !(it == null) ? isCharArray(it) : false;
}
function PrimitiveClasses$byteArrayClass$lambda(it) {
  return !(it == null) ? isByteArray(it) : false;
}
function PrimitiveClasses$shortArrayClass$lambda(it) {
  return !(it == null) ? isShortArray(it) : false;
}
function PrimitiveClasses$intArrayClass$lambda(it) {
  return !(it == null) ? isIntArray(it) : false;
}
function PrimitiveClasses$longArrayClass$lambda(it) {
  return !(it == null) ? isLongArray(it) : false;
}
function PrimitiveClasses$floatArrayClass$lambda(it) {
  return !(it == null) ? isFloatArray(it) : false;
}
function PrimitiveClasses$doubleArrayClass$lambda(it) {
  return !(it == null) ? isDoubleArray(it) : false;
}
function PrimitiveClasses$functionClass$lambda($arity) {
  return function (it) {
    var tmp;
    if (typeof it === 'function') {
      // Inline function 'kotlin.js.asDynamic' call
      tmp = it.length === $arity;
    } else {
      tmp = false;
    }
    return tmp;
  };
}
var PrimitiveClasses_instance;
function PrimitiveClasses_getInstance() {
  if (PrimitiveClasses_instance === VOID)
    new PrimitiveClasses();
  return PrimitiveClasses_instance;
}
var properties_initialized_primitives_kt_jle18u;
function _init_properties_primitives_kt__3fums4() {
  if (!properties_initialized_primitives_kt_jle18u) {
    properties_initialized_primitives_kt_jle18u = true;
    // Inline function 'kotlin.arrayOfNulls' call
    functionClasses = fillArrayVal(Array(0), null);
  }
}
function getKClass(jClass) {
  var tmp;
  if (Array.isArray(jClass)) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp = getKClassM(jClass);
  } else {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp = getKClass1(jClass);
  }
  return tmp;
}
function getKClassM(jClasses) {
  var tmp;
  switch (jClasses.length) {
    case 1:
      tmp = getKClass1(jClasses[0]);
      break;
    case 0:
      // Inline function 'kotlin.js.unsafeCast' call

      // Inline function 'kotlin.js.asDynamic' call

      tmp = NothingKClassImpl_getInstance();
      break;
    default:
      // Inline function 'kotlin.js.unsafeCast' call

      // Inline function 'kotlin.js.asDynamic' call

      tmp = new ErrorKClass();
      break;
  }
  return tmp;
}
function getKClass1(jClass) {
  if (jClass === String) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return PrimitiveClasses_getInstance().stringClass;
  }
  // Inline function 'kotlin.js.asDynamic' call
  var metadata = jClass.$metadata$;
  var tmp;
  if (metadata != null) {
    var tmp_0;
    if (metadata.$kClass$ == null) {
      var kClass = new SimpleKClassImpl(jClass);
      metadata.$kClass$ = kClass;
      tmp_0 = kClass;
    } else {
      tmp_0 = metadata.$kClass$;
    }
    tmp = tmp_0;
  } else {
    tmp = new SimpleKClassImpl(jClass);
  }
  return tmp;
}
function getKClassFromExpression(e) {
  // Inline function 'kotlin.js.unsafeCast' call
  var tmp;
  switch (typeof e) {
    case 'string':
      tmp = PrimitiveClasses_getInstance().stringClass;
      break;
    case 'number':
      var tmp_0;
      // Inline function 'kotlin.js.asDynamic' call

      // Inline function 'kotlin.js.jsBitwiseOr' call

      if ((e | 0) === e) {
        tmp_0 = PrimitiveClasses_getInstance().intClass;
      } else {
        tmp_0 = PrimitiveClasses_getInstance().doubleClass;
      }

      tmp = tmp_0;
      break;
    case 'boolean':
      tmp = PrimitiveClasses_getInstance().booleanClass;
      break;
    case 'function':
      var tmp_1 = PrimitiveClasses_getInstance();
      // Inline function 'kotlin.js.asDynamic' call

      tmp = tmp_1.functionClass(e.length);
      break;
    default:
      var tmp_2;
      if (isBooleanArray(e)) {
        tmp_2 = PrimitiveClasses_getInstance().booleanArrayClass;
      } else {
        if (isCharArray(e)) {
          tmp_2 = PrimitiveClasses_getInstance().charArrayClass;
        } else {
          if (isByteArray(e)) {
            tmp_2 = PrimitiveClasses_getInstance().byteArrayClass;
          } else {
            if (isShortArray(e)) {
              tmp_2 = PrimitiveClasses_getInstance().shortArrayClass;
            } else {
              if (isIntArray(e)) {
                tmp_2 = PrimitiveClasses_getInstance().intArrayClass;
              } else {
                if (isLongArray(e)) {
                  tmp_2 = PrimitiveClasses_getInstance().longArrayClass;
                } else {
                  if (isFloatArray(e)) {
                    tmp_2 = PrimitiveClasses_getInstance().floatArrayClass;
                  } else {
                    if (isDoubleArray(e)) {
                      tmp_2 = PrimitiveClasses_getInstance().doubleArrayClass;
                    } else {
                      if (isInterface(e, KClass)) {
                        tmp_2 = getKClass(KClass);
                      } else {
                        if (isArray(e)) {
                          tmp_2 = PrimitiveClasses_getInstance().arrayClass;
                        } else {
                          var constructor = Object.getPrototypeOf(e).constructor;
                          var tmp_3;
                          if (constructor === Object) {
                            tmp_3 = PrimitiveClasses_getInstance().anyClass;
                          } else if (constructor === Error) {
                            tmp_3 = PrimitiveClasses_getInstance().throwableClass;
                          } else {
                            var jsClass = constructor;
                            tmp_3 = getKClass1(jsClass);
                          }
                          tmp_2 = tmp_3;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      tmp = tmp_2;
      break;
  }
  // Inline function 'kotlin.js.asDynamic' call
  return tmp;
}
function addSuppressed(_this__u8e3s4, exception) {
  if (!(_this__u8e3s4 === exception)) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var suppressed = _this__u8e3s4._suppressed;
    if (suppressed == null) {
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4._suppressed = mutableListOf([exception]);
    } else {
      suppressed.j(exception);
    }
  }
}
function indexOf(_this__u8e3s4, element) {
  if (element == null) {
    var inductionVariable = 0;
    var last = _this__u8e3s4.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (_this__u8e3s4[index] == null) {
          return index;
        }
      }
       while (inductionVariable <= last);
  } else {
    var inductionVariable_0 = 0;
    var last_0 = _this__u8e3s4.length - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if (equals(element, _this__u8e3s4[index_0])) {
          return index_0;
        }
      }
       while (inductionVariable_0 <= last_0);
  }
  return -1;
}
function contains(_this__u8e3s4, element) {
  return indexOf(_this__u8e3s4, element) >= 0;
}
function get_lastIndex(_this__u8e3s4) {
  return _this__u8e3s4.length - 1 | 0;
}
function joinToString(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
  separator = separator === VOID ? ', ' : separator;
  prefix = prefix === VOID ? '' : prefix;
  postfix = postfix === VOID ? '' : postfix;
  limit = limit === VOID ? -1 : limit;
  truncated = truncated === VOID ? '...' : truncated;
  transform = transform === VOID ? null : transform;
  return joinTo(_this__u8e3s4, StringBuilder.l6(), separator, prefix, postfix, limit, truncated, transform).toString();
}
function joinTo(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
  separator = separator === VOID ? ', ' : separator;
  prefix = prefix === VOID ? '' : prefix;
  postfix = postfix === VOID ? '' : postfix;
  limit = limit === VOID ? -1 : limit;
  truncated = truncated === VOID ? '...' : truncated;
  transform = transform === VOID ? null : transform;
  buffer.m6(prefix);
  var count = 0;
  var inductionVariable = 0;
  var last = _this__u8e3s4.length;
  $l$loop: while (inductionVariable < last) {
    var element = _this__u8e3s4[inductionVariable];
    inductionVariable = inductionVariable + 1 | 0;
    count = count + 1 | 0;
    if (count > 1) {
      buffer.m6(separator);
    }
    if (limit < 0 ? true : count <= limit) {
      appendElement(buffer, element, transform);
    } else
      break;
  }
  if (limit >= 0 ? count > limit : false) {
    buffer.m6(truncated);
  }
  buffer.m6(postfix);
  return buffer;
}
function joinToString_0(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
  separator = separator === VOID ? ', ' : separator;
  prefix = prefix === VOID ? '' : prefix;
  postfix = postfix === VOID ? '' : postfix;
  limit = limit === VOID ? -1 : limit;
  truncated = truncated === VOID ? '...' : truncated;
  transform = transform === VOID ? null : transform;
  return joinTo_0(_this__u8e3s4, StringBuilder.l6(), separator, prefix, postfix, limit, truncated, transform).toString();
}
function joinTo_0(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
  separator = separator === VOID ? ', ' : separator;
  prefix = prefix === VOID ? '' : prefix;
  postfix = postfix === VOID ? '' : postfix;
  limit = limit === VOID ? -1 : limit;
  truncated = truncated === VOID ? '...' : truncated;
  transform = transform === VOID ? null : transform;
  buffer.m6(prefix);
  var count = 0;
  var tmp0_iterator = _this__u8e3s4.m();
  $l$loop: while (tmp0_iterator.t()) {
    var element = tmp0_iterator.u();
    count = count + 1 | 0;
    if (count > 1) {
      buffer.m6(separator);
    }
    if (limit < 0 ? true : count <= limit) {
      appendElement(buffer, element, transform);
    } else
      break;
  }
  if (limit >= 0 ? count > limit : false) {
    buffer.m6(truncated);
  }
  buffer.m6(postfix);
  return buffer;
}
function coerceAtLeast(_this__u8e3s4, minimumValue) {
  return _this__u8e3s4 < minimumValue ? minimumValue : _this__u8e3s4;
}
function coerceAtMost(_this__u8e3s4, maximumValue) {
  return _this__u8e3s4 > maximumValue ? maximumValue : _this__u8e3s4;
}
function asUByteArray(_this__u8e3s4) {
  return _UByteArray___init__impl__ip4y9n(_this__u8e3s4);
}
function _Char___init__impl__6a9atx(value) {
  return value;
}
function _get_value__a43j40($this) {
  return $this;
}
function toString($this) {
  // Inline function 'kotlin.js.unsafeCast' call
  return String.fromCharCode(_get_value__a43j40($this));
}
var Companion_instance_1;
function Companion_getInstance_1() {
  return Companion_instance_1;
}
function toString_0(_this__u8e3s4) {
  var tmp1_elvis_lhs = _this__u8e3s4 == null ? null : toString_1(_this__u8e3s4);
  return tmp1_elvis_lhs == null ? 'null' : tmp1_elvis_lhs;
}
function implement(interfaces) {
  var maxSize = 1;
  var masks = [];
  var inductionVariable = 0;
  var last = interfaces.length;
  while (inductionVariable < last) {
    var i = interfaces[inductionVariable];
    inductionVariable = inductionVariable + 1 | 0;
    var currentSize = maxSize;
    var tmp1_elvis_lhs = i.prototype.$imask$;
    var imask = tmp1_elvis_lhs == null ? i.$imask$ : tmp1_elvis_lhs;
    if (!(imask == null)) {
      masks.push(imask);
      currentSize = imask.length;
    }
    var iid = i.$metadata$.iid;
    var tmp;
    if (iid == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.js.implement.<anonymous>' call
      tmp = bitMaskWith(iid);
    }
    var iidImask = tmp;
    if (!(iidImask == null)) {
      masks.push(iidImask);
      currentSize = Math.max(currentSize, iidImask.length);
    }
    if (currentSize > maxSize) {
      maxSize = currentSize;
    }
  }
  return compositeBitMask(maxSize, masks);
}
function bitMaskWith(activeBit) {
  var numberIndex = activeBit >> 5;
  var intArray = new Int32Array(numberIndex + 1 | 0);
  var positionInNumber = activeBit & 31;
  var numberWithSettledBit = 1 << positionInNumber;
  intArray[numberIndex] = intArray[numberIndex] | numberWithSettledBit;
  return intArray;
}
function compositeBitMask(capacity, masks) {
  var tmp = 0;
  var tmp_0 = new Int32Array(capacity);
  while (tmp < capacity) {
    var tmp_1 = tmp;
    var result = 0;
    var inductionVariable = 0;
    var last = masks.length;
    while (inductionVariable < last) {
      var mask = masks[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (tmp_1 < mask.length) {
        result = result | mask[tmp_1];
      }
    }
    tmp_0[tmp_1] = result;
    tmp = tmp + 1 | 0;
  }
  return tmp_0;
}
function isBitSet(_this__u8e3s4, possibleActiveBit) {
  var numberIndex = possibleActiveBit >> 5;
  if (numberIndex > _this__u8e3s4.length)
    return false;
  var positionInNumber = possibleActiveBit & 31;
  var numberWithSettledBit = 1 << positionInNumber;
  return !((_this__u8e3s4[numberIndex] & numberWithSettledBit) === 0);
}
function fillArrayVal(array, initValue) {
  var inductionVariable = 0;
  var last = array.length - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      array[i] = initValue;
    }
     while (!(i === last));
  return array;
}
function arrayIterator(array) {
  return new arrayIterator$1(array);
}
function get_buf() {
  _init_properties_bitUtils_kt__nfcg4k();
  return buf;
}
var buf;
function get_bufFloat64() {
  _init_properties_bitUtils_kt__nfcg4k();
  return bufFloat64;
}
var bufFloat64;
var bufFloat32;
function get_bufInt32() {
  _init_properties_bitUtils_kt__nfcg4k();
  return bufInt32;
}
var bufInt32;
function get_lowIndex() {
  _init_properties_bitUtils_kt__nfcg4k();
  return lowIndex;
}
var lowIndex;
function get_highIndex() {
  _init_properties_bitUtils_kt__nfcg4k();
  return highIndex;
}
var highIndex;
function getNumberHashCode(obj) {
  _init_properties_bitUtils_kt__nfcg4k();
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.jsBitwiseOr' call
  // Inline function 'kotlin.js.asDynamic' call
  if ((obj | 0) === obj) {
    return numberToInt(obj);
  }
  get_bufFloat64()[0] = obj;
  return imul(get_bufInt32()[get_highIndex()], 31) + get_bufInt32()[get_lowIndex()] | 0;
}
var properties_initialized_bitUtils_kt_i2bo3e;
function _init_properties_bitUtils_kt__nfcg4k() {
  if (!properties_initialized_bitUtils_kt_i2bo3e) {
    properties_initialized_bitUtils_kt_i2bo3e = true;
    buf = new ArrayBuffer(8);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    bufFloat64 = new Float64Array(get_buf());
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    bufFloat32 = new Float32Array(get_buf());
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    bufInt32 = new Int32Array(get_buf());
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.js.lowIndex.<anonymous>' call
    get_bufFloat64()[0] = -1.0;
    lowIndex = !(get_bufInt32()[0] === 0) ? 1 : 0;
    highIndex = 1 - get_lowIndex() | 0;
  }
}
function isString(a) {
  return typeof a === 'string';
}
function charSequenceLength(a) {
  var tmp;
  if (isString(a)) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp = a.length;
  } else {
    tmp = a.a();
  }
  return tmp;
}
function arrayToString(array) {
  return joinToString(array, ', ', '[', ']', VOID, VOID, arrayToString$lambda);
}
function arrayToString$lambda(it) {
  return toString_1(it);
}
function identityHashCode(obj) {
  return getObjectHashCode(obj);
}
function getObjectHashCode(obj) {
  // Inline function 'kotlin.js.jsIn' call
  if (!('kotlinHashCodeValue$' in obj)) {
    var hash = calculateRandomHash();
    var descriptor = {};
    descriptor.value = hash;
    descriptor.enumerable = false;
    Object.defineProperty(obj, 'kotlinHashCodeValue$', descriptor);
  }
  // Inline function 'kotlin.js.unsafeCast' call
  return obj['kotlinHashCodeValue$'];
}
function calculateRandomHash() {
  // Inline function 'kotlin.js.jsBitwiseOr' call
  return Math.random() * 4.294967296E9 | 0;
}
function toString_1(o) {
  var tmp;
  if (o == null) {
    tmp = 'null';
  } else if (isArrayish(o)) {
    tmp = '[...]';
  } else if (!(typeof o.toString === 'function')) {
    tmp = anyToString(o);
  } else {
    // Inline function 'kotlin.js.unsafeCast' call
    tmp = o.toString();
  }
  return tmp;
}
function anyToString(o) {
  return Object.prototype.toString.call(o);
}
function hashCode(obj) {
  if (obj == null)
    return 0;
  var typeOf = typeof obj;
  var tmp;
  switch (typeOf) {
    case 'object':
      tmp = 'function' === typeof obj.hashCode ? obj.hashCode() : getObjectHashCode(obj);
      break;
    case 'function':
      tmp = getObjectHashCode(obj);
      break;
    case 'number':
      tmp = getNumberHashCode(obj);
      break;
    case 'boolean':
      // Inline function 'kotlin.js.unsafeCast' call

      tmp = getBooleanHashCode(obj);
      break;
    case 'string':
      tmp = getStringHashCode(String(obj));
      break;
    case 'bigint':
      tmp = getBigIntHashCode(obj);
      break;
    case 'symbol':
      tmp = getSymbolHashCode(obj);
      break;
    default:
      tmp = function () {
        throw new Error('Unexpected typeof `' + typeOf + '`');
      }();
      break;
  }
  return tmp;
}
function getBooleanHashCode(value) {
  return value ? 1231 : 1237;
}
function getStringHashCode(str) {
  var hash = 0;
  var length = str.length;
  var inductionVariable = 0;
  var last = length - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.js.asDynamic' call
      var code = str.charCodeAt(i);
      hash = imul(hash, 31) + code | 0;
    }
     while (!(i === last));
  return hash;
}
function getBigIntHashCode(value) {
  var shiftNumber = BigInt(32);
  var MASK = BigInt(4.294967295E9);
  var bigNumber = value < 0 ? -value : value;
  var hashCode = 0;
  var signum = value < 0 ? -1 : 1;
  while (bigNumber != 0) {
    // Inline function 'kotlin.js.unsafeCast' call
    var chunk = Number(bigNumber & MASK);
    hashCode = imul(31, hashCode) + chunk | 0;
    bigNumber = bigNumber >> shiftNumber;
  }
  return imul(hashCode, signum);
}
function getSymbolHashCode(value) {
  var hashCodeMap = symbolIsSharable(value) ? getSymbolMap() : getSymbolWeakMap();
  var cachedHashCode = hashCodeMap.get(value);
  if (cachedHashCode !== VOID)
    return cachedHashCode;
  var hash = calculateRandomHash();
  hashCodeMap.set(value, hash);
  return hash;
}
function symbolIsSharable(symbol) {
  return Symbol.keyFor(symbol) != VOID;
}
function getSymbolMap() {
  if (symbolMap === VOID) {
    symbolMap = new Map();
  }
  return symbolMap;
}
function getSymbolWeakMap() {
  if (symbolWeakMap === VOID) {
    symbolWeakMap = new WeakMap();
  }
  return symbolWeakMap;
}
var symbolMap;
var symbolWeakMap;
function equals(obj1, obj2) {
  if (obj1 == null) {
    return obj2 == null;
  }
  if (obj2 == null) {
    return false;
  }
  if (typeof obj1 === 'object' ? typeof obj1.equals === 'function' : false) {
    return obj1.equals(obj2);
  }
  if (obj1 !== obj1) {
    return obj2 !== obj2;
  }
  if (typeof obj1 === 'number' ? typeof obj2 === 'number' : false) {
    var tmp;
    if (obj1 === obj2) {
      var tmp_0;
      if (obj1 !== 0) {
        tmp_0 = true;
      } else {
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_1 = 1 / obj1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = tmp_1 === 1 / obj2;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  }
  return obj1 === obj2;
}
function unboxIntrinsic(x) {
  var message = 'Should be lowered';
  throw IllegalStateException.e3(toString_1(message));
}
function captureStack(instance, constructorFunction) {
  if (Error.captureStackTrace != null) {
    Error.captureStackTrace(instance, constructorFunction);
  } else {
    // Inline function 'kotlin.js.asDynamic' call
    instance.stack = (new Error()).stack;
  }
}
function protoOf(constructor) {
  return constructor.prototype;
}
function defineProp(obj, name, getter, setter) {
  return Object.defineProperty(obj, name, {configurable: true, get: getter, set: setter});
}
function createThis(ctor, box) {
  var self_0 = Object.create(ctor.prototype);
  boxApply(self_0, box);
  return self_0;
}
function boxApply(self_0, box) {
  if (box !== VOID)
    Object.assign(self_0, box);
}
function setPropertiesToThrowableInstance(this_, message, cause) {
  var errorInfo = calculateErrorInfo(Object.getPrototypeOf(this_));
  if ((errorInfo & 1) === 0) {
    var tmp;
    if (message == null) {
      var tmp_0;
      if (!(message === null)) {
        var tmp1_elvis_lhs = cause == null ? null : cause.toString();
        tmp_0 = tmp1_elvis_lhs == null ? VOID : tmp1_elvis_lhs;
      } else {
        tmp_0 = VOID;
      }
      tmp = tmp_0;
    } else {
      tmp = message;
    }
    this_.message = tmp;
  }
  if ((errorInfo & 2) === 0) {
    this_.cause = cause;
  }
  this_.name = Object.getPrototypeOf(this_).constructor.name;
}
function ensureNotNull(v) {
  var tmp;
  if (v == null) {
    THROW_NPE();
  } else {
    tmp = v;
  }
  return tmp;
}
function THROW_NPE() {
  throw NullPointerException.v6();
}
function noWhenBranchMatchedException() {
  throw NoWhenBranchMatchedException.z6();
}
function THROW_CCE() {
  throw ClassCastException.d7();
}
function throwUninitializedPropertyAccessException(name) {
  throw UninitializedPropertyAccessException.h7('lateinit property ' + name + ' has not been initialized');
}
function THROW_ISE() {
  throw IllegalStateException.a5();
}
function fillFrom(src, dst) {
  var srcLen = src.length;
  var dstLen = dst.length;
  var index = 0;
  // Inline function 'kotlin.js.unsafeCast' call
  var arr = dst;
  while (index < srcLen ? index < dstLen : false) {
    var tmp = index;
    var tmp0 = index;
    index = tmp0 + 1 | 0;
    arr[tmp] = src[tmp0];
  }
  return dst;
}
function arrayCopyResize(source, newSize, defaultValue) {
  // Inline function 'kotlin.js.unsafeCast' call
  var result = source.slice(0, newSize);
  // Inline function 'kotlin.copyArrayType' call
  if (source.$type$ !== undefined) {
    result.$type$ = source.$type$;
  }
  var index = source.length;
  if (newSize > index) {
    // Inline function 'kotlin.js.asDynamic' call
    result.length = newSize;
    while (index < newSize) {
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      result[tmp0] = defaultValue;
    }
  }
  return result;
}
var Companion_instance_2;
function Companion_getInstance_2() {
  if (Companion_instance_2 === VOID)
    new Companion_2();
  return Companion_instance_2;
}
function get_ZERO() {
  _init_properties_longjs_kt__tqrzid();
  return ZERO;
}
var ZERO;
function get_ONE() {
  _init_properties_longjs_kt__tqrzid();
  return ONE;
}
var ONE;
function get_NEG_ONE() {
  _init_properties_longjs_kt__tqrzid();
  return NEG_ONE;
}
var NEG_ONE;
function get_MAX_VALUE() {
  _init_properties_longjs_kt__tqrzid();
  return MAX_VALUE;
}
var MAX_VALUE;
function get_MIN_VALUE() {
  _init_properties_longjs_kt__tqrzid();
  return MIN_VALUE;
}
var MIN_VALUE;
function get_TWO_PWR_24_() {
  _init_properties_longjs_kt__tqrzid();
  return TWO_PWR_24_;
}
var TWO_PWR_24_;
function compare(_this__u8e3s4, other) {
  _init_properties_longjs_kt__tqrzid();
  if (equalsLong(_this__u8e3s4, other)) {
    return 0;
  }
  var thisNeg = isNegative(_this__u8e3s4);
  var otherNeg = isNegative(other);
  return (thisNeg ? !otherNeg : false) ? -1 : (!thisNeg ? otherNeg : false) ? 1 : isNegative(subtract(_this__u8e3s4, other)) ? -1 : 1;
}
function add(_this__u8e3s4, other) {
  _init_properties_longjs_kt__tqrzid();
  var a48 = _this__u8e3s4.n7_1 >>> 16 | 0;
  var a32 = _this__u8e3s4.n7_1 & 65535;
  var a16 = _this__u8e3s4.m7_1 >>> 16 | 0;
  var a00 = _this__u8e3s4.m7_1 & 65535;
  var b48 = other.n7_1 >>> 16 | 0;
  var b32 = other.n7_1 & 65535;
  var b16 = other.m7_1 >>> 16 | 0;
  var b00 = other.m7_1 & 65535;
  var c48 = 0;
  var c32 = 0;
  var c16 = 0;
  var c00 = 0;
  c00 = c00 + (a00 + b00 | 0) | 0;
  c16 = c16 + (c00 >>> 16 | 0) | 0;
  c00 = c00 & 65535;
  c16 = c16 + (a16 + b16 | 0) | 0;
  c32 = c32 + (c16 >>> 16 | 0) | 0;
  c16 = c16 & 65535;
  c32 = c32 + (a32 + b32 | 0) | 0;
  c48 = c48 + (c32 >>> 16 | 0) | 0;
  c32 = c32 & 65535;
  c48 = c48 + (a48 + b48 | 0) | 0;
  c48 = c48 & 65535;
  return new Long(c16 << 16 | c00, c48 << 16 | c32);
}
function subtract(_this__u8e3s4, other) {
  _init_properties_longjs_kt__tqrzid();
  return add(_this__u8e3s4, other.s7());
}
function multiply(_this__u8e3s4, other) {
  _init_properties_longjs_kt__tqrzid();
  if (isZero(_this__u8e3s4)) {
    return get_ZERO();
  } else if (isZero(other)) {
    return get_ZERO();
  }
  if (equalsLong(_this__u8e3s4, get_MIN_VALUE())) {
    return isOdd(other) ? get_MIN_VALUE() : get_ZERO();
  } else if (equalsLong(other, get_MIN_VALUE())) {
    return isOdd(_this__u8e3s4) ? get_MIN_VALUE() : get_ZERO();
  }
  if (isNegative(_this__u8e3s4)) {
    var tmp;
    if (isNegative(other)) {
      tmp = multiply(negate(_this__u8e3s4), negate(other));
    } else {
      tmp = negate(multiply(negate(_this__u8e3s4), other));
    }
    return tmp;
  } else if (isNegative(other)) {
    return negate(multiply(_this__u8e3s4, negate(other)));
  }
  if (lessThan(_this__u8e3s4, get_TWO_PWR_24_()) ? lessThan(other, get_TWO_PWR_24_()) : false) {
    return fromNumber(toNumber(_this__u8e3s4) * toNumber(other));
  }
  var a48 = _this__u8e3s4.n7_1 >>> 16 | 0;
  var a32 = _this__u8e3s4.n7_1 & 65535;
  var a16 = _this__u8e3s4.m7_1 >>> 16 | 0;
  var a00 = _this__u8e3s4.m7_1 & 65535;
  var b48 = other.n7_1 >>> 16 | 0;
  var b32 = other.n7_1 & 65535;
  var b16 = other.m7_1 >>> 16 | 0;
  var b00 = other.m7_1 & 65535;
  var c48 = 0;
  var c32 = 0;
  var c16 = 0;
  var c00 = 0;
  c00 = c00 + imul(a00, b00) | 0;
  c16 = c16 + (c00 >>> 16 | 0) | 0;
  c00 = c00 & 65535;
  c16 = c16 + imul(a16, b00) | 0;
  c32 = c32 + (c16 >>> 16 | 0) | 0;
  c16 = c16 & 65535;
  c16 = c16 + imul(a00, b16) | 0;
  c32 = c32 + (c16 >>> 16 | 0) | 0;
  c16 = c16 & 65535;
  c32 = c32 + imul(a32, b00) | 0;
  c48 = c48 + (c32 >>> 16 | 0) | 0;
  c32 = c32 & 65535;
  c32 = c32 + imul(a16, b16) | 0;
  c48 = c48 + (c32 >>> 16 | 0) | 0;
  c32 = c32 & 65535;
  c32 = c32 + imul(a00, b32) | 0;
  c48 = c48 + (c32 >>> 16 | 0) | 0;
  c32 = c32 & 65535;
  c48 = c48 + (((imul(a48, b00) + imul(a32, b16) | 0) + imul(a16, b32) | 0) + imul(a00, b48) | 0) | 0;
  c48 = c48 & 65535;
  return new Long(c16 << 16 | c00, c48 << 16 | c32);
}
function divide(_this__u8e3s4, other) {
  _init_properties_longjs_kt__tqrzid();
  if (isZero(other)) {
    throw Exception.x7('division by zero');
  } else if (isZero(_this__u8e3s4)) {
    return get_ZERO();
  }
  if (equalsLong(_this__u8e3s4, get_MIN_VALUE())) {
    if (equalsLong(other, get_ONE()) ? true : equalsLong(other, get_NEG_ONE())) {
      return get_MIN_VALUE();
    } else if (equalsLong(other, get_MIN_VALUE())) {
      return get_ONE();
    } else {
      var halfThis = shiftRight(_this__u8e3s4, 1);
      var approx = shiftLeft(halfThis.r7(other), 1);
      if (equalsLong(approx, get_ZERO())) {
        return isNegative(other) ? get_ONE() : get_NEG_ONE();
      } else {
        var rem = subtract(_this__u8e3s4, multiply(other, approx));
        return add(approx, rem.r7(other));
      }
    }
  } else if (equalsLong(other, get_MIN_VALUE())) {
    return get_ZERO();
  }
  if (isNegative(_this__u8e3s4)) {
    var tmp;
    if (isNegative(other)) {
      tmp = negate(_this__u8e3s4).r7(negate(other));
    } else {
      tmp = negate(negate(_this__u8e3s4).r7(other));
    }
    return tmp;
  } else if (isNegative(other)) {
    return negate(_this__u8e3s4.r7(negate(other)));
  }
  var res = get_ZERO();
  var rem_0 = _this__u8e3s4;
  while (greaterThanOrEqual(rem_0, other)) {
    var approxDouble = toNumber(rem_0) / toNumber(other);
    var approx2 = Math.max(1.0, Math.floor(approxDouble));
    var log2 = Math.ceil(Math.log(approx2) / Math.LN2);
    var delta = log2 <= 48.0 ? 1.0 : Math.pow(2.0, log2 - 48);
    var approxRes = fromNumber(approx2);
    var approxRem = multiply(approxRes, other);
    while (isNegative(approxRem) ? true : greaterThan(approxRem, rem_0)) {
      approx2 = approx2 - delta;
      approxRes = fromNumber(approx2);
      approxRem = multiply(approxRes, other);
    }
    if (isZero(approxRes)) {
      approxRes = get_ONE();
    }
    res = add(res, approxRes);
    rem_0 = subtract(rem_0, approxRem);
  }
  return res;
}
function shiftLeft(_this__u8e3s4, numBits) {
  _init_properties_longjs_kt__tqrzid();
  var numBits_0 = numBits & 63;
  if (numBits_0 === 0) {
    return _this__u8e3s4;
  } else {
    if (numBits_0 < 32) {
      return new Long(_this__u8e3s4.m7_1 << numBits_0, _this__u8e3s4.n7_1 << numBits_0 | (_this__u8e3s4.m7_1 >>> (32 - numBits_0 | 0) | 0));
    } else {
      return new Long(0, _this__u8e3s4.m7_1 << (numBits_0 - 32 | 0));
    }
  }
}
function shiftRight(_this__u8e3s4, numBits) {
  _init_properties_longjs_kt__tqrzid();
  var numBits_0 = numBits & 63;
  if (numBits_0 === 0) {
    return _this__u8e3s4;
  } else {
    if (numBits_0 < 32) {
      return new Long(_this__u8e3s4.m7_1 >>> numBits_0 | 0 | _this__u8e3s4.n7_1 << (32 - numBits_0 | 0), _this__u8e3s4.n7_1 >> numBits_0);
    } else {
      return new Long(_this__u8e3s4.n7_1 >> (numBits_0 - 32 | 0), _this__u8e3s4.n7_1 >= 0 ? 0 : -1);
    }
  }
}
function toNumber(_this__u8e3s4) {
  _init_properties_longjs_kt__tqrzid();
  return _this__u8e3s4.n7_1 * 4.294967296E9 + getLowBitsUnsigned(_this__u8e3s4);
}
function equalsLong(_this__u8e3s4, other) {
  _init_properties_longjs_kt__tqrzid();
  return _this__u8e3s4.n7_1 === other.n7_1 ? _this__u8e3s4.m7_1 === other.m7_1 : false;
}
function hashCode_0(l) {
  _init_properties_longjs_kt__tqrzid();
  return l.m7_1 ^ l.n7_1;
}
function toStringImpl(_this__u8e3s4, radix) {
  _init_properties_longjs_kt__tqrzid();
  if (radix < 2 ? true : 36 < radix) {
    throw Exception.x7('radix out of range: ' + radix);
  }
  if (isZero(_this__u8e3s4)) {
    return '0';
  }
  if (isNegative(_this__u8e3s4)) {
    if (equalsLong(_this__u8e3s4, get_MIN_VALUE())) {
      var radixLong = fromInt(radix);
      var div = _this__u8e3s4.r7(radixLong);
      var rem = subtract(multiply(div, radixLong), _this__u8e3s4).u7();
      var tmp = toStringImpl(div, radix);
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return tmp + rem.toString(radix);
    } else {
      return '-' + toStringImpl(negate(_this__u8e3s4), radix);
    }
  }
  var digitsPerTime = radix === 2 ? 31 : radix <= 10 ? 9 : radix <= 21 ? 7 : radix <= 35 ? 6 : 5;
  var radixToPower = fromNumber(Math.pow(radix, digitsPerTime));
  var rem_0 = _this__u8e3s4;
  var result = '';
  while (true) {
    var remDiv = rem_0.r7(radixToPower);
    var intval = subtract(rem_0, multiply(remDiv, radixToPower)).u7();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var digits = intval.toString(radix);
    rem_0 = remDiv;
    if (isZero(rem_0)) {
      return digits + result;
    } else {
      while (digits.length < digitsPerTime) {
        digits = '0' + digits;
      }
      result = digits + result;
    }
  }
}
function fromInt(value) {
  _init_properties_longjs_kt__tqrzid();
  return new Long(value, value < 0 ? -1 : 0);
}
function isNegative(_this__u8e3s4) {
  _init_properties_longjs_kt__tqrzid();
  return _this__u8e3s4.n7_1 < 0;
}
function isZero(_this__u8e3s4) {
  _init_properties_longjs_kt__tqrzid();
  return _this__u8e3s4.n7_1 === 0 ? _this__u8e3s4.m7_1 === 0 : false;
}
function isOdd(_this__u8e3s4) {
  _init_properties_longjs_kt__tqrzid();
  return (_this__u8e3s4.m7_1 & 1) === 1;
}
function negate(_this__u8e3s4) {
  _init_properties_longjs_kt__tqrzid();
  return _this__u8e3s4.s7();
}
function lessThan(_this__u8e3s4, other) {
  _init_properties_longjs_kt__tqrzid();
  return compare(_this__u8e3s4, other) < 0;
}
function fromNumber(value) {
  _init_properties_longjs_kt__tqrzid();
  if (isNaN_0(value)) {
    return get_ZERO();
  } else if (value <= -9.223372036854776E18) {
    return get_MIN_VALUE();
  } else if (value + 1 >= 9.223372036854776E18) {
    return get_MAX_VALUE();
  } else if (value < 0.0) {
    return negate(fromNumber(-value));
  } else {
    var twoPwr32 = 4.294967296E9;
    // Inline function 'kotlin.js.jsBitwiseOr' call
    var tmp = value % twoPwr32 | 0;
    // Inline function 'kotlin.js.jsBitwiseOr' call
    var tmp$ret$1 = value / twoPwr32 | 0;
    return new Long(tmp, tmp$ret$1);
  }
}
function greaterThan(_this__u8e3s4, other) {
  _init_properties_longjs_kt__tqrzid();
  return compare(_this__u8e3s4, other) > 0;
}
function greaterThanOrEqual(_this__u8e3s4, other) {
  _init_properties_longjs_kt__tqrzid();
  return compare(_this__u8e3s4, other) >= 0;
}
function getLowBitsUnsigned(_this__u8e3s4) {
  _init_properties_longjs_kt__tqrzid();
  return _this__u8e3s4.m7_1 >= 0 ? _this__u8e3s4.m7_1 : 4.294967296E9 + _this__u8e3s4.m7_1;
}
var properties_initialized_longjs_kt_5aju7t;
function _init_properties_longjs_kt__tqrzid() {
  if (!properties_initialized_longjs_kt_5aju7t) {
    properties_initialized_longjs_kt_5aju7t = true;
    ZERO = fromInt(0);
    ONE = fromInt(1);
    NEG_ONE = fromInt(-1);
    MAX_VALUE = new Long(-1, 2147483647);
    MIN_VALUE = new Long(0, -2147483648);
    TWO_PWR_24_ = fromInt(16777216);
  }
}
function classMeta(name, defaultConstructor, associatedObjectKey, associatedObjects, suspendArity) {
  return createMetadata('class', name, defaultConstructor, associatedObjectKey, associatedObjects, suspendArity, null);
}
function createMetadata(kind, name, defaultConstructor, associatedObjectKey, associatedObjects, suspendArity, iid) {
  var undef = VOID;
  return {kind: kind, simpleName: name, associatedObjectKey: associatedObjectKey, associatedObjects: associatedObjects, suspendArity: suspendArity, $kClass$: undef, defaultConstructor: defaultConstructor, iid: iid};
}
function setMetadataFor(ctor, name, metadataConstructor, parent, interfaces, defaultConstructor, associatedObjectKey, associatedObjects, suspendArity) {
  if (!(parent == null)) {
    ctor.prototype = Object.create(parent.prototype);
    ctor.prototype.constructor = ctor;
  }
  var metadata = metadataConstructor(name, defaultConstructor, associatedObjectKey, associatedObjects, suspendArity == null ? [] : suspendArity);
  ctor.$metadata$ = metadata;
  if (!(interfaces == null)) {
    var receiver = !(metadata.iid == null) ? ctor : ctor.prototype;
    receiver.$imask$ = implement(interfaces);
  }
}
function interfaceMeta(name, defaultConstructor, associatedObjectKey, associatedObjects, suspendArity) {
  return createMetadata('interface', name, defaultConstructor, associatedObjectKey, associatedObjects, suspendArity, generateInterfaceId());
}
function generateInterfaceId() {
  if (iid === VOID) {
    iid = 0;
  }
  // Inline function 'kotlin.js.unsafeCast' call
  iid = iid + 1 | 0;
  // Inline function 'kotlin.js.unsafeCast' call
  return iid;
}
var iid;
function objectMeta(name, defaultConstructor, associatedObjectKey, associatedObjects, suspendArity) {
  return createMetadata('object', name, defaultConstructor, associatedObjectKey, associatedObjects, suspendArity, null);
}
function numberToInt(a) {
  var tmp;
  if (a instanceof Long) {
    tmp = a.u7();
  } else {
    tmp = doubleToInt(a);
  }
  return tmp;
}
function doubleToInt(a) {
  var tmp;
  if (a > 2.147483647E9) {
    tmp = 2147483647;
  } else if (a < -2.147483648E9) {
    tmp = -2147483648;
  } else {
    // Inline function 'kotlin.js.jsBitwiseOr' call
    tmp = a | 0;
  }
  return tmp;
}
function get_propertyRefClassMetadataCache() {
  _init_properties_reflectRuntime_kt__5r4uu3();
  return propertyRefClassMetadataCache;
}
var propertyRefClassMetadataCache;
function metadataObject() {
  _init_properties_reflectRuntime_kt__5r4uu3();
  return classMeta(VOID, VOID, VOID, VOID, VOID);
}
function getPropertyCallableRef(name, paramCount, superType, getter, setter) {
  _init_properties_reflectRuntime_kt__5r4uu3();
  getter.get = getter;
  getter.set = setter;
  getter.callableName = name;
  // Inline function 'kotlin.js.unsafeCast' call
  return getPropertyRefClass(getter, getKPropMetadata(paramCount, setter), getInterfaceMaskFor(getter, superType));
}
function getPropertyRefClass(obj, metadata, imask) {
  _init_properties_reflectRuntime_kt__5r4uu3();
  obj.$metadata$ = metadata;
  obj.constructor = obj;
  obj.$imask$ = imask;
  return obj;
}
function getKPropMetadata(paramCount, setter) {
  _init_properties_reflectRuntime_kt__5r4uu3();
  return get_propertyRefClassMetadataCache()[paramCount][setter == null ? 0 : 1];
}
function getInterfaceMaskFor(obj, superType) {
  _init_properties_reflectRuntime_kt__5r4uu3();
  var tmp0_elvis_lhs = obj.$imask$;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [superType];
    tmp = implement(tmp$ret$2);
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
function getLocalDelegateReference(name, superType, mutable, lambda) {
  _init_properties_reflectRuntime_kt__5r4uu3();
  return getPropertyCallableRef(name, 0, superType, lambda, mutable ? lambda : null);
}
var properties_initialized_reflectRuntime_kt_inkhwd;
function _init_properties_reflectRuntime_kt__5r4uu3() {
  if (!properties_initialized_reflectRuntime_kt_inkhwd) {
    properties_initialized_reflectRuntime_kt_inkhwd = true;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = [metadataObject(), metadataObject()];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = [metadataObject(), metadataObject()];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    propertyRefClassMetadataCache = [tmp, tmp_0, [metadataObject(), metadataObject()]];
  }
}
function isArrayish(o) {
  return isJsArray(o) ? true : isView(o);
}
function isJsArray(obj) {
  // Inline function 'kotlin.js.unsafeCast' call
  return Array.isArray(obj);
}
function isInterface(obj, iface) {
  return isInterfaceImpl(obj, iface.$metadata$.iid);
}
function isInterfaceImpl(obj, iface) {
  // Inline function 'kotlin.js.unsafeCast' call
  var tmp0_elvis_lhs = obj.$imask$;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    return false;
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var mask = tmp;
  return isBitSet(mask, iface);
}
function isArray(obj) {
  var tmp;
  if (isJsArray(obj)) {
    // Inline function 'kotlin.js.asDynamic' call
    tmp = !obj.$type$;
  } else {
    tmp = false;
  }
  return tmp;
}
function isNumber(a) {
  var tmp;
  if (typeof a === 'number') {
    tmp = true;
  } else {
    tmp = a instanceof Long;
  }
  return tmp;
}
function isCharSequence(value) {
  return typeof value === 'string' ? true : isInterface(value, CharSequence);
}
function isBooleanArray(a) {
  return isJsArray(a) ? a.$type$ === 'BooleanArray' : false;
}
function isByteArray(a) {
  // Inline function 'kotlin.js.jsInstanceOf' call
  return a instanceof Int8Array;
}
function isShortArray(a) {
  // Inline function 'kotlin.js.jsInstanceOf' call
  return a instanceof Int16Array;
}
function isCharArray(a) {
  var tmp;
  // Inline function 'kotlin.js.jsInstanceOf' call
  if (a instanceof Uint16Array) {
    tmp = a.$type$ === 'CharArray';
  } else {
    tmp = false;
  }
  return tmp;
}
function isIntArray(a) {
  // Inline function 'kotlin.js.jsInstanceOf' call
  return a instanceof Int32Array;
}
function isFloatArray(a) {
  // Inline function 'kotlin.js.jsInstanceOf' call
  return a instanceof Float32Array;
}
function isLongArray(a) {
  return isJsArray(a) ? a.$type$ === 'LongArray' : false;
}
function isDoubleArray(a) {
  // Inline function 'kotlin.js.jsInstanceOf' call
  return a instanceof Float64Array;
}
function calculateErrorInfo(proto) {
  var tmp0_safe_receiver = proto.constructor;
  var metadata = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.$metadata$;
  var tmp2_safe_receiver = metadata == null ? null : metadata.errorInfo;
  if (tmp2_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    return tmp2_safe_receiver;
  }
  var result = 0;
  if (hasProp(proto, 'message'))
    result = result | 1;
  if (hasProp(proto, 'cause'))
    result = result | 2;
  if (!(result === 3)) {
    var parentProto = getPrototypeOf(proto);
    if (parentProto != Error.prototype) {
      result = result | calculateErrorInfo(parentProto);
    }
  }
  if (!(metadata == null)) {
    metadata.errorInfo = result;
  }
  return result;
}
function hasProp(proto, propName) {
  return proto.hasOwnProperty(propName);
}
function getPrototypeOf(obj) {
  return Object.getPrototypeOf(obj);
}
function get_VOID() {
  _init_properties_void_kt__3zg9as();
  return VOID;
}
var VOID;
var properties_initialized_void_kt_e4ret2;
function _init_properties_void_kt__3zg9as() {
  if (!properties_initialized_void_kt_e4ret2) {
    properties_initialized_void_kt_e4ret2 = true;
    VOID = void 0;
  }
}
function fill(_this__u8e3s4, element, fromIndex, toIndex) {
  fromIndex = fromIndex === VOID ? 0 : fromIndex;
  toIndex = toIndex === VOID ? _this__u8e3s4.length : toIndex;
  Companion_instance_3.g(fromIndex, toIndex, _this__u8e3s4.length);
  // Inline function 'kotlin.js.nativeFill' call
  // Inline function 'kotlin.js.asDynamic' call
  _this__u8e3s4.fill(element, fromIndex, toIndex);
}
function copyOf(_this__u8e3s4, newSize) {
  // Inline function 'kotlin.require' call
  // Inline function 'kotlin.contracts.contract' call
  if (!(newSize >= 0)) {
    // Inline function 'kotlin.collections.copyOf.<anonymous>' call
    var message = 'Invalid new array size: ' + newSize + '.';
    throw IllegalArgumentException.n1(toString_1(message));
  }
  return fillFrom(_this__u8e3s4, new Int32Array(newSize));
}
function copyOf_0(_this__u8e3s4, newSize) {
  // Inline function 'kotlin.require' call
  // Inline function 'kotlin.contracts.contract' call
  if (!(newSize >= 0)) {
    // Inline function 'kotlin.collections.copyOf.<anonymous>' call
    var message = 'Invalid new array size: ' + newSize + '.';
    throw IllegalArgumentException.n1(toString_1(message));
  }
  return arrayCopyResize(_this__u8e3s4, newSize, null);
}
function releaseIntercepted($this) {
  var intercepted = $this.f8_1;
  if (!(intercepted == null) ? !(intercepted === $this) : false) {
    ensureNotNull($this.g8().h8(Key_instance)).i8(intercepted);
  }
  $this.f8_1 = CompletedContinuation_instance;
}
var CompletedContinuation_instance;
function CompletedContinuation_getInstance() {
  return CompletedContinuation_instance;
}
function intercepted(_this__u8e3s4) {
  var tmp0_safe_receiver = _this__u8e3s4 instanceof CoroutineImpl ? _this__u8e3s4 : null;
  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j8();
  return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
}
function createCoroutineUnintercepted(_this__u8e3s4, receiver, completion) {
  // Inline function 'kotlin.coroutines.intrinsics.createCoroutineFromSuspendFunction' call
  return new _no_name_provided__qut3iv(completion, _this__u8e3s4, receiver, completion);
}
function invokeSuspendSuperTypeWithReceiver(_this__u8e3s4, receiver, completion) {
  throw NotImplementedError.q8('It is intrinsic method');
}
function init_kotlin_Exception(_this__u8e3s4) {
  captureStack(_this__u8e3s4, _this__u8e3s4.w7_1);
}
function init_kotlin_IllegalArgumentException(_this__u8e3s4) {
  captureStack(_this__u8e3s4, _this__u8e3s4.m1_1);
}
function init_kotlin_IndexOutOfBoundsException(_this__u8e3s4) {
  captureStack(_this__u8e3s4, _this__u8e3s4.j9_1);
}
function init_kotlin_IllegalStateException(_this__u8e3s4) {
  captureStack(_this__u8e3s4, _this__u8e3s4.d3_1);
}
function init_kotlin_UnsupportedOperationException(_this__u8e3s4) {
  captureStack(_this__u8e3s4, _this__u8e3s4.b2_1);
}
function init_kotlin_RuntimeException(_this__u8e3s4) {
  captureStack(_this__u8e3s4, _this__u8e3s4.y2_1);
}
function init_kotlin_NoSuchElementException(_this__u8e3s4) {
  captureStack(_this__u8e3s4, _this__u8e3s4.x_1);
}
function init_kotlin_Error(_this__u8e3s4) {
  captureStack(_this__u8e3s4, _this__u8e3s4.n9_1);
}
function init_kotlin_ConcurrentModificationException(_this__u8e3s4) {
  captureStack(_this__u8e3s4, _this__u8e3s4.t3_1);
}
function init_kotlin_NullPointerException(_this__u8e3s4) {
  captureStack(_this__u8e3s4, _this__u8e3s4.u6_1);
}
function init_kotlin_NoWhenBranchMatchedException(_this__u8e3s4) {
  captureStack(_this__u8e3s4, _this__u8e3s4.y6_1);
}
function init_kotlin_ClassCastException(_this__u8e3s4) {
  captureStack(_this__u8e3s4, _this__u8e3s4.c7_1);
}
function init_kotlin_UninitializedPropertyAccessException(_this__u8e3s4) {
  captureStack(_this__u8e3s4, _this__u8e3s4.g7_1);
}
function AbstractCollection$toString$lambda(this$0) {
  return function (it) {
    return it === this$0 ? '(this Collection)' : toString_0(it);
  };
}
var Companion_instance_3;
function Companion_getInstance_3() {
  return Companion_instance_3;
}
var Companion_instance_4;
function Companion_getInstance_4() {
  return Companion_instance_4;
}
function ensureCapacity_0($this, minCapacity) {
  if (minCapacity < 0)
    throw IllegalStateException.e3('Deque is too big.');
  if (minCapacity <= $this.u9_1.length)
    return Unit_instance;
  if ($this.u9_1 === Companion_getInstance_5().w9_1) {
    var tmp = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = coerceAtLeast(minCapacity, 10);
    tmp.u9_1 = fillArrayVal(Array(size), null);
    return Unit_instance;
  }
  var newCapacity = Companion_instance_3.a3($this.u9_1.length, minCapacity);
  copyElements($this, newCapacity);
}
function copyElements($this, newCapacity) {
  // Inline function 'kotlin.arrayOfNulls' call
  var newElements = fillArrayVal(Array(newCapacity), null);
  // Inline function 'kotlin.collections.copyInto' call
  var this_0 = $this.u9_1;
  var startIndex = $this.t9_1;
  var endIndex = $this.u9_1.length;
  arrayCopy(this_0, newElements, 0, startIndex, endIndex);
  // Inline function 'kotlin.collections.copyInto' call
  var this_1 = $this.u9_1;
  var destinationOffset = $this.u9_1.length - $this.t9_1 | 0;
  var endIndex_0 = $this.t9_1;
  arrayCopy(this_1, newElements, destinationOffset, 0, endIndex_0);
  $this.t9_1 = 0;
  $this.u9_1 = newElements;
}
function positiveMod($this, index) {
  return index >= $this.u9_1.length ? index - $this.u9_1.length | 0 : index;
}
function incremented($this, index) {
  return index === get_lastIndex($this.u9_1) ? 0 : index + 1 | 0;
}
function decremented($this, index) {
  return index === 0 ? get_lastIndex($this.u9_1) : index - 1 | 0;
}
var Companion_instance_5;
function Companion_getInstance_5() {
  if (Companion_instance_5 === VOID)
    new Companion_5();
  return Companion_instance_5;
}
function init_kotlin_collections_ArrayDeque(_this__u8e3s4) {
  Companion_getInstance_5();
  _this__u8e3s4.t9_1 = 0;
  _this__u8e3s4.v9_1 = 0;
}
function collectionToArrayCommonImpl(collection) {
  if (collection.p()) {
    // Inline function 'kotlin.emptyArray' call
    return [];
  }
  // Inline function 'kotlin.arrayOfNulls' call
  var size = collection.l();
  var destination = fillArrayVal(Array(size), null);
  var iterator = collection.m();
  var index = 0;
  while (iterator.t()) {
    var tmp0 = index;
    index = tmp0 + 1 | 0;
    destination[tmp0] = iterator.u();
  }
  return destination;
}
function mutableListOf(elements) {
  return elements.length === 0 ? ArrayList.w1() : ArrayList.x1(new ArrayAsCollection(elements, true));
}
function get_lastIndex_0(_this__u8e3s4) {
  return _this__u8e3s4.l() - 1 | 0;
}
function removeFirstOrNull(_this__u8e3s4) {
  return _this__u8e3s4.p() ? null : _this__u8e3s4.d1(0);
}
function iterator(block) {
  var iterator = new SequenceBuilderIterator();
  iterator.na_1 = createCoroutineUnintercepted(block, iterator, iterator);
  return iterator;
}
function nextNotReady($this) {
  if (!$this.t())
    throw NoSuchElementException.y();
  else
    return $this.u();
}
function exceptionalState($this) {
  switch ($this.ka_1) {
    case 4:
      return NoSuchElementException.y();
    case 5:
      return IllegalStateException.e3('Iterator has failed.');
    default:
      return IllegalStateException.e3('Unexpected state of the iterator: ' + $this.ka_1);
  }
}
function startCoroutine(_this__u8e3s4, receiver, completion) {
  // Inline function 'kotlin.coroutines.resume' call
  var this_0 = intercepted(createCoroutineUnintercepted(_this__u8e3s4, receiver, completion));
  // Inline function 'kotlin.Companion.success' call
  var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
  this_0.n8(tmp$ret$0);
}
var Key_instance;
function Key_getInstance() {
  return Key_instance;
}
function CoroutineContext$plus$lambda(acc, element) {
  var removed = acc.ta(element.l4());
  var tmp;
  if (removed === EmptyCoroutineContext_getInstance()) {
    tmp = element;
  } else {
    var interceptor = removed.h8(Key_instance);
    var tmp_0;
    if (interceptor == null) {
      tmp_0 = new CombinedContext(removed, element);
    } else {
      var left = removed.ta(Key_instance);
      tmp_0 = left === EmptyCoroutineContext_getInstance() ? new CombinedContext(element, interceptor) : new CombinedContext(new CombinedContext(left, element), interceptor);
    }
    tmp = tmp_0;
  }
  return tmp;
}
var EmptyCoroutineContext_instance;
function EmptyCoroutineContext_getInstance() {
  if (EmptyCoroutineContext_instance === VOID)
    new EmptyCoroutineContext();
  return EmptyCoroutineContext_instance;
}
function size($this) {
  var cur = $this;
  var size = 2;
  while (true) {
    var tmp = cur.xa_1;
    var tmp0_elvis_lhs = tmp instanceof CombinedContext ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return size;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    cur = tmp_0;
    size = size + 1 | 0;
  }
}
function contains_0($this, element) {
  return equals($this.h8(element.l4()), element);
}
function containsAll($this, context) {
  var cur = context;
  while (true) {
    if (!contains_0($this, cur.ya_1))
      return false;
    var next = cur.xa_1;
    if (next instanceof CombinedContext) {
      cur = next;
    } else {
      return contains_0($this, isInterface(next, Element) ? next : THROW_CCE());
    }
  }
}
function CombinedContext$toString$lambda(acc, element) {
  var tmp;
  // Inline function 'kotlin.text.isEmpty' call
  if (charSequenceLength(acc) === 0) {
    tmp = toString_1(element);
  } else {
    tmp = acc + ', ' + element;
  }
  return tmp;
}
function get_COROUTINE_SUSPENDED() {
  return CoroutineSingletons_COROUTINE_SUSPENDED_getInstance();
}
var CoroutineSingletons_COROUTINE_SUSPENDED_instance;
var CoroutineSingletons_UNDECIDED_instance;
var CoroutineSingletons_RESUMED_instance;
var CoroutineSingletons_entriesInitialized;
function CoroutineSingletons_initEntries() {
  if (CoroutineSingletons_entriesInitialized)
    return Unit_instance;
  CoroutineSingletons_entriesInitialized = true;
  CoroutineSingletons_COROUTINE_SUSPENDED_instance = new CoroutineSingletons('COROUTINE_SUSPENDED', 0);
  CoroutineSingletons_UNDECIDED_instance = new CoroutineSingletons('UNDECIDED', 1);
  CoroutineSingletons_RESUMED_instance = new CoroutineSingletons('RESUMED', 2);
}
function CoroutineSingletons_COROUTINE_SUSPENDED_getInstance() {
  CoroutineSingletons_initEntries();
  return CoroutineSingletons_COROUTINE_SUSPENDED_instance;
}
function appendElement(_this__u8e3s4, element, transform) {
  if (!(transform == null)) {
    _this__u8e3s4.m6(transform(element));
  } else {
    if (element == null ? true : isCharSequence(element)) {
      _this__u8e3s4.m6(element);
    } else {
      if (element instanceof Char) {
        _this__u8e3s4.i4(element.ab_1);
      } else {
        _this__u8e3s4.m6(toString_0(element));
      }
    }
  }
}
function _Result___init__impl__xyqfz8(value) {
  return value;
}
function _Result___get_value__impl__bjfvqg($this) {
  return $this;
}
function _Result___get_isFailure__impl__jpiriv($this) {
  var tmp = _Result___get_value__impl__bjfvqg($this);
  return tmp instanceof Failure;
}
function Result__exceptionOrNull_impl_p6xea9($this) {
  var tmp;
  if (_Result___get_value__impl__bjfvqg($this) instanceof Failure) {
    tmp = _Result___get_value__impl__bjfvqg($this).bb_1;
  } else {
    tmp = null;
  }
  return tmp;
}
var Companion_instance_6;
function Companion_getInstance_6() {
  return Companion_instance_6;
}
function createFailure(exception) {
  return new Failure(exception);
}
function throwOnFailure(_this__u8e3s4) {
  var tmp = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
  if (tmp instanceof Failure)
    throw _Result___get_value__impl__bjfvqg(_this__u8e3s4).bb_1;
}
function _UByteArray___init__impl__ip4y9n(storage) {
  return storage;
}
var None_instance;
function None_getInstance() {
  if (None_instance === VOID)
    new None();
  return None_instance;
}
function atomic$ref$1(initial) {
  return atomic$ref$(initial, None_getInstance());
}
function atomic$boolean$1(initial) {
  return atomic$boolean$(initial, None_getInstance());
}
function atomic$int$1(initial) {
  return atomic$int$(initial, None_getInstance());
}
function atomic$ref$(initial, trace) {
  trace = trace === VOID ? None_getInstance() : trace;
  return new AtomicRef(initial);
}
function atomic$boolean$(initial, trace) {
  trace = trace === VOID ? None_getInstance() : trace;
  return new AtomicBoolean(initial);
}
function atomic$int$(initial, trace) {
  trace = trace === VOID ? None_getInstance() : trace;
  return new AtomicInt(initial);
}
function launch(_this__u8e3s4, context, start, block) {
  context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
  start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
  var newContext = newCoroutineContext(_this__u8e3s4, context);
  var coroutine = start.ed() ? new LazyStandaloneCoroutine(newContext, block) : new StandaloneCoroutine(newContext, true);
  coroutine.ac(start, coroutine, block);
  return coroutine;
}
function _get_parentHandle__f8dcex($this) {
  return $this.nd_1.kotlinx$atomicfu$value;
}
function toState(_this__u8e3s4, onCancellation) {
  onCancellation = onCancellation === VOID ? null : onCancellation;
  // Inline function 'kotlin.fold' call
  // Inline function 'kotlin.contracts.contract' call
  var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
  var tmp;
  if (exception == null) {
    // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
    var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
    var it = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    tmp = !(onCancellation == null) ? new CompletedWithCancellation(it, onCancellation) : it;
  } else {
    // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
    tmp = new CompletedExceptionally(exception);
  }
  return tmp;
}
function CoroutineDispatcher$Key$_init_$lambda_akl8b5(it) {
  return it instanceof CoroutineDispatcher ? it : null;
}
var Key_instance_0;
function Key_getInstance_0() {
  if (Key_instance_0 === VOID)
    new Key_0();
  return Key_instance_0;
}
function handleCoroutineException(context, exception) {
  try {
    var tmp0_safe_receiver = context.h8(Key_instance_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.de(context, exception);
      return Unit_instance;
    }
  } catch ($p) {
    if ($p instanceof Error) {
      var t = $p;
      handleUncaughtCoroutineException(context, handlerException(exception, t));
      return Unit_instance;
    } else {
      throw $p;
    }
  }
  handleUncaughtCoroutineException(context, exception);
}
var Key_instance_1;
function Key_getInstance_1() {
  return Key_instance_1;
}
function handlerException(originalException, thrownException) {
  if (originalException === thrownException)
    return originalException;
  // Inline function 'kotlin.apply' call
  var this_0 = RuntimeException.m9('Exception while trying to handle coroutine exception', thrownException);
  // Inline function 'kotlin.contracts.contract' call
  // Inline function 'kotlinx.coroutines.handlerException.<anonymous>' call
  addSuppressed(this_0, originalException);
  return this_0;
}
function MainScope() {
  return new ContextScope(SupervisorJob().va(Dispatchers_getInstance().ie()));
}
var CoroutineStart_DEFAULT_instance;
var CoroutineStart_LAZY_instance;
var CoroutineStart_ATOMIC_instance;
var CoroutineStart_UNDISPATCHED_instance;
var CoroutineStart_entriesInitialized;
function CoroutineStart_initEntries() {
  if (CoroutineStart_entriesInitialized)
    return Unit_instance;
  CoroutineStart_entriesInitialized = true;
  CoroutineStart_DEFAULT_instance = new CoroutineStart('DEFAULT', 0);
  CoroutineStart_LAZY_instance = new CoroutineStart('LAZY', 1);
  CoroutineStart_ATOMIC_instance = new CoroutineStart('ATOMIC', 2);
  CoroutineStart_UNDISPATCHED_instance = new CoroutineStart('UNDISPATCHED', 3);
}
function CoroutineStart_DEFAULT_getInstance() {
  CoroutineStart_initEntries();
  return CoroutineStart_DEFAULT_instance;
}
function CoroutineStart_LAZY_getInstance() {
  CoroutineStart_initEntries();
  return CoroutineStart_LAZY_instance;
}
function delta($this, unconfined) {
  return unconfined ? new Long(0, 1) : new Long(1, 0);
}
var ThreadLocalEventLoop_instance;
function ThreadLocalEventLoop_getInstance() {
  if (ThreadLocalEventLoop_instance === VOID)
    new ThreadLocalEventLoop();
  return ThreadLocalEventLoop_instance;
}
var Key_instance_2;
function Key_getInstance_2() {
  return Key_instance_2;
}
var NonDisposableHandle_instance;
function NonDisposableHandle_getInstance() {
  return NonDisposableHandle_instance;
}
function get_COMPLETING_ALREADY() {
  _init_properties_JobSupport_kt__68f172();
  return COMPLETING_ALREADY;
}
var COMPLETING_ALREADY;
function get_COMPLETING_WAITING_CHILDREN() {
  _init_properties_JobSupport_kt__68f172();
  return COMPLETING_WAITING_CHILDREN;
}
var COMPLETING_WAITING_CHILDREN;
function get_COMPLETING_RETRY() {
  _init_properties_JobSupport_kt__68f172();
  return COMPLETING_RETRY;
}
var COMPLETING_RETRY;
function get_TOO_LATE_TO_CANCEL() {
  _init_properties_JobSupport_kt__68f172();
  return TOO_LATE_TO_CANCEL;
}
var TOO_LATE_TO_CANCEL;
function get_SEALED() {
  _init_properties_JobSupport_kt__68f172();
  return SEALED;
}
var SEALED;
function get_EMPTY_NEW() {
  _init_properties_JobSupport_kt__68f172();
  return EMPTY_NEW;
}
var EMPTY_NEW;
function get_EMPTY_ACTIVE() {
  _init_properties_JobSupport_kt__68f172();
  return EMPTY_ACTIVE;
}
var EMPTY_ACTIVE;
function _set_exceptionsHolder__tqm22h($this, value) {
  $this.gg_1.kotlinx$atomicfu$value = value;
}
function _get_exceptionsHolder__nhszp($this) {
  return $this.gg_1.kotlinx$atomicfu$value;
}
function allocateList($this) {
  return ArrayList.r1(4);
}
function finalizeFinishingState($this, state, proposedUpdate) {
  // Inline function 'kotlinx.coroutines.assert' call
  // Inline function 'kotlinx.coroutines.assert' call
  // Inline function 'kotlinx.coroutines.assert' call
  var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
  var proposedException = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.sb_1;
  var wasCancelling;
  // Inline function 'kotlinx.coroutines.internal.synchronized' call
  // Inline function 'kotlin.contracts.contract' call
  // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
  // Inline function 'kotlinx.coroutines.JobSupport.finalizeFinishingState.<anonymous>' call
  wasCancelling = state.hg();
  var exceptions = state.ig(proposedException);
  var finalCause = getFinalRootCause($this, state, exceptions);
  if (!(finalCause == null)) {
    addSuppressedExceptions($this, finalCause, exceptions);
  }
  var finalException = finalCause;
  var finalState = finalException == null ? proposedUpdate : finalException === proposedException ? proposedUpdate : new CompletedExceptionally(finalException);
  if (!(finalException == null)) {
    var handled = cancelParent($this, finalException) ? true : $this.cd(finalException);
    if (handled) {
      (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).qd();
    }
  }
  if (!wasCancelling) {
    $this.zc(finalException);
  }
  $this.rb(finalState);
  var casSuccess = $this.gb_1.atomicfu$compareAndSet(state, boxIncomplete(finalState));
  // Inline function 'kotlinx.coroutines.assert' call
  completeStateFinalization($this, state, finalState);
  return finalState;
}
function getFinalRootCause($this, state, exceptions) {
  if (exceptions.p()) {
    if (state.hg()) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      return JobCancellationException.pg(null == null ? $this.qb() : null, null, $this);
    }
    return null;
  }
  var tmp$ret$2;
  $l$block: {
    // Inline function 'kotlin.collections.firstOrNull' call
    var tmp0_iterator = exceptions.m();
    while (tmp0_iterator.t()) {
      var element = tmp0_iterator.u();
      // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
      if (!(element instanceof CancellationException)) {
        tmp$ret$2 = element;
        break $l$block;
      }
    }
    tmp$ret$2 = null;
  }
  var firstNonCancellation = tmp$ret$2;
  if (!(firstNonCancellation == null))
    return firstNonCancellation;
  var first = exceptions.z(0);
  if (first instanceof TimeoutCancellationException) {
    var tmp$ret$4;
    $l$block_0: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_0 = exceptions.m();
      while (tmp0_iterator_0.t()) {
        var element_0 = tmp0_iterator_0.u();
        // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
        var tmp;
        if (!(element_0 === first)) {
          tmp = element_0 instanceof TimeoutCancellationException;
        } else {
          tmp = false;
        }
        if (tmp) {
          tmp$ret$4 = element_0;
          break $l$block_0;
        }
      }
      tmp$ret$4 = null;
    }
    var detailedTimeoutException = tmp$ret$4;
    if (!(detailedTimeoutException == null))
      return detailedTimeoutException;
  }
  return first;
}
function addSuppressedExceptions($this, rootCause, exceptions) {
  if (exceptions.l() <= 1)
    return Unit_instance;
  var seenExceptions = identitySet(exceptions.l());
  var unwrappedCause = unwrap(rootCause);
  var tmp0_iterator = exceptions.m();
  while (tmp0_iterator.t()) {
    var exception = tmp0_iterator.u();
    var unwrapped = unwrap(exception);
    var tmp;
    var tmp_0;
    if (!(unwrapped === rootCause) ? !(unwrapped === unwrappedCause) : false) {
      tmp_0 = !(unwrapped instanceof CancellationException);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = seenExceptions.j(unwrapped);
    } else {
      tmp = false;
    }
    if (tmp) {
      addSuppressed(rootCause, unwrapped);
    }
  }
}
function tryFinalizeSimpleState($this, state, update) {
  // Inline function 'kotlinx.coroutines.assert' call
  // Inline function 'kotlinx.coroutines.assert' call
  if (!$this.gb_1.atomicfu$compareAndSet(state, boxIncomplete(update)))
    return false;
  $this.zc(null);
  $this.rb(update);
  completeStateFinalization($this, state, update);
  return true;
}
function completeStateFinalization($this, state, update) {
  var tmp0_safe_receiver = $this.fc();
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    tmp0_safe_receiver.pd();
    $this.ec(NonDisposableHandle_instance);
  }
  var tmp1_safe_receiver = update instanceof CompletedExceptionally ? update : null;
  var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.sb_1;
  if (state instanceof JobNode) {
    try {
      state.invoke(cause);
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        $this.yb(CompletionHandlerException.ef('Exception in completion handler ' + state + ' for ' + $this, ex));
      } else {
        throw $p;
      }
    }
  } else {
    var tmp2_safe_receiver = state.jf();
    if (tmp2_safe_receiver == null)
      null;
    else {
      notifyCompletion(tmp2_safe_receiver, $this, cause);
    }
  }
}
function notifyCancelling($this, list, cause) {
  $this.zc(cause);
  // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
  var exception = null;
  // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
  var cur = list.of_1;
  while (!equals(cur, list)) {
    if (cur instanceof JobCancellingNode) {
      // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
      var node = cur;
      try {
        node.invoke(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          var ex = $p;
          var tmp0_safe_receiver = exception;
          var tmp;
          if (tmp0_safe_receiver == null) {
            tmp = null;
          } else {
            // Inline function 'kotlin.apply' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
            addSuppressed(tmp0_safe_receiver, ex);
            tmp = tmp0_safe_receiver;
          }
          if (tmp == null) {
            // Inline function 'kotlin.run' call
            // Inline function 'kotlin.contracts.contract' call
            exception = CompletionHandlerException.ef('Exception in completion handler ' + node + ' for ' + $this, ex);
          }
        } else {
          throw $p;
        }
      }
    }
    cur = cur.of_1;
  }
  var tmp0_safe_receiver_0 = exception;
  if (tmp0_safe_receiver_0 == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    $this.yb(tmp0_safe_receiver_0);
  }
  cancelParent($this, cause);
}
function cancelParent($this, cause) {
  if ($this.ad())
    return true;
  var isCancellation = cause instanceof CancellationException;
  var parent = $this.fc();
  if (parent === null ? true : parent === NonDisposableHandle_instance) {
    return isCancellation;
  }
  return parent.vc(cause) ? true : isCancellation;
}
function notifyCompletion(_this__u8e3s4, $this, cause) {
  var exception = null;
  // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
  var cur = _this__u8e3s4.of_1;
  while (!equals(cur, _this__u8e3s4)) {
    if (cur instanceof JobNode) {
      // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
      var node = cur;
      try {
        node.invoke(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          var ex = $p;
          var tmp0_safe_receiver = exception;
          var tmp;
          if (tmp0_safe_receiver == null) {
            tmp = null;
          } else {
            // Inline function 'kotlin.apply' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
            addSuppressed(tmp0_safe_receiver, ex);
            tmp = tmp0_safe_receiver;
          }
          if (tmp == null) {
            // Inline function 'kotlin.run' call
            // Inline function 'kotlin.contracts.contract' call
            exception = CompletionHandlerException.ef('Exception in completion handler ' + node + ' for ' + $this, ex);
          }
        } else {
          throw $p;
        }
      }
    }
    cur = cur.of_1;
  }
  var tmp0_safe_receiver_0 = exception;
  if (tmp0_safe_receiver_0 == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    $this.yb(tmp0_safe_receiver_0);
  }
  return Unit_instance;
}
function startInternal($this, state) {
  if (state instanceof Empty) {
    if (state.if_1)
      return 0;
    if (!$this.gb_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
      return -1;
    $this.jc();
    return 1;
  } else {
    if (state instanceof InactiveNodeList) {
      if (!$this.gb_1.atomicfu$compareAndSet(state, state.qg_1))
        return -1;
      $this.jc();
      return 1;
    } else {
      return 0;
    }
  }
}
function makeNode($this, handler, onCancelling) {
  var tmp;
  if (onCancelling) {
    var tmp0_elvis_lhs = handler instanceof JobCancellingNode ? handler : null;
    tmp = tmp0_elvis_lhs == null ? new InvokeOnCancelling(handler) : tmp0_elvis_lhs;
  } else {
    var tmp1_safe_receiver = handler instanceof JobNode ? handler : null;
    var tmp_0;
    if (tmp1_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.JobSupport.makeNode.<anonymous>' call
      // Inline function 'kotlinx.coroutines.assert' call
      tmp_0 = tmp1_safe_receiver;
    }
    var tmp2_elvis_lhs = tmp_0;
    tmp = tmp2_elvis_lhs == null ? new InvokeOnCompletion(handler) : tmp2_elvis_lhs;
  }
  var node = tmp;
  node.ag_1 = $this;
  return node;
}
function addLastAtomic($this, expect, list, node) {
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIf' call
    // Inline function 'kotlinx.coroutines.JobSupport.addLastAtomic.<anonymous>' call
    if (!($this.gc() === expect)) {
      tmp$ret$1 = false;
      break $l$block;
    }
    list.vf(node);
    tmp$ret$1 = true;
  }
  return tmp$ret$1;
}
function promoteEmptyToNodeList($this, state) {
  var list = new NodeList();
  var update = state.if_1 ? list : new InactiveNodeList(list);
  $this.gb_1.atomicfu$compareAndSet(state, update);
}
function promoteSingleToNodeList($this, state) {
  state.cg(new NodeList());
  // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
  var list = state.of_1;
  $this.gb_1.atomicfu$compareAndSet(state, list);
}
function cancelMakeCompleting($this, cause) {
  // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
  while (true) {
    // Inline function 'kotlinx.coroutines.JobSupport.cancelMakeCompleting.<anonymous>' call
    var state = $this.gc();
    var tmp;
    if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
      tmp = true;
    } else {
      var tmp_0;
      if (state instanceof Finishing) {
        tmp_0 = state.rg();
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    if (tmp) {
      return get_COMPLETING_ALREADY();
    }
    var proposedUpdate = new CompletedExceptionally(createCauseException($this, cause));
    var finalState = tryMakeCompleting($this, state, proposedUpdate);
    if (!(finalState === get_COMPLETING_RETRY()))
      return finalState;
  }
}
function createCauseException($this, cause) {
  var tmp;
  if (cause == null ? true : cause instanceof Error) {
    var tmp_0;
    if (cause == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp_0 = JobCancellationException.pg(null == null ? $this.qb() : null, null, $this);
    } else {
      tmp_0 = cause;
    }
    tmp = tmp_0;
  } else {
    tmp = ((!(cause == null) ? isInterface(cause, ParentJob) : false) ? cause : THROW_CCE()).xc();
  }
  return tmp;
}
function makeCancelling($this, cause) {
  var causeExceptionCache = null;
  // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
  while (true) {
    $l$block: {
      // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>' call
      var state = $this.gc();
      if (state instanceof Finishing) {
        // Inline function 'kotlinx.coroutines.internal.synchronized' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
        // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
        if (state.sg())
          return get_TOO_LATE_TO_CANCEL();
        var wasCancelling = state.hg();
        if (!(cause == null) ? true : !wasCancelling) {
          var tmp0_elvis_lhs = causeExceptionCache;
          var tmp;
          if (tmp0_elvis_lhs == null) {
            // Inline function 'kotlin.also' call
            var this_0 = createCauseException($this, cause);
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
            causeExceptionCache = this_0;
            tmp = this_0;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var causeException = tmp;
          state.tg(causeException);
        }
        // Inline function 'kotlin.takeIf' call
        var this_1 = state.ug();
        // Inline function 'kotlin.contracts.contract' call
        var tmp_0;
        // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
        if (!wasCancelling) {
          tmp_0 = this_1;
        } else {
          tmp_0 = null;
        }
        var notifyRootCause = tmp_0;
        if (notifyRootCause == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          notifyCancelling($this, state.dg_1, notifyRootCause);
        }
        return get_COMPLETING_ALREADY();
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          var tmp2_elvis_lhs = causeExceptionCache;
          var tmp_1;
          if (tmp2_elvis_lhs == null) {
            // Inline function 'kotlin.also' call
            var this_2 = createCauseException($this, cause);
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
            causeExceptionCache = this_2;
            tmp_1 = this_2;
          } else {
            tmp_1 = tmp2_elvis_lhs;
          }
          var causeException_0 = tmp_1;
          if (state.nb()) {
            if (tryMakeCancelling($this, state, causeException_0))
              return get_COMPLETING_ALREADY();
          } else {
            var finalState = tryMakeCompleting($this, state, new CompletedExceptionally(causeException_0));
            if (finalState === get_COMPLETING_ALREADY()) {
              // Inline function 'kotlin.error' call
              var message = 'Cannot happen in ' + toString_0(state);
              throw IllegalStateException.e3(toString_1(message));
            } else if (finalState === get_COMPLETING_RETRY()) {
              break $l$block;
            } else
              return finalState;
          }
        } else {
          return get_TOO_LATE_TO_CANCEL();
        }
      }
    }
  }
}
function getOrPromoteCancellingList($this, state) {
  var tmp1_elvis_lhs = state.jf();
  var tmp;
  if (tmp1_elvis_lhs == null) {
    var tmp_0;
    if (state instanceof Empty) {
      tmp_0 = new NodeList();
    } else {
      if (state instanceof JobNode) {
        promoteSingleToNodeList($this, state);
        tmp_0 = null;
      } else {
        var message = 'State should have list: ' + state;
        throw IllegalStateException.e3(toString_1(message));
      }
    }
    tmp = tmp_0;
  } else {
    tmp = tmp1_elvis_lhs;
  }
  return tmp;
}
function tryMakeCancelling($this, state, rootCause) {
  // Inline function 'kotlinx.coroutines.assert' call
  // Inline function 'kotlinx.coroutines.assert' call
  var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
  var tmp;
  if (tmp0_elvis_lhs == null) {
    return false;
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var list = tmp;
  var cancelling = new Finishing(list, false, rootCause);
  if (!$this.gb_1.atomicfu$compareAndSet(state, cancelling))
    return false;
  notifyCancelling($this, list, rootCause);
  return true;
}
function tryMakeCompleting($this, state, proposedUpdate) {
  if (!(!(state == null) ? isInterface(state, Incomplete) : false))
    return get_COMPLETING_ALREADY();
  var tmp;
  var tmp_0;
  var tmp_1;
  if (state instanceof Empty) {
    tmp_1 = true;
  } else {
    tmp_1 = state instanceof JobNode;
  }
  if (tmp_1) {
    tmp_0 = !(state instanceof ChildHandleNode);
  } else {
    tmp_0 = false;
  }
  if (tmp_0) {
    tmp = !(proposedUpdate instanceof CompletedExceptionally);
  } else {
    tmp = false;
  }
  if (tmp) {
    if (tryFinalizeSimpleState($this, state, proposedUpdate)) {
      return proposedUpdate;
    }
    return get_COMPLETING_RETRY();
  }
  return tryMakeCompletingSlowPath($this, state, proposedUpdate);
}
function tryMakeCompletingSlowPath($this, state, proposedUpdate) {
  var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
  var tmp;
  if (tmp0_elvis_lhs == null) {
    return get_COMPLETING_RETRY();
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var list = tmp;
  var tmp1_elvis_lhs = state instanceof Finishing ? state : null;
  var finishing = tmp1_elvis_lhs == null ? new Finishing(list, false, null) : tmp1_elvis_lhs;
  var notifyRootCause = null;
  // Inline function 'kotlinx.coroutines.internal.synchronized' call
  // Inline function 'kotlin.contracts.contract' call
  // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
  if (finishing.rg())
    return get_COMPLETING_ALREADY();
  finishing.vg(true);
  if (!(finishing === state)) {
    if (!$this.gb_1.atomicfu$compareAndSet(state, finishing))
      return get_COMPLETING_RETRY();
  }
  // Inline function 'kotlinx.coroutines.assert' call
  var wasCancelling = finishing.hg();
  var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    finishing.tg(tmp0_safe_receiver.sb_1);
  }
  // Inline function 'kotlin.takeIf' call
  var this_0 = finishing.ug();
  // Inline function 'kotlin.contracts.contract' call
  var tmp_0;
  // Inline function 'kotlinx.coroutines.JobSupport.tryMakeCompletingSlowPath.<anonymous>.<anonymous>' call
  if (!wasCancelling) {
    tmp_0 = this_0;
  } else {
    tmp_0 = null;
  }
  notifyRootCause = tmp_0;
  var tmp2_safe_receiver = notifyRootCause;
  if (tmp2_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    notifyCancelling($this, list, tmp2_safe_receiver);
  }
  var child = firstChild($this, state);
  if (!(child == null) ? tryWaitForChild($this, finishing, child, proposedUpdate) : false)
    return get_COMPLETING_WAITING_CHILDREN();
  return finalizeFinishingState($this, finishing, proposedUpdate);
}
function _get_exceptionOrNull__b3j7js(_this__u8e3s4, $this) {
  var tmp0_safe_receiver = _this__u8e3s4 instanceof CompletedExceptionally ? _this__u8e3s4 : null;
  return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.sb_1;
}
function firstChild($this, state) {
  var tmp1_elvis_lhs = state instanceof ChildHandleNode ? state : null;
  var tmp;
  if (tmp1_elvis_lhs == null) {
    var tmp0_safe_receiver = state.jf();
    tmp = tmp0_safe_receiver == null ? null : nextChild(tmp0_safe_receiver, $this);
  } else {
    tmp = tmp1_elvis_lhs;
  }
  return tmp;
}
function tryWaitForChild($this, state, child, proposedUpdate) {
  var $this_0 = $this;
  var state_0 = state;
  var child_0 = child;
  var proposedUpdate_0 = proposedUpdate;
  do {
    $l$0: do {
      var tmp = child_0.ah_1;
      // Inline function 'kotlinx.coroutines.asHandler' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = new ChildCompletion($this_0, state_0, child_0, proposedUpdate_0);
      var handle = tmp.oc(VOID, false, tmp$ret$1);
      if (!(handle === NonDisposableHandle_instance))
        return true;
      var tmp0_elvis_lhs = nextChild(child_0, $this_0);
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        return false;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var nextChild_0 = tmp_0;
      $this_0 = $this_0;
      state_0 = state_0;
      child_0 = nextChild_0;
      proposedUpdate_0 = proposedUpdate_0;

    }
     while (false);
  }
   while (true);
}
function continueCompleting($this, state, lastChild, proposedUpdate) {
  // Inline function 'kotlinx.coroutines.assert' call
  var waitChild = nextChild(lastChild, $this);
  if (!(waitChild == null) ? tryWaitForChild($this, state, waitChild, proposedUpdate) : false)
    return Unit_instance;
  var finalState = finalizeFinishingState($this, state, proposedUpdate);
  $this.xb(finalState);
}
function nextChild(_this__u8e3s4, $this) {
  var cur = _this__u8e3s4;
  $l$loop: while (true) {
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
    if (!cur.qf_1) {
      break;
    }
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
    cur = cur.pf_1;
  }
  $l$loop_0: while (true) {
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    cur = cur.of_1;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
    if (cur.qf_1)
      continue;
    if (cur instanceof ChildHandleNode)
      return cur;
    if (cur instanceof NodeList)
      return null;
  }
}
function stateString($this, state) {
  var tmp;
  if (state instanceof Finishing) {
    tmp = state.hg() ? 'Cancelling' : state.rg() ? 'Completing' : 'Active';
  } else {
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state.nb() ? 'Active' : 'New';
    } else {
      if (state instanceof CompletedExceptionally) {
        tmp = 'Cancelled';
      } else {
        tmp = 'Completed';
      }
    }
  }
  return tmp;
}
function boxIncomplete(_this__u8e3s4) {
  _init_properties_JobSupport_kt__68f172();
  var tmp;
  if (!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Incomplete) : false) {
    tmp = new IncompleteStateBox(_this__u8e3s4);
  } else {
    tmp = _this__u8e3s4;
  }
  return tmp;
}
function handlesException($this) {
  var tmp = $this.fc();
  var tmp0_safe_receiver = tmp instanceof ChildHandleNode ? tmp : null;
  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.bg();
  var tmp_0;
  if (tmp1_elvis_lhs == null) {
    return false;
  } else {
    tmp_0 = tmp1_elvis_lhs;
  }
  var parentJob = tmp_0;
  while (true) {
    if (parentJob.bd())
      return true;
    var tmp_1 = parentJob.fc();
    var tmp2_safe_receiver = tmp_1 instanceof ChildHandleNode ? tmp_1 : null;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.bg();
    var tmp_2;
    if (tmp3_elvis_lhs == null) {
      return false;
    } else {
      tmp_2 = tmp3_elvis_lhs;
    }
    parentJob = tmp_2;
  }
}
var properties_initialized_JobSupport_kt_5iq8a4;
function _init_properties_JobSupport_kt__68f172() {
  if (!properties_initialized_JobSupport_kt_5iq8a4) {
    properties_initialized_JobSupport_kt_5iq8a4 = true;
    COMPLETING_ALREADY = new Symbol_0('COMPLETING_ALREADY');
    COMPLETING_WAITING_CHILDREN = new Symbol_0('COMPLETING_WAITING_CHILDREN');
    COMPLETING_RETRY = new Symbol_0('COMPLETING_RETRY');
    TOO_LATE_TO_CANCEL = new Symbol_0('TOO_LATE_TO_CANCEL');
    SEALED = new Symbol_0('SEALED');
    EMPTY_NEW = new Empty(false);
    EMPTY_ACTIVE = new Empty(true);
  }
}
function SupervisorJob(parent) {
  parent = parent === VOID ? null : parent;
  return new SupervisorJobImpl(parent);
}
var Unconfined_instance;
function Unconfined_getInstance() {
  if (Unconfined_instance === VOID)
    new Unconfined();
  return Unconfined_instance;
}
var Key_instance_3;
function Key_getInstance_3() {
  return Key_instance_3;
}
function handleUncaughtCoroutineException(context, exception) {
  var tmp0_iterator = get_platformExceptionHandlers().m();
  while (tmp0_iterator.t()) {
    var handler = tmp0_iterator.u();
    try {
      handler.de(context, exception);
    } catch ($p) {
      if ($p instanceof ExceptionSuccessfullyProcessed) {
        var _ = $p;
        return Unit_instance;
      } else {
        if ($p instanceof Error) {
          var t = $p;
          propagateExceptionFinalResort(handlerException(exception, t));
        } else {
          throw $p;
        }
      }
    }
  }
  try {
    addSuppressed(exception, DiagnosticCoroutineContextException.ni(context));
  } catch ($p) {
    if ($p instanceof Error) {
      var e = $p;
    } else {
      throw $p;
    }
  }
  propagateExceptionFinalResort(exception);
}
function get_UNDEFINED() {
  _init_properties_DispatchedContinuation_kt__tnmqc0();
  return UNDEFINED;
}
var UNDEFINED;
function get_REUSABLE_CLAIMED() {
  _init_properties_DispatchedContinuation_kt__tnmqc0();
  return REUSABLE_CLAIMED;
}
var REUSABLE_CLAIMED;
function _get_reusableCancellableContinuation__9qex09($this) {
  var tmp = $this.be_1.kotlinx$atomicfu$value;
  return tmp instanceof CancellableContinuationImpl ? tmp : null;
}
function resumeCancellableWith(_this__u8e3s4, result, onCancellation) {
  onCancellation = onCancellation === VOID ? null : onCancellation;
  _init_properties_DispatchedContinuation_kt__tnmqc0();
  var tmp;
  if (_this__u8e3s4 instanceof DispatchedContinuation) {
    var state = toState(result, onCancellation);
    var tmp_0;
    if (_this__u8e3s4.xd_1.ud(_this__u8e3s4.g8())) {
      _this__u8e3s4.zd_1 = state;
      _this__u8e3s4.oe_1 = get_MODE_CANCELLABLE();
      _this__u8e3s4.xd_1.vd(_this__u8e3s4.g8(), _this__u8e3s4);
      tmp_0 = Unit_instance;
    } else {
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
        var mode = get_MODE_CANCELLABLE();
        // Inline function 'kotlinx.coroutines.assert' call
        var eventLoop = ThreadLocalEventLoop_getInstance().xe();
        if (false ? eventLoop.se() : false) {
          break $l$block;
        }
        var tmp_1;
        if (eventLoop.re()) {
          _this__u8e3s4.zd_1 = state;
          _this__u8e3s4.oe_1 = mode;
          eventLoop.qe(_this__u8e3s4);
          tmp_1 = true;
        } else {
          // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
          eventLoop.te(true);
          try {
            // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancellableWith.<anonymous>' call
            var tmp$ret$3;
            $l$block_0: {
              // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancelled' call
              var job = _this__u8e3s4.g8().h8(Key_instance_2);
              if (!(job == null) ? !job.nb() : false) {
                var cause = job.kc();
                _this__u8e3s4.si(state, cause);
                // Inline function 'kotlin.coroutines.resumeWithException' call
                // Inline function 'kotlin.Companion.failure' call
                var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
                _this__u8e3s4.n8(tmp$ret$1);
                tmp$ret$3 = true;
                break $l$block_0;
              }
              tmp$ret$3 = false;
            }
            if (!tmp$ret$3) {
              // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
              // Inline function 'kotlinx.coroutines.withContinuationContext' call
              _this__u8e3s4.yd_1;
              _this__u8e3s4.ae_1;
              _this__u8e3s4.yd_1.n8(result);
            }
            while (eventLoop.ne()) {
            }
          } catch ($p) {
            if ($p instanceof Error) {
              var e = $p;
              _this__u8e3s4.ri(e, null);
            } else {
              throw $p;
            }
          }
          finally {
            eventLoop.ue(true);
          }
          tmp_1 = false;
        }
      }
      tmp_0 = Unit_instance;
    }
    tmp = tmp_0;
  } else {
    _this__u8e3s4.n8(result);
    tmp = Unit_instance;
  }
  return tmp;
}
var properties_initialized_DispatchedContinuation_kt_2siadq;
function _init_properties_DispatchedContinuation_kt__tnmqc0() {
  if (!properties_initialized_DispatchedContinuation_kt_2siadq) {
    properties_initialized_DispatchedContinuation_kt_2siadq = true;
    UNDEFINED = new Symbol_0('UNDEFINED');
    REUSABLE_CLAIMED = new Symbol_0('REUSABLE_CLAIMED');
  }
}
function get_MODE_CANCELLABLE() {
  return MODE_CANCELLABLE;
}
var MODE_CANCELLABLE;
function get_MODE_UNINITIALIZED() {
  return MODE_UNINITIALIZED;
}
var MODE_UNINITIALIZED;
function get_isCancellableMode(_this__u8e3s4) {
  return _this__u8e3s4 === 1 ? true : _this__u8e3s4 === 2;
}
function get_MODE_ATOMIC() {
  return MODE_ATOMIC;
}
var MODE_ATOMIC;
function startCoroutineCancellable(_this__u8e3s4, fatalCompletion) {
  var tmp;
  try {
    var tmp_0 = intercepted(_this__u8e3s4);
    // Inline function 'kotlin.Companion.success' call
    var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
    resumeCancellableWith(tmp_0, tmp$ret$0);
    tmp = Unit_instance;
  } catch ($p) {
    var tmp_1;
    if ($p instanceof Error) {
      var e = $p;
      dispatcherFailure$accessor$glj1hg(fatalCompletion, e);
      tmp_1 = Unit_instance;
    } else {
      throw $p;
    }
    tmp = tmp_1;
  }
  return tmp;
}
function startCoroutineCancellable_0(_this__u8e3s4, receiver, completion, onCancellation) {
  onCancellation = onCancellation === VOID ? null : onCancellation;
  var tmp;
  try {
    var tmp_0 = intercepted(createCoroutineUnintercepted(_this__u8e3s4, receiver, completion));
    // Inline function 'kotlin.Companion.success' call
    var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
    resumeCancellableWith(tmp_0, tmp$ret$0, onCancellation);
    tmp = Unit_instance;
  } catch ($p) {
    var tmp_1;
    if ($p instanceof Error) {
      var e = $p;
      dispatcherFailure$accessor$glj1hg(completion, e);
      tmp_1 = Unit_instance;
    } else {
      throw $p;
    }
    tmp = tmp_1;
  }
  return tmp;
}
function dispatcherFailure(completion, e) {
  // Inline function 'kotlin.Companion.failure' call
  var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(e));
  completion.n8(tmp$ret$0);
  throw e;
}
function dispatcherFailure$accessor$glj1hg(completion, e) {
  return dispatcherFailure(completion, e);
}
function startCoroutineUndispatched(_this__u8e3s4, receiver, completion) {
  $l$block: {
    // Inline function 'kotlinx.coroutines.intrinsics.startDirect' call
    // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
    var actualCompletion = completion;
    var tmp;
    try {
      // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>' call
      // Inline function 'kotlinx.coroutines.withCoroutineContext' call
      completion.g8();
      // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
      // Inline function 'kotlin.js.asDynamic' call
      var a = _this__u8e3s4;
      tmp = typeof a === 'function' ? a(receiver, actualCompletion) : _this__u8e3s4.c9(receiver, actualCompletion);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var tmp$ret$6 = _Result___init__impl__xyqfz8(createFailure(e));
        actualCompletion.n8(tmp$ret$6);
        break $l$block;
      } else {
        throw $p;
      }
    }
    var value = tmp;
    if (!(value === get_COROUTINE_SUSPENDED())) {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var value_0 = (value == null ? true : !(value == null)) ? value : THROW_CCE();
      var tmp$ret$9 = _Result___init__impl__xyqfz8(value_0);
      actualCompletion.n8(tmp$ret$9);
    }
  }
}
function invokeIt(_this__u8e3s4, cause) {
  if (typeof _this__u8e3s4 === 'function')
    _this__u8e3s4(cause);
  else {
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.invoke(cause);
  }
}
function toDebugString(_this__u8e3s4) {
  return toString_1(_this__u8e3s4);
}
function createDefaultDispatcher() {
  var tmp;
  if (isJsdom()) {
    tmp = NodeDispatcher_getInstance();
  } else {
    var tmp_0;
    var tmp_1;
    if (!(typeof window === 'undefined')) {
      // Inline function 'kotlin.js.asDynamic' call
      tmp_1 = window != null;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      // Inline function 'kotlin.js.asDynamic' call
      tmp_0 = !(typeof window.addEventListener === 'undefined');
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = asCoroutineDispatcher(window);
    } else {
      if (typeof process === 'undefined' ? true : typeof process.nextTick === 'undefined') {
        tmp = SetTimeoutDispatcher_getInstance();
      } else {
        tmp = NodeDispatcher_getInstance();
      }
    }
  }
  return tmp;
}
function isJsdom() {
  return ((((!(typeof navigator === 'undefined') ? navigator != null : false) ? navigator.userAgent != null : false) ? !(typeof navigator.userAgent === 'undefined') : false) ? !(typeof navigator.userAgent.match === 'undefined') : false) ? navigator.userAgent.match('\\bjsdom\\b') : false;
}
function newCoroutineContext(_this__u8e3s4, context) {
  var combined = _this__u8e3s4.mb().va(context);
  return (!(combined === Dispatchers_getInstance().ee_1) ? combined.h8(Key_instance) == null : false) ? combined.va(Dispatchers_getInstance().ee_1) : combined;
}
function get_coroutineName(_this__u8e3s4) {
  return null;
}
var counter;
function get_DEBUG() {
  return DEBUG;
}
var DEBUG;
function get_classSimpleName(_this__u8e3s4) {
  var tmp0_elvis_lhs = getKClassFromExpression(_this__u8e3s4).f5();
  return tmp0_elvis_lhs == null ? 'Unknown' : tmp0_elvis_lhs;
}
function get_hexAddress(_this__u8e3s4) {
  // Inline function 'kotlin.js.asDynamic' call
  var result = _this__u8e3s4.__debug_counter;
  if (!(typeof result === 'number')) {
    counter = counter + 1 | 0;
    result = counter;
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.__debug_counter = result;
  }
  return ((!(result == null) ? typeof result === 'number' : false) ? result : THROW_CCE()).toString();
}
var NodeDispatcher_instance;
function NodeDispatcher_getInstance() {
  if (NodeDispatcher_instance === VOID)
    new NodeDispatcher();
  return NodeDispatcher_instance;
}
function ScheduledMessageQueue$processQueue$lambda(this$0) {
  return function () {
    this$0.kj();
    return Unit_instance;
  };
}
function WindowMessageQueue$lambda(this$0) {
  return function (event) {
    var tmp;
    if (event.source == this$0.uj_1 ? event.data == this$0.vj_1 : false) {
      event.stopPropagation();
      this$0.kj();
      tmp = Unit_instance;
    }
    return Unit_instance;
  };
}
function WindowMessageQueue$schedule$lambda(this$0) {
  return function (it) {
    this$0.kj();
    return Unit_instance;
  };
}
function asCoroutineDispatcher(_this__u8e3s4) {
  // Inline function 'kotlin.js.asDynamic' call
  var tmp0_elvis_lhs = _this__u8e3s4.coroutineDispatcher;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    // Inline function 'kotlin.also' call
    var this_0 = new WindowDispatcher(_this__u8e3s4);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.asCoroutineDispatcher.<anonymous>' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.coroutineDispatcher = this_0;
    tmp = this_0;
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
function propagateExceptionFinalResort(exception) {
  console.error(exception.toString());
}
var Dispatchers_instance;
function Dispatchers_getInstance() {
  if (Dispatchers_instance === VOID)
    new Dispatchers();
  return Dispatchers_instance;
}
function createEventLoop() {
  return new UnconfinedEventLoop();
}
function unsupported() {
  throw UnsupportedOperationException.k5('runBlocking event loop is not supported');
}
function get_taskContext(_this__u8e3s4) {
  return TaskContext_instance;
}
var TaskContext_instance;
function TaskContext_getInstance() {
  return TaskContext_instance;
}
function identitySet(expectedSize) {
  return HashSet.t2(expectedSize);
}
function get_platformExceptionHandlers_() {
  _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf();
  return platformExceptionHandlers_;
}
var platformExceptionHandlers_;
function get_platformExceptionHandlers() {
  _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf();
  return get_platformExceptionHandlers_();
}
var properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx;
function _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf() {
  if (!properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx) {
    properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx = true;
    // Inline function 'kotlin.collections.mutableSetOf' call
    platformExceptionHandlers_ = LinkedHashSet.u4();
  }
}
var SetTimeoutDispatcher_instance;
function SetTimeoutDispatcher_getInstance() {
  if (SetTimeoutDispatcher_instance === VOID)
    new SetTimeoutDispatcher();
  return SetTimeoutDispatcher_instance;
}
function unwrap(exception) {
  return exception;
}
function recoverStackTrace(exception, continuation) {
  return exception;
}
function threadContextElements(context) {
  return 0;
}
function commonThreadLocal(name) {
  return new CommonThreadLocal();
}
function iteratorFor(source) {
  // Inline function 'js.iterable.JsIterator.iterator' call
  var this_0 = source[Symbol.iterator]();
  return iteratorFor_0(this_0);
}
function iteratorFor_0(source) {
  return iterator(iteratorFor$slambda_0(source, null));
}
function iteratorFor$slambda_0($source, resultContinuation) {
  var i = new iteratorFor$slambda($source, resultContinuation);
  var l = function ($this$iterator, $completion) {
    return i.wk($this$iterator, $completion);
  };
  l.$arity = 1;
  return l;
}
var HTML_instance;
function HTML_getInstance() {
  return HTML_instance;
}
function get_CHILD_ARRAY() {
  _init_properties_ChildrenBuilder_kt__gexuom();
  return CHILD_ARRAY;
}
var CHILD_ARRAY;
function get_DEFAULT_KEY() {
  _init_properties_ChildrenBuilder_kt__gexuom();
  return DEFAULT_KEY;
}
var DEFAULT_KEY;
function addChildNode(_this__u8e3s4, node) {
  _init_properties_ChildrenBuilder_kt__gexuom();
  // Inline function 'react.childArray' call
  // Inline function 'kotlin.js.asDynamic' call
  if (!(_this__u8e3s4[get_CHILD_ARRAY()] == null)) {
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'react.childArray' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4[get_CHILD_ARRAY()].push(node);
  } else {
    // Inline function 'react.childArray' call
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var value = [node];
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4[get_CHILD_ARRAY()] = value;
  }
}
function addChild(_this__u8e3s4, type, props) {
  _init_properties_ChildrenBuilder_kt__gexuom();
  addChildElement(_this__u8e3s4, type, props, VOID, getDefaultKey(_this__u8e3s4));
}
function addChild_0(_this__u8e3s4, type) {
  _init_properties_ChildrenBuilder_kt__gexuom();
  addChildElement(_this__u8e3s4, type, VOID, VOID, getDefaultKey(_this__u8e3s4));
}
function addChild_1(_this__u8e3s4, type, block) {
  _init_properties_ChildrenBuilder_kt__gexuom();
  var defaultKey = getDefaultKey(_this__u8e3s4);
  // Inline function 'js.objects.jso' call
  // Inline function 'kotlin.apply' call
  // Inline function 'js.objects.jso' call
  var this_0 = {};
  // Inline function 'kotlin.contracts.contract' call
  block(this_0);
  var props = this_0;
  addChildElement(_this__u8e3s4, type, props, getChildArray(props), defaultKey);
}
function addChild_2(_this__u8e3s4, provider, value, block) {
  _init_properties_ChildrenBuilder_kt__gexuom();
  addChild_1(_this__u8e3s4, provider, addChild$lambda(value, block));
}
function addChild_3(_this__u8e3s4, context, value, block) {
  _init_properties_ChildrenBuilder_kt__gexuom();
  addChild_2(_this__u8e3s4, context.Provider, value, block);
}
function addChildElement(_this__u8e3s4, type, props, children, defaultKey) {
  props = props === VOID ? null : props;
  children = children === VOID ? null : children;
  _init_properties_ChildrenBuilder_kt__gexuom();
  var childProps_0 = childProps(props, defaultKey);
  var tmp;
  if (!(children == null)) {
    tmp = createElement.apply(null, [type, childProps_0].concat([].slice.call(children.slice())));
  } else {
    tmp = createElement(type, childProps_0);
  }
  var element = tmp;
  addChildNode(_this__u8e3s4, element);
}
function getDefaultKey(_this__u8e3s4) {
  _init_properties_ChildrenBuilder_kt__gexuom();
  // Inline function 'kotlin.js.asDynamic' call
  var key = _this__u8e3s4[get_DEFAULT_KEY()];
  // Inline function 'kotlin.js.asDynamic' call
  delete(_this__u8e3s4[get_DEFAULT_KEY()]);
  return key;
}
function getChildArray(_this__u8e3s4) {
  _init_properties_ChildrenBuilder_kt__gexuom();
  // Inline function 'kotlin.js.asDynamic' call
  return _this__u8e3s4[get_CHILD_ARRAY()];
}
function childProps(props, defaultKey) {
  _init_properties_ChildrenBuilder_kt__gexuom();
  if (defaultKey == null)
    return props;
  if (props == null) {
    // Inline function 'js.objects.jso' call
    // Inline function 'kotlin.apply' call
    // Inline function 'js.objects.jso' call
    var this_0 = {};
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'react.childProps.<anonymous>' call
    this_0.key = defaultKey;
    return this_0;
  }
  if (!(props.key == null))
    return props;
  // Inline function 'js.objects.jso' call
  // Inline function 'kotlin.apply' call
  // Inline function 'js.objects.jso' call
  var this_1 = {};
  // Inline function 'kotlin.contracts.contract' call
  // Inline function 'react.childProps.<anonymous>' call
  // Inline function 'react.Props.unaryPlus' call
  Object.assign(this_1, props);
  this_1.key = defaultKey;
  return this_1;
}
function getChildArray_0(_this__u8e3s4) {
  _init_properties_ChildrenBuilder_kt__gexuom();
  // Inline function 'kotlin.js.asDynamic' call
  return _this__u8e3s4[get_CHILD_ARRAY()];
}
function addChild$lambda($value, $block) {
  return function ($this$addChild) {
    $this$addChild.value = $value;
    $block($this$addChild);
    return Unit_instance;
  };
}
var properties_initialized_ChildrenBuilder_kt_gby2z0;
function _init_properties_ChildrenBuilder_kt__gexuom() {
  if (!properties_initialized_ChildrenBuilder_kt_gby2z0) {
    properties_initialized_ChildrenBuilder_kt_gby2z0 = true;
    CHILD_ARRAY = Symbol('@@child-array');
    DEFAULT_KEY = Symbol('@@default-key');
  }
}
function createEffectCallback(effect) {
  return createEffectCallback$lambda(effect);
}
function buildCleanup(cleanups) {
  // Inline function 'kotlin.collections.isEmpty' call
  if (cleanups.length === 0)
    return undefined;
  return buildCleanup$lambda(cleanups);
}
function createEffectCallback$lambda($effect) {
  return function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var cleanups = [];
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    $effect(cleanups);
    return buildCleanup(cleanups);
  };
}
function buildCleanup$lambda($cleanups) {
  return function () {
    var indexedObject = $cleanups;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var cleanup = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      cleanup();
    }
    return Unit_instance;
  };
}
function ReactNode(source) {
  // Inline function 'react.ReactNode' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  return toString(source);
}
function useEffectOnce(effect) {
  var callback = createEffectCallback(effect);
  // Inline function 'kotlin.emptyArray' call
  var tmp$ret$0 = [];
  useEffect(callback, tmp$ret$0);
}
function useEffect_0(dependencies, effect) {
  var callback = createEffectCallback(effect);
  useEffect(callback, dependencies);
}
function FC(block) {
  var component = FC$lambda(block);
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  return component;
}
function FC_0(block) {
  var component = FC$lambda_0(block);
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  return component;
}
function FC$lambda$lambda($block, $props) {
  return function ($this$createElementOrNull) {
    $block($this$createElementOrNull, $props);
    return Unit_instance;
  };
}
function FC$lambda($block) {
  return function (props) {
    return createElementOrNull(FC$lambda$lambda($block, props));
  };
}
function FC$lambda_0($block) {
  return function () {
    return createElementOrNull($block);
  };
}
function create(_this__u8e3s4, block) {
  // Inline function 'js.objects.jso' call
  // Inline function 'kotlin.apply' call
  // Inline function 'js.objects.jso' call
  var this_0 = {};
  // Inline function 'kotlin.contracts.contract' call
  block(this_0);
  var props = this_0;
  var tmp0_elvis_lhs = getChildArray(props);
  var tmp;
  if (tmp0_elvis_lhs == null) {
    // Inline function 'kotlin.emptyArray' call
    tmp = [];
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var children = tmp;
  return createElement.apply(null, [_this__u8e3s4, props].concat([].slice.call(children.slice())));
}
function create_0(_this__u8e3s4) {
  return createElement(_this__u8e3s4);
}
function createElementOrNull(block) {
  // Inline function 'js.objects.jso' call
  // Inline function 'kotlin.apply' call
  // Inline function 'js.objects.jso' call
  var this_0 = {};
  // Inline function 'kotlin.contracts.contract' call
  block(this_0);
  var tmp0_elvis_lhs = getChildArray_0(this_0);
  var tmp;
  if (tmp0_elvis_lhs == null) {
    return null;
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var children = tmp;
  return createElement.apply(null, [Fragment, VOID].concat([].slice.call(children.slice())));
}
var ReactHTML_instance;
function ReactHTML_getInstance() {
  return ReactHTML_instance;
}
function get_MainJs() {
  _init_properties_SlideShow_kt__e24f50();
  return MainJs;
}
var MainJs;
function get_Css() {
  _init_properties_SlideShow_kt__e24f50();
  return Css;
}
var Css;
function get_SlideShowElement() {
  _init_properties_SlideShow_kt__e24f50();
  return SlideShowElement_0;
}
var SlideShowElement_0;
function SlideShowElement$lambda($this$FC, props) {
  _init_properties_SlideShow_kt__e24f50();
  var ref = useRef(null);
  useEffectOnce(SlideShowElement$lambda$lambda(ref, props));
  // Inline function 'react.ChildrenBuilder.invoke' call
  var this_0 = Suspense;
  var block = SlideShowElement$lambda$lambda_0(ref);
  addChild_1($this$FC, this_0, block);
  return Unit_instance;
}
function SlideShowElement$lambda$lambda$slambda$lambda(it) {
  return get_Css();
}
function SlideShowElement$lambda$lambda$slambda$lambda_0($props, $view) {
  return function (it) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    var indexedObject = $props.values;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'SlideShowElement.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var photo = document.createElement('img');
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.contracts.contract' call
      photo.src = element.src;
      photo.alt = element.alt;
      photo.id = element.id;
      photo.draggable = false;
      $view.appendChild(photo);
    }
    return Unit_instance;
  };
}
function SlideShowElement$lambda$lambda$slambda$lambda_1($view) {
  return function (it) {
    var style = document.createElement('link');
    // Inline function 'kotlin.js.asDynamic' call
    style.rel = 'stylesheet';
    // Inline function 'kotlin.js.asDynamic' call
    style.href = 'slide-show-shadow.css';
    var tmp0_safe_receiver = $view.shadowRoot;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.appendChild(style);
  };
}
function SlideShowElement$lambda$lambda$slambda$lambda$lambda($view, $props) {
  return function (it) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.contracts.contract' call
    var $this$with = $view;
    $this$with.loop = false;
    var tmp0_elvis_lhs = $props.controls;
    $this$with.controls = tmp0_elvis_lhs == null ? 'navigation' : tmp0_elvis_lhs;
    $this$with.active = $props.active;
    return Unit_instance;
  };
}
function SlideShowElement$lambda$lambda$slambda$lambda_2($view, $props) {
  return function (it) {
    return requestAnimationFrame(SlideShowElement$lambda$lambda$slambda$lambda$lambda($view, $props));
  };
}
function SlideShowElement$lambda$lambda$slambda_0($props, $view, resultContinuation) {
  var i = new SlideShowElement$lambda$lambda$slambda($props, $view, resultContinuation);
  var l = function ($this$launch, $completion) {
    return i.jl($this$launch, $completion);
  };
  l.$arity = 1;
  return l;
}
function SlideShowElement$lambda$lambda$lambda($job) {
  return function () {
    $job.sc();
    return Unit_instance;
  };
}
function SlideShowElement$lambda$lambda($ref, $props) {
  return function ($this$useEffectOnce) {
    var view = document.createElement('slide-show');
    var tmp0_safe_receiver = $ref.current;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.appendChild(view);
    var tmp = MainScope();
    var job = launch(tmp, VOID, VOID, SlideShowElement$lambda$lambda$slambda_0($props, view, null));
    $this$useEffectOnce.push(SlideShowElement$lambda$lambda$lambda(job));
    return Unit_instance;
  };
}
function SlideShowElement$lambda$lambda$lambda_0($this$create) {
  _init_properties_SlideShow_kt__e24f50();
  // Inline function 'react.ChildrenBuilder.unaryPlus' call
  // Inline function 'react.ReactNode' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp$ret$2 = 'Web component is lazy-loading';
  addChildNode($this$create, tmp$ret$2);
  return Unit_instance;
}
function SlideShowElement$lambda$lambda$lambda_1($ref) {
  return function ($this$invoke) {
    $this$invoke.ref = $ref;
    return Unit_instance;
  };
}
function SlideShowElement$lambda$lambda_0($ref) {
  return function ($this$invoke) {
    // Inline function 'react.dom.html.ReactHTML.h3' call
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = 'h3';
    $this$invoke.fallback = create(tmp, SlideShowElement$lambda$lambda$lambda_0);
    // Inline function 'react.dom.html.ReactHTML.div' call
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var block = SlideShowElement$lambda$lambda$lambda_1($ref);
    addChild_1($this$invoke, 'div', block);
    return Unit_instance;
  };
}
var properties_initialized_SlideShow_kt_ko354u;
function _init_properties_SlideShow_kt__e24f50() {
  if (!properties_initialized_SlideShow_kt_ko354u) {
    properties_initialized_SlideShow_kt_ko354u = true;
    MainJs = import('@porotkin/slide-show');
    Css = import('@porotkin/slide-show/build/slide-show.css');
    SlideShowElement_0 = FC(SlideShowElement$lambda);
  }
}
var index;
function QueryKey(parentKey, keys) {
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.collections.plus' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  // Inline function 'kotlin.js.asDynamic' call
  // Inline function 'kotlin.js.asDynamic' call
  return parentKey.concat(keys);
}
function renderHeader(source) {
  return flexRender(source.column.columnDef.header, source.getContext());
}
function renderCell(source) {
  return flexRender(source.column.columnDef.cell, source.getContext());
}
function get_QueryClient() {
  _init_properties_App_kt__fk8usv();
  return QueryClient_0;
}
var QueryClient_0;
function get_App() {
  _init_properties_App_kt__fk8usv();
  return App;
}
var App;
function main() {
  _init_properties_App_kt__fk8usv();
  var tmp = document;
  // Inline function 'web.html.HTML.div' call
  // Inline function 'web.html.HtmlTagName' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var root = tmp.createElement('div');
  document.body.appendChild(root);
  createRoot(root).render(create_0(get_App()));
}
function App$lambda($this$FC, it) {
  _init_properties_App_kt__fk8usv();
  // Inline function 'react.ChildrenBuilder.invoke' call
  var this_0 = QueryClientProvider;
  var block = App$lambda$lambda;
  addChild_1($this$FC, this_0, block);
  return Unit_instance;
}
function App$lambda$lambda($this$invoke) {
  _init_properties_App_kt__fk8usv();
  $this$invoke.client = get_QueryClient();
  // Inline function 'react.ChildrenBuilder.invoke' call
  var this_0 = FluentProvider;
  var block = App$lambda$lambda$lambda;
  addChild_1($this$invoke, this_0, block);
  return Unit_instance;
}
function App$lambda$lambda$lambda($this$invoke) {
  _init_properties_App_kt__fk8usv();
  $this$invoke.theme = teamsLightTheme;
  // Inline function 'react.ChildrenBuilder.invoke' call
  var this_0 = RouterProvider;
  var block = App$lambda$lambda$lambda$lambda;
  addChild_1($this$invoke, this_0, block);
  return Unit_instance;
}
function App$lambda$lambda$lambda$lambda($this$invoke) {
  _init_properties_App_kt__fk8usv();
  $this$invoke.router = get_hashRouter();
  return Unit_instance;
}
var properties_initialized_App_kt_kalemn;
function _init_properties_App_kt__fk8usv() {
  if (!properties_initialized_App_kt_kalemn) {
    properties_initialized_App_kt_kalemn = true;
    QueryClient_0 = new QueryClient();
    App = FC(App$lambda);
  }
}
function get_USERS_QUERY_KEY() {
  _init_properties_QueryKey_kt__4lv4t3();
  return USERS_QUERY_KEY;
}
var USERS_QUERY_KEY;
function get_USER_ALBUMS_QUERY_KEY() {
  _init_properties_QueryKey_kt__4lv4t3();
  return USER_ALBUMS_QUERY_KEY;
}
var USER_ALBUMS_QUERY_KEY;
var ALBUM_PHOTOS_QUERY_KEY;
var properties_initialized_QueryKey_kt_j7bvvd;
function _init_properties_QueryKey_kt__4lv4t3() {
  if (!properties_initialized_QueryKey_kt_j7bvvd) {
    properties_initialized_QueryKey_kt_j7bvvd = true;
    // Inline function 'tanstack.query.core.QueryKey' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    USERS_QUERY_KEY = ['users'];
    // Inline function 'tanstack.query.core.QueryKey' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    USER_ALBUMS_QUERY_KEY = ['user-albums'];
    // Inline function 'tanstack.query.core.QueryKey' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    ALBUM_PHOTOS_QUERY_KEY = ['album-photos'];
  }
}
function get_AlbumPhotosSubTable() {
  _init_properties_AlbumPhotosSubTable_kt__9zwtas();
  return AlbumPhotosSubTable;
}
var AlbumPhotosSubTable;
function AlbumPhotosSubTable$lambda($this$FC, it) {
  _init_properties_AlbumPhotosSubTable_kt__9zwtas();
  // Inline function 'js.objects.jso' call
  // Inline function 'kotlin.apply' call
  // Inline function 'js.objects.jso' call
  var this_0 = {};
  // Inline function 'kotlin.contracts.contract' call
  // Inline function 'team.porotkin.components.AlbumPhotosSubTable.<anonymous>.<anonymous>' call
  this_0.data = it.albumPhotos;
  // Inline function 'kotlin.arrayOf' call
  // Inline function 'js.objects.jso' call
  // Inline function 'kotlin.apply' call
  // Inline function 'js.objects.jso' call
  var this_1 = {};
  // Inline function 'kotlin.contracts.contract' call
  // Inline function 'team.porotkin.components.AlbumPhotosSubTable.<anonymous>.<anonymous>.<anonymous>' call
  this_1.id = 'id';
  // Inline function 'tanstack.table.core.StringOrTemplateHeader' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  this_1.header = '\u2116';
  this_1.accessorFn = AlbumPhotosSubTable$lambda$lambda;
  var tmp = this_1;
  // Inline function 'js.objects.jso' call
  // Inline function 'kotlin.apply' call
  // Inline function 'js.objects.jso' call
  var this_2 = {};
  // Inline function 'kotlin.contracts.contract' call
  // Inline function 'team.porotkin.components.AlbumPhotosSubTable.<anonymous>.<anonymous>.<anonymous>' call
  this_2.id = 'preview';
  // Inline function 'tanstack.table.core.StringOrTemplateHeader' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  this_2.header = 'Preview';
  this_2.accessorFn = AlbumPhotosSubTable$lambda$lambda_0;
  // Inline function 'tanstack.table.core.ColumnDefTemplate' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  this_2.cell = AlbumPhotosSubTable$lambda$lambda_1(it);
  var tmp_0 = this_2;
  // Inline function 'js.objects.jso' call
  // Inline function 'kotlin.apply' call
  // Inline function 'js.objects.jso' call
  var this_3 = {};
  // Inline function 'kotlin.contracts.contract' call
  // Inline function 'team.porotkin.components.AlbumPhotosSubTable.<anonymous>.<anonymous>.<anonymous>' call
  this_3.id = 'title';
  // Inline function 'tanstack.table.core.StringOrTemplateHeader' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  this_3.header = 'Photo Title';
  this_3.accessorFn = AlbumPhotosSubTable$lambda$lambda_2;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  this_0.columns = [tmp, tmp_0, this_3];
  this_0.getCoreRowModel = getCoreRowModel();
  this_0.getRowCanExpand = AlbumPhotosSubTable$lambda$lambda_3;
  var table = useReactTable(this_0);
  // Inline function 'react.ChildrenBuilder.invoke' call
  // Inline function 'react.dom.html.ReactHTML.div' call
  // Inline function 'react.IntrinsicType' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var block = AlbumPhotosSubTable$lambda$lambda_4(table);
  addChild_1($this$FC, 'div', block);
  return Unit_instance;
}
function AlbumPhotosSubTable$lambda$lambda(row, _anonymous_parameter_1__qggqgd) {
  _init_properties_AlbumPhotosSubTable_kt__9zwtas();
  return row.id.toString();
}
function AlbumPhotosSubTable$lambda$lambda_0(row, _anonymous_parameter_1__qggqgd) {
  _init_properties_AlbumPhotosSubTable_kt__9zwtas();
  return row.thumbnailUrl;
}
function AlbumPhotosSubTable$lambda$lambda$lambda$lambda$lambda$lambda($template) {
  return function ($this$invoke) {
    // Inline function 'js.objects.jso' call
    // Inline function 'kotlin.apply' call
    // Inline function 'js.objects.jso' call
    var this_0 = {};
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'team.porotkin.components.AlbumPhotosSubTable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    // Inline function 'web.cssom.Cursor.Companion.zoomIn' call
    0;
    this_0.cursor = 'zoom-in';
    $this$invoke.style = this_0;
    $this$invoke.src = $template.row.original.thumbnailUrl;
    $this$invoke.alt = 'preview for ' + $template.row.original.title;
    $this$invoke.draggable = false;
    return Unit_instance;
  };
}
function AlbumPhotosSubTable$lambda$lambda$lambda$lambda$lambda($template) {
  return function ($this$invoke) {
    $this$invoke.disableButtonEnhancement = true;
    // Inline function 'react.dom.html.ReactHTML.img' call
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var block = AlbumPhotosSubTable$lambda$lambda$lambda$lambda$lambda$lambda($template);
    addChild_1($this$invoke, 'img', block);
    return Unit_instance;
  };
}
function AlbumPhotosSubTable$lambda$lambda$lambda$lambda$lambda$lambda$lambda($this$invoke) {
  _init_properties_AlbumPhotosSubTable_kt__9zwtas();
  var tmp = DialogTrigger;
  $this$invoke.action = create(tmp, AlbumPhotosSubTable$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
  // Inline function 'react.ChildrenBuilder.unaryPlus' call
  // Inline function 'react.ReactNode' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp$ret$2 = 'Image Viewer';
  addChildNode($this$invoke, tmp$ret$2);
  return Unit_instance;
}
function AlbumPhotosSubTable$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($this$create) {
  _init_properties_AlbumPhotosSubTable_kt__9zwtas();
  // Inline function 'fluentui.DialogTriggerAction.Companion.close' call
  0;
  $this$create.action = 'close';
  // Inline function 'react.ChildrenBuilder.invoke' call
  var this_0 = Button;
  var block = AlbumPhotosSubTable$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda;
  addChild_1($this$create, this_0, block);
  return Unit_instance;
}
function AlbumPhotosSubTable$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($this$invoke) {
  _init_properties_AlbumPhotosSubTable_kt__9zwtas();
  // Inline function 'fluentui.Temp49.Companion.subtle' call
  0;
  $this$invoke.appearance = 'subtle';
  $this$invoke.icon = create_0(Dismiss24Regular);
  return Unit_instance;
}
function AlbumPhotosSubTable$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($it, $template) {
  return function ($this$invoke) {
    $this$invoke.values = toSlideShowValues($it.albumPhotos);
    $this$invoke.active = $template.row.original.id.toString();
    return Unit_instance;
  };
}
function AlbumPhotosSubTable$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($it, $template) {
  return function ($this$invoke) {
    var this_0 = get_SlideShow();
    var block = AlbumPhotosSubTable$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($it, $template);
    addChild_1($this$invoke, this_0, block);
    return Unit_instance;
  };
}
function AlbumPhotosSubTable$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($it, $template) {
  return function ($this$invoke) {
    // Inline function 'react.dom.html.ReactHTML.div' call
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var block = AlbumPhotosSubTable$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($it, $template);
    addChild_1($this$invoke, 'div', block);
    return Unit_instance;
  };
}
function AlbumPhotosSubTable$lambda$lambda$lambda$lambda$lambda$lambda_0($it, $template) {
  return function ($this$invoke) {
    var this_0 = DialogTitle;
    var block = AlbumPhotosSubTable$lambda$lambda$lambda$lambda$lambda$lambda$lambda;
    addChild_1($this$invoke, this_0, block);
    var this_1 = DialogContent;
    var block_0 = AlbumPhotosSubTable$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($it, $template);
    addChild_1($this$invoke, this_1, block_0);
    return Unit_instance;
  };
}
function AlbumPhotosSubTable$lambda$lambda$lambda$lambda$lambda_0($it, $template) {
  return function ($this$invoke) {
    var this_0 = DialogBody;
    var block = AlbumPhotosSubTable$lambda$lambda$lambda$lambda$lambda$lambda_0($it, $template);
    addChild_1($this$invoke, this_0, block);
    return Unit_instance;
  };
}
function AlbumPhotosSubTable$lambda$lambda$lambda$lambda($template, $it) {
  return function ($this$invoke) {
    var this_0 = DialogTrigger;
    var block = AlbumPhotosSubTable$lambda$lambda$lambda$lambda$lambda($template);
    addChild_1($this$invoke, this_0, block);
    var this_1 = DialogSurface;
    var block_0 = AlbumPhotosSubTable$lambda$lambda$lambda$lambda$lambda_0($it, $template);
    addChild_1($this$invoke, this_1, block_0);
    return Unit_instance;
  };
}
function AlbumPhotosSubTable$lambda$lambda$lambda($template, $it) {
  return function ($this$create) {
    var this_0 = Dialog;
    var block = AlbumPhotosSubTable$lambda$lambda$lambda$lambda($template, $it);
    addChild_1($this$create, this_0, block);
    return Unit_instance;
  };
}
function AlbumPhotosSubTable$lambda$lambda_1($it) {
  return function (template) {
    var tmp = Fragment;
    return create(tmp, AlbumPhotosSubTable$lambda$lambda$lambda(template, $it));
  };
}
function AlbumPhotosSubTable$lambda$lambda_2(row, _anonymous_parameter_1__qggqgd) {
  _init_properties_AlbumPhotosSubTable_kt__9zwtas();
  return row.title;
}
function AlbumPhotosSubTable$lambda$lambda_3(it) {
  _init_properties_AlbumPhotosSubTable_kt__9zwtas();
  return true;
}
function AlbumPhotosSubTable$lambda$lambda$lambda$lambda$lambda$lambda_1($header) {
  return function ($this$invoke) {
    // Inline function 'emotion.css.ClassName' call
    // Inline function 'js.objects.jso' call
    // Inline function 'kotlin.apply' call
    // Inline function 'js.objects.jso' call
    var this_0 = {};
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'team.porotkin.components.AlbumPhotosSubTable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    // Inline function 'web.cssom.FontWeight.Companion.normal' call
    0;
    this_0.fontWeight = 'normal';
    // Inline function 'web.cssom.Padding' call
    // Inline function 'web.cssom.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'web.cssom.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.padding = '' + (toString_1(4) + 'px') + ' ' + (toString_1(12) + 'px');
    // Inline function 'web.cssom.Border' call
    // Inline function 'web.cssom.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var width = toString_1(1) + 'px';
    // Inline function 'web.cssom.LineStyle.Companion.solid' call
    0;
    // Inline function 'web.cssom.NamedColor.Companion.gray' call
    0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.borderRight = '' + width + ' ' + 'solid' + ' ' + '#808080';
    // Inline function 'web.cssom.Border' call
    // Inline function 'web.cssom.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var width_0 = toString_1(1) + 'px';
    // Inline function 'web.cssom.LineStyle.Companion.solid' call
    0;
    // Inline function 'web.cssom.NamedColor.Companion.gray' call
    0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.borderBottom = '' + width_0 + ' ' + 'solid' + ' ' + '#808080';
    // Inline function 'csstype.SimplePseudosRuleBuilder.lastChild' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'web.cssom.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var this_1 = ':last-child';
    // Inline function 'js.objects.jso' call
    // Inline function 'kotlin.apply' call
    // Inline function 'js.objects.jso' call
    var this_2 = {};
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'team.porotkin.components.AlbumPhotosSubTable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    // Inline function 'web.cssom.None.Companion.none' call
    0;
    this_2.borderRight = 'none';
    this_0[this_1] = this_2;
    $this$invoke.className = css(this_0);
    var this_3 = renderHeader($header);
    addChildNode($this$invoke, this_3);
    return Unit_instance;
  };
}
function AlbumPhotosSubTable$lambda$lambda$lambda$lambda$lambda_1($headerGroup) {
  return function ($this$invoke) {
    var indexedObject = $headerGroup.headers;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var header = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'react.ChildrenBuilder.invoke' call
      // Inline function 'react.dom.html.ReactHTML.th' call
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var block = AlbumPhotosSubTable$lambda$lambda$lambda$lambda$lambda$lambda_1(header);
      addChild_1($this$invoke, 'th', block);
    }
    return Unit_instance;
  };
}
function AlbumPhotosSubTable$lambda$lambda$lambda$lambda_0($table) {
  return function ($this$invoke) {
    var indexedObject = $table.getHeaderGroups();
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var headerGroup = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'react.ChildrenBuilder.invoke' call
      // Inline function 'react.dom.html.ReactHTML.tr' call
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var block = AlbumPhotosSubTable$lambda$lambda$lambda$lambda$lambda_1(headerGroup);
      addChild_1($this$invoke, 'tr', block);
    }
    return Unit_instance;
  };
}
function AlbumPhotosSubTable$lambda$lambda$lambda$lambda$lambda$lambda_2($cell) {
  return function ($this$invoke) {
    // Inline function 'emotion.css.ClassName' call
    // Inline function 'js.objects.jso' call
    // Inline function 'kotlin.apply' call
    // Inline function 'js.objects.jso' call
    var this_0 = {};
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'team.porotkin.components.AlbumPhotosSubTable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    // Inline function 'web.cssom.Padding' call
    // Inline function 'web.cssom.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'web.cssom.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.padding = '' + (toString_1(10) + 'px') + ' ' + (toString_1(12) + 'px');
    // Inline function 'web.cssom.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.height = toString_1(175) + 'px';
    $this$invoke.className = css(this_0);
    var this_1 = renderCell($cell);
    addChildNode($this$invoke, this_1);
    return Unit_instance;
  };
}
function AlbumPhotosSubTable$lambda$lambda$lambda$lambda$lambda_2($row) {
  return function ($this$invoke) {
    var indexedObject = $row.getVisibleCells();
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var cell = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'react.ChildrenBuilder.invoke' call
      // Inline function 'react.dom.html.ReactHTML.td' call
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var block = AlbumPhotosSubTable$lambda$lambda$lambda$lambda$lambda$lambda_2(cell);
      addChild_1($this$invoke, 'td', block);
    }
    return Unit_instance;
  };
}
function AlbumPhotosSubTable$lambda$lambda$lambda$lambda_1($table) {
  return function ($this$invoke) {
    // Inline function 'emotion.css.ClassName' call
    // Inline function 'js.objects.jso' call
    // Inline function 'kotlin.apply' call
    // Inline function 'js.objects.jso' call
    var this_0 = {};
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'team.porotkin.components.AlbumPhotosSubTable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    // Inline function 'web.cssom.NamedColor.Companion.black' call
    0;
    this_0.color = '#000000';
    // Inline function 'web.cssom.NamedColor.Companion.white' call
    0;
    this_0.backgroundColor = '#FFFFFF';
    // Inline function 'web.cssom.TextAlign.Companion.start' call
    0;
    this_0.textAlign = 'start';
    $this$invoke.className = css(this_0);
    var indexedObject = $table.getRowModel().rows;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var row = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'react.ChildrenBuilder.invoke' call
      // Inline function 'react.dom.html.ReactHTML.tr' call
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var block = AlbumPhotosSubTable$lambda$lambda$lambda$lambda$lambda_2(row);
      addChild_1($this$invoke, 'tr', block);
    }
    return Unit_instance;
  };
}
function AlbumPhotosSubTable$lambda$lambda$lambda_0($table) {
  return function ($this$invoke) {
    // Inline function 'emotion.css.ClassName' call
    // Inline function 'js.objects.jso' call
    // Inline function 'kotlin.apply' call
    // Inline function 'js.objects.jso' call
    var this_0 = {};
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'team.porotkin.components.AlbumPhotosSubTable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    // Inline function 'web.cssom.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.borderSpacing = toString_1(0) + 'px';
    // Inline function 'web.cssom.BorderCollapse.Companion.collapse' call
    0;
    this_0.borderCollapse = 'collapse';
    // Inline function 'web.cssom.WhiteSpace.Companion.nowrap' call
    0;
    this_0.whiteSpace = 'nowrap';
    // Inline function 'web.cssom.pct' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.width = toString_1(100) + '%';
    $this$invoke.className = css(this_0);
    // Inline function 'react.dom.html.ReactHTML.thead' call
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var block = AlbumPhotosSubTable$lambda$lambda$lambda$lambda_0($table);
    addChild_1($this$invoke, 'thead', block);
    // Inline function 'react.dom.html.ReactHTML.tbody' call
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var block_0 = AlbumPhotosSubTable$lambda$lambda$lambda$lambda_1($table);
    addChild_1($this$invoke, 'tbody', block_0);
    return Unit_instance;
  };
}
function AlbumPhotosSubTable$lambda$lambda_4($table) {
  return function ($this$invoke) {
    // Inline function 'react.dom.html.ReactHTML.table' call
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var block = AlbumPhotosSubTable$lambda$lambda$lambda_0($table);
    addChild_1($this$invoke, 'table', block);
    return Unit_instance;
  };
}
var properties_initialized_AlbumPhotosSubTable_kt_edpvym;
function _init_properties_AlbumPhotosSubTable_kt__9zwtas() {
  if (!properties_initialized_AlbumPhotosSubTable_kt_edpvym) {
    properties_initialized_AlbumPhotosSubTable_kt_edpvym = true;
    AlbumPhotosSubTable = FC(AlbumPhotosSubTable$lambda);
  }
}
function get_FoldingControl() {
  _init_properties_FoldingControl_kt__io6mro();
  return FoldingControl;
}
var FoldingControl;
function FoldingControl$lambda($this$FC, props) {
  _init_properties_FoldingControl_kt__io6mro();
  if (!props.row.getCanExpand()) {
    return Unit_instance;
  }
  // Inline function 'react.ChildrenBuilder.invoke' call
  var this_0 = Button;
  var block = FoldingControl$lambda$lambda(props);
  addChild_1($this$FC, this_0, block);
  return Unit_instance;
}
function FoldingControl$lambda$lambda$lambda($props) {
  return function (it) {
    $props.row.toggleExpanded(!$props.row.getIsExpanded());
    return Unit_instance;
  };
}
function FoldingControl$lambda$lambda($props) {
  return function ($this$invoke) {
    $this$invoke.onClick = FoldingControl$lambda$lambda$lambda($props);
    $this$invoke.icon = $props.row.getIsExpanded() ? create_0(ChevronDownRegular) : create_0(ChevronRightRegular);
    // Inline function 'fluentui.Temp49.Companion.secondary' call
    0;
    $this$invoke.appearance = 'secondary';
    return Unit_instance;
  };
}
var properties_initialized_FoldingControl_kt_zhchr2;
function _init_properties_FoldingControl_kt__io6mro() {
  if (!properties_initialized_FoldingControl_kt_zhchr2) {
    properties_initialized_FoldingControl_kt_zhchr2 = true;
    FoldingControl = FC(FoldingControl$lambda);
  }
}
function get_Header() {
  _init_properties_Header_kt__ojs2ul();
  return Header;
}
var Header;
function Header$lambda($this$FC) {
  _init_properties_Header_kt__ojs2ul();
  // Inline function 'react.ChildrenBuilder.invoke' call
  // Inline function 'react.dom.html.ReactHTML.div' call
  // Inline function 'react.IntrinsicType' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var block = Header$lambda$lambda;
  addChild_1($this$FC, 'div', block);
  return Unit_instance;
}
function Header$lambda$lambda($this$invoke) {
  _init_properties_Header_kt__ojs2ul();
  // Inline function 'js.objects.jso' call
  // Inline function 'kotlin.apply' call
  // Inline function 'js.objects.jso' call
  var this_0 = {};
  // Inline function 'kotlin.contracts.contract' call
  // Inline function 'team.porotkin.components.Header.<anonymous>.<anonymous>.<anonymous>' call
  // Inline function 'web.cssom.pct' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  this_0.width = toString_1(100) + '%';
  // Inline function 'web.cssom.px' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  this_0.height = toString_1(65) + 'px';
  // Inline function 'web.cssom.NamedColor.Companion.blueviolet' call
  0;
  this_0.backgroundColor = '#8A2BE2';
  this_0.paddingTop = Common_getInstance().ll_1;
  $this$invoke.style = this_0;
  // Inline function 'react.ChildrenBuilder.invoke' call
  var this_1 = Title2;
  var block = Header$lambda$lambda$lambda;
  addChild_1($this$invoke, this_1, block);
  return Unit_instance;
}
function Header$lambda$lambda$lambda($this$invoke) {
  _init_properties_Header_kt__ojs2ul();
  // Inline function 'js.objects.jso' call
  // Inline function 'kotlin.apply' call
  // Inline function 'js.objects.jso' call
  var this_0 = {};
  // Inline function 'kotlin.contracts.contract' call
  // Inline function 'team.porotkin.components.Header.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
  this_0.paddingLeft = Common_getInstance().ml_1;
  // Inline function 'web.cssom.NamedColor.Companion.white' call
  0;
  this_0.color = '#FFFFFF';
  $this$invoke.style = this_0;
  // Inline function 'react.ChildrenBuilder.unaryPlus' call
  // Inline function 'react.ReactNode' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp$ret$6 = 'Kotlin FluentUI Sample';
  addChildNode($this$invoke, tmp$ret$6);
  return Unit_instance;
}
var properties_initialized_Header_kt_wmda6p;
function _init_properties_Header_kt__ojs2ul() {
  if (!properties_initialized_Header_kt_wmda6p) {
    properties_initialized_Header_kt_wmda6p = true;
    Header = FC_0(Header$lambda);
  }
}
function get_Navigation() {
  _init_properties_Navigation_kt__7rsvzo();
  return Navigation;
}
var Navigation;
function Navigation$lambda($this$FC) {
  _init_properties_Navigation_kt__7rsvzo();
  var currentUserId = useParams()['userId'];
  var users = useUsers();
  // Inline function 'react.useMemo' call
  var dependencies = [currentUserId, users];
  var callback = Navigation$lambda$lambda(users, currentUserId);
  var currentUser = useMemo(callback, dependencies);
  // Inline function 'react.ChildrenBuilder.invoke' call
  // Inline function 'react.dom.html.ReactHTML.div' call
  // Inline function 'react.IntrinsicType' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var block = Navigation$lambda$lambda_0(currentUserId, currentUser);
  addChild_1($this$FC, 'div', block);
  return Unit_instance;
}
function Navigation$lambda$lambda($users, $currentUserId) {
  return function () {
    // Inline function 'kotlin.collections.find' call
    var this_0 = $users;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var inductionVariable = 0;
      var last = this_0.length;
      while (inductionVariable < last) {
        var element = this_0[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'team.porotkin.components.Navigation.<anonymous>.<anonymous>.<anonymous>' call
        if (element.id.toString() === $currentUserId) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  };
}
function Navigation$lambda$lambda$lambda$lambda($this$invoke) {
  _init_properties_Navigation_kt__7rsvzo();
  // Inline function 'react.ChildrenBuilder.invoke' call
  var this_0 = BreadcrumbButton;
  var block = Navigation$lambda$lambda$lambda$lambda$lambda;
  addChild_1($this$invoke, this_0, block);
  return Unit_instance;
}
function Navigation$lambda$lambda$lambda$lambda$lambda($this$invoke) {
  _init_properties_Navigation_kt__7rsvzo();
  $this$invoke.href = '/';
  // Inline function 'react.ChildrenBuilder.unaryPlus' call
  // Inline function 'react.ReactNode' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  addChildNode($this$invoke, 'Home');
  return Unit_instance;
}
function Navigation$lambda$lambda$lambda$lambda_0($this$invoke) {
  _init_properties_Navigation_kt__7rsvzo();
  return Unit_instance;
}
function Navigation$lambda$lambda$lambda$lambda$lambda_0($it, $currentUser) {
  return function ($this$invoke) {
    $this$invoke.href = '/' + $it;
    var tmp0_safe_receiver = $currentUser;
    // Inline function 'react.ReactNode' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = toString_0(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.name);
    addChildNode($this$invoke, tmp$ret$2);
    return Unit_instance;
  };
}
function Navigation$lambda$lambda$lambda$lambda_1($it, $currentUser) {
  return function ($this$invoke) {
    var this_0 = BreadcrumbButton;
    var block = Navigation$lambda$lambda$lambda$lambda$lambda_0($it, $currentUser);
    addChild_1($this$invoke, this_0, block);
    return Unit_instance;
  };
}
function Navigation$lambda$lambda$lambda($currentUserId, $currentUser) {
  return function ($this$invoke) {
    var this_0 = BreadcrumbItem;
    var block = Navigation$lambda$lambda$lambda$lambda;
    addChild_1($this$invoke, this_0, block);
    var tmp0_safe_receiver = $currentUserId;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'react.ChildrenBuilder.invoke' call
      var this_1 = BreadcrumbDivider;
      var block_0 = Navigation$lambda$lambda$lambda$lambda_0;
      addChild_1($this$invoke, this_1, block_0);
      var this_2 = BreadcrumbItem;
      var block_1 = Navigation$lambda$lambda$lambda$lambda_1(tmp0_safe_receiver, $currentUser);
      addChild_1($this$invoke, this_2, block_1);
    }
    return Unit_instance;
  };
}
function Navigation$lambda$lambda_0($currentUserId, $currentUser) {
  return function ($this$invoke) {
    // Inline function 'js.objects.jso' call
    // Inline function 'kotlin.apply' call
    // Inline function 'js.objects.jso' call
    var this_0 = {};
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'team.porotkin.components.Navigation.<anonymous>.<anonymous>.<anonymous>' call
    // Inline function 'web.cssom.Display.Companion.flex' call
    0;
    this_0.display = 'flex';
    // Inline function 'web.cssom.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.gap = toString_1(25) + 'px';
    this_0.paddingLeft = Common_getInstance().ml_1;
    this_0.paddingTop = Common_getInstance().ll_1;
    $this$invoke.style = this_0;
    var this_1 = Breadcrumb;
    var block = Navigation$lambda$lambda$lambda($currentUserId, $currentUser);
    addChild_1($this$invoke, this_1, block);
    return Unit_instance;
  };
}
var properties_initialized_Navigation_kt_sebh5i;
function _init_properties_Navigation_kt__7rsvzo() {
  if (!properties_initialized_Navigation_kt_sebh5i) {
    properties_initialized_Navigation_kt_sebh5i = true;
    Navigation = FC_0(Navigation$lambda);
  }
}
function get_SlideShowElement_0() {
  _init_properties_SlideShowElement_kt__kpz8k2();
  return SlideShowElement_1;
}
var SlideShowElement_1;
function get_SlideShow() {
  _init_properties_SlideShowElement_kt__kpz8k2();
  return SlideShow;
}
var SlideShow;
function toSlideShowValues(_this__u8e3s4) {
  _init_properties_SlideShowElement_kt__kpz8k2();
  // Inline function 'kotlin.collections.toTypedArray' call
  // Inline function 'kotlin.collections.map' call
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList.r1(_this__u8e3s4.length);
  var inductionVariable = 0;
  var last = _this__u8e3s4.length;
  while (inductionVariable < last) {
    var item = _this__u8e3s4[inductionVariable];
    inductionVariable = inductionVariable + 1 | 0;
    // Inline function 'team.porotkin.components.toSlideShowValues.<anonymous>' call
    // Inline function 'js.objects.jso' call
    // Inline function 'kotlin.apply' call
    // Inline function 'js.objects.jso' call
    var this_0 = {};
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'team.porotkin.components.toSlideShowValues.<anonymous>.<anonymous>' call
    this_0.src = item.url;
    this_0.alt = 'preview for $' + item.title;
    this_0.id = item.id;
    var value = this_0;
    destination.j(value);
  }
  return copyToArray(destination);
}
function SlideShowElement$lambda_0() {
  _init_properties_SlideShowElement_kt__kpz8k2();
  var tmp = import('./kotlin-slideshow.mjs')
  return tmp.then(SlideShowElement$lambda$lambda_1);
}
function SlideShowElement$lambda$lambda_1(it) {
  _init_properties_SlideShowElement_kt__kpz8k2();
  // Inline function 'kotlin.js.asDynamic' call
  // Inline function 'kotlin.js.asDynamic' call
  it.default = it.SlideShowElement.get();
  return it;
}
function SlideShow$lambda($this$FC, props) {
  _init_properties_SlideShowElement_kt__kpz8k2();
  // Inline function 'react.ChildrenBuilder.invoke' call
  var this_0 = Suspense;
  var block = SlideShow$lambda$lambda(props);
  addChild_1($this$FC, this_0, block);
  return Unit_instance;
}
function SlideShow$lambda$lambda$lambda($this$create) {
  _init_properties_SlideShowElement_kt__kpz8k2();
  // Inline function 'react.ChildrenBuilder.unaryPlus' call
  // Inline function 'react.ReactNode' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp$ret$2 = 'Loading album photos';
  addChildNode($this$create, tmp$ret$2);
  return Unit_instance;
}
function SlideShow$lambda$lambda$lambda_0($props) {
  return function ($this$invoke) {
    $this$invoke.values = $props.values;
    $this$invoke.controls = 'navigation fullscreen';
    $this$invoke.active = $props.active;
    return Unit_instance;
  };
}
function SlideShow$lambda$lambda($props) {
  return function ($this$invoke) {
    // Inline function 'react.dom.html.ReactHTML.div' call
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = 'div';
    $this$invoke.fallback = create(tmp, SlideShow$lambda$lambda$lambda);
    var this_0 = get_SlideShowElement_0();
    var block = SlideShow$lambda$lambda$lambda_0($props);
    addChild_1($this$invoke, this_0, block);
    return Unit_instance;
  };
}
var properties_initialized_SlideShowElement_kt_p07s4w;
function _init_properties_SlideShowElement_kt__kpz8k2() {
  if (!properties_initialized_SlideShowElement_kt_p07s4w) {
    properties_initialized_SlideShowElement_kt_p07s4w = true;
    SlideShowElement_1 = lazy(SlideShowElement$lambda_0);
    SlideShow = FC(SlideShow$lambda);
  }
}
function get_UserAlbumsTable() {
  _init_properties_UserAlbumsTable_kt__p9dgz7();
  return UserAlbumsTable;
}
var UserAlbumsTable;
function get_SubTable() {
  _init_properties_UserAlbumsTable_kt__p9dgz7();
  return SubTable;
}
var SubTable;
function UserAlbumsTable$lambda($this$FC, it) {
  _init_properties_UserAlbumsTable_kt__p9dgz7();
  // Inline function 'js.objects.jso' call
  // Inline function 'kotlin.apply' call
  // Inline function 'js.objects.jso' call
  var this_0 = {};
  // Inline function 'kotlin.contracts.contract' call
  // Inline function 'team.porotkin.components.UserAlbumsTable.<anonymous>.<anonymous>' call
  this_0.data = it.userAlbums;
  // Inline function 'kotlin.arrayOf' call
  // Inline function 'js.objects.jso' call
  // Inline function 'kotlin.apply' call
  // Inline function 'js.objects.jso' call
  var this_1 = {};
  // Inline function 'kotlin.contracts.contract' call
  // Inline function 'team.porotkin.components.UserAlbumsTable.<anonymous>.<anonymous>.<anonymous>' call
  this_1.id = 'foldingControl';
  // Inline function 'tanstack.table.core.StringOrTemplateHeader' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  this_1.header = '';
  // Inline function 'tanstack.table.core.ColumnDefTemplate' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  this_1.cell = UserAlbumsTable$lambda$lambda;
  var tmp = this_1;
  // Inline function 'js.objects.jso' call
  // Inline function 'kotlin.apply' call
  // Inline function 'js.objects.jso' call
  var this_2 = {};
  // Inline function 'kotlin.contracts.contract' call
  // Inline function 'team.porotkin.components.UserAlbumsTable.<anonymous>.<anonymous>.<anonymous>' call
  this_2.id = 'albumId';
  // Inline function 'tanstack.table.core.StringOrTemplateHeader' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  this_2.header = '\u2116';
  this_2.accessorFn = UserAlbumsTable$lambda$lambda_0;
  var tmp_0 = this_2;
  // Inline function 'js.objects.jso' call
  // Inline function 'kotlin.apply' call
  // Inline function 'js.objects.jso' call
  var this_3 = {};
  // Inline function 'kotlin.contracts.contract' call
  // Inline function 'team.porotkin.components.UserAlbumsTable.<anonymous>.<anonymous>.<anonymous>' call
  this_3.id = 'title';
  // Inline function 'tanstack.table.core.StringOrTemplateHeader' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  this_3.header = 'Album Title';
  this_3.accessorFn = UserAlbumsTable$lambda$lambda_1;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  this_0.columns = [tmp, tmp_0, this_3];
  this_0.getCoreRowModel = getCoreRowModel();
  this_0.getExpandedRowModel = getExpandedRowModel();
  this_0.getRowCanExpand = UserAlbumsTable$lambda$lambda_2;
  var table = useReactTable(this_0);
  // Inline function 'react.ChildrenBuilder.invoke' call
  // Inline function 'react.dom.html.ReactHTML.div' call
  // Inline function 'react.IntrinsicType' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var block = UserAlbumsTable$lambda$lambda_3(table);
  addChild_1($this$FC, 'div', block);
  return Unit_instance;
}
function UserAlbumsTable$lambda$lambda(it) {
  _init_properties_UserAlbumsTable_kt__p9dgz7();
  var tmp = get_FoldingControl();
  return create(tmp, UserAlbumsTable$lambda$lambda$lambda(it));
}
function UserAlbumsTable$lambda$lambda$lambda($it) {
  return function ($this$create) {
    $this$create.row = $it.row;
    return Unit_instance;
  };
}
function UserAlbumsTable$lambda$lambda_0(row, _anonymous_parameter_1__qggqgd) {
  _init_properties_UserAlbumsTable_kt__p9dgz7();
  return row.id.toString();
}
function UserAlbumsTable$lambda$lambda_1(row, _anonymous_parameter_1__qggqgd) {
  _init_properties_UserAlbumsTable_kt__p9dgz7();
  return row.title;
}
function UserAlbumsTable$lambda$lambda_2(it) {
  _init_properties_UserAlbumsTable_kt__p9dgz7();
  return true;
}
function UserAlbumsTable$lambda$lambda$lambda$lambda$lambda$lambda($header) {
  return function ($this$invoke) {
    // Inline function 'emotion.css.ClassName' call
    // Inline function 'js.objects.jso' call
    // Inline function 'kotlin.apply' call
    // Inline function 'js.objects.jso' call
    var this_0 = {};
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'team.porotkin.components.UserAlbumsTable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    // Inline function 'web.cssom.FontWeight.Companion.normal' call
    0;
    this_0.fontWeight = 'normal';
    // Inline function 'web.cssom.Padding' call
    // Inline function 'web.cssom.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'web.cssom.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.padding = '' + (toString_1(4) + 'px') + ' ' + (toString_1(12) + 'px');
    // Inline function 'web.cssom.Border' call
    // Inline function 'web.cssom.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var width = toString_1(1) + 'px';
    // Inline function 'web.cssom.LineStyle.Companion.solid' call
    0;
    // Inline function 'web.cssom.NamedColor.Companion.gray' call
    0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.borderRight = '' + width + ' ' + 'solid' + ' ' + '#808080';
    // Inline function 'web.cssom.Border' call
    // Inline function 'web.cssom.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var width_0 = toString_1(1) + 'px';
    // Inline function 'web.cssom.LineStyle.Companion.solid' call
    0;
    // Inline function 'web.cssom.NamedColor.Companion.gray' call
    0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.borderBottom = '' + width_0 + ' ' + 'solid' + ' ' + '#808080';
    // Inline function 'csstype.SimplePseudosRuleBuilder.lastChild' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'web.cssom.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var this_1 = ':last-child';
    // Inline function 'js.objects.jso' call
    // Inline function 'kotlin.apply' call
    // Inline function 'js.objects.jso' call
    var this_2 = {};
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'team.porotkin.components.UserAlbumsTable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    // Inline function 'web.cssom.None.Companion.none' call
    0;
    this_2.borderRight = 'none';
    this_0[this_1] = this_2;
    $this$invoke.className = css(this_0);
    var this_3 = renderHeader($header);
    addChildNode($this$invoke, this_3);
    return Unit_instance;
  };
}
function UserAlbumsTable$lambda$lambda$lambda$lambda$lambda($headerGroup) {
  return function ($this$invoke) {
    var indexedObject = $headerGroup.headers;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var header = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'react.ChildrenBuilder.invoke' call
      // Inline function 'react.dom.html.ReactHTML.th' call
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var block = UserAlbumsTable$lambda$lambda$lambda$lambda$lambda$lambda(header);
      addChild_1($this$invoke, 'th', block);
    }
    return Unit_instance;
  };
}
function UserAlbumsTable$lambda$lambda$lambda$lambda($table) {
  return function ($this$invoke) {
    var indexedObject = $table.getHeaderGroups();
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var headerGroup = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'react.ChildrenBuilder.invoke' call
      // Inline function 'react.dom.html.ReactHTML.tr' call
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var block = UserAlbumsTable$lambda$lambda$lambda$lambda$lambda(headerGroup);
      addChild_1($this$invoke, 'tr', block);
    }
    return Unit_instance;
  };
}
function UserAlbumsTable$lambda$lambda$lambda$lambda$lambda$lambda_0($cell) {
  return function ($this$invoke) {
    // Inline function 'emotion.css.ClassName' call
    // Inline function 'js.objects.jso' call
    // Inline function 'kotlin.apply' call
    // Inline function 'js.objects.jso' call
    var this_0 = {};
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'team.porotkin.components.UserAlbumsTable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    // Inline function 'web.cssom.Padding' call
    // Inline function 'web.cssom.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'web.cssom.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.padding = '' + (toString_1(10) + 'px') + ' ' + (toString_1(12) + 'px');
    $this$invoke.className = css(this_0);
    var this_1 = renderCell($cell);
    addChildNode($this$invoke, this_1);
    return Unit_instance;
  };
}
function UserAlbumsTable$lambda$lambda$lambda$lambda$lambda_0($row) {
  return function ($this$invoke) {
    var indexedObject = $row.getVisibleCells();
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var cell = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'react.ChildrenBuilder.invoke' call
      // Inline function 'react.dom.html.ReactHTML.td' call
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var block = UserAlbumsTable$lambda$lambda$lambda$lambda$lambda$lambda_0(cell);
      addChild_1($this$invoke, 'td', block);
    }
    return Unit_instance;
  };
}
function UserAlbumsTable$lambda$lambda$lambda$lambda$lambda_1($row) {
  return function ($this$invoke) {
    $this$invoke.row = $row;
    return Unit_instance;
  };
}
function UserAlbumsTable$lambda$lambda$lambda$lambda_0($table) {
  return function ($this$invoke) {
    // Inline function 'emotion.css.ClassName' call
    // Inline function 'js.objects.jso' call
    // Inline function 'kotlin.apply' call
    // Inline function 'js.objects.jso' call
    var this_0 = {};
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'team.porotkin.components.UserAlbumsTable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    // Inline function 'web.cssom.NamedColor.Companion.black' call
    0;
    this_0.color = '#000000';
    // Inline function 'web.cssom.NamedColor.Companion.white' call
    0;
    this_0.backgroundColor = '#FFFFFF';
    // Inline function 'web.cssom.TextAlign.Companion.start' call
    0;
    this_0.textAlign = 'start';
    $this$invoke.className = css(this_0);
    var indexedObject = $table.getRowModel().rows;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var row = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'react.ChildrenBuilder.invoke' call
      // Inline function 'react.dom.html.ReactHTML.tr' call
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var block = UserAlbumsTable$lambda$lambda$lambda$lambda$lambda_0(row);
      addChild_1($this$invoke, 'tr', block);
      if (row.getIsExpanded()) {
        // Inline function 'react.ChildrenBuilder.invoke' call
        var this_1 = get_SubTable();
        var block_0 = UserAlbumsTable$lambda$lambda$lambda$lambda$lambda_1(row);
        addChild_1($this$invoke, this_1, block_0);
      }
    }
    return Unit_instance;
  };
}
function UserAlbumsTable$lambda$lambda$lambda_0($table) {
  return function ($this$invoke) {
    // Inline function 'emotion.css.ClassName' call
    // Inline function 'js.objects.jso' call
    // Inline function 'kotlin.apply' call
    // Inline function 'js.objects.jso' call
    var this_0 = {};
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'team.porotkin.components.UserAlbumsTable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    // Inline function 'web.cssom.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.borderSpacing = toString_1(0) + 'px';
    // Inline function 'web.cssom.BorderCollapse.Companion.collapse' call
    0;
    this_0.borderCollapse = 'collapse';
    // Inline function 'web.cssom.WhiteSpace.Companion.nowrap' call
    0;
    this_0.whiteSpace = 'nowrap';
    // Inline function 'web.cssom.pct' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.width = toString_1(100) + '%';
    $this$invoke.className = css(this_0);
    // Inline function 'react.dom.html.ReactHTML.thead' call
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var block = UserAlbumsTable$lambda$lambda$lambda$lambda($table);
    addChild_1($this$invoke, 'thead', block);
    // Inline function 'react.dom.html.ReactHTML.tbody' call
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var block_0 = UserAlbumsTable$lambda$lambda$lambda$lambda_0($table);
    addChild_1($this$invoke, 'tbody', block_0);
    return Unit_instance;
  };
}
function UserAlbumsTable$lambda$lambda_3($table) {
  return function ($this$invoke) {
    // Inline function 'react.dom.html.ReactHTML.table' call
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var block = UserAlbumsTable$lambda$lambda$lambda_0($table);
    addChild_1($this$invoke, 'table', block);
    return Unit_instance;
  };
}
function SubTable$lambda($this$FC, it) {
  _init_properties_UserAlbumsTable_kt__p9dgz7();
  var albumPhotosQueryResult = useAlbumPhotos(it.row.original.id);
  if (albumPhotosQueryResult.pl_1) {
    // Inline function 'react.dom.html.ReactHTML.tr' call
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var block = SubTable$lambda$lambda;
    addChild_1($this$FC, 'tr', block);
    return Unit_instance;
  }
  // Inline function 'react.ChildrenBuilder.invoke' call
  // Inline function 'react.dom.html.ReactHTML.tr' call
  // Inline function 'react.IntrinsicType' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var block_0 = SubTable$lambda$lambda_0(albumPhotosQueryResult);
  addChild_1($this$FC, 'tr', block_0);
  return Unit_instance;
}
function SubTable$lambda$lambda($this$invoke) {
  _init_properties_UserAlbumsTable_kt__p9dgz7();
  // Inline function 'react.ChildrenBuilder.invoke' call
  // Inline function 'react.dom.html.ReactHTML.td' call
  // Inline function 'react.IntrinsicType' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var block = SubTable$lambda$lambda$lambda;
  addChild_1($this$invoke, 'td', block);
  return Unit_instance;
}
function SubTable$lambda$lambda$lambda($this$invoke) {
  _init_properties_UserAlbumsTable_kt__p9dgz7();
  $this$invoke.colSpan = 3;
  // Inline function 'react.ChildrenBuilder.invoke' call
  var this_0 = Skeleton;
  var block = SubTable$lambda$lambda$lambda$lambda;
  addChild_1($this$invoke, this_0, block);
  return Unit_instance;
}
function SubTable$lambda$lambda$lambda$lambda($this$invoke) {
  _init_properties_UserAlbumsTable_kt__p9dgz7();
  // Inline function 'react.ChildrenBuilder.invoke' call
  // Inline function 'react.dom.html.ReactHTML.div' call
  // Inline function 'react.IntrinsicType' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var block = SubTable$lambda$lambda$lambda$lambda$lambda;
  addChild_1($this$invoke, 'div', block);
  return Unit_instance;
}
function SubTable$lambda$lambda$lambda$lambda$lambda($this$invoke) {
  _init_properties_UserAlbumsTable_kt__p9dgz7();
  // Inline function 'js.objects.jso' call
  // Inline function 'kotlin.apply' call
  // Inline function 'js.objects.jso' call
  var this_0 = {};
  // Inline function 'kotlin.contracts.contract' call
  // Inline function 'team.porotkin.components.SubTable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
  // Inline function 'web.cssom.Display.Companion.flex' call
  0;
  this_0.display = 'flex';
  // Inline function 'web.cssom.FlexDirection.Companion.column' call
  0;
  this_0.flexDirection = 'column';
  this_0.gap = Common_getInstance().ll_1;
  $this$invoke.style = this_0;
  // Inline function 'react.ChildrenBuilder.invoke' call
  var this_1 = SkeletonItem;
  var block = SubTable$lambda$lambda$lambda$lambda$lambda$lambda;
  addChild_1($this$invoke, this_1, block);
  // Inline function 'react.ChildrenBuilder.invoke' call
  var this_2 = SkeletonItem;
  var block_0 = SubTable$lambda$lambda$lambda$lambda$lambda$lambda_0;
  addChild_1($this$invoke, this_2, block_0);
  // Inline function 'react.ChildrenBuilder.invoke' call
  var this_3 = SkeletonItem;
  var block_1 = SubTable$lambda$lambda$lambda$lambda$lambda$lambda_1;
  addChild_1($this$invoke, this_3, block_1);
  // Inline function 'react.ChildrenBuilder.invoke' call
  var this_4 = SkeletonItem;
  var block_2 = SubTable$lambda$lambda$lambda$lambda$lambda$lambda_2;
  addChild_1($this$invoke, this_4, block_2);
  return Unit_instance;
}
function SubTable$lambda$lambda$lambda$lambda$lambda$lambda($this$invoke) {
  _init_properties_UserAlbumsTable_kt__p9dgz7();
  $this$invoke.size = 24;
  return Unit_instance;
}
function SubTable$lambda$lambda$lambda$lambda$lambda$lambda_0($this$invoke) {
  _init_properties_UserAlbumsTable_kt__p9dgz7();
  $this$invoke.size = 48;
  return Unit_instance;
}
function SubTable$lambda$lambda$lambda$lambda$lambda$lambda_1($this$invoke) {
  _init_properties_UserAlbumsTable_kt__p9dgz7();
  $this$invoke.size = 48;
  return Unit_instance;
}
function SubTable$lambda$lambda$lambda$lambda$lambda$lambda_2($this$invoke) {
  _init_properties_UserAlbumsTable_kt__p9dgz7();
  $this$invoke.size = 48;
  return Unit_instance;
}
function SubTable$lambda$lambda$lambda$lambda_0($albumPhotosQueryResult) {
  return function ($this$invoke) {
    $this$invoke.albumPhotos = $albumPhotosQueryResult.ol_1;
    return Unit_instance;
  };
}
function SubTable$lambda$lambda$lambda_0($albumPhotosQueryResult) {
  return function ($this$invoke) {
    // Inline function 'emotion.css.ClassName' call
    // Inline function 'js.objects.jso' call
    // Inline function 'kotlin.apply' call
    // Inline function 'js.objects.jso' call
    var this_0 = {};
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'team.porotkin.components.SubTable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    // Inline function 'web.cssom.Padding' call
    // Inline function 'web.cssom.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'web.cssom.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.padding = '' + (toString_1(10) + 'px') + ' ' + (toString_1(12) + 'px');
    $this$invoke.className = css(this_0);
    $this$invoke.colSpan = 3;
    var this_1 = get_AlbumPhotosSubTable();
    var block = SubTable$lambda$lambda$lambda$lambda_0($albumPhotosQueryResult);
    addChild_1($this$invoke, this_1, block);
    return Unit_instance;
  };
}
function SubTable$lambda$lambda_0($albumPhotosQueryResult) {
  return function ($this$invoke) {
    // Inline function 'react.dom.html.ReactHTML.td' call
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var block = SubTable$lambda$lambda$lambda_0($albumPhotosQueryResult);
    addChild_1($this$invoke, 'td', block);
    return Unit_instance;
  };
}
var properties_initialized_UserAlbumsTable_kt_fgltpt;
function _init_properties_UserAlbumsTable_kt__p9dgz7() {
  if (!properties_initialized_UserAlbumsTable_kt_fgltpt) {
    properties_initialized_UserAlbumsTable_kt_fgltpt = true;
    UserAlbumsTable = FC(UserAlbumsTable$lambda);
    SubTable = FC(SubTable$lambda);
  }
}
function useAlbumPhotos(albumId) {
  // Inline function 'js.objects.jso' call
  // Inline function 'kotlin.apply' call
  // Inline function 'js.objects.jso' call
  var this_0 = {};
  // Inline function 'kotlin.contracts.contract' call
  // Inline function 'team.porotkin.hooks.useAlbumPhotos.<anonymous>' call
  this_0.queryKey = QueryKey(get_USER_ALBUMS_QUERY_KEY(), [albumId]);
  this_0.queryFn = useAlbumPhotos$lambda(albumId);
  var result = useQuery(this_0);
  var tmp0_elvis_lhs = result.data;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    // Inline function 'kotlin.emptyArray' call
    tmp = [];
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return new AlbumPhotosQueryResult(tmp, result.isLoading);
}
function getAlbumPhotos(albumId) {
  var tmp = fetch('https://jsonplaceholder.typicode.com/albums/' + albumId + '/photos');
  var tmp_0 = tmp.then(getAlbumPhotos$lambda);
  return tmp_0.then(getAlbumPhotos$lambda_0);
}
function useAlbumPhotos$lambda($albumId) {
  return function (it) {
    return getAlbumPhotos($albumId);
  };
}
function getAlbumPhotos$lambda(it) {
  return it.json();
}
function getAlbumPhotos$lambda_0(it) {
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  return it;
}
function useUserAlbumsCoroutine() {
  var currentUserId = useParams()['userId'];
  // Inline function 'kotlin.emptyArray' call
  var tmp$ret$0 = [];
  var userAlbums$delegate = useState(tmp$ret$0);
  useEffect_0([currentUserId], useUserAlbumsCoroutine$lambda_1(currentUserId, userAlbums$delegate));
  // Inline function 'react.useMemo' call
  var dependencies = [useUserAlbumsCoroutine$lambda(userAlbums$delegate)];
  var callback = useUserAlbumsCoroutine$lambda_2(userAlbums$delegate);
  return useMemo(callback, dependencies);
}
function getUserAlbums(userId) {
  var tmp = fetch('https://jsonplaceholder.typicode.com/users/' + userId + '/albums');
  var tmp_0 = tmp.then(getUserAlbums$lambda);
  return tmp_0.then(getUserAlbums$lambda_0);
}
function useUserAlbumsCoroutine$lambda($userAlbums$delegate) {
  // Inline function 'react.StateInstance.getValue' call
  getLocalDelegateReference('userAlbums', KMutableProperty0, true, function () {
    return THROW_ISE();
  });
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  return $userAlbums$delegate[0];
}
function useUserAlbumsCoroutine$lambda_0($userAlbums$delegate, value) {
  getLocalDelegateReference('userAlbums', KMutableProperty0, true, function () {
    return THROW_ISE();
  });
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  $userAlbums$delegate[1](value);
  return Unit_instance;
}
function useUserAlbumsCoroutine$lambda$slambda$lambda($userAlbums$delegate) {
  return function (it) {
    useUserAlbumsCoroutine$lambda_0($userAlbums$delegate, it);
    return Unit_instance;
  };
}
function useUserAlbumsCoroutine$lambda$slambda_0($currentUserId, $userAlbums$delegate, resultContinuation) {
  var i = new useUserAlbumsCoroutine$lambda$slambda($currentUserId, $userAlbums$delegate, resultContinuation);
  var l = function ($this$launch, $completion) {
    return i.jl($this$launch, $completion);
  };
  l.$arity = 1;
  return l;
}
function useUserAlbumsCoroutine$lambda$lambda($job) {
  return function () {
    $job.sc();
    return Unit_instance;
  };
}
function useUserAlbumsCoroutine$lambda_1($currentUserId, $userAlbums$delegate) {
  return function ($this$useEffect) {
    var tmp = MainScope();
    var job = launch(tmp, VOID, VOID, useUserAlbumsCoroutine$lambda$slambda_0($currentUserId, $userAlbums$delegate, null));
    $this$useEffect.push(useUserAlbumsCoroutine$lambda$lambda(job));
    return Unit_instance;
  };
}
function useUserAlbumsCoroutine$lambda_2($userAlbums$delegate) {
  return function () {
    return useUserAlbumsCoroutine$lambda($userAlbums$delegate);
  };
}
function getUserAlbums$lambda(it) {
  return it.json();
}
function getUserAlbums$lambda_0(it) {
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  return it;
}
function useUsers() {
  // Inline function 'js.objects.jso' call
  // Inline function 'kotlin.apply' call
  // Inline function 'js.objects.jso' call
  var this_0 = {};
  // Inline function 'kotlin.contracts.contract' call
  // Inline function 'team.porotkin.hooks.useUsers.<anonymous>' call
  this_0.queryKey = get_USERS_QUERY_KEY();
  this_0.queryFn = useUsers$lambda;
  var result = useQuery(this_0);
  var tmp0_elvis_lhs = result.data;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    // Inline function 'kotlin.emptyArray' call
    tmp = [];
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
function getUsers() {
  var tmp = fetch('https://jsonplaceholder.typicode.com/users');
  var tmp_0 = tmp.then(getUsers$lambda);
  return tmp_0.then(getUsers$lambda_0);
}
function useUsers$lambda(it) {
  return getUsers();
}
function getUsers$lambda(it) {
  return it.json();
}
function getUsers$lambda_0(it) {
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  return it;
}
function get_CurrentUserPage() {
  _init_properties_CurrentUserPage_kt__ru29cx();
  return CurrentUserPage;
}
var CurrentUserPage;
function CurrentUserPage$lambda($this$FC) {
  _init_properties_CurrentUserPage_kt__ru29cx();
  var navigate = useNavigate();
  var users = useUsers();
  var userAlbums = useUserAlbumsCoroutine();
  var currentUserId = useParams()['userId'];
  // Inline function 'react.ChildrenBuilder.invoke' call
  // Inline function 'react.dom.html.ReactHTML.div' call
  // Inline function 'react.IntrinsicType' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var block = CurrentUserPage$lambda$lambda(users, currentUserId, navigate, userAlbums);
  addChild_1($this$FC, 'div', block);
  return Unit_instance;
}
function CurrentUserPage$lambda$lambda$lambda$lambda($this$invoke) {
  _init_properties_CurrentUserPage_kt__ru29cx();
  // Inline function 'js.objects.jso' call
  // Inline function 'kotlin.apply' call
  // Inline function 'js.objects.jso' call
  var this_0 = {};
  // Inline function 'kotlin.contracts.contract' call
  // Inline function 'team.porotkin.routes.CurrentUserPage.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
  this_0.paddingTop = Common_getInstance().ll_1;
  $this$invoke.style = this_0;
  // Inline function 'react.ChildrenBuilder.invoke' call
  var this_1 = DrawerHeaderTitle;
  var block = CurrentUserPage$lambda$lambda$lambda$lambda$lambda;
  addChild_1($this$invoke, this_1, block);
  return Unit_instance;
}
function CurrentUserPage$lambda$lambda$lambda$lambda$lambda($this$invoke) {
  _init_properties_CurrentUserPage_kt__ru29cx();
  var tmp = Title3;
  $this$invoke.heading = create(tmp, CurrentUserPage$lambda$lambda$lambda$lambda$lambda$lambda);
  return Unit_instance;
}
function CurrentUserPage$lambda$lambda$lambda$lambda$lambda$lambda($this$create) {
  _init_properties_CurrentUserPage_kt__ru29cx();
  // Inline function 'react.ChildrenBuilder.unaryPlus' call
  // Inline function 'react.ReactNode' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp$ret$2 = 'All Users';
  addChildNode($this$create, tmp$ret$2);
  return Unit_instance;
}
function CurrentUserPage$lambda$lambda$lambda$lambda$lambda$lambda$lambda($navigate, $user) {
  return function (it) {
    $navigate('/' + $user.id);
    return Unit_instance;
  };
}
function CurrentUserPage$lambda$lambda$lambda$lambda$lambda$lambda_0($user, $currentUserId, $navigate) {
  return function ($this$invoke) {
    $this$invoke.selected = $user.id.toString() === $currentUserId;
    $this$invoke.onClick = CurrentUserPage$lambda$lambda$lambda$lambda$lambda$lambda$lambda($navigate, $user);
    // Inline function 'react.ReactNode' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = $user.name;
    addChildNode($this$invoke, tmp$ret$2);
    return Unit_instance;
  };
}
function CurrentUserPage$lambda$lambda$lambda$lambda$lambda_0($users, $currentUserId, $navigate) {
  return function ($this$invoke) {
    // Inline function 'js.objects.jso' call
    // Inline function 'kotlin.apply' call
    // Inline function 'js.objects.jso' call
    var this_0 = {};
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'team.porotkin.routes.CurrentUserPage.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    // Inline function 'web.cssom.Display.Companion.flex' call
    0;
    this_0.display = 'flex';
    // Inline function 'web.cssom.FlexDirection.Companion.column' call
    0;
    this_0.flexDirection = 'column';
    this_0.gap = Common_getInstance().ll_1;
    $this$invoke.style = this_0;
    var indexedObject = $users;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'team.porotkin.routes.CurrentUserPage.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      // Inline function 'react.ChildrenBuilder.invoke' call
      var this_1 = Card;
      var block = CurrentUserPage$lambda$lambda$lambda$lambda$lambda$lambda_0(element, $currentUserId, $navigate);
      addChild_1($this$invoke, this_1, block);
    }
    return Unit_instance;
  };
}
function CurrentUserPage$lambda$lambda$lambda$lambda_0($users, $currentUserId, $navigate) {
  return function ($this$invoke) {
    // Inline function 'react.dom.html.ReactHTML.div' call
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var block = CurrentUserPage$lambda$lambda$lambda$lambda$lambda_0($users, $currentUserId, $navigate);
    addChild_1($this$invoke, 'div', block);
    return Unit_instance;
  };
}
function CurrentUserPage$lambda$lambda$lambda($users, $currentUserId, $navigate) {
  return function ($this$invoke) {
    $this$invoke.open = true;
    $this$invoke.separator = true;
    var this_0 = DrawerHeader;
    var block = CurrentUserPage$lambda$lambda$lambda$lambda;
    addChild_1($this$invoke, this_0, block);
    var this_1 = DrawerBody;
    var block_0 = CurrentUserPage$lambda$lambda$lambda$lambda_0($users, $currentUserId, $navigate);
    addChild_1($this$invoke, this_1, block_0);
    return Unit_instance;
  };
}
function CurrentUserPage$lambda$lambda$lambda$lambda_1($this$invoke) {
  _init_properties_CurrentUserPage_kt__ru29cx();
  // Inline function 'react.ChildrenBuilder.unaryPlus' call
  // Inline function 'react.ReactNode' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp$ret$2 = 'User info';
  addChildNode($this$invoke, tmp$ret$2);
  return Unit_instance;
}
function CurrentUserPage$lambda$lambda$lambda$lambda_2($userAlbums) {
  return function ($this$invoke) {
    $this$invoke.userAlbums = $userAlbums;
    return Unit_instance;
  };
}
function CurrentUserPage$lambda$lambda$lambda_0($userAlbums) {
  return function ($this$invoke) {
    // Inline function 'js.objects.jso' call
    // Inline function 'kotlin.apply' call
    // Inline function 'js.objects.jso' call
    var this_0 = {};
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'team.porotkin.routes.CurrentUserPage.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    // Inline function 'web.cssom.Display.Companion.flex' call
    0;
    this_0.display = 'flex';
    // Inline function 'web.cssom.FlexDirection.Companion.column' call
    0;
    this_0.flexDirection = 'column';
    this_0.padding = Common_getInstance().ll_1;
    // Inline function 'web.cssom.pct' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.width = toString_1(100) + '%';
    $this$invoke.style = this_0;
    var this_1 = Title3;
    var block = CurrentUserPage$lambda$lambda$lambda$lambda_1;
    addChild_1($this$invoke, this_1, block);
    var this_2 = get_UserAlbumsTable();
    var block_0 = CurrentUserPage$lambda$lambda$lambda$lambda_2($userAlbums);
    addChild_1($this$invoke, this_2, block_0);
    return Unit_instance;
  };
}
function CurrentUserPage$lambda$lambda($users, $currentUserId, $navigate, $userAlbums) {
  return function ($this$invoke) {
    // Inline function 'js.objects.jso' call
    // Inline function 'kotlin.apply' call
    // Inline function 'js.objects.jso' call
    var this_0 = {};
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'team.porotkin.routes.CurrentUserPage.<anonymous>.<anonymous>.<anonymous>' call
    // Inline function 'web.cssom.Display.Companion.flex' call
    0;
    this_0.display = 'flex';
    // Inline function 'web.cssom.pct' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.height = toString_1(91) + '%';
    $this$invoke.style = this_0;
    var this_1 = InlineDrawer;
    var block = CurrentUserPage$lambda$lambda$lambda($users, $currentUserId, $navigate);
    addChild_1($this$invoke, this_1, block);
    // Inline function 'react.dom.html.ReactHTML.div' call
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var block_0 = CurrentUserPage$lambda$lambda$lambda_0($userAlbums);
    addChild_1($this$invoke, 'div', block_0);
    return Unit_instance;
  };
}
var properties_initialized_CurrentUserPage_kt_lr8nq5;
function _init_properties_CurrentUserPage_kt__ru29cx() {
  if (!properties_initialized_CurrentUserPage_kt_lr8nq5) {
    properties_initialized_CurrentUserPage_kt_lr8nq5 = true;
    CurrentUserPage = FC_0(CurrentUserPage$lambda);
  }
}
function get_Root() {
  _init_properties_Root_kt__ywqgle();
  return Root;
}
var Root;
function Root$lambda($this$FC) {
  _init_properties_Root_kt__ywqgle();
  // Inline function 'react.ChildrenBuilder.invoke' call
  // Inline function 'react.dom.html.ReactHTML.div' call
  // Inline function 'react.IntrinsicType' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var block = Root$lambda$lambda;
  addChild_1($this$FC, 'div', block);
  return Unit_instance;
}
function Root$lambda$lambda($this$invoke) {
  _init_properties_Root_kt__ywqgle();
  // Inline function 'js.objects.jso' call
  // Inline function 'kotlin.apply' call
  // Inline function 'js.objects.jso' call
  var this_0 = {};
  // Inline function 'kotlin.contracts.contract' call
  // Inline function 'team.porotkin.routes.Root.<anonymous>.<anonymous>.<anonymous>' call
  // Inline function 'web.cssom.pct' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  this_0.width = toString_1(100) + '%';
  // Inline function 'web.cssom.pct' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  this_0.height = toString_1(100) + '%';
  $this$invoke.style = this_0;
  // Inline function 'react.ChildrenBuilder.invoke' call
  var this_1 = get_Header();
  addChild_0($this$invoke, this_1);
  // Inline function 'react.ChildrenBuilder.invoke' call
  var this_2 = get_Navigation();
  addChild_0($this$invoke, this_2);
  // Inline function 'react.ChildrenBuilder.invoke' call
  var this_3 = Outlet;
  addChild_0($this$invoke, this_3);
  return Unit_instance;
}
var properties_initialized_Root_kt_ptfsbg;
function _init_properties_Root_kt__ywqgle() {
  if (!properties_initialized_Root_kt_ptfsbg) {
    properties_initialized_Root_kt_ptfsbg = true;
    Root = FC_0(Root$lambda);
  }
}
function get_hashRouter() {
  _init_properties_Router_kt__77pu09();
  return hashRouter;
}
var hashRouter;
var properties_initialized_Router_kt_w3eu7f;
function _init_properties_Router_kt__77pu09() {
  if (!properties_initialized_Router_kt_w3eu7f) {
    properties_initialized_Router_kt_w3eu7f = true;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'js.objects.jso' call
    // Inline function 'kotlin.apply' call
    // Inline function 'js.objects.jso' call
    var this_0 = {};
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'team.porotkin.routes.hashRouter.<anonymous>' call
    this_0.path = '/';
    this_0.Component = get_Root();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'js.objects.jso' call
    // Inline function 'kotlin.apply' call
    // Inline function 'js.objects.jso' call
    var this_1 = {};
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'team.porotkin.routes.hashRouter.<anonymous>.<anonymous>' call
    this_1.index = true;
    this_1.element = create_0(get_UsersPage());
    var tmp = this_1;
    // Inline function 'js.objects.jso' call
    // Inline function 'kotlin.apply' call
    // Inline function 'js.objects.jso' call
    var this_2 = {};
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'team.porotkin.routes.hashRouter.<anonymous>.<anonymous>' call
    this_2.path = ':userId';
    this_2.element = create_0(get_CurrentUserPage());
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.children = [tmp, this_2];
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$14 = [this_0];
    hashRouter = createHashRouter(tmp$ret$14);
  }
}
function get_UsersPage() {
  _init_properties_UsersPage_kt__l1cnr9();
  return UsersPage;
}
var UsersPage;
function UsersPage$lambda($this$FC) {
  _init_properties_UsersPage_kt__l1cnr9();
  var users = useUsers();
  var navigate = useNavigate();
  // Inline function 'react.ChildrenBuilder.invoke' call
  // Inline function 'react.dom.html.ReactHTML.div' call
  // Inline function 'react.IntrinsicType' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var block = UsersPage$lambda$lambda(users, navigate);
  addChild_1($this$FC, 'div', block);
  return Unit_instance;
}
function UsersPage$lambda$lambda$lambda$lambda$lambda($this$create) {
  _init_properties_UsersPage_kt__l1cnr9();
  // Inline function 'js.objects.jso' call
  // Inline function 'kotlin.apply' call
  // Inline function 'js.objects.jso' call
  var this_0 = {};
  // Inline function 'kotlin.contracts.contract' call
  // Inline function 'team.porotkin.routes.UsersPage.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
  this_0.width = CardImage_getInstance().dm_1;
  this_0.height = CardImage_getInstance().dm_1;
  $this$create.style = this_0;
  return Unit_instance;
}
function UsersPage$lambda$lambda$lambda$lambda$lambda$lambda($user) {
  return function ($this$invoke) {
    // Inline function 'react.ReactNode' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = $user.name;
    addChildNode($this$invoke, tmp$ret$2);
    return Unit_instance;
  };
}
function UsersPage$lambda$lambda$lambda$lambda$lambda_0($user) {
  return function ($this$create) {
    // Inline function 'react.dom.html.ReactHTML.b' call
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var block = UsersPage$lambda$lambda$lambda$lambda$lambda$lambda($user);
    addChild_1($this$create, 'b', block);
    return Unit_instance;
  };
}
function UsersPage$lambda$lambda$lambda$lambda$lambda$lambda$lambda($user) {
  return function ($this$invoke) {
    // Inline function 'react.ReactNode' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = 'E-mail: ' + $user.email;
    addChildNode($this$invoke, tmp$ret$2);
    return Unit_instance;
  };
}
function UsersPage$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($user) {
  return function ($this$invoke) {
    // Inline function 'react.ReactNode' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = 'Phone: ' + $user.phone;
    addChildNode($this$invoke, tmp$ret$2);
    return Unit_instance;
  };
}
function UsersPage$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($user) {
  return function ($this$invoke) {
    $this$invoke.to = $user.website;
    // Inline function 'react.ReactNode' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = $user.website;
    addChildNode($this$invoke, tmp$ret$2);
    return Unit_instance;
  };
}
function UsersPage$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1($user) {
  return function ($this$invoke) {
    // Inline function 'react.ReactNode' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = 'Website: ';
    addChildNode($this$invoke, tmp$ret$2);
    var this_0 = Link;
    var block = UsersPage$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($user);
    addChild_1($this$invoke, this_0, block);
    return Unit_instance;
  };
}
function UsersPage$lambda$lambda$lambda$lambda$lambda$lambda_0($user) {
  return function ($this$invoke) {
    // Inline function 'js.objects.jso' call
    // Inline function 'kotlin.apply' call
    // Inline function 'js.objects.jso' call
    var this_0 = {};
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'team.porotkin.routes.UsersPage.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    // Inline function 'web.cssom.Display.Companion.flex' call
    0;
    this_0.display = 'flex';
    // Inline function 'web.cssom.FlexDirection.Companion.column' call
    0;
    this_0.flexDirection = 'column';
    $this$invoke.style = this_0;
    // Inline function 'react.dom.html.ReactHTML.div' call
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var block = UsersPage$lambda$lambda$lambda$lambda$lambda$lambda$lambda($user);
    addChild_1($this$invoke, 'div', block);
    // Inline function 'react.dom.html.ReactHTML.div' call
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var block_0 = UsersPage$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($user);
    addChild_1($this$invoke, 'div', block_0);
    // Inline function 'react.dom.html.ReactHTML.div' call
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var block_1 = UsersPage$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1($user);
    addChild_1($this$invoke, 'div', block_1);
    return Unit_instance;
  };
}
function UsersPage$lambda$lambda$lambda$lambda$lambda_1($user) {
  return function ($this$create) {
    // Inline function 'react.dom.html.ReactHTML.div' call
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var block = UsersPage$lambda$lambda$lambda$lambda$lambda$lambda_0($user);
    addChild_1($this$create, 'div', block);
    return Unit_instance;
  };
}
function UsersPage$lambda$lambda$lambda$lambda($user) {
  return function ($this$invoke) {
    var tmp = GlobePersonRegular;
    $this$invoke.image = create(tmp, UsersPage$lambda$lambda$lambda$lambda$lambda);
    var tmp_0 = Body1;
    $this$invoke.header = create(tmp_0, UsersPage$lambda$lambda$lambda$lambda$lambda_0($user));
    var tmp_1 = Caption1;
    $this$invoke.description = create(tmp_1, UsersPage$lambda$lambda$lambda$lambda$lambda_1($user));
    return Unit_instance;
  };
}
function UsersPage$lambda$lambda$lambda$lambda$lambda$lambda_1($navigate, $user) {
  return function (it) {
    $navigate('/' + $user.id);
    return Unit_instance;
  };
}
function UsersPage$lambda$lambda$lambda$lambda$lambda_2($navigate, $user) {
  return function ($this$invoke) {
    $this$invoke.onClick = UsersPage$lambda$lambda$lambda$lambda$lambda$lambda_1($navigate, $user);
    // Inline function 'react.ReactNode' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = 'Go to User Page';
    addChildNode($this$invoke, tmp$ret$2);
    return Unit_instance;
  };
}
function UsersPage$lambda$lambda$lambda$lambda_0($navigate, $user) {
  return function ($this$invoke) {
    var this_0 = Button;
    var block = UsersPage$lambda$lambda$lambda$lambda$lambda_2($navigate, $user);
    addChild_1($this$invoke, this_0, block);
    return Unit_instance;
  };
}
function UsersPage$lambda$lambda$lambda($user, $navigate) {
  return function ($this$invoke) {
    var this_0 = CardHeader;
    var block = UsersPage$lambda$lambda$lambda$lambda($user);
    addChild_1($this$invoke, this_0, block);
    var this_1 = CardFooter;
    var block_0 = UsersPage$lambda$lambda$lambda$lambda_0($navigate, $user);
    addChild_1($this$invoke, this_1, block_0);
    return Unit_instance;
  };
}
function UsersPage$lambda$lambda($users, $navigate) {
  return function ($this$invoke) {
    // Inline function 'js.objects.jso' call
    // Inline function 'kotlin.apply' call
    // Inline function 'js.objects.jso' call
    var this_0 = {};
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'team.porotkin.routes.UsersPage.<anonymous>.<anonymous>.<anonymous>' call
    // Inline function 'web.cssom.Display.Companion.grid' call
    0;
    this_0.display = 'grid';
    this_0.paddingLeft = Common_getInstance().ml_1;
    this_0.paddingRight = Common_getInstance().ml_1;
    this_0.paddingTop = Common_getInstance().ll_1;
    this_0.paddingBottom = Common_getInstance().ll_1;
    // Inline function 'web.cssom.repeat' call
    // Inline function 'web.cssom.fr' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.gridTemplateRows = 'repeat(' + 3 + ',' + (toString_1(1) + 'fr') + ')';
    // Inline function 'web.cssom.repeat' call
    // Inline function 'web.cssom.fr' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.gridTemplateColumns = 'repeat(' + 3 + ',' + (toString_1(1) + 'fr') + ')';
    this_0.gap = Common_getInstance().ll_1;
    $this$invoke.style = this_0;
    var indexedObject = $users;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'team.porotkin.routes.UsersPage.<anonymous>.<anonymous>.<anonymous>' call
      // Inline function 'react.ChildrenBuilder.invoke' call
      var this_1 = Card;
      var block = UsersPage$lambda$lambda$lambda(element, $navigate);
      addChild_1($this$invoke, this_1, block);
    }
    return Unit_instance;
  };
}
var properties_initialized_UsersPage_kt_a909q1;
function _init_properties_UsersPage_kt__l1cnr9() {
  if (!properties_initialized_UsersPage_kt_a909q1) {
    properties_initialized_UsersPage_kt_a909q1 = true;
    UsersPage = FC_0(UsersPage$lambda);
  }
}
var Common_instance;
function Common_getInstance() {
  if (Common_instance === VOID)
    new Common();
  return Common_instance;
}
var CardImage_instance;
function CardImage_getInstance() {
  if (CardImage_instance === VOID)
    new CardImage();
  return CardImage_instance;
}
//region block: post-declaration
setMetadataFor(CharSequence, 'CharSequence', interfaceMeta);
setMetadataFor(Number_0, 'Number', classMeta);
setMetadataFor(Unit, 'Unit', objectMeta);
setMetadataFor(IntCompanionObject, 'IntCompanionObject', objectMeta);
setMetadataFor(Collection, 'Collection', interfaceMeta);
setMetadataFor(AbstractCollection, 'AbstractCollection', classMeta, VOID, [Collection]);
setMetadataFor(AbstractMutableCollection, 'AbstractMutableCollection', classMeta, VOID, [AbstractCollection, Collection]);
setMetadataFor(IteratorImpl, 'IteratorImpl', classMeta);
setMetadataFor(List, 'List', interfaceMeta, VOID, [Collection]);
setMetadataFor(AbstractMutableList, 'AbstractMutableList', classMeta, VOID, [AbstractMutableCollection, List, Collection]);
setMetadataFor(Set, 'Set', interfaceMeta, VOID, [Collection]);
setMetadataFor(AbstractMutableSet, 'AbstractMutableSet', classMeta, VOID, [AbstractMutableCollection, Set, Collection]);
setMetadataFor(Companion, 'Companion', objectMeta);
setMetadataFor(ArrayList, 'ArrayList', classMeta, VOID, [AbstractMutableList, List, Collection], ArrayList.w1);
setMetadataFor(HashSet, 'HashSet', classMeta, VOID, [AbstractMutableSet, Set, Collection], HashSet.f2);
setMetadataFor(Companion_0, 'Companion', objectMeta);
setMetadataFor(Itr, 'Itr', classMeta);
setMetadataFor(KeysItr, 'KeysItr', classMeta);
setMetadataFor(EntriesItr, 'EntriesItr', classMeta);
setMetadataFor(Entry, 'Entry', interfaceMeta);
setMetadataFor(EntryRef, 'EntryRef', classMeta, VOID, [Entry]);
setMetadataFor(InternalMap, 'InternalMap', interfaceMeta);
protoOf(InternalHashMap).g3 = containsAllEntries;
setMetadataFor(InternalHashMap, 'InternalHashMap', classMeta, VOID, [InternalMap], InternalHashMap.q2);
setMetadataFor(LinkedHashSet, 'LinkedHashSet', classMeta, VOID, [HashSet, Set, Collection], LinkedHashSet.u4);
setMetadataFor(Exception, 'Exception', classMeta, VOID, VOID, Exception.d9);
setMetadataFor(RuntimeException, 'RuntimeException', classMeta, VOID, VOID, RuntimeException.g9);
setMetadataFor(IllegalStateException, 'IllegalStateException', classMeta, VOID, VOID, IllegalStateException.a5);
setMetadataFor(CancellationException, 'CancellationException', classMeta, VOID, VOID, CancellationException.z4);
setMetadataFor(KClass, 'KClass', interfaceMeta);
setMetadataFor(KClassImpl, 'KClassImpl', classMeta, VOID, [KClass]);
setMetadataFor(NothingKClassImpl, 'NothingKClassImpl', objectMeta);
setMetadataFor(ErrorKClass, 'ErrorKClass', classMeta, VOID, [KClass], ErrorKClass);
setMetadataFor(PrimitiveKClassImpl, 'PrimitiveKClassImpl', classMeta);
setMetadataFor(SimpleKClassImpl, 'SimpleKClassImpl', classMeta);
setMetadataFor(KMutableProperty0, 'KMutableProperty0', interfaceMeta);
setMetadataFor(PrimitiveClasses, 'PrimitiveClasses', objectMeta);
setMetadataFor(StringBuilder, 'StringBuilder', classMeta, VOID, [CharSequence], StringBuilder.l6);
setMetadataFor(Char, 'Char', classMeta);
setMetadataFor(Map_0, 'Map', interfaceMeta);
setMetadataFor(Companion_1, 'Companion', objectMeta);
setMetadataFor(Enum, 'Enum', classMeta);
setMetadataFor(arrayIterator$1, VOID, classMeta);
setMetadataFor(Companion_2, 'Companion', objectMeta);
setMetadataFor(Long, 'Long', classMeta);
setMetadataFor(Continuation, 'Continuation', interfaceMeta);
setMetadataFor(CoroutineImpl, 'CoroutineImpl', classMeta, VOID, [Continuation]);
setMetadataFor(CompletedContinuation, 'CompletedContinuation', objectMeta, VOID, [Continuation]);
setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta);
setMetadataFor(IllegalArgumentException, 'IllegalArgumentException', classMeta, VOID, VOID, IllegalArgumentException.f9);
setMetadataFor(IndexOutOfBoundsException, 'IndexOutOfBoundsException', classMeta, VOID, VOID, IndexOutOfBoundsException.k9);
setMetadataFor(UnsupportedOperationException, 'UnsupportedOperationException', classMeta, VOID, VOID, UnsupportedOperationException.c2);
setMetadataFor(NoSuchElementException, 'NoSuchElementException', classMeta, VOID, VOID, NoSuchElementException.y);
setMetadataFor(Error_0, 'Error', classMeta, VOID, VOID, Error_0.o9);
setMetadataFor(ConcurrentModificationException, 'ConcurrentModificationException', classMeta, VOID, VOID, ConcurrentModificationException.u3);
setMetadataFor(NullPointerException, 'NullPointerException', classMeta, VOID, VOID, NullPointerException.v6);
setMetadataFor(NoWhenBranchMatchedException, 'NoWhenBranchMatchedException', classMeta, VOID, VOID, NoWhenBranchMatchedException.z6);
setMetadataFor(ClassCastException, 'ClassCastException', classMeta, VOID, VOID, ClassCastException.d7);
setMetadataFor(UninitializedPropertyAccessException, 'UninitializedPropertyAccessException', classMeta, VOID, VOID, UninitializedPropertyAccessException.r9);
setMetadataFor(Companion_3, 'Companion', objectMeta);
setMetadataFor(Companion_4, 'Companion', objectMeta);
setMetadataFor(Companion_5, 'Companion', objectMeta);
setMetadataFor(ArrayDeque, 'ArrayDeque', classMeta, VOID, VOID, ArrayDeque.y9);
setMetadataFor(ArrayAsCollection, 'ArrayAsCollection', classMeta, VOID, [Collection]);
setMetadataFor(SequenceScope, 'SequenceScope', classMeta, VOID, VOID, VOID, VOID, VOID, [1]);
setMetadataFor(SequenceBuilderIterator, 'SequenceBuilderIterator', classMeta, VOID, [SequenceScope, Continuation], SequenceBuilderIterator, VOID, VOID, [1]);
setMetadataFor(Key, 'Key', objectMeta);
setMetadataFor(CoroutineContext, 'CoroutineContext', interfaceMeta);
setMetadataFor(Element, 'Element', interfaceMeta, VOID, [CoroutineContext]);
setMetadataFor(ContinuationInterceptor, 'ContinuationInterceptor', interfaceMeta, VOID, [Element]);
setMetadataFor(EmptyCoroutineContext, 'EmptyCoroutineContext', objectMeta, VOID, [CoroutineContext]);
protoOf(CombinedContext).va = plus;
setMetadataFor(CombinedContext, 'CombinedContext', classMeta, VOID, [CoroutineContext]);
setMetadataFor(AbstractCoroutineContextKey, 'AbstractCoroutineContextKey', classMeta);
protoOf(AbstractCoroutineContextElement).h8 = get;
protoOf(AbstractCoroutineContextElement).ua = fold;
protoOf(AbstractCoroutineContextElement).ta = minusKey;
protoOf(AbstractCoroutineContextElement).va = plus;
setMetadataFor(AbstractCoroutineContextElement, 'AbstractCoroutineContextElement', classMeta, VOID, [Element]);
setMetadataFor(CoroutineSingletons, 'CoroutineSingletons', classMeta);
setMetadataFor(Companion_6, 'Companion', objectMeta);
setMetadataFor(Failure, 'Failure', classMeta);
setMetadataFor(NotImplementedError, 'NotImplementedError', classMeta, VOID, VOID, NotImplementedError.q8);
setMetadataFor(atomicfu$TraceBase, 'TraceBase', classMeta);
setMetadataFor(None, 'None', objectMeta);
setMetadataFor(AtomicRef, 'AtomicRef', classMeta);
setMetadataFor(AtomicBoolean, 'AtomicBoolean', classMeta);
setMetadataFor(AtomicInt, 'AtomicInt', classMeta);
setMetadataFor(Job, 'Job', interfaceMeta, VOID, [Element], VOID, VOID, VOID, [0]);
setMetadataFor(ParentJob, 'ParentJob', interfaceMeta, VOID, [Job], VOID, VOID, VOID, [0]);
protoOf(JobSupport).oc = invokeOnCompletion$default;
protoOf(JobSupport).sc = cancel$default;
protoOf(JobSupport).va = plus;
protoOf(JobSupport).h8 = get;
protoOf(JobSupport).ua = fold;
protoOf(JobSupport).ta = minusKey;
setMetadataFor(JobSupport, 'JobSupport', classMeta, VOID, [Job, ParentJob], VOID, VOID, VOID, [0]);
setMetadataFor(CoroutineScope, 'CoroutineScope', interfaceMeta);
setMetadataFor(AbstractCoroutine, 'AbstractCoroutine', classMeta, VOID, [JobSupport, Job, Continuation, CoroutineScope], VOID, VOID, VOID, [0]);
setMetadataFor(StandaloneCoroutine, 'StandaloneCoroutine', classMeta, VOID, VOID, VOID, VOID, VOID, [0]);
setMetadataFor(LazyStandaloneCoroutine, 'LazyStandaloneCoroutine', classMeta, VOID, VOID, VOID, VOID, VOID, [0]);
setMetadataFor(Runnable, 'Runnable', interfaceMeta);
setMetadataFor(SchedulerTask, 'SchedulerTask', classMeta, VOID, [Runnable]);
setMetadataFor(DispatchedTask, 'DispatchedTask', classMeta);
setMetadataFor(CancellableContinuationImpl, 'CancellableContinuationImpl', classMeta, VOID, [DispatchedTask, Continuation]);
setMetadataFor(CompletedExceptionally, 'CompletedExceptionally', classMeta);
setMetadataFor(CompletedWithCancellation, 'CompletedWithCancellation', classMeta);
setMetadataFor(Key_0, 'Key', objectMeta);
protoOf(CoroutineDispatcher).h8 = get_0;
protoOf(CoroutineDispatcher).ta = minusKey_0;
setMetadataFor(CoroutineDispatcher, 'CoroutineDispatcher', classMeta, VOID, [AbstractCoroutineContextElement, ContinuationInterceptor]);
setMetadataFor(Key_1, 'Key', objectMeta);
setMetadataFor(CoroutineStart, 'CoroutineStart', classMeta);
setMetadataFor(EventLoop, 'EventLoop', classMeta);
setMetadataFor(ThreadLocalEventLoop, 'ThreadLocalEventLoop', objectMeta);
setMetadataFor(CompletionHandlerException, 'CompletionHandlerException', classMeta);
setMetadataFor(CoroutinesInternalError, 'CoroutinesInternalError', classMeta);
setMetadataFor(Key_2, 'Key', objectMeta);
setMetadataFor(ChildHandle, 'ChildHandle', interfaceMeta);
setMetadataFor(NonDisposableHandle, 'NonDisposableHandle', objectMeta, VOID, [ChildHandle]);
setMetadataFor(Incomplete, 'Incomplete', interfaceMeta);
setMetadataFor(Empty, 'Empty', classMeta, VOID, [Incomplete]);
setMetadataFor(LinkedListNode, 'LinkedListNode', classMeta, VOID, VOID, LinkedListNode);
setMetadataFor(LinkedListHead, 'LinkedListHead', classMeta, VOID, VOID, LinkedListHead);
setMetadataFor(NodeList, 'NodeList', classMeta, VOID, [LinkedListHead, Incomplete], NodeList);
setMetadataFor(CompletionHandlerBase, 'CompletionHandlerBase', classMeta);
setMetadataFor(JobNode, 'JobNode', classMeta, VOID, [CompletionHandlerBase, Incomplete]);
setMetadataFor(SynchronizedObject, 'SynchronizedObject', classMeta, VOID, VOID, SynchronizedObject);
setMetadataFor(Finishing, 'Finishing', classMeta, VOID, [SynchronizedObject, Incomplete]);
setMetadataFor(ChildCompletion, 'ChildCompletion', classMeta);
setMetadataFor(JobCancellingNode, 'JobCancellingNode', classMeta);
setMetadataFor(InactiveNodeList, 'InactiveNodeList', classMeta, VOID, [Incomplete]);
setMetadataFor(ChildHandleNode, 'ChildHandleNode', classMeta, VOID, [JobCancellingNode, ChildHandle]);
setMetadataFor(InvokeOnCancelling, 'InvokeOnCancelling', classMeta);
setMetadataFor(InvokeOnCompletion, 'InvokeOnCompletion', classMeta);
setMetadataFor(IncompleteStateBox, 'IncompleteStateBox', classMeta);
setMetadataFor(JobImpl, 'JobImpl', classMeta, VOID, [JobSupport, Job], VOID, VOID, VOID, [0]);
setMetadataFor(MainCoroutineDispatcher, 'MainCoroutineDispatcher', classMeta);
setMetadataFor(SupervisorJobImpl, 'SupervisorJobImpl', classMeta, VOID, VOID, VOID, VOID, VOID, [0]);
setMetadataFor(TimeoutCancellationException, 'TimeoutCancellationException', classMeta);
setMetadataFor(Unconfined, 'Unconfined', objectMeta);
setMetadataFor(Key_3, 'Key', objectMeta);
setMetadataFor(OpDescriptor, 'OpDescriptor', classMeta);
setMetadataFor(ExceptionSuccessfullyProcessed, 'ExceptionSuccessfullyProcessed', objectMeta);
setMetadataFor(DispatchedContinuation, 'DispatchedContinuation', classMeta, VOID, [DispatchedTask, Continuation]);
setMetadataFor(ContextScope, 'ContextScope', classMeta, VOID, [CoroutineScope]);
setMetadataFor(Symbol_0, 'Symbol', classMeta);
setMetadataFor(SetTimeoutBasedDispatcher, 'SetTimeoutBasedDispatcher', classMeta, VOID, VOID, VOID, VOID, VOID, [1]);
setMetadataFor(NodeDispatcher, 'NodeDispatcher', objectMeta, VOID, VOID, VOID, VOID, VOID, [1]);
setMetadataFor(MessageQueue, 'MessageQueue', classMeta, VOID, [List, Collection]);
setMetadataFor(ScheduledMessageQueue, 'ScheduledMessageQueue', classMeta);
setMetadataFor(WindowMessageQueue, 'WindowMessageQueue', classMeta);
setMetadataFor(Dispatchers, 'Dispatchers', objectMeta);
setMetadataFor(JsMainDispatcher, 'JsMainDispatcher', classMeta);
setMetadataFor(UnconfinedEventLoop, 'UnconfinedEventLoop', classMeta, VOID, VOID, UnconfinedEventLoop);
setMetadataFor(JobCancellationException, 'JobCancellationException', classMeta);
setMetadataFor(TaskContext, 'TaskContext', objectMeta);
setMetadataFor(DiagnosticCoroutineContextException, 'DiagnosticCoroutineContextException', classMeta);
setMetadataFor(SetTimeoutDispatcher, 'SetTimeoutDispatcher', objectMeta, VOID, VOID, VOID, VOID, VOID, [1]);
setMetadataFor(WindowDispatcher, 'WindowDispatcher', classMeta, VOID, VOID, VOID, VOID, VOID, [1]);
setMetadataFor(CommonThreadLocal, 'CommonThreadLocal', classMeta, VOID, VOID, CommonThreadLocal);
setMetadataFor(iteratorFor$slambda, 'iteratorFor$slambda', classMeta, VOID, VOID, VOID, VOID, VOID, [1]);
setMetadataFor(HTML, 'HTML', objectMeta);
setMetadataFor(ReactHTML, 'ReactHTML', objectMeta);
setMetadataFor(SlideShowElement$lambda$lambda$slambda, 'SlideShowElement$lambda$lambda$slambda', classMeta, VOID, VOID, VOID, VOID, VOID, [1]);
setMetadataFor(AlbumPhotosQueryResult, 'AlbumPhotosQueryResult', classMeta);
setMetadataFor(useUserAlbumsCoroutine$lambda$slambda, 'useUserAlbumsCoroutine$lambda$slambda', classMeta, VOID, VOID, VOID, VOID, VOID, [1]);
setMetadataFor(Common, 'Common', objectMeta);
setMetadataFor(CardImage, 'CardImage', objectMeta);
//endregion
//region block: init
Unit_instance = new Unit();
IntCompanionObject_instance = new IntCompanionObject();
Companion_instance_0 = new Companion_0();
Companion_instance_1 = new Companion_1();
CompletedContinuation_instance = new CompletedContinuation();
Companion_instance_3 = new Companion_3();
Companion_instance_4 = new Companion_4();
Key_instance = new Key();
Companion_instance_6 = new Companion_6();
Key_instance_1 = new Key_1();
Key_instance_2 = new Key_2();
NonDisposableHandle_instance = new NonDisposableHandle();
Key_instance_3 = new Key_3();
MODE_CANCELLABLE = 1;
MODE_UNINITIALIZED = -1;
MODE_ATOMIC = 0;
counter = 0;
DEBUG = false;
TaskContext_instance = new TaskContext();
HTML_instance = new HTML();
ReactHTML_instance = new ReactHTML();
index = 0;
//endregion
//region block: exports
var SlideShowElement = {get: get_SlideShowElement};
export {
  SlideShowElement as SlideShowElement,
};
//endregion
main();
