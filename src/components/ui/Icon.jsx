/**
 * Icon registry — maps data-driven icon keys to lucide-react components.
 * Explicit imports keep the bundle tree-shaken.
 */
import {
  AlertCircle, Amphora, Anchor, Apple, Armchair, ArrowLeftRight, ArrowRight,
  ArrowUpRight, BadgeCheck, Banana, Boxes, Building2, Candy, Car, Carrot,
  CheckCircle2, Cherry, ChevronDown, CircleDot, CircuitBoard, Citrus, Coffee,
  Cog, Compass, CupSoda, Diamond, Droplets, Egg, Eye, Facebook, Factory, Fan,
  FileText, Flame, FlaskConical, Flower2, Gem, Globe, Globe2, Grape, Grid3x3,
  Handshake, Info, Instagram, Lamp, Leaf, Lightbulb, Linkedin, Lock, Mail,
  MapPin, Megaphone, Menu, MessageCircle, Milk, Nut, Package, PackageCheck,
  Phone, Scale, Search, SearchCheck, Send, Settings2, ShieldCheck,
  Ship, Shirt, Soup, Sparkles, Sprout, Square, Star, Target, Timer, Tractor,
  TreeDeciduous, TreePine, Truck, Users, Warehouse, Wheat, X, Zap,
} from 'lucide-react';

const REGISTRY = {
  AlertCircle, Amphora, Anchor, Apple, Armchair, ArrowLeftRight, ArrowRight,
  ArrowUpRight, BadgeCheck, Banana, Boxes, Building2, Candy, Car, Carrot,
  CheckCircle2, Cherry, ChevronDown, CircleDot, CircuitBoard, Citrus, Coffee,
  Cog, Compass, CupSoda, Diamond, Droplets, Egg, Eye, Facebook, Factory, Fan,
  FileText, Flame, FlaskConical, Flower2, Gem, Globe, Globe2, Grape, Grid3x3,
  Handshake, Info, Instagram, Lamp, Leaf, Lightbulb, Linkedin, Lock, Mail,
  MapPin, Megaphone, Menu, MessageCircle, Milk, Nut, Package, PackageCheck,
  Phone, Scale, Search, SearchCheck, Send, Settings2, ShieldCheck,
  Ship, Shirt, Soup, Sparkles, Sprout, Square, Star, Target, Timer, Tractor,
  TreeDeciduous, TreePine, Truck, Users, Warehouse, Wheat, X, Zap,
};

export default function Icon({ name, size = 24, strokeWidth = 2, ...rest }) {
  const Cmp = REGISTRY[name] || Package;
  return <Cmp size={size} strokeWidth={strokeWidth} aria-hidden="true" {...rest} />;
}