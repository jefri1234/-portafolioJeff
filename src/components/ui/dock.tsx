"use client";
import { cva } from "class-variance-authority";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import React, { useRef } from "react";

import { cn } from "@/lib/utils";

const DEFAULT_SIZE = 40;
const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

const dockVariants = cva(
  "supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 mx-auto mt-8 flex h-[58px] w-max items-center justify-center gap-2 rounded-2xl border p-2 backdrop-blur-md"
);

// Usa PropsWithChildren para asegurarte de que 'children' está incluido en los tipos
const Dock = React.forwardRef<HTMLDivElement, React.PropsWithChildren<{
  className?: string;
  iconSize?: number;
  iconMagnification?: number;
  iconDistance?: number;
  direction?: "top" | "middle" | "bottom";
}>>(
  (
    {
      className,
      children,
      iconSize = DEFAULT_SIZE,
      iconMagnification = DEFAULT_MAGNIFICATION,
      iconDistance = DEFAULT_DISTANCE,
      direction = "middle",
      ...props
    },
    ref
  ) => {
    const mouseX = useMotionValue(Infinity);

    const renderChildren = () => {
      return React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === DockIcon) {
          return React.cloneElement(child as React.ReactElement<DockIconProps>, {
            ...(typeof child.props === 'object' ? child.props : {}),
            mouseX: mouseX,
            size: iconSize,
            magnification: iconMagnification,
            distance: iconDistance,
          });
        }
        return child;
      });
    };

    return (
      <motion.div
        ref={ref}
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        {...props}
        className={cn(dockVariants({ className }), {
          "items-start": direction === "top",
          "items-center": direction === "middle",
          "items-end": direction === "bottom",
        })}
      >
        {renderChildren()}
      </motion.div>
    );
  }
);

Dock.displayName = "Dock";

interface DockIconProps {
  size?: number;
  magnification?: number;
  distance?: number;
  mouseX?: any;
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}

const DockIcon: React.FC<DockIconProps> = ({
  size = DEFAULT_SIZE,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mouseX,
  className,
  children,
  ...props
}) => {
  const ref = useRef(null);
  const padding = Math.max(6, size * 0.2);
  const defaultMouseX = useMotionValue(Infinity);

  const distanceCalc = useTransform(mouseX ?? defaultMouseX, (val: number) => { // Asegúrate de que val sea tratado como number
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return (val - bounds.x - bounds.width / 2); // Esto ahora se puede realizar correctamente
  });

  const sizeTransform = useTransform(distanceCalc, [-distance, 0, distance], [size, magnification, size]);

  const scaleSize = useSpring(sizeTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width: scaleSize, height: scaleSize, padding }}
      className={cn(
        "flex aspect-square cursor-pointer items-center justify-center rounded-full",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

DockIcon.displayName = "DockIcon";

export { Dock, DockIcon, dockVariants };
