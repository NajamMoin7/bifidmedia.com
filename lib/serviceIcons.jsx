import {
  BadgeCheck,
  BarChart3,
  Boxes,
  Building2,
  ClipboardList,
  Code2,
  Coins,
  Compass,
  Layers,
  LayoutList,
  Megaphone,
  MessagesSquare,
  Palette,
  Repeat,
  Search,
  Settings2,
  ShieldCheck,
  TrendingUp,
  Truck,
  Users,
} from "lucide-react";

const props = { size: 19, strokeWidth: 2.1, "aria-hidden": "true" };

/**
 * Capability group → icon element.
 *
 * Every service inherits the icon of the group it belongs to, so card grids
 * stay visually consistent within a category without hand-assigning an icon to
 * each of the 80+ services. Elements are built once at module scope rather than
 * during render.
 */
const iconsByGroup = {
  // Amazon
  foundation: <Building2 {...props} />,
  management: <ClipboardList {...props} />,
  research: <Search {...props} />,
  listing: <LayoutList {...props} />,
  inventory: <Boxes {...props} />,
  advertising: <Megaphone {...props} />,
  logistics: <Truck {...props} />,
  compliance: <ShieldCheck {...props} />,
  design: <Palette {...props} />,
  brand: <BadgeCheck {...props} />,
  customer: <MessagesSquare {...props} />,
  insight: <BarChart3 {...props} />,
  strategy: <Compass {...props} />,
  models: <Layers {...props} />,

  // Walmart / Etsy
  visibility: <Search {...props} />,
  growth: <TrendingUp {...props} />,
  operations: <Settings2 {...props} />,

  // Shopify
  build: <Code2 {...props} />,
  lifecycle: <Repeat {...props} />,

  // TikTok Shop
  creators: <Users {...props} />,
  paid: <Megaphone {...props} />,

  // eBay
  listings: <LayoutList {...props} />,
  account: <ShieldCheck {...props} />,

  // Business
  formation: <Building2 {...props} />,
  revenue: <Coins {...props} />,
};

const fallback = <Compass {...props} />;

export function serviceIcon(groupId) {
  return iconsByGroup[groupId] || fallback;
}

export default serviceIcon;
