﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DungeonResource.Components.Domain.Item
{
    /// <summary>
    /// Determines whether the item normal, magical, a weapon, etc...
    /// </summary>
    public enum ItemType
    {
        /// <summary>
        /// Any item which does not fit in the other catagories
        /// </summary>
        General,

        /// <summary>
        /// Item which has the ability to do non-magical damage
        /// </summary>
        Weapeon,

        /// <summary>
        /// Item which would have magical uses to it
        /// </summary>
        Magical
    }
}
