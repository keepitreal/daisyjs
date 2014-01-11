/**
 * Copyright (C) 2008 Guy Van den Broeck <guy@guyvdb.eu>
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA 02111-1307, USA.
 * or see http://www.gnu.org/
 */

/**
 * This diff implementation is mainly lifted from the LCS algorithm of the Eclipse project which
 * in turn is based on Myers' "An O(ND) difference algorithm and its variations"
 * (http://citeseer.ist.psu.edu/myers86ond.html) with range compression (see Wu et al.'s
 * "An O(NP) Sequence Comparison Algorithm").
 *
 * This implementation supports an upper bound on the excution time.
 *
 * Complexity: O((M + N)D) worst case time, O(M + N + D^2) expected time, O(M + N) space
 *
 * @author Guy Van den Broeck
 * @ingroup DifferenceEngine

*/

/**
 * This particular implementation is a JavaScript port of the DaisyDiff PHP implementation
 * 
 * transcribing @author Darion Welch
 * email: darion.welch@gmail.com
 * github: keepitreal
 *
*/

var DaisyJS = (function (djs) {


	return djs;
}(DaisyJS || {}));