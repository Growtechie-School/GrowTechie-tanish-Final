'use client'

import { useMemo, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { LogOut, Settings, User, Loader, CreditCard, Sparkles, Home } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCurrentUser } from "../api/use-current-user";
import { useAuthActions } from "@convex-dev/auth/react";

const bgColors = [
  'bg-red-500',
  'bg-blue-500',
  'bg-green-500',
  'bg-yellow-500',
  'bg-pink-500',
  'bg-purple-500',
  'bg-indigo-500',
  'bg-teal-500',
];

export const UserButton = () => {
  const router = useRouter();
  const { signOut } = useAuthActions();
  const { data, isLoading } = useCurrentUser();

  const randomBgColor = useMemo(() => bgColors[Math.floor(Math.random() * bgColors.length)], []);

  if (isLoading) {
    return <Loader className="h-5 w-5 animate-spin text-primary" />;
  }

  if (!data) {
    return null;
  }

  const { image, name, email } = data;

  const logout = () => {
    signOut();
    window.location.reload();
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10 ring-2 ring-primary">
            <AvatarImage src={image} alt={email} />
            <AvatarFallback className={`${randomBgColor} text-white`}>
              {name?.charAt(0).toUpperCase() || email?.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent className="w-64 bg-black text-white border border-gray-800" side='bottom' align="end">
        <DropdownMenuLabel className="font-normal px-3 py-2">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{name || 'User'}</p>
            <p className="text-xs leading-none text-gray-400">{email}</p>
          </div>
        </DropdownMenuLabel>
        
        <DropdownMenuSeparator className="bg-gray-800" />
        
        <DropdownMenuItem onClick={() => router.push('/profile')} className="flex items-center px-3 py-2 hover:bg-gray-800 focus:bg-gray-800">
          <User className="mr-2 h-4 w-4 text-gray-400" />
          <span>Profile</span>
        </DropdownMenuItem>

        {/* <DropdownMenuItem onClick={() => router.push('/')} className="flex items-center px-3 py-2 hover:bg-gray-800 focus:bg-gray-800">
          <Home className="mr-2 h-4 w-4 text-gray-400" />
          <span>Dashboard</span>
        </DropdownMenuItem> */}

        <DropdownMenuItem onClick={() => router.push('/pricing/bills')} className="flex items-center px-3 py-2 hover:bg-gray-800 focus:bg-gray-800">
          <CreditCard className="mr-2 h-4 w-4 text-gray-400" />
          <span>Billing</span>
        </DropdownMenuItem>
        
        <DropdownMenuSeparator className="bg-gray-800" />
        
        <DropdownMenuItem onClick={() => router.push("/mentor")} className="flex items-center justify-between px-3 py-3 hover:bg-gray-800 focus:bg-gray-800">
          <span className="flex items-center">
            <Sparkles className="mr-2 h-4 w-4 text-yellow-500" />
            Upgrade to Pro
          </span>
          <Button variant="outline" size="sm" className="ml-auto bg-transparent border-gray-600 text-white hover:bg-gray-700 hover:text-white" onClick={() => router.push("/mentor")}>
            Upgrade
          </Button>
        </DropdownMenuItem>
        
        <DropdownMenuSeparator className="bg-gray-800" />
        
        <DropdownMenuItem onClick={() => logout()} className="flex items-center px-3 py-2 text-red-400 hover:bg-gray-800 focus:bg-gray-800 hover:text-red-300">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
};

export default UserButton;